import { Grid, Typography } from "@mui/material"
import React from "react"
import MenuAppBar from "../components/nav/Navbar";
import CategoryTree from "../components/TreeViewHome/CategoryTree";
import RestaurantsTree from "../components/TreeViewHome/RestaurantsTree";

export default function Home() {
    return(
        <React.Fragment>
            <MenuAppBar />
            <Grid container sx={{ m:5, width: '95%', justifyContent: 'center'}}>
                <Grid item xs={12} >
                    <Typography component={'h1'} variant="h4" sx={{ mb:3 }}>Catégories</Typography>
                </Grid>
                <Grid item xs={6}>
                    <CategoryTree />
                </Grid>
                <Grid item xs={12}>
                    <Typography component={'h1'} variant="h4" sx={{ my: 3}}>Restaurants</Typography>
                    <RestaurantsTree /> 
                </Grid>
            </Grid>
        </React.Fragment>
    )
}