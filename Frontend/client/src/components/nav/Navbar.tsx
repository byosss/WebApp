import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, Grid, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { styled, alpha, createTheme, ThemeProvider } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";

const navTheme = createTheme({
    palette: {
      background: {
        default: '#EEEEEE',
      },
    },
});

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "grey",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "grey",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "70%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

export default function MenuAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialDelete, setDialDelete] = useState(false);
  const navigate = useNavigate();

  const openDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleCloseDial = (open: boolean) => () => {
    setDialDelete(open);
  };

  return (
    <ThemeProvider theme={navTheme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                bgcolor: 'background.default',
            }}>
                <Toolbar>
                    <Grid container sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <Grid item xs={1} sx={{ display: 'flex', color: 'black', alignItems: 'center'}}>
                            <img src={'/logoCE100.png'} alt="Logo" height={"64px"} width={"64px"} />
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Cesi Eat</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Box
                                sx={{
                                flex: 1,
                                marginInline: "64px",
                                }}
                            >
                                <Search
                                sx={{
                                    backgroundColor: "#DBDBDB",
                                    width: "100%",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                                >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Recherche"
                                    inputProps={{ "aria-label": "search" }}
                                />
                                </Search>
                            </Box>
                        </Grid>

                        <Grid item xs={2} sx={{ display: 'Flex', justifyContent: 'space-around' }}>
                            <Button onClick={ () => navigate('/')} sx={{ color: '#757575'}}>Accueil</Button>
                            <Button onClick={ () => navigate('/')} sx={{ color: '#757575'}}>Commandes</Button>
                        </Grid>
                        <Grid item xs={1} sx={{ display: 'Flex', justifyContent: 'space-around'}}>
                          <Tooltip title="Panier">
                            <IconButton color="default" aria-label="menu">
                                <ShoppingCartRoundedIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Compte">
                            <IconButton onClick={openDrawer(true)} color="default" aria-label="menu">
                                <PersonIcon />
                            </IconButton> 
                          </Tooltip>

                          <Drawer anchor="right" open={drawerOpen} onClose={openDrawer(false)}>
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
                              <Grid item xs={12} sx={{ pt: 6, pb:2 }}>
                                <Typography align="center" variant="h4" >Mon Compte</Typography>
                              </Grid>
                              <Grid item xs={12} sx={{ py: 3, textAlign: 'center' }}>
                                <Typography align="center" variant="h6">Nom et prénom</Typography>
                                <Button  size="small" variant="text">Modifier le compte</Button>
                              </Grid>
                              <Grid item xs={12} >
                                <Typography variant="h6">Numéro de téléphone</Typography>
                                <TextField fullWidth variant="standard" disabled defaultValue={"+33.6.00.00.00.00"}/>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h6">Adresse mail</Typography>
                                <TextField fullWidth variant="standard" disabled defaultValue={"prenom.nom@vraiesi.fr"}/>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h6">Adresse de livraison</Typography>
                                <TextField fullWidth variant="standard" disabled defaultValue={"48 Rue du jardin, 67000 Strasbourg, France"}/>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h6">Code de parainnage</Typography>
                                <TextField fullWidth variant="standard" disabled defaultValue={"HF40CD5"}/>
                              </Grid>
                              <Grid item xs={12} sx={{ mt: 10 }}>
                                <Button sx={{ my: 2}} fullWidth variant="contained" color="primary">Déconnexion</Button>
                                <Button fullWidth onClick={handleCloseDial(true)} variant="outlined" color="error">Supprimer le compte</Button>
                              </Grid>
                            </Grid>
                          </Drawer>
                          <Dialog
                            open={dialDelete}
                            onClose={handleCloseDial}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Etes-vous sur de supprimer votre compte ?"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Une fois supprimé il ne sera pas possible de récupérer votre compte
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleCloseDial(false)}>Annuler</Button>
                              <Button variant="contained" color="error" onClick={handleCloseDial(false)} autoFocus>
                                Supprimer
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
  );
}