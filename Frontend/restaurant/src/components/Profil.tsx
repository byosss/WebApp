import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Grid, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import axiosInstance from "../api/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

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

export function Profil() {
  const [modifier, setModifier] = useState(true);
  const [dialDelete, setDialDelete] = useState(false);
  const restaurantId = localStorage.getItem('idResto');
  const navigate = useNavigate();

  const handleCloseDial = (open: boolean) => () => {
      setDialDelete(open);
  };

  const fetchUser = async () => {
      const { data } = await axiosInstance.get(`/api/restaurants/${restaurantId}`);
      return data;
  }

  const { data, refetch, isSuccess } = useQuery('user', fetchUser);

  const modifierLeCompte = () => {
      setModifier(!modifier);
  }

  const updateUser = async (restaurantData: { description: string; address: { street: string; city: string; zip: string }; }) => {
      try {
          const response = await axiosInstance.patch(`/api/restaurants/${restaurantId}`, restaurantData);
          console.log('Restaurant updated successfully', response.data);
          modifierLeCompte();
      } catch (error) {
          console.error('Restaurant update failed', error);
      }
  };

  useEffect(() => {
      refetch();
  }, [modifier, data]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const restaurantData = {
          description: formData.get('description') as string,
          address: {
              street: formData.get('street') as string,
              city: formData.get('city') as string,
              zip: formData.get('zip') as string,
          },
      };

      updateUser(restaurantData);
  };

  const deleteAccount = async () => {
      try {
          const response = await axiosInstance.delete(`/api/restaurants/${restaurantId}`);
          console.log('Restaurant deleted successfully', response.data);
          localStorage.removeItem('token');
          localStorage.removeItem('idResto');
          navigate('/')
      } catch (error) {
          console.error('Delete failed', error);
      }
  };

  return (
    <ThemeProvider theme={theme}>
      {isSuccess && data &&
      <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb:3}}>
                <img src={'/logoCE100.png'} alt="Logo" height={"100px"} width={"100px"} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Cesi Eat Restaurant</Typography>
            </Box>
            <Box sx={{ mb: 3}}>
                <Typography variant="h4">Restaurant</Typography>
            </Box>
      {data.address !== undefined && data !== null ?
      <form onSubmit={handleSubmit}>
          <Grid container
              spacing={2}
              sx={{
                  width: '40em',
                  padding: 3,
                  justifyContent: 'center',
                  direction: 'column',
              }}
          >
              
              <Grid item xs={12} sx={{ pt: 6, pb:2 }}>
                  <Typography align="center" variant="h4" >Mon Compte</Typography>
              </Grid>
              <Grid item xs={12} sx={{ py: 3, textAlign: 'center' }}>
                  <Typography align="center" variant="h6">{data.name}</Typography>
                  {modifier 
                  ? <Button onClick={() => modifierLeCompte()} size="small" variant="text" color="secondary">Modifier le compte</Button>
                  :<Box>
                  <Button type="submit" size="small" variant="text" color="secondary">Confirmer la modification</Button>
                  <Button onClick={() => modifierLeCompte()} size="small" variant="text" color="secondary">Annuler les modification</Button></Box>
                  }
              </Grid>
              <Grid item xs={12}>
                  <Typography variant="h6">Description du restaurant</Typography>
                  <TextField fullWidth name="description" variant="standard" disabled={modifier} defaultValue={data.description}/>
              </Grid>
              <Grid item xs={12}>
                  <Typography variant="h6">Adresse de livraison</Typography>
                  <Box sx={{ display: 'flex', mt:1 }}>
                      <TextField fullWidth name="street" label="Adresse" sx={{ mr:1}} variant="standard" disabled={modifier} defaultValue={data.address.street}/>
                      <TextField fullWidth name="city" label="Ville" sx={{ mr:1}} variant="standard" disabled={modifier} defaultValue={data.address.city}/>
                      <TextField fullWidth name="zip" label="Code postal" variant="standard" disabled={modifier} defaultValue={data.address.zip}/>
                  </Box>
              </Grid>
              <Grid item xs={12}>
                  <Typography variant="h6">Code de parainnage</Typography>
                  <TextField fullWidth variant="standard" disabled defaultValue={"HF40CD5"}/>
              </Grid>
            
              <Grid item xs={12} sx={{ mt: 5 }}>
                  <Button sx={{ my: 2}} onClick={() => {localStorage.removeItem('token'); localStorage.removeItem('idResto'); navigate('/');}} fullWidth variant="contained" color="primary">Déconnexion</Button>
                  <Button fullWidth onClick={handleCloseDial(true)} variant="outlined" color="error">Supprimer le compte</Button>
              </Grid>
          </Grid> 
      </form>
      : <Typography variant="h6">Aucune valeur</Typography>}
      
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
              <Button variant="contained" color="error" onClick={() => deleteAccount()} autoFocus>
                  Supprimer
              </Button>
          </DialogActions>
      </Dialog>
    </Box>
  }
  </ThemeProvider>
  )
}
