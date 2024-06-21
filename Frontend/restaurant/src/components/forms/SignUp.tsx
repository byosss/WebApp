import { Button, Link } from "@mui/material";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosConfig";


export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [street, setAdresse] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const registerRestorer = async (restorerData: { email: string; password: string; role: string; restaurantName: string; restaurantAddress: { street: string, city: string, zip: string }; restaurantDescription: string; }) => {
        
        try {
            const response = await axios.post("http://localhost/api/users/Register", restorerData);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("idResto", response.data.id);
            navigate('/Restaurant');

        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const restorerData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        role: 'restorer',
        restaurantName: formData.get("name") as string,
        restaurantAddress : {
            street: formData.get("street") as string,
            city: formData.get("city") as string,
            zip: formData.get("zip") as string,
        },
        restaurantDescription: formData.get("description") as string,
      };

      registerRestorer(restorerData);
    };

    return (
        <Grid container component="main" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', mt : 5 }}>
        <Grid item xs={12}>
            <Typography component="h1" variant="h4" sx={{ mb:1 }}>
                Inscription
            </Typography>
        </Grid>
        <form onSubmit={handleRegister}>
            <Grid item xs={12}>
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                    <TextField
                    margin="normal"
                    required
                    sx={{ width: "450px", height: "50px" }}
                    label="Nom du restaurant"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name="name"
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    sx={{ width: "450px", height: "50px" }}
                    label="Description du restaurant"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name="description"
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    sx={{ width: "450px", height: "50px" }}
                    label="Adresse"
                    onChange={(e) => setAdresse(e.target.value)}
                    value={street}
                    name="street"
                    autoComplete="street"
                    autoFocus
                    />
                    <Box sx={{ display: "flex" }}>
                        <TextField
                        margin="normal"
                        required
                        sx={{ mr:1 }}
                        label="Ville"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        name="city"
                        autoComplete="city"
                        autoFocus
                        />
                        <TextField
                        margin="normal"
                        required
                        label="Code postal"
                        onChange={(e) => setZip(e.target.value)}
                        value={zip}
                        name="zip"
                        autoComplete="zip"
                        autoFocus
                        />
                    </Box>
                    <TextField
                    margin="normal"
                    required
                    sx={{ width: "450px", height: "50px" }}
                    label="Email"
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
            <Grid item xs={12} sx={{ mt : 4}}>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ py : 1}}
                style={{backgroundColor: "#007965"}}
                >
                Creer un compte
                </Button>
            </Grid>
            <Grid container sx={{ mt:1 }}>
                <Grid item xs />
                <Grid item>
                    <Link href="/" variant="body2" color={'#007965'}>
                        {"Vous avez déjà un compte? Connectez-vous"}
                    </Link>
                </Grid>
            </Grid>
        </form>
  </Grid>
    );
}