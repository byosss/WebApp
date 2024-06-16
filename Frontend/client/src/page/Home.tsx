import { Grid, Typography } from "@mui/material"
import React from "react"
import Register from "../components/forms/Register"
import { QueryClient, QueryClientProvider } from "react-query";
import MenuAppBar from "../components/nav/Navbar";
import CategoryTree from "../components/TreeViewHome/CategoryTree";
import RestaurantsTree from "../components/TreeViewHome/RestaurantsTree";

const queryClient = new QueryClient();

export default function Home() {
    return(
        <React.Fragment>
            <MenuAppBar />
            <Grid container sx={{ m:5, width: '95%', justifyContent: 'center'}}>
                {/* <QueryClientProvider client={queryClient}>
                    <Register />
                </QueryClientProvider> */}
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