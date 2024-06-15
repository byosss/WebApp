import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import usersRoute from './routes/usersRoute';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Connexion à la base de données MongoDb
mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log('Connexion à la base de données réussie'))
.catch((error) => console.error('Erreur lors de la connexion à la base de données:', error));


// Routes pour l'authentification
app.use('/users', usersRoute);

// Démarrer le serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Users service is running`);
});