import express from 'express';

const app = express();

app.use(express.json());

// Routes pour l'authentification
app.get('/orders', (req, res) => {

    res.status(200).json({ msg: 'Order service is running'});

});


// Démarrer le serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});