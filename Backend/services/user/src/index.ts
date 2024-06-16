import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import usersRoute from './routes/usersRoute';
import initDB from './models/initDB';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Connexion à la base de données MongoDb
mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log('Connexion à la base de données réussie'))
.then(() => initDB())
.catch((error) => console.error('Erreur lors de la connexion à la base de données:', error));


// Routes pour l'authentification
app.use('/users', usersRoute);

// Démarrer le serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Users service is running`);
});