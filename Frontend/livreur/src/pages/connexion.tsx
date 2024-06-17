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
            Welcome to Cesi Eat Delivery
          </Typography>
          <form onSubmit={handleLogin}>
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
            <Grid container>
              <Grid item xs />
              <Grid item>
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#007965" }}
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
