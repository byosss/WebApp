import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Grid from '@mui/material/Grid';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import Search from './Search';

const navTheme = createTheme({
    palette: {
      background: {
        default: '#EEEEEE',
      },
    },
});


export default function MenuAppBar() {

  return (
    <ThemeProvider theme={navTheme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{bgcolor: 'background.default'}}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                                Logo + Cesi Eat
                            </Typography>
                        </Grid>
                        <Grid xs={8}>
                            <Search/>
                        </Grid>
                        <Grid item xs={1} sx={{ display: 'Flex', justifyContent: 'space-around'}}>
                            <Button >Accueil</Button>
                            <Button >Commandes</Button>
                        </Grid>
                        <Grid item xs={1} sx={{ display: 'Flex', justifyContent: 'space-around'}}>
                            <IconButton color="default" aria-label="menu">
                                <ShoppingCartRoundedIcon />
                            </IconButton>
                            <IconButton color="default" aria-label="menu">
                                <PersonIcon />
                            </IconButton> 
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
  );
}