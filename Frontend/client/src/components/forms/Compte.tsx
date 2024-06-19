import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useUser } from "../../context/UserContext";
import axiosInstance from "../../api/axiosConfig";
import axios from "axios";

interface CompteProps {    
    open: boolean;
    onClose: (open: boolean) => void;
}

export default function Compte(props: Readonly<CompteProps>) {
    const { open, onClose } = props;
    const [ modifier, setModifier ] = useState(true);
    const [dialDelete, setDialDelete] = useState(false);
    const { userId } = useUser();

    const handleCloseDial = (open: boolean) => () => {
        setDialDelete(open);
      };

    const fetchUser = async () => {
        const {data} = await axiosInstance.get(`/api/users/${userId}`);
        return data;
    }
 
    const { data } = useQuery('user', fetchUser);

    const modifierLeCompte = () => {
        setModifier(!modifier);
    }

    
    const updateUser = async (userData: { firstName: string; lastName: string; phone: string; deliveryAddress: string; role: string }) => {
        try {
            const response = await axios.patch('http://localhost/api/users/register', userData);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            phone: formData.get('phone') as string,
            deliveryAddress: formData.get('deliveryAddress') as string,
            role: 'client' as string,
        };

        updateUser(userData);
    };


    return (
        <React.Fragment>
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
                        ? <Button onClick={() => modifierLeCompte()}  size="small" variant="text">Modifier le compte</Button>
                        :<Box>
                        <Button onClick={() => modifierLeCompte()} type="submit" size="small" variant="text">Confirmer la modification</Button>
                        <Button onClick={() => {modifierLeCompte(); onClose(false);}}  size="small" variant="text">Annuler les modification</Button></Box>
                        }
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="h6">Numéro de téléphone</Typography>
                        <TextField fullWidth variant="standard" disabled={modifier} defaultValue={data.phone}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Adresse mail</Typography>
                        <TextField fullWidth variant="standard" disabled defaultValue={data.email}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Adresse de livraison</Typography>
                        <TextField fullWidth variant="standard" disabled={modifier} defaultValue={data.deliveryAddress}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Code de parainnage</Typography>
                        <TextField fullWidth variant="standard" disabled defaultValue={"HF40CD5"}/>
                    </Grid>
                   
                    <Grid item xs={12} sx={{ mt: 10 }}>
                        <Button sx={{ my: 2}} onClick={() => {localStorage.removeItem('token'); onClose(true);} } fullWidth variant="contained" color="primary">Déconnexion</Button>
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
                    <Button variant="contained" color="error" onClick={handleCloseDial(false)} autoFocus>
                        Supprimer
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};