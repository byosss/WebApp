import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost/api/users/login', {
                email,
                password,
            });

            const token = response.data.token;

            console.log('Token:', token);
            
            localStorage.setItem('token', token);

            navigate('/home');
        } 
        catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <Container maxWidth="sm" >
            <Typography variant="h4" gutterBottom textAlign={'center'}>
                Login
            </Typography>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
        </Container>
    );
};

export default LoginPage;
