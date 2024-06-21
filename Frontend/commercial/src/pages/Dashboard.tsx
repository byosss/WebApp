import React from 'react';
import { Container, Typography } from '@mui/material';

import MenuAppBar from '../components/nav/Navbar';

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <MenuAppBar />
      <Typography variant="h4" gutterBottom>
        Tableau de bord
      </Typography>
    </React.Fragment>
  );
};

export default Dashboard;
