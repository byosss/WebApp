import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import burgerImg from '../../Assets/burger.jpg';
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export default function RestaurantsTree() {
    const fetchRestaurants = async () => {
        const {data} = await axios.get('http://localhost/api/restaurants');
        return data;
    }
 
    const { data, isLoading } = useQuery('restaurants', fetchRestaurants);
    const navigate = useNavigate();

    return (
            <Grid container sx={{ justifyContent: 'center' }}>
                {data?.map((restaurant: any) => (
                    <Grid key={restaurant._id} item xs={3} sx={{ mx:6, my: 2 }}>
                        <Card>
                            <CardActionArea onClick={() => navigate('/Restaurant/' + restaurant._id)}>
                                <CardMedia
                                component="img"
                                height="140"
                                image={burgerImg}
                                alt="Burger King"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {restaurant.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Restaurant Fast-food - Burger
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {restaurant.address}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
    )
}