import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import registerController from './controllers/registerController';
import loginController from './controllers/loginController';
import statsController from './controllers/statsController';

dotenv.config();

const app = express();

app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log('Connexion à la base de données réussie'))
    .catch((error) => console.error('Erreur lors de la connexion à la base de données:', error));

// Routes pour l'inscription et la connexion
app.post('/register', registerController);
app.post('/login', loginController);
app.get('/stats', statsController);

// Démarrer le serveur sur le port 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
