import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Connection from "../components/forms/Connection";

export default function Login() {
    const navigate = useNavigate();
    
    return (
        <Box sx={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Tooltip title="Retour">
                <IconButton color="default" aria-label="menu" onClick={() => navigate('/Dashboard')}>
                    <ArrowBackIcon sx={{ m:2, fontSize: 30, color: 'primary', cursor: 'pointer'}} />
                    <Typography>Accueil</Typography>
                </IconButton>
            </Tooltip>
            <Connection />
        </Box>
    )
}