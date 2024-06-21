import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import axiosInstance from "../../api/axiosConfig";
import { useQuery } from "react-query";
import axios from "axios";

interface NewItemsProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function NewMenu(props: Readonly<NewItemsProps>) {
    const { open, setOpen } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [articleId, setArticleId] = useState('');
    const restaurantId = localStorage.getItem('idResto');

    const addMenu = async (itemsData: { name: string; description: string; items: string;}) => {
        try {
            const response = await axiosInstance.post(`/api/restaurants/${restaurantId}/menus`, itemsData);
            console.log('Menu add successfully', response.data);
            setOpen(false);

        } catch (error) {
            console.error('MEnu add failed', error);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
  
        const itemsData = {
          name: formData.get("name") as string,
          description: formData.get("description") as string,
          items: formData.get("type") as string,
        };
        addMenu(itemsData);
      };

      const fetchItems = async () => {
        const { data } = await axios.get(`http://localhost/api/restaurants/${restaurantId}/items`);
        console.log('items', data);
        return data;
    };

    const { data, refetch, isLoading, error } = useQuery('itemMenu', fetchItems);
        
      const handleClose = () => {
        setName('');
        setDescription('');
        setOpen(false);
      };

    return (
        <Dialog open={open} onClose={setOpen} sx={{ m : 5}}>
            <form onSubmit={handleSubmit}>
            <DialogTitle>Ajouter un menu</DialogTitle>
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
                        value={name}
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
                        value={description}
                    />
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error loading articles</p>
                    ) : (
                        <Select
                            value={articleId}
                            label="Article"
                            onChange={(e) => setArticleId(e.target.value)}
                            fullWidth
                            variant="standard"
                        >
                            {data.map((article: any) => (
                                <MenuItem key={article._id} value={article._id}>
                                    {article.name}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()} style={{ color: "#007965"}}>Annuler</Button>
                <Button type="submit" style={{ color: "#007965"}}>Ajouter</Button>
            </DialogActions>
            </form>
        </Dialog>
    )
}