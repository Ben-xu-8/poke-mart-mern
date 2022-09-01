import styled from 'styled-components';
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
// import NewsLetter from '../components/NewsLetter';
import { mobile } from '../responsive';
// import StripeCheckout from 'react-stripe-checkout';
// import { userRequest } from '../requestMethod';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../redux/actions/productActions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { ADD_CART } from '../redux/constants/cartConstant';
import { deleteCartItem } from '../redux/actions/cartActions';

// const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;
const Title = styled.div`
  text-align: center;
  font-size: 25px;
`;
const Wrapper = styled.div`
  margin: 0 10%;

  padding: 20px;
`;
const Top = styled.div`
  margin: 0 10%;
  display: flex;
  justify-content: space-around;
  padding: 18px;
`;

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
`;

const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 2;
`;

const Product = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 20px;
  ${mobile({ flexDirection: 'column' })};
  border-bottom: 4px solid #eeee;
`;
const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 120px;
`;
const Details = styled.div`
  width: 100%;
  justify-content: space-around;
`;
const ProductName = styled.div`
  text-decoration: none;
`;
const ProductID = styled.div`
  justify-content: space-between;
`;

const PriceDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ margin: '20px 0px' })}
`;

const Amount = styled.div`
  font-size: 1.2rem;
  ${mobile({ fontSize: '20px' })}
`;
const ProductPrice = styled.div`
  font-size: 18px;
  margin: 20px;
  ${mobile({ fontSize: '20px' })}
`;

const Summary = styled.div`
  height: 50%;
  border: 1px solid lightgrey;
  padding: 30px;
  flex: 1;
`;

const SummaryTitle = styled.div`
  font-size: 25px;
`;
const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`;

const Cart = () => {
  //   const cart = useSelector((state) => state.cart);
  //   const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleQtyChange = (e, product) => {
    const cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    cart.forEach((cartItem) => {
      if (cartItem._id === product._id) {
        cartItem.count = e.target.value;
      }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch({
      type: ADD_CART,
      payload: cart,
    });
  };

  //   const onToken = (token) => {
  //     setStripeToken(token);
  //   };

  //   useEffect(() => {
  //     const makeRequest = async () => {
  //       try {
  //         const res = await userRequest.post('/checkout/payment', {
  //           tokenId: stripeToken.id,
  //           amount: cart.total * 100,
  //         });
  //         navigate('/success', {
  //           stripeData: res.data,
  //           products: cart,
  //         });
  //       } catch {}
  //     };
  //     stripeToken && makeRequest();
  //   }, [stripeToken, cart.total, navigate]);
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <Link to='/shop'>
            <TopButton>Continue Shopping</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart &&
              cart.map((cart) => (
                <Product>
                  <ProductDetail>
                    <Image src={`/uploads/${cart.fileName}`} />
                    <Details>
                      <ProductName>
                        <Link
                          style={{
                            textDecoration: 'none',
                            color: 'black',
                            fontSize: '1.3rem',
                          }}
                          to={`/product/${cart._id}`}
                        >
                          <b>{cart.productName}</b>
                        </Link>
                      </ProductName>
                      <ProductID>{cart.productProduct}</ProductID>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductPrice>
                      {' '}
                      {cart.productPrice.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </ProductPrice>
                    <ProductAmountContainer>
                      <Amount>
                        <input
                          type='number'
                          min='1'
                          max={cart.productQty}
                          value={cart.count}
                          onChange={(e) => {
                            handleQtyChange(e, cart);
                          }}
                        />
                      </Amount>
                    </ProductAmountContainer>
                    <DeleteIcon
                      type='button'
                      onClick={() => dispatch(deleteCartItem(cart))}
                    />
                  </PriceDetail>
                </Product>
              ))}
          </Info>
          <hr />
          <Summary>
            <SummaryTitle>
              Order Summary {cart.length === 1 ? '(1)' : `(${cart.length})`}{' '}
            </SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>
                $
                {cart
                  .reduce(
                    (currentSum, currentCartItem) =>
                      currentSum +
                      currentCartItem.count * currentCartItem.productPrice,
                    0
                  )
                  .toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice> $5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Promo Code</SummaryItemText>
              <SummaryItemPrice> $-5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                {' '}
                $
                {cart
                  .reduce(
                    (currentSum, currentCartItem) =>
                      currentSum +
                      currentCartItem.count * currentCartItem.productPrice,
                    0
                  )
                  .toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name='Poke-Mart'
              image='/images/rayquaza.png'
              billingAddress
              shippingAddress
              description={`Your Total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Checkout</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
