import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  Container,
  Divider,
  formGroupClasses,
} from "@mui/material";
import SimpleBottomNavigation from "../components/Menu";

function ProfilePage() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
            <img src="/logoCE100.png" alt="Logo" />
            <h2 style={{ marginLeft: "10px" }}>Cesi Eat Delivery</h2>
          </Box>

          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            My account
          </Typography>

          {/* Section des informations de l'utilisateur */}
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }} style={{ textAlign: "center" }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Prénom et Nom
              </Typography>
              <Button variant="outlined" fullWidth sx={{ mb: 3 }}>
                Modifier le compte
              </Button>

              <Typography variant="subtitle1" style={{ textAlign: "left" }}>
                Numéro de téléphone
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ mb: 2 }}
                style={{ textAlign: "left" }}
              >
                +33 6 00 00 00 00
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Typography variant="subtitle1" style={{ textAlign: "left" }}>
                Adresse mail
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ mb: 2 }}
                style={{ textAlign: "left" }}
              >
                prenom.nom@viacesi.fr
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Typography variant="subtitle1" style={{ textAlign: "left" }}>
                Ville
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ mb: 2 }}
                style={{ textAlign: "left" }}
              >
                48 Rue du jardin, 67000 Strasbourg, France
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Typography variant="subtitle1" style={{ textAlign: "left" }}>
                Code de parrainage
              </Typography>
              <Typography variant="subtitle2" style={{ textAlign: "left" }}>
                HF40PFD
              </Typography>
            </Box>
          </Grid>

          {/* Section des boutons */}
          <Grid item xs={12}>
            {/* <Link
              component={Button}
              type="button"
              fullWidth
              href="/"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: "#007965",
                color: "white",
                textDecoration: "none",
                padding: "6px 110px",
              }}
            >
              Sign up
            </Link> */}
            <Link
              component={Button}
              type="button"
              fullWidth
              href="/"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: "#007965",
                color: "white",
                textDecoration: "none",
              }}
            >
              Disconnection
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="error" fullWidth>
              Delete account
            </Button>
          </Grid>
        </Box>
        <div>
          <SimpleBottomNavigation />
        </div>
      </Grid>
    </Grid>
  );
}

export default ProfilePage;
