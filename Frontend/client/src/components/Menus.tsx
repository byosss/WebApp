import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import burgerImg from '../Assets/burger.jpg';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const listMenu = [1,2,3]

export default function Menus() {
    return (
        <React.Fragment>
            {listMenu.map((menu: any) => (
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
                            Menu Master du chef Original
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                            10€
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Decouvrez notre Burger unique en son genre ! Durée limitée
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
        </React.Fragment>
    )
}