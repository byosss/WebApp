import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Connection() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const registerUser = async (userData: { email: string; password: string }) => {
        try {
            const response = await axios.post('http://localhost/api/users/login', userData);
            console.log('reponse log:', response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.id);
            setIsError(false); // Réinitialiser l'état de l'erreur en cas de succès
            navigate('/')
            
        } catch (error) {
            console.error('Login failed', error);
            setIsError(true); // Définir l'état de l'erreur à vrai en cas d'échec
        }
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };

        registerUser(userData);
    };

  return (
    <Box sx={{ m : 5 }}>
      <Grid container component="main">
        <Grid
          item
          component={Paper} elevation={6}
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/0f63/8ca3/9b07c8d605057a14fb253772264a41df?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hi-66P3AVBDLcNosALfm4WRiFGXooLSfjsIjUqcT74bfh2QCxNPFu9Zo9RcfFeTmiDfddAOmPoHo1wfL0dUaaih4YEfrGcu~082p-n8xHp1Cz9A8JM4SAUO5S8MAALVx3oGT~Q96eINMD2~QxHUWj~fnRq1QFc3s7WQcuCa8hofoDFFWFZo2z-dM5TfLpwZUMXnnsinN3Pez3nlQ3K85yQ5ysZ9LU-HHmRkf~RYTwcAVWTj-wUYSt~D9F2JSDF3-PEqPJNCfrWlQReGPh0xoOB08UNmQzuIv1V9KAz2hOPprKtr5n9PFDfcyy8P4oIo3k2Rs2czou40efyo~~1~S7Q__)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Box sx={{ mb: 1, display: 'flex' }}>
                    <img src='/logoCE100.png' alt='Logo'/>
                    <Typography component="h1" variant="h4" sx={{ alignContent: 'center', fontWeight: 'bold' }}>Cesi Eat</Typography>
                </Box>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        onChange={e => setEmail(e.target.value)}
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
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        label="Password"
                        type="password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color='primary'
                        sx={{ mt: 3, mb: 2, p:2}}
                    >
                        Sign In
                    </Button>

                    <Grid container>
                        <Grid item xs />
                        <Grid item>
                        <Link href="./Register" variant="body2">
                            {"Doesnt have an account yet? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>

                    {isError && 
                        <Alert
                            severity="error"
                            variant="filled"
                            sx={{ width: '100%' }}
                        >
                            Connection failed!
                        </Alert>}

                </form>
            </Box>
        </Grid>
    </Grid>
    </Box>
  );
}