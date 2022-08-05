import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const App = () => (
  <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
        <Route element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
