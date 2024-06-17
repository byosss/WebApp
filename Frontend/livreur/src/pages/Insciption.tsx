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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" sx={{ height: "85%" }}>
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
          <Box sx={{ mb: 1 }}>
            <img src="/logoCE100.png" alt="Logo" />
          </Box>
          <Typography component="h1" variant="h5">
            Create an account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="First name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              name="firstName"
              autoComplete="First name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Last name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              name="lastName"
              autoComplete="Last name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              name="city"
              autoComplete="city"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
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
              fullWidth
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
              fullWidth
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
              sx={{ mt: 3, mb: 2 }}
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
