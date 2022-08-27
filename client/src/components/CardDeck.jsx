import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Title = styled.div`
  text-align: center;
`;
const Text = styled.div`
  text-align: center;
`;

const TextDesc = styled.div`
  text-align: left;
  padding-bottom: 40px;
`;

const Wrapper = styled.div`
  margin-left: 5%;
  padding-bottom: 5%;
`;

const Picture = styled.div`
  height: 200px;
  width: 200px;
  margin: auto;
`;

const CardDeck = ({ product }) => {
  const dispatch = useDispatch();
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
          </TextDesc>
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
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default CardDeck;
