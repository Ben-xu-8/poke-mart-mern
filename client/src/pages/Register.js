import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { register } from '../api/auth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('images/palletetown.jpg');

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 40px;
  ${mobile({ width: '80%' })}
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Load = styled.div``;
const Title = styled.div`
  font-size: 25px;
`;

const Agreement = styled.div`
  margin: 20px 0px;
  font-size: 12px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 15px 20px 0px 0px;
  padding: 10px;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CreateButton = styled.button`
  width: 40%;
  padding: 15px;
  cursor: pointer;
  background-color: #d61c4e;
  border: 1px solid black;
  color: white;
`;

const Home = styled.button`
  border: none;
  background-color: white;
  padding: 0px;
  margin-bottom: 15px;
`;

const Error = styled.div``;
const Success = styled.div``;

const Register = () => {
  // Set State for input data
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    password2: '',
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    firstname,
    lastname,
    username,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  // Grabs the data from the input fields
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      successMsg: '',
      errorMsg: '',
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Validate User Inputs
    if (
      isEmpty(firstname) ||
      isEmpty(lastname) ||
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2)
    ) {
      setFormData({
        ...formData,
        errorMsg: 'All Fields Are Required',
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: 'Invalid Email',
      });
    } else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        errorMsg: 'Password Does Not Match',
      });
    } else {
      const { firstname, lastname, username, email, password } = formData;
      const data = { firstname, lastname, username, email, password };
      setFormData({
        ...formData,
        loading: true,
      });

      register(data)
        .then((response) => {
          console.log('Success', response);
          setFormData({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            password2: '',
            loading: false,
            successMsg: response.data.successMessage,
          });
        })
        .catch((err) => {
          console.log('Registration error', err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errors,
          });
        });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Error>{errorMsg && showErrorMsg(errorMsg)}</Error>
        <Success>{successMsg && showSuccessMsg(successMsg)}</Success>
        <Home>
          <Link to='/'>
            <ArrowBackIcon />
          </Link>
        </Home>
        <Top>
          <Title>Create an Account</Title>
          <Load>{loading && showLoading()}</Load>
        </Top>

        <Form onSubmit={handleSubmit} noValidate>
          <Input
            name='firstname'
            value={firstname}
            placeholder='Name'
            onChange={handleChange}
          />
          <Input
            name='lastname'
            value={lastname}
            placeholder='Last Name'
            onChange={handleChange}
          />
          <Input
            name='username'
            value={username}
            placeholder='Username'
            onChange={handleChange}
          />
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
          <Input
            type='password'
            name='password2'
            value={password2}
            placeholder='Confirm Password'
            onChange={handleChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Buttons>
            <CreateButton type='submit'>Create Account</CreateButton>
          </Buttons>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
