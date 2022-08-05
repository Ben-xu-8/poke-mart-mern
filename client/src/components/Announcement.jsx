import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #d61c4e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
`;

const Banner = () => {
  return <Container>Free Shipping on Orders Above $100+</Container>;
};

export default Banner;
