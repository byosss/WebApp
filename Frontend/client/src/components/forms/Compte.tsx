import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, Grid, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useUser } from "../../context/UserContext";
import axiosInstance from "../../api/axiosConfig";

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
  
export default function Compte(props: Readonly<CompteProps>) {
    const { open, onClose } = props;
    const [ modifier, setModifier ] = useState(true);
    const [dialDelete, setDialDelete] = useState(false);
    const userId = localStorage.getItem('userId');

    const handleCloseDial = (open: boolean) => () => {
        setDialDelete(open);
      };

    const fetchUser = async () => {
        const {data} = await axiosInstance.get(`/api/users/${userId}`);
        return data;
    }
 
    const { data, refetch } = useQuery('user', fetchUser);

    const modifierLeCompte = () => {
        setModifier(!modifier);
    }
    
    const updateUser = async (userData: { phone: string; address: { street: string; city: string; zip: string }; role: string }) => {
        try {
            const response = await axiosInstance.patch(`/api/users/${userId}`, userData);
            console.log('User updated successfully', response.data);
            modifierLeCompte();
        } catch (error) {
            console.error('User updated failed', error);
        }
    };

    useEffect(() => {
        refetch();
    }, [open]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            phone: formData.get('phone') as string,
            address: {
                street: formData.get('street') as string,
                city: formData.get('city') as string,
                zip: formData.get('zip') as string,
            },
            role: 'client' as string,
        };

        updateUser(userData);
    };

    const deleteAccount = async () => {
        try {
            const response = await axiosInstance.delete(`/api/users/${userId}`);
            console.log('User deleted successfully', response.data);
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            onClose(true);
        } catch (error) {
            console.error('Delete failed', error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Drawer anchor="right" open={open} onClose={onClose}>
            {data !== undefined &&
            <form onSubmit={handleSubmit}>
                <Grid container
                    spacing={2}
                    sx={{
                        width: '25em',
                        padding: 3,
                        justifyContent: 'center',
                        direction: 'column',
                    }}
                >
                    
                    <Grid item xs={12} sx={{ pt: 6, pb:2 }}>
                        <Typography align="center" variant="h4" >Mon Compte</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ py: 3, textAlign: 'center' }}>
                        <Typography align="center" variant="h6">{data.firstName + ' ' + data.lastName}</Typography>
                        {modifier 
                        ? <Button onClick={() => modifierLeCompte()}  size="small" variant="text" color="secondary">Modifier le compte</Button>
                        :<Box>
                        <Button type="submit" size="small" variant="text" color="secondary">Confirmer la modification</Button>
                        <Button onClick={() => {modifierLeCompte(); onClose(false);}}  size="small" variant="text" color="secondary">Annuler les modification</Button></Box>
                        }
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="h6">Numéro de téléphone</Typography>
                        <TextField fullWidth name="phone" variant="standard" disabled={modifier} defaultValue={data.phone}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Adresse mail</Typography>
                        <TextField fullWidth variant="standard" disabled defaultValue={data.email}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Adresse de livraison</Typography>
                        <TextField fullWidth name="street" label="Adresse" variant="standard" disabled={modifier} defaultValue={data.address.street}/>
                        <Box sx={{ display: 'flex', mt:1 }}>
                            <TextField fullWidth name="city" label="Ville" sx={{ mr:1}} variant="standard" disabled={modifier} defaultValue={data.address.city}/>
                            <TextField fullWidth name="zip" label="Code postal" variant="standard" disabled={modifier} defaultValue={data.address.zip}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Code de parainnage</Typography>
                        <TextField fullWidth variant="standard" disabled defaultValue={"HF40CD5"}/>
                    </Grid>
                   
                    <Grid item xs={12} sx={{ mt: 10 }}>
                        <Button sx={{ my: 2}} onClick={() => {localStorage.removeItem('token');localStorage.removeItem('userId'); onClose(true);} } fullWidth variant="contained" color="primary">Déconnexion</Button>
                        <Button fullWidth onClick={handleCloseDial(true)} variant="outlined" color="error">Supprimer le compte</Button>
                    </Grid>
                </Grid> 
            </form>
             }
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
                    <Button variant="contained" color="error" onClick={() => deleteAccount()} autoFocus>
                        Supprimer
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};