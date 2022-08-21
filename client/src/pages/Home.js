import React from 'react';
import Banner from '../components/Announcement';
import NavBar from '../components/NavBar';
import Slide from '../components/Slide';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Slide />
    </div>
  );
};

export default Home;
