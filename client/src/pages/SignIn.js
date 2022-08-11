import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { showErrorMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { signin } from '../api/auth';

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

const Error = styled.div``;
const Top = styled.div``;
const Load = styled.div``;

// const Error = styled.span`
//   margin: 30px;
//   color: red;
// `;

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    errorMsg: false,
    loading: false,
    dashboard: false,
  });
  const { email, password, errorMsg, loading, dashboard } = formData;

  // Grabs the data from the input fields
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: '',
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Validate User Inputs
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: 'All Fields Are Required',
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: 'Invalid Email',
      });
    } else {
      const { email, password } = formData;
      const data = { email, password };
      setFormData({
        ...formData,
        loading: true,
      });

      signin(data);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Error>{errorMsg && showErrorMsg(errorMsg)}</Error>
        <Home>
          <Link to='/'>
            <ArrowBackIcon />
          </Link>
        </Home>
        <Top>
          <Title>Sign In</Title>
          <Load>{loading && showLoading()}</Load>
        </Top>

        <Form onSubmit={handleSubmit}>
          <Input
            name='email'
            value={email}
            placeholder='Email'
            onChange={handleChange}
          />
          <Input
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={handleChange}
          />
          <Buttons>
            <LoginButton type='Submit'>Login</LoginButton>
          </Buttons>
        </Form>
        <Redirect>Forgot Password?</Redirect>
        <Redirect>
          <Link to='/register'>Create New Account</Link>
        </Redirect>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
