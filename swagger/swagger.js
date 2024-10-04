const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo List API',
      version: '1.0.0',
      description: 'API documentation for Todo List application',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpecs = swaggerJsdoc(options);

module.exports = swaggerSpecs;
