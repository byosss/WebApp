import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useUser } from "../../context/UserContext";
import axiosInstance from "../../api/axiosConfig";

interface CompteProps {    
    open: boolean;
    onClose: (open: boolean) => void;
}

export default function Compte(props: Readonly<CompteProps>) {
    const { open, onClose } = props;
    const [dialDelete, setDialDelete] = useState(false);
    const { userId, setUserId } = useUser();

    const handleCloseDial = (open: boolean) => () => {
        setDialDelete(open);
      };

    const fetchUser = async () => {
        const {data} = await axiosInstance.get(`/api/users/${userId}`);
        return data;
    }
 
    const { data, isLoading } = useQuery('user', fetchUser);

    return (
        <React.Fragment>
            <Drawer anchor="right" open={open} onClose={onClose}>
            {data != undefined &&
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
                        <Typography align="center" variant="h6">{data.firstName + ' ' + data.lastName}</Typography>
                        <Button  size="small" variant="text">Modifier le compte</Button>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="h6">Numéro de téléphone</Typography>
                        <TextField fullWidth variant="standard" disabled defaultValue={data.phone}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Adresse mail</Typography>
                        <TextField fullWidth variant="standard" disabled defaultValue={data.email}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Adresse de livraison</Typography>
                        <TextField fullWidth variant="standard" disabled defaultValue={data.deliveryAddress}/>
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