import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import axiosInstance from "../../api/axiosConfig";

interface NewItemsProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function NewItems(props: Readonly<NewItemsProps>) {
    const { open, setOpen } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const idResto = localStorage.getItem('idResto');

    const addItems = async (itemsData: { name: string; description: string; type: string; price: string;}) => {
        try {
            const response = await axiosInstance.post(`/api/restaurants/${idResto}/items`, itemsData);
            console.log('Item add successfully', response.data);
            setOpen(false);

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
        addItems(itemsData);
      };
        
      const handleClose = () => {
        setOpen(false);
        setName('');
        setDescription('');
        setType('');
        setPrice('');
        setOpen(false);
      };

    return (
        <Dialog open={open} onClose={setOpen} sx={{ m : 5}}>
            <form onSubmit={handleSubmit}>
            <DialogTitle>Ajouter un article</DialogTitle>
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
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        name="type"
                        label="Type d'article"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setType(e.target.value)}
                        value={type}
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
                        value={price}
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()} style={{ color: "#007965"}}>Annuler</Button>
                <Button type="submit" style={{ color: "#007965"}}>Ajouter</Button>
            </DialogActions>
            </form>
        </Dialog>
    )
}