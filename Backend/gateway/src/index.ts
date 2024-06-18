import express, {Request, Response} from 'express';
import httpProxy from 'http-proxy';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const apiProxy = httpProxy.createProxyServer();

// Utiliser le proxy pour les requêtes à /api/users
app.use('/api/users', (req, res) => {
    console.log('Redirecting to users service');
    console.log(req.method, req.url);

    apiProxy.web(req, res, {
        target: 'http://user:5000',
        changeOrigin: true,
        timeout: 6000,
        proxyTimeout: 60000
    }, (err) => {
        if (err) {
            res.status(500).json({ error: 'Proxy error', details: err.message });
        }
    });
});



app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = '80';
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
