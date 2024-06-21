import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import UserList from '../components/UserList';

import MenuAppBar from '../components/nav/Navbar';

const Userboard: React.FC = () => {
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
                    Comptes clients
                </Typography>
                <UserList />
            </div>
        </Container>
    </React.Fragment>
);
};

export default Userboard;
