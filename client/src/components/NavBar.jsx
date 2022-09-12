import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { mobile } from '../responsive';
import styled from 'styled-components';
import { isAuth, logout } from '../helpers/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';

import {
  faHouseChimney,
  faRightFromBracket,
  faUserPen,
  faGripHorizontal,
  faDoorOpen,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
`;

const Cart = styled.div`
  margin-left: 38px;
  margin-right: 20px;
`;

const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  ${mobile({ flexDirection: 'column' })}
`;

const NavButton = styled.div`
  display: flex;
`;

const ImgContainer = styled.div``;
const TopContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const NavBar = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const handleLogout = (evt) => {
    logout(() => {
      navigate('/signin');
    });
  };

  return (
    <Wrapper>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <TopContainer>
            <ImgContainer>
              <Link to='/' className='navbar-brand' href='#'>
                <img
                  width='35%'
                  height='100%'
                  src={'/images/logo.png'}
                  alt='logo'
                />
              </Link>
            </ImgContainer>
            <NavButton>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
            </NavButton>
          </TopContainer>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              {!isAuth() && (
                <Container>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faHouseChimney} />
                      </Icon>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/signin'
                      className='nav-link '
                      aria-current='page'
                      href='#'
                    >
                      <Icon>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                      </Icon>
                      Login
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='Register' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faUserPen} />
                      </Icon>
                      Register
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/shop' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faBagShopping} />
                      </Icon>
                      Products
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/cart' className='nav-link' href='#'>
                      <Cart>
                        <Icon>
                          <Badge
                            badgeContent={cart.cart.length}
                            color='primary'
                          >
                            <ShoppingCartOutlined />
                          </Badge>
                        </Icon>
                      </Cart>
                    </Link>
                  </li>
                </Container>
              )}

              {isAuth() && isAuth().role === 0 && (
                <Container>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faGripHorizontal} />
                      </Icon>
                      Dashboard
                    </Link>
                  </li>
                </Container>
              )}

              {isAuth() && isAuth().role === 1 && (
                <Container>
                  <li className='nav-item'>
                    <Link to='/admin/dashboard' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faGripHorizontal} />
                      </Icon>
                      Dashboard
                    </Link>
                  </li>
                </Container>
              )}

              {isAuth() && (
                <Container>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faHouseChimney} />
                      </Icon>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/shop' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faBagShopping} />
                      </Icon>
                      Products
                    </Link>
                  </li>
                  <li className='nav-item ' onClick={handleLogout}>
                    <button className='btn btn-link text-secondary text-decoration-none pl-0'>
                      <Icon>
                        <FontAwesomeIcon icon={faDoorOpen} />
                      </Icon>
                      Logout
                    </button>
                  </li>
                  <li className='nav-item'>
                    <Link to='/cart' className='nav-link' href='#'>
                      <Cart>
                        <Icon>
                          <Badge
                            badgeContent={cart.cart.length}
                            color='primary'
                          >
                            <ShoppingCartOutlined />
                          </Badge>
                        </Icon>
                      </Cart>
                    </Link>
                  </li>
                </Container>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default withRouter(NavBar);
