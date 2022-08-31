import styled from 'styled-components';
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
// import NewsLetter from '../components/NewsLetter';
import { mobile } from '../responsive';
// import StripeCheckout from 'react-stripe-checkout';
// import { userRequest } from '../requestMethod';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../redux/actions/productActions';
import { Add, Remove } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;
const Title = styled.div`
  text-align: center;
  font-size: 25px;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
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
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.div``;
const ProductID = styled.div``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ margin: '20px 0px' })}
`;

const Hr = styled.hr`
  background-color: #eeee;
  height: 1px;
`;

const Amount = styled.div`
  font-size: 15px;
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
  font-size: ${(props) => props.type === 'total' && '24px'};
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
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
          <TopButton>Continue Shopping</TopButton>
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
                        <b>Product:</b> {cart.productName}
                      </ProductName>
                      <ProductID>
                        <b>Product ID:</b> {cart._id}
                      </ProductID>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove />
                      <Amount>{cart.quantity}</Amount>
                      <Add />
                    </ProductAmountContainer>
                    <ProductPrice>$ {cart.price * cart.quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice> </SummaryItemPrice>
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
              <SummaryItemPrice> </SummaryItemPrice>
            </SummaryItem>
            {/* <StripeCheckout
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
            </StripeCheckout> */}
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
