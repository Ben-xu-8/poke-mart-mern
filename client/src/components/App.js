import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
