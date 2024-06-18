import { Box, List, ListItem, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
    return (
        <footer className="footer">
            <Box className="footer__container" sx={{ bgcolor: '#007665', color: 'white', display:'flex', justifyContent: 'space-between', px:5, py:2 }}>
                <Box className="footer__content">
                    <h1>A propos de Cesi Eat</h1>
                    <List dense={true}>
                        <ListItem>Contacter nous</ListItem>
                        <ListItem>Devenez livreur</ListItem>
                        <ListItem>Ajouter votre restaurant</ListItem>
                    </List>
                </Box>
                <Box className="footer__content">
                    <Box sx={{ direction: 'rtl'}}>
                        <h1 className="footer__title">Follow us</h1>
                        <InstagramIcon sx={{ fontSize: 40 }} />
                        <LinkedInIcon sx={{ fontSize: 40 }} />
                        <XIcon sx={{ fontSize: 40 }} />
                    </Box>
                    <Box sx={{ display: 'flex', pt:2}}>
                        <Typography sx={{ px: 3 }}>Mentions légales</Typography>
                        <Typography sx={{ px: 3 }}>Politique de confidentialité</Typography>
                        <Typography sx={{ pl: 3}}>Conditions d'utilisation</Typography>
                    </Box>
                </Box>
            </Box>
        </footer>
    )
}