import React from 'react';
import styled from 'styled-components';
import AdminNavBar from '../components/AdminNavBar';
import NavBar from '../components/NavBar';

const Container = styled.div``;

const AdminDashboard = () => {
  return (
    <Container>
      <NavBar />
      <AdminNavBar />
    </Container>
  );
};

export default AdminDashboard;
