import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: 15%;
  height: 100vh;
  background-color: #14274e;
  border-right: 2px black solid;
  border-top: 2px black solid;
`;
const Title = styled.div`
  padding: 5px 0px 20px 10px;
  font-size: 20px;
`;

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  color: #9ba4b4;
`;
const Category = styled.div`
  display: flex;
  flex-direction: column;
`;
const CategoryListItem = styled.button`
  display: flex;
  border: none;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  background-color: #14274e;
`;

const Name = styled.div`
  padding-left: 10px;
  color: #9ba4b4;
`;

const AdminNavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Header>
            <Icon>
              <FontAwesomeIcon icon={faHouse} />
            </Icon>
            <Name>Dashboard</Name>
          </Header>
        </Title>
        <Category>
          <CategoryListItem>
            <Icon>
              <FontAwesomeIcon icon={faPlus} />
            </Icon>
            <Name>Add Category</Name>
          </CategoryListItem>
          <CategoryListItem>
            <Icon>
              <FontAwesomeIcon icon={faPlus} />
            </Icon>
            <Name>Add Product</Name>
          </CategoryListItem>
          <CategoryListItem>
            <Icon>
              <FontAwesomeIcon icon={faPlus} />
            </Icon>
            <Name>View Orders</Name>
          </CategoryListItem>
        </Category>
      </Wrapper>
    </Container>
  );
};

export default AdminNavBar;
