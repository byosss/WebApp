import { Button } from "@mui/material";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const loginRestorer = async (restorerData: { email: string; password: string }) => {
        try {
            const response = await axios.post("http://localhost/api/users/login", restorerData);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("idResto", response.data.restaurantId);
            console.log('User logged in successfully', response.data);
            navigate("/Home");

        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const restorerData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      loginRestorer(restorerData);
    };

    return (
        <Grid container component="main" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', mt : 5 }}>
            <Grid item xs={12}>
                <Typography component="h1" variant="h4" sx={{ mb:1 }}>
                    Bienvenue chez Cesi Eat Restaurant
                </Typography>
            </Grid>
            <form onSubmit={handleLogin}>
                <Grid item xs={12}>
                    <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
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
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 7, mb: 2 }}
                    style={{backgroundColor: "#007965"}}
                    >
                    Connection
                    </Button>
                    <Button
                    onClick={() => navigate("/Register")}
                    fullWidth
                    variant="outlined"
                    style={{borderColor: "#007965", color: "#007965"}}
                    >
                    Inscription
                    </Button>
                </Grid>
            </form>
      </Grid>
    )
}