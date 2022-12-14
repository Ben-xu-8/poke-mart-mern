import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const UserRoute = () => {
  return isAuth() && isAuth().role === 0 ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' />
  );
};

export default UserRoute;
