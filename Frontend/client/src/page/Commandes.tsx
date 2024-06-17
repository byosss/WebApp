import { Grid, Typography } from "@mui/material";
import MenuAppBar from "../components/nav/Navbar";
import React from "react";
import OrderEnCours from "../components/Orders/OrderEnCours";
import OrderOld from "../components/Orders/OrderOld";

export default function Commandes() {
    return (
    <React.Fragment>
        <MenuAppBar />
        <Grid container sx={{ m:5, width: '95%', justifyContent: 'center'}}>
            <Grid item xs={12}>
                <Typography component={'h1'} variant="h4" sx={{ mb:3 }}>Commande en cours</Typography>
                <OrderEnCours />
            </Grid>
            <Grid item xs={12}>
                <Typography component={'h1'} variant="h4" sx={{ my: 3}}>Anciennes commandes</Typography>
                <OrderOld />
            </Grid>
        </Grid>
    </React.Fragment>
    )
}