import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface CompteProps {    
    open: boolean;
    onClose: (open: boolean) => void;
}

export default function Compte(props: CompteProps) {
    const { open, onClose } = props;
    const [dialDelete, setDialDelete] = useState(false);

    const handleCloseDial = (open: boolean) => () => {
        setDialDelete(open);
      };

    return (
        <React.Fragment>
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
    </React.Fragment>
    );
};