import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  margin: 20px;
  background-color: #f5eddc;
`;
const Wrapper = styled.div``;
const Box = styled.div``;
const Title = styled.h1`
  text-align: center;
`;

const ShopBanner = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>Shop</Title>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default ShopBanner;
