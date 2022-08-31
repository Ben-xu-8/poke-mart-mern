import React, { useState, Fragment, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faPlus,
  faScroll,
} from '@fortawesome/free-solid-svg-icons';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import {
  getCategories,
  createCategory,
} from '../redux/actions/categoryActions';
import { clearMessages } from '../redux/actions/messageActions';
import { getProducts, createProduct } from '../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CategoryListItemOne = styled.button`
  display: flex;
  border: none;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  background-color: #14274e;
  :hover {
    background-color: #f1f6f9;
    display: inline-block;
    vertical-align: middle;
  }
`;

const CategoryListItemTwo = styled.button`
  display: flex;
  border: none;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  background-color: #14274e;
  :hover {
    background-color: #f1f6f9;
    display: inline-block;
    vertical-align: middle;
  }
`;

const CategoryListItemThree = styled.button`
  display: flex;
  border: none;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  background-color: #14274e;

  :hover {
    background-color: #f1f6f9;
    display: inline-block;
    vertical-align: middle;
  }
`;

const Icon = styled.div`
  color: #9ba4b4;
`;

const Container = styled.div`
  width: 30%;
  height: 200vh;
  background-color: #14274e;
  border-right: 2px black solid;
  border-top: 2px black solid;
`;
const Title = styled.div`
  padding: 5px 0px 20px 10px;
  font-size: 1.5rem;
`;

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  padding-left: 10px;
  color: #9ba4b4;

  font-size: 1rem;
`;
const DashboardName = styled.div`
  font-size: 1.4rem;
  padding-left: 10px;
  color: #9ba4b4;
`;

