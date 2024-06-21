import React from 'react';
import { Container, Typography } from '@mui/material';

import MenuAppBar from '../components/nav/Navbar';
import OrderTable from '../components/OrderList';

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <MenuAppBar />
        <Container
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '3rem',
            }}
        >
            <div>
                <Typography variant="h4" gutterBottom>
                Tableau de bord
                </Typography>
                <OrderTable />
            </div>
        </Container>
    </React.Fragment>
  );
};

export default Dashboard;
