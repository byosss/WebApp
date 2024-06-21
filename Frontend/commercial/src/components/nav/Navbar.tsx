import AppBar from "@mui/material/AppBar";
import { Button, Grid, Toolbar, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; 

const navTheme = createTheme({
    palette: {
      background: {
        default: '#EEEEEE',
      },
    },
});

export default function MenuAppBar() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={navTheme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'background.default',}}>
                <Toolbar>

                  <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>

                    <Grid item xs={1} sx={{ display: 'flex', color: 'black', alignItems: 'center'}}>
                        <img src={'/logoCE100.png'} alt="Logo" height={"64px"} width={"64px"} />
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Cesi Eat</Typography>
                    </Grid>

                    <Grid item xs={2} sx={{ display: 'Flex', justifyContent: 'space-around' }}>
                        <Button onClick={ () => navigate('/Dashboard')} sx={{ color: '#757575'}}>Tableau de bord</Button>
                        <Button onClick={ () => navigate('/Userboard')} sx={{ color: '#757575'}}>Comptes clients</Button>
                    </Grid>

                  </Grid>

                </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
  );
}