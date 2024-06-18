import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import usersRoute from './routes/usersRoute';
import initDB from './models/initDB';

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDb
mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log('Connexion à la base de données réussie'))
.then(() => initDB())
.catch((error) => console.error('Erreur lors de la connexion à la base de données:', error));


const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.path}`);
    next();
}

app.get('/test', logMiddleware, (req: Request, res: Response) => {
    res.status(200).json({ msg: 'test' });
});

// Routes pour l'authentification
app.use('/', logMiddleware, usersRoute);



// Démarrer le serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Users service is running`);
});