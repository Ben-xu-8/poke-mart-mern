import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const AdminRoute = () => {
  return isAuth() && isAuth().role === 1 ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' />
  );
};

export default AdminRoute;
