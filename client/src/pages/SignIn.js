import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { login } from '../redux/apiCalls';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('images/pokemoncenter.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  padding: 40px;
  ${mobile({ width: '80%' })}
`;

const Title = styled.div`
  font-size: 25px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const LoginButton = styled.button`
  width: 40%;
  padding: 15px;
  cursor: pointer;
  background-color: #d61c4e;
  border: 1px solid black;
  color: white;
  margin: 10px 0px;
  &:disabled {
    color: black;
    cursor: not-allowed;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Redirect = styled.a`
  margin: 5px 0px;
  display: flex;
  cursor: pointer;
  text-decoration: underline;
`;

const Home = styled.button`
  border: none;
  background-color: white;
  padding: 0px;
  margin-bottom: 15px;
`;

// const Error = styled.span`
//   margin: 30px;
//   color: red;
// `;

const SignIn = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const { isFetching, error } = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   login(dispatch, { username, password });
  // };

  return (
    <Container>
      <Wrapper>
        <Home>
          <Link to='/'>
            <ArrowBackIcon />
          </Link>
        </Home>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder='Username'
            // onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder='Password'
            type='password'
            // onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Buttons>
          <LoginButton>Login</LoginButton>
        </Buttons>
        <Redirect>Forgot Password?</Redirect>
        <Redirect>
          <Link to='/register'>Create New Account</Link>
        </Redirect>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
