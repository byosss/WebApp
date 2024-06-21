import {
  Grid,
  Paper,
} from "@mui/material";
import SimpleBottomNavigation from "../components/Menu";
import { useState } from "react";
import Restaurant from "../components/Restaurant";
import { Profil } from "../components/Profil";
import { Commandes } from "../components/Commandes";

export default function Home() {
  const [value, setValue] = useState(0);

  const renderComponent = () => {
      switch (value) {
          case 0:
              return <Restaurant />;
          case 1:
              return <Commandes />;
          case 2:
              return <Profil />;
          default:
              return <Restaurant />;
      }
  };
  
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
      >
        {renderComponent()}
      </Grid>
      <div>
        <SimpleBottomNavigation value={value} setValue={setValue} />
      </div>
    </Grid>
  );
}
