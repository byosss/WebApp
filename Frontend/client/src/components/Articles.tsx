import { CardActions, IconButton, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import boisson from '../Assets/coca.jpg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from "axios";
import { useQuery } from "react-query";

const listItem = [1,2,3,4,5,6,7]

interface ArticlesProps {
    id: string | undefined;
}

export default function Articles(props: Readonly<ArticlesProps>) {
    const { id } = props;

    const fetchItems = async () => {
        const { data } = await axios.get(`http://localhost/api/restaurants/${id}/items`);
        console.log(data);
        return data;
    };
  
    const { data, isLoading, error } = useQuery('itemsRestaurant', fetchItems);
    
    return(
        <React.Fragment>
             {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error loading articles</p>
                    ) : (
        <React.Fragment>
            {data.map((items: any) => (
                <Grid key={items._id} item xs={3.7} sx={{ mr:3, my: 2 }}>
                    <Card sx={{ maxWidth: 500, display: 'flex' }}>
                        <CardMedia
                            component="img"
                            alt="Item image"
                            image={boisson}
                            sx={{ width: 200, height: 200}}
                        />
                        <CardContent sx={{ width: 200}}>
                            <Typography gutterBottom variant="h5" component="div">
                            {items.name}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                            {items.price + ' €'}
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