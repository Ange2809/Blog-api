const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
      description: "API backend pour gerer les articles"
    }
  },
  apis: ["./routes/*.js"]  // mes fichiers de routes avec annotations Swagger
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;