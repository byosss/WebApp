import { Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";

export default function Payment() {
    return(
        <Dialog open={true} aria-labelledby="form-dialog-title">
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h6">Details de livraison</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6">Payment</Typography>
                    </Grid>
                </Grid>
            </form>
        </Dialog>
    )
}