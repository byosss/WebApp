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
import * as React from "react";
import { flattenDiagnosticMessageText } from "typescript";

export default function FormPropsTextFields() {
  // function ProfilePage() {
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

          <Typography
            component="h1"
            variant="h5"
            sx={{ mb: 3, alignSelf: "flex-start" }}
          >
            My account
          </Typography>

          {/* Section des informations de l'utilisateur */}
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }} style={{ textAlign: "center" }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Prénom et Nom
              </Typography>
              {/* <Button variant="outlined" fullWidth sx={{ mb: 3 }}>
                Modifier le compte
              </Button> */}
              {/* <Link href={`/profil`} className="w-full md:w-1/3">
                <FormPropsTextFields
                  variant="outlined"
                  className="w-full rounded-lg text-primary hover:text-secondary border-primary hover:border-secondary "
                >
                  Modify account
                </FormPropsTextFields>
              </Link> */}

              <Link
                href="#"
                variant="body2"
                style={{
                  color: "#007965",
                  textDecoration: "none",
                }}
              >
                {"Modify account"}
              </Link>
            </Box>
          </Grid>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
            style={{ width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <TextField
                id="standard-number"
                label="Phone number"
                disabled
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                style={{}}
              />
              <TextField
                id="standard-disabled"
                label="Email address"
                disabled
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue=""
                variant="standard"
              />
              <TextField
                id="standard-disabled"
                label="City"
                disabled
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue=""
                variant="standard"
              />
              <TextField
                id="standard-disabled"
                label="Sponsor code"
                disabled
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue=""
                variant="standard"
              />
            </div>
          </Box>
        </Box>
      </Grid>
      <div>
        <SimpleBottomNavigation />
      </div>
    </Grid>
  );
}
