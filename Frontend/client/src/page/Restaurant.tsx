import React from "react"
import banniere from "../Assets/banniere-restaurant.jpg"
import Navbar from "../components/nav/Navbar"
import { Box, Grid, TextField, Typography } from "@mui/material"
import Footer from "../components/nav/Footer";
import Menus from "../components/Menus";
import Articles from "../components/Articles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export default function Restaurant() {
    const { id } = useParams();

    const fetchRestaurant = async () => {
        const {data} = await axios.get(`http://localhost/api/restaurants/${id}`);
        return data;
    }
    const { data } = useQuery('restaurant', fetchRestaurant);
    console.log(data);
    
    return(
        <React.Fragment>
            <Navbar />
            {data !== undefined && data !== null &&
                <React.Fragment>
                    <Box sx={{ my:3, mx:2, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <img src={banniere} alt="Bannière restaurant" width={1600} /> 
                    </Box>
                    <Grid container sx={{ ml: 'auto', mr: 'auto', mb:10, width: '90%', display: 'flex' }}>
                        <Grid item xs={12}>
                            <Typography variant="h3">{data.name}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" sx={{ mt:1 }}>{data.description}</Typography>
                            <Typography variant="body2" sx={{ mb: 3 }}>{data.address.street + " " + data.address.city + " " + data.address.zip}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" sx={{ my: 3 }}>Menu</Typography>
                        </Grid>
                        <Menus id={id}/>
                        <Grid item xs={12}>
                            <Typography variant="h5" sx={{ my: 3 }}>Articles</Typography>
                        </Grid>
                        <Articles id={id} />
                    </Grid>
                </React.Fragment>
            }
            <Footer />    
        </React.Fragment>
    )
}