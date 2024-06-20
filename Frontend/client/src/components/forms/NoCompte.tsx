import { Button, Drawer, Grid, ThemeProvider, createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CompteProps {    
    open: boolean;
    onClose: (open: boolean) => void;
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#007965',
        },
        secondary: {
            main: '#00AF91',
        },
    },
  });

export default function NoCOmpte(props: Readonly<CompteProps>) {
    const { open, onClose } = props;
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Grid container
                spacing={2}
                sx={{
                    width: '25em',
                    padding: 3,
                    justifyContent: 'center',
                    direction: 'column',
                    flexWrap: 'wrap',
                }}
            >
                <Grid item xs={12} sx={{ mt: 10 }}>
                    <Button onClick={() => navigate('/Login')} sx={{ my: 2}} fullWidth variant="contained" color="primary">Se connecter</Button>
                    <Button  onClick={() => navigate('/Register')} fullWidth variant="contained" color="primary">S'inscrire</Button>
                </Grid>
            </Grid>
        </Drawer>
        </ThemeProvider>
    );
};