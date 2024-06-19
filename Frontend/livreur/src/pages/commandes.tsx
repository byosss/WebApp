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

export default function Commandes() {
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
            Orders
          </Typography>
        </Box>
      </Grid>
      <div>
        <SimpleBottomNavigation />
      </div>
    </Grid>
  );
}
