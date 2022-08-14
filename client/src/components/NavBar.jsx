import React, { Fragment } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { isAuth, logout } from '../helpers/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faRightFromBracket,
  faUserPen,
  faAngleDoubleDown,
  faGripHorizontal,
  faDoorOpen,
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

const Form = styled.div`
  padding-left: 15px;
`;

// const Button = styled.button`
//   border: none;
//   background-color: white;
//   text-decoration: none;
// `;

// const Left = styled.div``;
// const Center = styled.div``;
// const Right = styled.div``;

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
  const handleLogout = (evt) => {
    logout(() => {
      navigate('/signin');
    });
  };

  return (
    <Wrapper>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand' href='#'>
            <img width='30%' height='15%' src={'/images/logo.png'} alt='logo' />
          </Link>
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
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              {!isAuth() && (
                <Fragment>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faHouse} />
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
                      Sign In
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
                </Fragment>
              )}

              {isAuth() && isAuth().role === 0 && (
                <Fragment>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faGripHorizontal} />
                      </Icon>
                      Dashboard
                    </Link>
                  </li>
                </Fragment>
              )}

              {isAuth() && isAuth().role === 1 && (
                <Fragment>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faGripHorizontal} />
                      </Icon>
                      Dashboard
                    </Link>
                  </li>
                </Fragment>
              )}

              {isAuth() && (
                <Fragment>
                  <li className='nav-item'>
                    <FontAwesomeIcon icon='faHouse' />
                    <Link to='/' className='nav-link' href='#'>
                      <Icon>
                        <FontAwesomeIcon icon={faHouse} />
                      </Icon>
                      Home
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
                </Fragment>
              )}

              <li className='nav-item dropdown'>
                <Link
                  to='#'
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <Icon>
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                  </Icon>
                  Products
                </Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link to='#' className='dropdown-item' href='#'>
                      Pokemon
                    </Link>
                  </li>
                  <li>
                    <Link to='#' className='dropdown-item' href='#'>
                      Items
                    </Link>
                  </li>
                  <li>
                    <Link to='#' className='dropdown-item' href='#'>
                      TM/HM
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Form>
              <form className='d-flex'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn btn-outline-success' type='submit'>
                  Search
                </button>
              </form>
            </Form>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default withRouter(NavBar);
