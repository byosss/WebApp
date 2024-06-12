import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';


export default function Register() {
    const queryClient = useQueryClient()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async (userData: { firstName: string; lastName: string; email: string; password: string }) => {
        const response = await axios.post('http://localhost/users/register', userData);
        console.log(response.data);
        return response.data;
    };

    const mutation = useMutation(registerUser, {
        onSuccess: () => { queryClient.invalidateQueries('register'); },
        onError: (error) => { console.error('Registration failed', error); },
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };

        mutation.mutate(userData);
    };

  return (

      <Grid container component="main" sx={{ height: '85%' }}>
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
                <Box sx={{ mb: 1 }}>
                    <img src='/logoCE100.png' alt='Logo'/>
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
                            onChange={e => setFirstName(e.target.value)}
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
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                            name="lastName"
                            autoComplete="Last name"
                            autoFocus
                        />
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
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>

                    <Grid container>
                        <Grid item xs />
                        <Grid item>
                        <Link href="#" variant="body2">
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