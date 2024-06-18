import express, {Request, Response} from 'express';
import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());


// Utiliser le proxy pour les requêtes à /api/users
const proxyOptions = {
    target: 'http://user:5000',
    changeOrigin: true,
    timeout: 6000,
    proxyTimeout: 6000,
    onProxyReq: (proxyReq: any, req: Request, res: Response) => {

        console.log(`Yo Proxying ${req.method} request to ${req.url}`);
        
        if (req.body) {
            const bodyData = JSON.stringify(req.body);
            
            proxyReq.setHeader('Content-Type', 'application/json');
            proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));

            proxyReq.write(bodyData);
        }
    }
};

app.use('/api/users', createProxyMiddleware(proxyOptions));



app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = '80';
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
