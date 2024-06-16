import React from 'react';
import { Container, Typography } from '@mui/material';
import UserList from '../components/UserList';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      <UserList />
    </Container>
  );
};

export default HomePage;
