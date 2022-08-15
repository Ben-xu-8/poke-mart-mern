import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus, faScroll } from '@fortawesome/free-solid-svg-icons';

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
          {/* _________________________________________________________ */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button variant='primary' onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {/* _________________________________________________________ */}
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
