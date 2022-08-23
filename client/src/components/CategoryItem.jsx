import styled from 'styled-components';
import { categories } from '../data';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  ${mobile({ margin: '0px', width: '100%' })}
`;
const Title = styled.h2`
  color: white;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0px 5px;
  opacity: 0.8;
  ${mobile({ padding: '0px', height: '30vh' })}
`;
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: 400px;
  background-color: white;
  background-color: transparent;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.title}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
