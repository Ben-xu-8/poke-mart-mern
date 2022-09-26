import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { getCategories } from '../redux/actions/categoryActions';
import AdminNavBar from '../components/AdminNavBar';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../redux/actions/productActions';

const Container = styled.div``;
const Image = styled.div``;
const Head = styled.div`
  display: flex;
`;
const ProductName = styled.div``;
const ImageDisplay = styled.img`
  height: 200px;
  width: 200px;
`;
const Title = styled.h1`
  justify-content: center;
  text-align: center;
`;
const Header = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;

const EditPage = styled.div`
  margin-left: 5%;
  width: 100%;
`;

const AdminEditProduct = (props) => {
  const productIds = useParams();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQty, setProductQty] = useState('');
  const [productType, setProductType] = useState('');
  const [productProduct, setProductProduct] = useState('');

  useEffect(() => {
    if (!product) {
      dispatch(getProduct(productIds.productId));
      dispatch(getCategories());
    } else {
      setProductImage(product.fileName);
      setProductName(product.productName);
      setProductDesc(product.productDesc);
      setProductPrice(product.productPrice);
      setProductQty(product.productQty);
      setProductType(product.productType);
      setProductProduct(product.productProduct);
    }
  }, [dispatch, productIds, product]);

  const handleImage = (e) => {
    const image = e.target.files[0];
    setProductImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productId);

    const formData = new FormData();
    formData.append('productImage', productImage);
    formData.append('productName', productName);
    formData.append('productDesc', productDesc);
    formData.append('productPrice', productPrice);
    formData.append('productQty', productQty);
    formData.append('productType', productType);
    formData.append('productProduct', productProduct);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    await axios
      .put(`/api/product/${productId}`, formData, config)
      .then((res) => {
        console.log('success', res);
        navigate('/admin/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <NavBar />
      <Wrapper>
        <AdminNavBar />
        <EditPage>
          <Form onSubmit={handleSubmit}>
            <Modal.Title>
              <Header>
                <Link to='/admin/dashboard'>
                  <Button variant='secondary'>Back</Button>
                </Link>
                <hr />
                <Title>Edit Pokemon</Title>
              </Header>
              <hr />
            </Modal.Title>
            <Modal.Body>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput2'
              ></Form.Group>
              <Fragment>
                <Head>
                  <Form.Group controlId='formFile' className='mb-3'>
                    <Form.Label
                      style={{ border: '2px solid black', padding: '5px' }}
                    >
                      Choose File
                    </Form.Label>
                    <Form.Control
                      type='file'
                      name='productImage'
                      accept='images/*'
                      hidden
                      onChange={handleImage}
                    />
                  </Form.Group>
                  <Image>
                    {productImage && productImage.name ? (
                      <ProductName>{productImage.name}</ProductName>
                    ) : (
                      <ImageDisplay src={`/uploads/${productImage}`} />
                    )}
                  </Image>
                </Head>
                <Form.Group className='mb-3' controlId='formEntry'>
                  <Form.Label>Pokemon</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Pokemon Here'
                    name='productName'
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
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
                    onChange={(e) => setProductDesc(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formPrice'>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Price'
                    name='productPrice'
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formQuantity'>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter Pokemon Here'
                    min='0'
                    max='99'
                    name='productQty'
                    value={productQty}
                    onChange={(e) => setProductQty(e.target.value)}
                  />
                </Form.Group>

                <Form.Label>Type</Form.Label>
                <Form.Select
                  aria-label='Default select example'
                  name='productType'
                  onChange={(e) => setProductType(e.target.value)}
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
                  onChange={(e) => setProductProduct(e.target.value)}
                >
                  <option value=''>Product</option>
                  <option>Pokemon</option>
                  <option>Item Shop</option>
                  <option>TM/HM</option>
                </Form.Select>
              </Fragment>
            </Modal.Body>
            <Modal.Footer>
              <Button type='submit' variant='primary'>
                Submit
              </Button>
              <Button
                variant='primary'
                onClick={() => dispatch(deleteProduct(product._id))}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Form>
        </EditPage>
      </Wrapper>
    </Container>
  );
};

export default AdminEditProduct;
