import express, {Request, Response} from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig';

import authHandler from './middlewares/authHandler';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req: Request, res: Response) => {
    res.send('Gateway server is up.');
});


app.use('/api', authHandler, (req: Request, res: Response) => {
    // Redirect the request to the appropriate service
    console.log('Redirecting to http://localhost:8080/api' + req.url);
    res.redirect(307, 'http://localhost:8080/api' + req.url);
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
