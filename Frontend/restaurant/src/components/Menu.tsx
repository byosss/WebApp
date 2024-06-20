// Importation des bibliothèques React et Material-UI nécessaires.
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { ContentPaste } from "@mui/icons-material";
import { Person } from "@mui/icons-material";

// Définition et exportation du composant fonctionnel SimpleBottomNavigation.
export default function SimpleBottomNavigation() {
  // Définition d'un état local `value` pour suivre l'onglet sélectionné.
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  // Fonction pour obtenir le style de chaque action de navigation en bas,
  // couleur et soulignant l'élément actuellement sélectionné.
  const getStyle = (index: number) => ({
    color: "#00AF91", // couleur par défaut pour tous les éléments
    borderBottom: value === index ? "3px solid #00AF91" : "none", // ajoute une bordure seulement sur l'élément actif
  });

  // Structure du rendu du composant.
  return (
    // Container principal utilisant le système de grille de Material-UI pour une mise en page adaptative.
    <Grid container component="main" sx={{ height: "100%" }}>
      {/* Définition d'une grille pour un élément Paper fixé au bas de l'écran. */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        component={Paper}
        elevation={0}
        square
        sx={{ position: "fixed", bottom: 0 }}
      >
        {/* Box pour aligner les éléments à l'intérieur du Paper. */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Paper additionnel utilisé pour la navigation en bas de la page. */}
          <Paper
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            {/* BottomNavigation contrôle les onglets affichés. */}
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue); // Mise à jour de l'état lorsqu'un nouvel onglet est sélectionné.
              }}
            >
              {/* Actions de navigation avec étiquettes et styles conditionnels. */}
              <BottomNavigationAction
                // onClick={() => navigate("/restaurant")}
                icon={<Home />}
                style={getStyle(0)}
              />
              <BottomNavigationAction
                // onClick={() => navigate("/commandes")}
                icon={<ContentPaste />}
                style={getStyle(1)}
              />
              <BottomNavigationAction
                // onClick={() => navigate("/profil")}
                icon={<Person />}
                style={getStyle(2)}
              />
            </BottomNavigation>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
