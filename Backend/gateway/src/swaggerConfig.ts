import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: 'API CesiEat',
      description: 'Documentation for the CesiEat API',
      version: '1.0.0',
    }
  },
  apis: ['./src/doc/*.yml'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);


export default swaggerSpec;
