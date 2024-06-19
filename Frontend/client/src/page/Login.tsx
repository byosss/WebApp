import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Connection from "../components/forms/Connection";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../context/UserContext";

export default function Login() {
    const navigate = useNavigate();
    
    return (
        <Box sx={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Tooltip title="Retour">
                <IconButton color="default" aria-label="menu" onClick={() => navigate('/')}>
                    <ArrowBackIcon sx={{ m:2, fontSize: 30, color: 'primary', cursor: 'pointer'}} />
                    <Typography>Accueil</Typography>
                </IconButton>
            </Tooltip>
            <Connection />
        </Box>
    )
}