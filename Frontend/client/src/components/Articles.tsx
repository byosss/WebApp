import { CardActions, IconButton, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import boisson from '../Assets/coca.jpg';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const listItem = [1,2,3,4,5,6,7]

export default function Articles() {
    return(
        <React.Fragment>
            {listItem.map((menu: any) => (
                <Grid key={menu._id} item xs={3.7} sx={{ mr:3, my: 2 }}>
                    <Card sx={{ maxWidth: 500, display: 'flex' }}>
                        <CardMedia
                            component="img"
                            alt="Menu image"
                            image={boisson}
                            sx={{ width: 200, height: 200}}
                        />
                        <CardContent sx={{ width: 200}}>
                            <Typography gutterBottom variant="h5" component="div">
                            Coca Cola
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                            2.5€
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