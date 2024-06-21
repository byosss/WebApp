import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SignUp from "../components/forms/SignUp";

export default function Register() {

  return (
    <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", mt: 10}}>
      <Box sx={{ display: "flex", alignItems: 'center' }}>
        <img src="/logoCE100.png" alt="Logo" />
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold'}}>
          Cesi Eat Restaurant
        </Typography>
      </Box>
      <SignUp />
  </Box>
  );
}
