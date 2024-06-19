import { Button, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import React from "react";
import { useNavigate } from "react-router-dom";

interface PanierProps {    
    open: boolean;
    onClose: (open: boolean) => void;
}

export default function Panier(props: Readonly<PanierProps>) {
    const { open, onClose } = props;
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Grid container
                spacing={2}
                sx={{
                    width: '25em',
                    padding: 3,
                    justifyContent: 'center',
                    direction: 'column',
                    flexWrap: 'wrap',
                }}
            >
                <Grid item xs={12} sx={{ mt:2 }}>
                    <Typography align="center" variant="h4" >Mon Panier</Typography>
                </Grid>
                    { token !== undefined && token !== null 
                    ? 
                    <Grid item xs={12} sx={{ mt: 10 }}>
                        <Typography>Connecter</Typography> 
                    </Grid>
                    : <React.Fragment>
                        <Grid item xs={12} sx={{ mt: 10 }}>
                            <Typography>Vous n'etes pas connecté</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 10 }}>
                            <Button onClick={() => navigate('/Login')} sx={{ my: 2}} fullWidth variant="contained" color="primary">Se connecter</Button>
                            <Button  onClick={() => navigate('/Register')} fullWidth variant="contained" color="primary">S'inscrire</Button>
                        </Grid>
                    </React.Fragment>}
            </Grid>
        </Drawer>
    )
}