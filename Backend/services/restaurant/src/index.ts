import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import restaurantRoute from './routes/restaurantRoute';
import initDB from './models/initDB';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Connexion à la base de données MongoDb
mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log('Connexion à la base de données réussie'))
// .then(() => initDB())
.catch((error) => console.error('Erreur lors de la connexion à la base de données:', error));

// Routes for restaurants
app.use('/restaurants', restaurantRoute);

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Restaurant service is running`);
});