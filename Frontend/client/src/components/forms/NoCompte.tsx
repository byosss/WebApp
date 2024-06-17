import { Button, Drawer, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CompteProps {    
    open: boolean;
    onClose: (open: boolean) => void;
}

export default function NoCOmpte(props: CompteProps) {
    const { open, onClose } = props;
    const navigate = useNavigate();

    return (
        <React.Fragment>
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
                    <Grid item xs={12} sx={{ mt: 10 }}>
                        <Button onClick={() => navigate('/Login')} sx={{ my: 2}} fullWidth variant="contained" color="primary">Se connecter</Button>
                        <Button  onClick={() => navigate('/Register')} fullWidth variant="contained" color="primary">S'inscrire</Button>
                    </Grid>
                </Grid>
            </Drawer>
    </React.Fragment>
    );
};