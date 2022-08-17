import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus, faScroll } from '@fortawesome/free-solid-svg-icons';
import { createCategory } from '../api/category';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';

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
  width: 20%;
  height: 100vh;
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
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState('');

  const handleMessage = (evt) => {
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleCategoryChange = (evt) => {
    setCategory(evt.target.value);
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleCategorySubmit = (evt) => {
    evt.preventDefault();

    if (isEmpty(category)) {
      setErrorMsg('Please Enter a Category');
    } else {
      const data = { category };

      setLoading(true);
      createCategory(data)
        .then((response) => {
          setLoading(false);
          setSuccessMsg(response.data.successMessage);
        })
        .catch((err) => {
          setLoading(false);
          setErrorMsg(err.response.data.errorMessage);
        });
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Wrapper>
        <Title>
          <Header>
            <Icon>
              <FontAwesomeIcon icon={faHouse} />
            </Icon>
            <DashboardName>Dashboard</DashboardName>
          </Header>
        </Title>
        <Category>
          <CategoryListItemOne variant='primary' onClick={handleShow}>
            <Icon>
              <FontAwesomeIcon icon={faPlus} />
            </Icon>
            <Name>Add Category</Name>
          </CategoryListItemOne>

          {/* ************************ MODALS ************************ */}

          <Modal show={show} onHide={handleClose} onClick={handleMessage}>
            <Form onSubmit={handleCategorySubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Add Category</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
                <Button type='submit' variant='primary'>
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>

          {/* ************************ MODALS ************************ */}

          <CategoryListItemTwo>
            <Icon>
              <FontAwesomeIcon icon={faPlus} />
            </Icon>
            <Name>Add Product</Name>
          </CategoryListItemTwo>
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
