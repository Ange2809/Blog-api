// app.js
const express = require('express');
const cors = require('cors');
const app = express();

// Routes
const articlesRoutes = require('./routes/articlesRoutes');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

// Middlewares
app.use(cors()); // permet au frontend de communiquer avec le backend
app.use(express.json());

// Servir l'interface HTML (optionnel)
app.use(express.static('public')); // crée un dossier 'public' et mets le HTML dedans

// Routes API
app.use('/api', articlesRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur demarre sur : http://localhost:${PORT}`);
});











