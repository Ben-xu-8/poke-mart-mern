import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getNewProducts } from '../redux/actions/filterActions';
import { showLoading } from '../helpers/loading';
import Button from 'react-bootstrap/Button';
import CardDeck from '../components/CardDeck';
import { getProductsByCount } from '../redux/actions/productActions';

import Banner from '../components/Announcement';
import NavBar from '../components/NavBar';
import Slide from '../components/Slide';
import Categories from '../components/Categories';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const LoadingProduct = styled.div``;
const NewProductContainer = styled.div`
  margin-right: 50px;
`;

const ProductContainer = styled.div`
  margin-right: 50px;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  padding: 20px 0px;
  text-align: center;
`;

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsByCount());
  }, [dispatch]);

  const { newProducts } = useSelector((state) => state.filters);
  const { products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.loading);

  return (
    <div>
      <NavBar />
      <Banner />
      <Slide />
      <Categories />
      <hr />
      {loading ? (
        <LoadingProduct>{showLoading()}</LoadingProduct>
      ) : (
        <NewProductContainer>
          <Title>New Arrivals</Title>
          <Products>
            {newProducts &&
              newProducts.map((newProduct) => (
                <CardDeck
                  key={newProduct.id}
                  product={newProduct}
                  homePage={true}
                />
              ))}
          </Products>
          <hr />
          <Title>Products</Title>
          <Products>
            {products &&
              products.map((product) => (
                <CardDeck key={product.id} product={product} homePage={true} />
              ))}
          </Products>
        </NewProductContainer>
      )}
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
