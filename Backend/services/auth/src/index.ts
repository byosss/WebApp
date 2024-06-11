import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import usersRoute from './routes/usersRoute';

dotenv.config();

const app = express();

app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log('Connexion à la base de données réussie'))
.catch((error) => console.error('Erreur lors de la connexion à la base de données:', error));


// Routes pour l'authentification
app.use('/users', usersRoute);


// Démarrer le serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});