import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  text-align: center;
`;
const Text = styled.div`
  text-align: center;
`;

const TextDesc = styled.div`
  text-align: center;
  padding-bottom: 40px;
`;

const Wrapper = styled.div`
  margin-left: 5%;
  padding-bottom: 5%;
`;

const Picture = styled.div`
  height: 30vh;
  width: 100%;
  margin: auto;
`;
const HomeButton = styled.div``;

const CardDeck = ({ product, adminPage = false, homePage = false }) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Wrapper>
      <Card style={{ width: '14rem' }}>
        <Picture>
          <Card.Img variant='top' src={`/uploads/${product.fileName}`} />
        </Picture>
        <Card.Body>
          <Title>
            <Card.Title>{product.productName}</Card.Title>
          </Title>
          <hr />
          <Text>
            <Card.Text>${product.productPrice}</Card.Text>
          </Text>
          <hr />
          <TextDesc>
            <Card.Text>
              {product.productDesc && product.productDesc.substr(0, 65) + '...'}
            </Card.Text>
            <Card.Text>
              {product.productQty <= 0 ? 'Out Of Stock' : 'In Stock'}
            </Card.Text>
          </TextDesc>
          {adminPage && (
            <>
              <Buttons>
                <Link to={`/admin/edit/product/${product._id}`}>
                  <Button variant='primary'>Edit</Button>
                </Link>
                <Button
                  variant='primary'
                  onClick={() => dispatch(deleteProduct(product._id))}
                >
                  Delete
                </Button>
              </Buttons>
            </>
          )}

          {homePage && (
            <>
              <Buttons>
                <Link to={`/product/${product._id}`}>
                  <HomeButton>
                    <Button variant='primary'>Details</Button>
                  </HomeButton>
                </Link>
                <HomeButton>
                  <Button
                    type='button'
                    variant='primary'
                    disabled={product.productQty <= 0}
                    onClick={handleAddCart}
                  >
                    Add Cart
                  </Button>
                </HomeButton>
              </Buttons>
            </>
          )}
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default CardDeck;
