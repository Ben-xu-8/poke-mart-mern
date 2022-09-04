import React, { Fragment } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { isAuth, logout } from '../helpers/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from '../responsive';

import {
  faHouseChimney,
  faRightFromBracket,
  faUserPen,
  faGripHorizontal,
  faDoorOpen,
  faBagShopping,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
`;
const Top = styled.div`
  height: 100%;
  justify-content: space-between;
`;

const Toggler = styled.div`
  float: right;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  background-color: white;
  ${mobile({ textAlign: 'center', flexDirection: 'column' })}
`;

const Icon = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
`;

const Header = styled.div`
  background-color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Cart = styled.div`
  background-color: white;
  margin-left: 38px;
  margin-right: 20px;
  ${mobile({ marginLeft: '0px', marginRight: '0px' })}
`;

const SignOut = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
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
          <Top>
            <Link to='/' className='navbar-brand' href='#'>
              <img
                width='30%'
                height='15%'
                src={'/images/logo.png'}
                alt='logo'
              />
            </Link>
            <Toggler>
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
            </Toggler>
          </Top>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              {!isAuth() && (
                <Container>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faHouseChimney} />
                      </Icon>
                      <Header>Home</Header>
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
                      <Header>Sign In</Header>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='Register' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faUserPen} />
                      </Icon>
                      <Header>Register</Header>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/shop' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faBagShopping} />
                      </Icon>
                      <Header>Products</Header>
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

              {isAuth() && isAuth().role === 0 && <Fragment></Fragment>}

              {isAuth() && isAuth().role === 1 && (
                <Fragment>
                  <li className='nav-item'>
                    <Link to='/admin/dashboard' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faGripHorizontal} />
                      </Icon>
                      <Header>Dashboard</Header>
                    </Link>
                  </li>
                </Fragment>
              )}

              {isAuth() && (
                <Fragment>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faHouseChimney} />
                      </Icon>
                      <Header>Home</Header>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/shop' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faBagShopping} />
                      </Icon>
                      <Header>Products</Header>
                    </Link>
                  </li>
                  <li className='nav-item ' onClick={handleLogout}>
                    <SignOut>
                      <Icon>
                        <FontAwesomeIcon icon={faDoorOpen} />
                      </Icon>
                      <Header>Home</Header>
                    </SignOut>
                  </li>
                  <li className='nav-item'>
                    <Link to='/cart' className='nav-link' href='#'>
                      <Cart>
                        <Icon>
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </Icon>
                      </Cart>
                    </Link>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default withRouter(NavBar);
