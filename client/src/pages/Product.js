import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import { getProduct } from '../redux/actions/productActions';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 60px;
  display: flex;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  object-fit: cover;
  height: 60vh;
  width: 100%;
  ${mobile({ height: '60vh' })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '0px 10px' })}
`;
const Title = styled.h1``;
const Desc = styled.p`
  margin: 40px 0px;
`;
const Price = styled.span`
  font-size: 25px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 40px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const AddContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Amount = styled.div`
  height: 25px;
  width: 25px;
  border: 1px solid #d61c4e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  background-color: white;
  cursor: pointer;
  border: 3px solid #d61c4e;
  padding: 12px;
`;

const ProductContainer = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  float: right;
`;

const Product = () => {
  //   const [quantity, setQuantity] = useState(1);
  //   const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const { productId } = useParams();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  const { product } = useSelector((state) => state.products);

  const handleAddCart = () => {
    dispatch(addToCart(product));
  };

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        {product && (
          <ProductContainer>
            <ImgContainer>
              <Image src={`/uploads/${product.fileName}`} />
            </ImgContainer>
            <InfoContainer>
              <Title>{product.productName}</Title>
              <hr />
              <Desc>{product.productDesc}</Desc>
              <Price>$ {product.productPrice}</Price>
              <FilterContainer>
                <Filter>
                  {product.productQty <= 0 ? 'Out Of Stock' : 'In Stock'}
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <Remove onClick={() => handleQuantity('dec')} />
                  <Amount>{quantity}</Amount>
                  <Add onClick={() => handleQuantity('inc')} />
                </AmountContainer>
                <ButtonContainer>
                  <Button
                    type='submit'
                    onClick={handleAddCart}
                    disabled={product.productQty <= 0}
                  >
                    Add to Cart
                  </Button>
                </ButtonContainer>
              </AddContainer>
            </InfoContainer>
          </ProductContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Product;
