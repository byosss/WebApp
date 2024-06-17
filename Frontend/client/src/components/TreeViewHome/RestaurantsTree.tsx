import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import burgerImg from '../../Assets/burger.jpg';

const list = [1,2,3,4,5,6]

export default function RestaurantsTree() {
    return (
        <Grid container sx={{ justifyContent: 'center' }}>
            {list.map((item) => (
            <Grid item xs={3} sx={{ mx:6, my: 2 }}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={burgerImg}
                        alt="Burger King"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Burger king
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Restaurant Fast-food - Burger
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Parc des Tanneries, 2 All. des Foulons, 67380 Lingolsheim
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            ))}
        </Grid>
    )
}