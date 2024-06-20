import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(express.json());

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API CesiEat',
            version: '1.0.0',
            description: 'Documentation for the CesiEat API'
        }
    },
    apis: ['./src/doc/userDoc.yml', './src/doc/restaurantDoc.yml', './src/doc/orderDoc.yml']
};

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerOptions)));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Doc service is running`);
});