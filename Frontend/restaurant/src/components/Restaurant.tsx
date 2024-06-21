import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

const articles = [
    { id: 1, title: 'Nom article', description: 'Description' },
    { id: 2, title: 'Nom article', description: 'Description' },
    { id: 3, title: 'Nom article', description: 'Description' },
    { id: 4, title: 'Nom article', description: 'Description' },
  ];

export default function Restaurant() {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb:3}}>
                <img src={'/logoCE100.png'} alt="Logo" height={"100px"} width={"100px"} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Cesi Eat Restaurant</Typography>
            </Box>
            <Box sx={{ mb: 3}}>
                <Typography variant="h4">Restaurant</Typography>
            </Box>
            <Grid container sx={{ m: 6 }}>
                <Grid item xs={5}>
                    <Grid item>
                        <Typography variant="h6" sx={{ fontWeight: 'bold'}}>Articles</Typography>
                    </Grid>
                    {articles.map((item) => (
                        <Grid key={item.id} item>
                            <ListItem
                                secondaryAction={
                                    <Box>
                                        <IconButton edge="end" aria-label="edit">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                }
                                >
                                <ListItemText primary={item.title} secondary={item.description}  />
                                </ListItem>
                            <Divider />
                        </Grid>
                    ))}
                    <Grid item sx={{ ml: 1, my: 5, display: 'flex', justifyContent: 'center'}}>
                        <Button variant="contained" style={{backgroundColor: "#007965"}}>
                            Ajouter un Article
                        </Button>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ mx: 5}} />
                <Grid item xs={5}>
                    <Grid item>
                        <Typography variant="h6" sx={{ fontWeight: 'bold'}}>Menu</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}