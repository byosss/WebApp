import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";

const steps = [
    'Commande acceptée',
    'Préparation en cours',
    'En cours de livraison',
    'Commande livrée'
  ];

export default function OrderEnCours() {
    return (
        <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', mx: 10}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mx:2, mt:2}}>
               <Typography variant="h6" sx={{ alignSelf: 'flex-start'}}>Numéro de commande : H564A </Typography> 
               <Typography variant="h6" sx={{ alignSelf: 'flex-end'}}>Burger King </Typography>
            </Box>
            
            <Box sx={{ width: '70%', p:5, alignSelf: 'center' }}>
                <Stepper activeStep={1} >
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>
        </Paper>
    )
}