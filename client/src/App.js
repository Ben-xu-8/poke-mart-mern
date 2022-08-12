import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

const App = () => (
  <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/user/dashboard' element={<UserDashboard />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
