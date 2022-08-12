import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

// const Left = styled.div``;
// const Center = styled.div``;
// const Right = styled.div``;

const NavBar = () => {
  return (
    // <nav className='navbar navbar-expand-lg navbar-light bg-white'>
    //   <Link to='/' className='navbar-brand'>
    //     <img width='30%' height='15%' src={'/images/logo.png'} alt='logo' />
    //   </Link>

    //   <button
    //     className='navbar-toggler'
    //     type='button'
    //     data-toggle='collapse'
    //     data-target='#navbarSupportedContent'
    //     aria-controls='navbarSupportedContent'
    //     aria-expanded='false'
    //     aria-label='Toggle navigation'
    //   >
    //     <span className='navbar-toggler-icon'></span>
    //   </button>

    //   <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //     <ul className='navbar-nav ml-auto'>
    //       <li className='nav-item '>
    //         <Link to='/signin' className='nav-link'>
    //           Sign In <span className='sr-only'>(current)</span>
    //         </Link>
    //       </li>
    //       <li className='nav-item'>
    //         <Link to='/register' className='nav-link'>
    //           Register
    //         </Link>
    //       </li>
    //       <li className='nav-item dropdown'>
    //         <Link
    //           to='#'
    //           className='nav-link dropdown-toggle'
    //           id='navbarDropdown'
    //           role='button'
    //           data-toggle='dropdown'
    //           aria-haspopup='true'
    //           aria-expanded='false'
    //         >
    //           Products
    //         </Link>
    //         <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
    //           <Link to='#' className='dropdown-item'>
    //             Pokemon
    //           </Link>
    //           <Link to='#' className='dropdown-item'>
    //             Items
    //           </Link>
    //           <Link to='#' className='dropdown-item'>
    //             TM/HM
    //           </Link>
    //         </div>
    //       </li>
    //     </ul>

    //     <form className='form-inline my-2 my-lg-0'>
    //       <input
    //         className='form-control mr-sm-2'
    //         type='search'
    //         placeholder='Search'
    //         aria-label='Search'
    //       />
    //       <button
    //         className='btn btn-outline-success my-2 my-sm-0'
    //         type='submit'
    //       >
    //         Search
    //       </button>
    //     </form>
    //   </div>
    // </nav>
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
              <li className='nav-item'>
                <Link
                  to='/signin'
                  className='nav-link '
                  aria-current='page'
                  href='#'
                >
                  Sign In
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='Register' className='nav-link' href='#'>
                  Register
                </Link>
              </li>
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
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavBar;
