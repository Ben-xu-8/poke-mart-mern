import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Announcement';
import ShopBanner from '../components/ShopBanner';
import CardDeck from '../components/CardDeck';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import { getCategories } from '../redux/actions/categoryActions';
import { getProductsByFilter } from '../redux/actions/filterActions';

const Container = styled.div``;
const Top = styled.div`
  display: flex;
`;

const Icon = styled.div`
  float: bottom;
`;

const Group = styled.div`
  margin-left: 20px;
  margin-top: 0px;
  padding-top: 0px;
`;
const SideBar = styled.div`
  padding: 10px;
  width: 21%;
  background-color: white;
  border: 1px lightgrey solid;
  float: left;
`;
const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h4`
  padding-right: 20px;
  align-items: center;
  justify-content: center;
`;
const Categories = styled.div`
  padding-top: 10px;
`;
const Filter = styled.div`
  width: 100%;
`;

const Shop = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [categoryId, setCategoryId] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const handleSearch = (e) => {
    reset();
    setText(e.target.value);
    dispatch(getProductsByFilter({ type: 'text', query: e.target.value }));
  };

  const handleCategory = (e) => {
    reset();
    const selectedCategory = e.target.value;
    const allCategories = [...categoryId];
    const indexFound = allCategories.indexOf(selectedCategory);

    let updatedCategoryId;
    if (indexFound === -1) {
      updatedCategoryId = [...categoryId, selectedCategory];
      setCategoryId(updatedCategoryId);
    } else {
      updatedCategoryId = [...categoryId];
      updatedCategoryId.splice(indexFound, 1);
      setCategoryId(updatedCategoryId);
    }
    dispatch(
      getProductsByFilter({ type: 'category', query: updatedCategoryId })
    );
  };
  const reset = () => {
    setCategoryId([]);
    setText('');
  };

  return (
    <Container>
      <NavBar />
      <Banner />
      <ShopBanner />
      <Group>
        <SideBar>
          <Top>
            <Title>Filter</Title>
            <Icon>
              <FontAwesomeIcon icon={faSliders} />
            </Icon>
          </Top>
          <Filter>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
                name='search'
                value={text}
                onChange={handleSearch}
              />
              <Button variant='outline-success' disabled={true}>
                Search
              </Button>
            </Form>
          </Filter>
          <Categories>
            {categories &&
              categories.map((category) => (
                <Form.Check
                  type='checkbox'
                  name='category'
                  id='flexCheckChecked'
                  value={category._id}
                  label={category.category}
                  checked={categoryId.includes(category._id)}
                  onChange={handleCategory}
                />
              ))}
          </Categories>
          <Button variant='outline-success' onClick={reset}>
            Clear
          </Button>
        </SideBar>
        <Product>
          {products &&
            products.map((product) => (
              <CardDeck key={product._id} product={product} homePage={true} />
            ))}
        </Product>
      </Group>
    </Container>
  );
};

export default Shop;
