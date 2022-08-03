import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const Wrapper = styled.div``;

// const Left = styled.div``;
// const Center = styled.div``;
// const Right = styled.div``;

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white'>
      <Link to='#' className='navbar-brand'>
        <img width='30%' height='15%' src={'/images/logo.png'} alt='logo' />
      </Link>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <Link to='#' className='nav-link'>
              Sign In <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='#' className='nav-link'>
              Register
            </Link>
          </li>
          <li className='nav-item dropdown'>
            <Link
              to='#'
              className='nav-link dropdown-toggle'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Products
            </Link>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <Link to='#' className='dropdown-item'>
                Pokemon
              </Link>
              <Link to='#' className='dropdown-item'>
                Items
              </Link>
              <Link to='#' className='dropdown-item'>
                TM/HM
              </Link>
            </div>
          </li>
        </ul>

        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button
            className='btn btn-outline-success my-2 my-sm-0'
            type='submit'
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
