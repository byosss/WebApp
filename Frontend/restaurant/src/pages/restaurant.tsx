import {
  Grid,
  Paper,
} from "@mui/material";
import SimpleBottomNavigation from "../components/Menu";

export default function Restaurant() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        component={Paper}
        elevation={0}
        square
      ></Grid>
      <div>
        <SimpleBottomNavigation />
      </div>
    </Grid>
  );
}
