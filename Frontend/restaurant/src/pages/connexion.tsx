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

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" sx={{ height: "100%" }}>
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={0} square>
        <Box
          sx={{
            my: 19,
            mx: 19,
          }}
        >
          <Box
            sx={{
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/logoCE100.png" alt="Logo" />
            <Typography component="h1" variant="h5">
              Cesi Eat Restaurant
            </Typography>
          </Box>
          <Typography component="h1" variant="h5">
            Welcome to Cesi Eat Delivery
          </Typography>
          <form onSubmit={handleLogin}>
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

            <Grid item sx={{ position: "absolute", right: 370 }}>
              <Link
                href="#"
                variant="body2"
                style={{
                  color: "#007965",
                  textDecoration: "none",
                }}
              >
                {"Forgot password ?"}
              </Link>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 7, mb: 2 }}
              style={{
                backgroundColor: "#007965",
                width: "450px",
                height: "50px",
              }}
            >
              Connection
            </Button>
            <Link
              component={Button}
              type="button"
              fullWidth
              href="/register"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: "white",
                color: "#007965",
                border: "1px solid #007965",
                textDecoration: "none",
                width: "450px",
                height: "50px",
              }}
            >
              Sign up
            </Link>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
