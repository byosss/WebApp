import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import burgerImg from '../Assets/burger.jpg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from "axios";
import { useQuery } from "react-query";

const listMenu = [1,2,3]

interface MenusProps {
    id: string | undefined;
}

export default function Menus(props: Readonly<MenusProps>) {
    const { id } = props;

    const fetchMenus = async () => {
        const { data } = await axios.get(`http://localhost/api/restaurants/${id}/menus`);
        console.log(data);
        return data;
    };
  
    const { data, isLoading, error } = useQuery('menus', fetchMenus);

    return (
        <React.Fragment>
             {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error loading articles</p>
                    ) : (
            <React.Fragment>
                
                {data.map((menu: any) => (
                    <Grid key={menu._id} item xs={5.6} sx={{ mr:5, my: 2 }}>
                        <Card sx={{ maxWidth: 800, display: 'flex' }}>
                            <CardMedia
                                component="img"
                                alt="Menu image"
                                height="240"
                                image={burgerImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {data.name}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                10€
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {data.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <li> Burger maison</li>
                                <li> Boisson XL</li>
                                <li> Frites maison</li>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <Tooltip title="Ajouter au panier" arrow>
                                    <IconButton >
                                        <AddCircleIcon sx={{ fontSize: 40 }} htmlColor="#FFCC29" />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
            </React.Fragment> )}
        </React.Fragment>
    )
}