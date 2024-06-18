import { Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
    return (
        <footer className="footer">
            <Box className="footer__container" sx={{ bgcolor: '#007665', color: 'white', display:'flex', justifyContent: 'space-between', px:5, py:2}}>
                <Box className="footer__content">
                    <h1 className="footer__title">A propos de Cesi Eat</h1>
                    <p className="footer__text">Contacter nous</p>
                    <p className="footer__text">Devenez livreur</p>
                    <p className="footer__text">Ajouter votre restaurant</p>
                </Box>
                <Box className="footer__content">
                    <h1 className="footer__title">Follow us</h1>
                    <InstagramIcon sx={{ fontSize: 40 }} />
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                    <XIcon sx={{ fontSize: 40 }} />
                </Box>
            </Box>
        </footer>
    )
}