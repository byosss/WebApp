import express from 'express';
import cors from 'cors';

import orderRoute from './routes/ordersRoute';


const app = express();

app.use(express.json());
app.use(cors());


app.use('/users', orderRoute)


// Démarrer le serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Order service is running`);
});