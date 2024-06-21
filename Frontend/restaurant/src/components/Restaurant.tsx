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
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import NewItems from "./forms/newItems";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Tooltip } from "@mui/material";
import axiosInstance from "../api/axiosConfig";
import NewMenu from "./forms/newMenu";

export default function Restaurant() {
    const restaurantId = localStorage.getItem('idResto');
    const [openForm, setOpenForm] = useState(false);
    const [openDialUpdate, setOpenDialUpdate] = useState(false);
    const [openFormMenu, setOpenFormMenu] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [idItem, setIdItem] = useState('');

    const fetchItems = async () => {
        const { data } = await axios.get(`http://localhost/api/restaurants/${restaurantId}/items`);
        console.log(data);
        return data;
    };
  
    const { data, refetch } = useQuery('items', fetchItems);

    const fetchMenus = async () => {
        const { data } = await axios.get(`http://localhost/api/restaurants/${restaurantId}/menus`);
        console.log(data);
        return data;
    };
  
    const dataMenu = useQuery('menus', fetchMenus);

    const handleOpenForm = () => {
        setOpenForm(true);
    }
    const handleCloseForm = () => {
        setOpenForm(false);
    }
    
    const handleOpenFormMenu = () => {
        setOpenFormMenu(true);
    }
    const handleCloseFormMenu = () => {
        setOpenFormMenu(false);
    }
    
    
    useEffect(() => {
        refetch();
    }, [openForm, openDialUpdate]);

    useEffect(() => {
        dataMenu.refetch();
    }, [openFormMenu]);

    const onEdit = (item: any) => {
        setName(item.name);
        setDescription(item.description);
        setType(item.type);
        setPrice(item.price);
        setIdItem(item._id);
        setOpenDialUpdate(true);
    }

    const deleteItem = async (itemId: string) => {
        try {
            const response = await axiosInstance.delete(`/api/restaurants/${restaurantId}/items/${itemId}`);
            console.log('Item deleted successfully', response.data);
            refetch();
        } catch (error) {
            console.error('Item delete failed', error);
        }
    }

    const deleteMenu = async (menuId: string) => {
        try {
            const response = await axiosInstance.delete(`/api/restaurants/${restaurantId}/menus/${menuId}`);
            console.log('Menu deleted successfully', response.data);
            dataMenu.refetch();
        } catch (error) {
            console.error('Menu delete failed', error);
        }
    }

    const dialClose = () => {
        setOpenDialUpdate(false);
    }
    console.log(dataMenu.data);
    const updateItems = async (itemsData: { name: string; description: string; type: string; price: string;}) => {
        try {
            console.log(itemsData);
            const response = await axiosInstance.patch(`/api/restaurants/${restaurantId}/items/${idItem}`, itemsData);
            console.log('Item add successfully', response.data);
            dialClose();

        } catch (error) {
            console.error('Item add failed', error);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
  
        const itemsData = {
          name: formData.get("name") as string,
          description: formData.get("description") as string,
          type: formData.get("type") as string,
          price: formData.get("price") as string,
        };
        updateItems(itemsData);
      };
      

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb:3}}>
                <img src={'/logoCE100.png'} alt="Logo" height={"100px"} width={"100px"} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Cesi Eat Restaurant</Typography>
            </Box>
            <Box sx={{ mb: 3}}>
                <Typography variant="h4">Restaurant</Typography>
            </Box>
            {data && data.length > 0 ?
            <Grid container sx={{ m: 6 }}>
                <Grid item xs={5}>
                    <Grid item>
                        <Typography variant="h6" sx={{ fontWeight: 'bold'}}>Articles</Typography>
                    </Grid>
                    {data.map((item: any) => (
                        <Grid key={item._id} item>
                            <ListItem
                                secondaryAction={
                                    <Box>
                                        <Tooltip title="Modifier" placement="top">
                                            <IconButton onClick={() => {onEdit(item);}} edge="end" aria-label="edit">
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Supprimer" placement="top">
                                            <IconButton onClick={() => deleteItem(item._id)} edge="end" aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                }
                                >
                                <ListItemText primary={item.name} secondary={item.type + ' - ' + item.description + ' - ' + item.price}  />
                            </ListItem>
                            <Divider />
                        </Grid>
                    ))}
                    <Grid item sx={{ ml: 1, my: 5, display: 'flex', justifyContent: 'center'}}>
                        <Button onClick={() => handleOpenForm()} variant="contained" style={{backgroundColor: "#007965"}}>
                            Ajouter un Article
                        </Button>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ mx: 5}} />
                <Grid item xs={5}>
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold'}}>Menu</Typography>
                    </Grid>
                    {dataMenu.data.map((menu: any) => (
                        <Grid key={menu._id} item>
                            <ListItem
                                secondaryAction={
                                    <Box>
                                        <Tooltip title="Modifier" placement="top">
                                            <IconButton edge="end" aria-label="edit">
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Supprimer" placement="top">
                                            <IconButton onClick={() => deleteMenu(menu._id)} edge="end" aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                }
                                >
                                <ListItemText primary={menu.name} secondary={menu.description}  />
                            </ListItem>
                            <Divider />
                        </Grid>
                    ))}
                    <Grid item sx={{ ml: 1, my: 5, display: 'flex', justifyContent: 'center'}}>
                        <Button onClick={() => handleOpenFormMenu()} variant="contained" style={{backgroundColor: "#007965"}}>
                            Ajouter un Menu
                        </Button>
                    </Grid>
                </Grid>

                <NewMenu open={openFormMenu} setOpen={handleCloseFormMenu} />
                <NewItems open={openForm} setOpen={handleCloseForm} />
            </Grid>
            : <Typography variant="h6">Aucun article</Typography>}

            <Dialog open={openDialUpdate} onClose={dialClose} sx={{ m : 5}}>
                <form onSubmit={handleSubmit}>
                <DialogTitle>Modifier l'article</DialogTitle>
                <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            name="name"
                            label="Nom"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setName(e.target.value)}
                            defaultValue={name}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            name="description"
                            label="Description"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setDescription(e.target.value)}
                            defaultValue={description}
                        />
                        <TextField
                            required
                            margin="dense"
                            name="type"
                            label="Type d'article"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setType(e.target.value)}
                            defaultValue={type}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            name="price"
                            label="Prix"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setPrice(e.target.value)}
                            defaultValue={price}
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => dialClose()} style={{ color: "#007965"}}>Annuler</Button>
                    <Button type="submit" style={{ color: "#007965"}}>Mettre à jour</Button>
                </DialogActions>
                </form>
            </Dialog>
        </Box>
    );
}