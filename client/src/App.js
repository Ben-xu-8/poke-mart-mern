import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './pages/AdminRoute';
import UserRoute from './pages/UserRoute';

const App = () => (
  <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
        {/* <Route path='/user/dashboard' element={<UserDashboard />} /> */}
        <Route element={<UserRoute />}>
          <Route path='/user/dashboard' element={<UserDashboard />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
