import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import burgerImg from '../../Assets/burger.jpg';

export default function OrderOld() {
    return (
        <Grid container>
            <Grid item component={Paper} elevation={2} xs={12} sx={{ display : 'flex', mb:2}}>
                <img src={burgerImg} alt="Commande" width={250} height={250} />
                <Box sx={{ m :2}}>
                    <h2>Nom du restaurant</h2>
                    <p>Menu 1</p>
                    <p>Menu 2</p>
                </Box>
            </Grid>
            <Grid item component={Paper} elevation={2} xs={12} sx={{ display : 'flex'}}>
                <img src={burgerImg} alt="Commande" width={250} height={250} />
                <Box sx={{ m :2}}>
                    <h2>Nom du restaurant</h2>
                    <p>Menu 1</p>
                    <p>Menu 2</p>
                </Box>
            </Grid>
        </Grid>
    )
}