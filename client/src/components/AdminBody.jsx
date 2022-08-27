import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CardDeck from './CardDeck';

const Container = styled.div`
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  height: 200px;
  flex-wrap: wrap;
`;

const AdminBody = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <Container>
      <Wrapper>
        {products &&
          products.map((product) => (
            <CardDeck key={product._id} product={product} />
          ))}
      </Wrapper>
    </Container>
  );
};

export default AdminBody;
