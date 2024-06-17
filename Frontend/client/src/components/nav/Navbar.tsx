import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';
import { Button, Grid, Toolbar, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { styled, alpha, createTheme, ThemeProvider } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";
import Compte from "../forms/Compte";
import NoCompte from "../forms/NoCompte";

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
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const openDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const checkConnection = () => {
    if (localStorage.getItem('token')) {
      navigate('/Commandes');
    } else {
      navigate('/Login');
    };
  }

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
                            <Button onClick={ () => checkConnection()} sx={{ color: '#757575'}}>Commandes</Button>
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
                          {token 
                          ? <Compte open={drawerOpen} onClose={openDrawer(false)} />
                          : <NoCompte open={drawerOpen} onClose={openDrawer(false)}/>
                          }
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
  );
}