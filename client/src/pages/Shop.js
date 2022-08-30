import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Announcement';
import ShopBanner from '../components/ShopBanner';
import CardDeck from '../components/CardDeck';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';

const Container = styled.div``;
const Group = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 0px;
  padding-top: 0px;
`;
const SideBar = styled.div`
  height: 500px;
  width: 500px;
  background-color: blue;
`;
const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.div``;

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);

  return (
    <Container>
      <NavBar />
      <Banner />
      <ShopBanner />
      <Group>
        <SideBar>
          <Title>Filter</Title>
        </SideBar>
        <Product>
          {products.map((product) => (
            <CardDeck key={product._id} product={product} homePage={true} />
          ))}
        </Product>
      </Group>
    </Container>
  );
};

export default Shop;
