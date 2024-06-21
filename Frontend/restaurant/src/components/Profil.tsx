import { Divider, Grid } from "@mui/material";

export function Profil() {
  return (
    <Grid container>
      <Grid item xs={7}>
        <h1>Profil</h1>
      </Grid>
      <Divider orientation="vertical"/>
      <Grid item xs={4}>
        Autre
      </Grid>
    </Grid>
  )
}
