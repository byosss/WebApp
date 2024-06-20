import {
  Box,
  Typography,
} from "@mui/material";
import SignIn from "../components/forms/SignIn";

export function Login() {
  return (
    <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", mt: 10}}>
      <Box sx={{ display: "flex", alignItems: 'center' }}>
        <img src="/logoCE100.png" alt="Logo" />
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold'}}>
          Cesi Eat Restaurant
        </Typography>
      </Box>
      <SignIn />
    </Box>
  );
}
