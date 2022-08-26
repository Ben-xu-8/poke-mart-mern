import React from 'react';
import styled from 'styled-components';
import AdminNavBar from '../components/AdminNavBar';
import NavBar from '../components/NavBar';
import AdminBody from '../components/AdminBody';

const Container = styled.div``;
const Body = styled.div`
  justify-content: center;
  align-content: center;
`;
const Wrap = styled.div`
  display: flex;
`;

const AdminDashboard = () => {
  return (
    <Container>
      <NavBar />
      <Wrap>
        <AdminNavBar />
        <Body>
          <AdminBody />
        </Body>
      </Wrap>
    </Container>
  );
};

export default AdminDashboard;
