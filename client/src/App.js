import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminEditProduct from './pages/AdminEditProduct';
import AdminRoute from './pages/AdminRoute';
import UserRoute from './pages/UserRoute';
// Redux

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
          <Route path='/shop' element={<Shop />} />
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
