import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminEditProduct from './pages/AdminEditProduct';
import AdminRoute from './pages/AdminRoute';
import UserRoute from './pages/UserRoute';
import '@stripe/stripe-js';

import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategories } from './redux/actions/categoryActions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Navigate to='/' />} />
          <Route path='/cancel' element={<Navigate to='/cart' />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signin' element={<SignIn />} />
          <Route element={<UserRoute />}>
            <Route path='/user/dashboard' element={<UserDashboard />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route
              exact
              path='/admin/edit/product/:productId'
              element={<AdminEditProduct />}
            />
          </Route>
          <Route element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