const AdminNavBar = () => {
  const navigate = useNavigate();

  const { successMsg, errorMsg } = useSelector((state) => state.messages);
  const { loading } = useSelector((state) => state.loading);
  const { categories } = useSelector((state) => state.categories);

  const [modalState, setModalState] = useState();
  const [category, setCategory] = useState('');
  const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');
  const [productData, setProductData] = useState({
    productImage: null,
    productName: '',
    productDesc: '',
    productPrice: '',
    productQty: '',
    productType: '',
    productProduct: '',
  });

  const {
    productImage,
    productName,
    productDesc,
    productPrice,
    productQty,
    productType,
    productProduct,
  } = productData;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleMessage = (evt) => {
    dispatch(clearMessages());
    setClientSideErrorMsg('');
  };

  const handleCategoryChange = (evt) => {
    dispatch(clearMessages());
    setCategory(evt.target.value);
  };

  const handleCategorySubmit = (evt) => {
    evt.preventDefault();

    if (isEmpty(category)) {
      setClientSideErrorMsg('Please Enter a Category');
    } else {
      const data = { category };
      dispatch(createCategory(data));
      setCategory('');
    }
  };

  const handleClose = () => setModalState('close');

  const handleRefresh = () => {
    navigate(0);
  };

  const handleShowOne = () => {
    setModalState('categoryModal');
  };

  const handleShowTwo = () => {
    setModalState('pokemonModal');
  };

  const handleProductImage = (evt) => {
    console.log(evt);
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.files[0],
    });
  };

  const handleProductChange = (evt) => {
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleProductSubmit = (evt) => {
    evt.preventDefault();

    if (productImage === null) {
      setClientSideErrorMsg('Please Submit Image');
    } else if (
      isEmpty(productName) ||
      isEmpty(productDesc) ||
      isEmpty(productPrice) ||
      isEmpty(productType)
    ) {
      setClientSideErrorMsg('Fields are Empty');
    } else if (isEmpty(productProduct)) {
      setClientSideErrorMsg('Product Not Known');
    } else if (isEmpty(productQty)) {
      setClientSideErrorMsg('Quantity Not Known');
    } else if (isEmpty(productType)) {
      setClientSideErrorMsg('Type Not Known');
    } else {
      let formData = new FormData();
      formData.append('productImage', productImage);
      formData.append('productDesc', productDesc);
      formData.append('productPrice', productPrice);
      formData.append('productName', productName);
      formData.append('productProduct', productProduct);
      formData.append('productQty', productQty);
      formData.append('productType', productType);

      dispatch(createProduct(formData));
      setProductData({
        productImage: null,
        productName: '',
        productDesc: '',
        productPrice: '',
        productQty: '',
        productType: '',
        productProduct: '',
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          <Header>
            <Icon>
              <FontAwesomeIcon icon={faHouseChimney} />
            </Icon>
            <DashboardName>Dashboard</DashboardName>
          </Header>
        </Title>
        <Category>
          <CategoryListItemOne variant='primary' onClick={handleShowOne}>
            <Icon>
              <FontAwesomeIcon icon={faPlus} />
            </Icon>
            <Name>Add Category</Name>
          </CategoryListItemOne>

          {/* ************************ MODALS ************************ */}

          <Modal
            show={modalState === 'categoryModal'}
            onHide={handleClose}
            onClick={handleMessage}
          >
            <Form onSubmit={handleCategorySubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Add Category</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
                {errorMsg && showErrorMsg(errorMsg)}
                {successMsg && showSuccessMsg(successMsg)}
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label>Category</Form.Label>
                </Form.Group>
                {loading ? (
                  showLoading()
                ) : (
                  <Fragment>
                    <Form.Control
                      type='text'
                      placeholder='Add Category'
                      name='category'
                      value={category}
                      onChange={handleCategoryChange}
                    />
                  </Fragment>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button type='submit' variant='primary' onClick={handleClose}>
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>

          {/* ************************ MODALS ************************ */}

          <CategoryListItemTwo variant='primary' onClick={handleShowTwo}>
            <Icon>
              <FontAwesomeIcon icon={faPlus} />
            </Icon>
            <Name>Add Product</Name>
          </CategoryListItemTwo>

          {/* ***********************MODALS TWO************************ */}

          <Modal
            show={modalState === 'pokemonModal'}
            onHide={handleClose}
            onClick={handleMessage}
          >
            <Form onSubmit={handleProductSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Add Pokemon</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
                {errorMsg && showErrorMsg(errorMsg)}
                {successMsg && showSuccessMsg(successMsg)}
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput2'
                ></Form.Group>
                {loading ? (
                  showLoading()
                ) : (
                  <Fragment>
                    <Form.Group controlId='formFile' className='mb-3'>
                      <Form.Label>Import Image</Form.Label>
                      <Form.Control
                        type='file'
                        name='productImage'
                        onChange={handleProductImage}
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formEntry'>
                      <Form.Label>Pokemon</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter Pokemon Here'
                        name='productName'
                        value={productName}
                        onChange={handleProductChange}
                      />
                    </Form.Group>

                    <Form.Group
                      className='mb-3'
                      controlId='exampleForm.ControlTextarea1'
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as='textarea'
                        rows={3}
                        name='productDesc'
                        value={productDesc}
                        onChange={handleProductChange}
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPrice'>
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Price'
                        name='productPrice'
                        value={productPrice}
                        onChange={handleProductChange}
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formQuantity'>
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='Enter Pokemon Here'
                        min='1'
                        max='99'
                        name='productQty'
                        value={productQty}
                        onChange={handleProductChange}
                      />
                    </Form.Group>

                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      aria-label='Default select example'
                      name='productType'
                      onChange={handleProductChange}
                    >
                      <option value=''>Type</option>
                      {categories &&
                        categories.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.category}
                          </option>
                        ))}
                    </Form.Select>

                    <Form.Label>Product</Form.Label>
                    <Form.Select
                      aria-label='Default select example'
                      name='productProduct'
                      onChange={handleProductChange}
                    >
                      <option value=''>Product</option>
                      <option>Pokemon</option>
                      <option>Item Shop</option>
                      <option>TM/HM</option>
                    </Form.Select>
                  </Fragment>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button type='submit' variant='primary' onClick={handleRefresh}>
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>

          {/* *********************************************** */}

          <CategoryListItemThree>
            <Icon>
              <FontAwesomeIcon icon={faScroll} />
            </Icon>
            <Name>View Orders</Name>
          </CategoryListItemThree>
        </Category>
      </Wrapper>
    </Container>
  );
};

export default AdminNavBar;
