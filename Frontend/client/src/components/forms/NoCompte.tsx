import { Button, Drawer, Grid } from "@mui/material";
import React, { useState } from "react";

interface CompteProps {    
    open: boolean;
    onClose: (open: boolean) => void;
}

export default function NoCOmpte(props: CompteProps) {
    const { open, onClose } = props;

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
                        <Button sx={{ my: 2}} fullWidth variant="contained" color="primary">Se connecter</Button>
                        <Button fullWidth  variant="outlined" color="error">S'inscrire</Button>
                    </Grid>
                </Grid>
            </Drawer>
    </React.Fragment>
    );
};