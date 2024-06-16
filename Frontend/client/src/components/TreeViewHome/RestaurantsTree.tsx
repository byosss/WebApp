import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function RestaurantsTree() {
    return (
        <Grid container>
            <Grid item>
                <List>
                    <ListItem>
                        <ListItemText>
                            <Typography>
                                Restaurant 1
                            </Typography>
                        </ListItemText>
                    </ListItem>
                
                </List>
            </Grid>
        </Grid>
    )
}