import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Register() {
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" sx={{ height: "100%" }}>
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={0} square>
        <Box
          sx={{
            my: 5,
            mx: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
            <img src="/logoCE100.png" alt="Logo" />
            <Typography component="h1" variant="h5">
              Cesi Eat Restaurant
            </Typography>
          </Box>
          <Typography component="h1" variant="h5">
            Create an account
          </Typography>
          <form onSubmit={handleSubmit} style={{ display: "grid" }}>
            <TextField
              margin="normal"
              required
              sx={{ width: "450px", height: "50px" }}
              label="Restaurant name"
              onChange={(e) => setRestaurantName(e.target.value)}
              value={restaurantName}
              name="restaurantName"
              autoComplete="Restaurant name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              sx={{ width: "450px", height: "50px" }}
              label="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              name="address"
              autoComplete="address"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              sx={{ width: "450px", height: "50px" }}
              label="Phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              name="phoneNumber"
              autoComplete="Phone number"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              sx={{ width: "450px", height: "50px" }}
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              sx={{ width: "450px", height: "50px" }}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label="Password"
              type="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 7, mb: 2, width: "450px", height: "50px" }}
              style={{ backgroundColor: "#007965" }}
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item xs />
              <Grid item>
                <Link
                  href="/"
                  variant="body2"
                  style={{
                    color: "#007965",
                    textDecoration: "none",
                  }}
                >
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
