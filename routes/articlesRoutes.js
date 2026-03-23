/*const express = require('express')
const router = express.Router()
const controller = require('../controllers/articlesController')
router.post('/articles',controller.create)
router.get('/articles',controller.getAll)
router.get('/articles/search',controller.search)
router.get('/articles/:id',controller.getOne)
router.put('/articles/:id',controller.update)
router.delete('/articles/:id',controller.delete)

module.exports = router*/
// routes/articlesRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/articlesController');

/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Crée un nouvel article
 *     tags:
 *       - Articles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       201:
 *         description: Article créé avec succès
 */
router.post('/articles', controller.create);

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Récupère tous les articles
 *     tags:
 *       - Articles
 *     responses:
 *       200:
 *         description: Liste de tous les articles
 */
router.get('/articles', controller.getAll);

/**
 * @swagger
 * /api/articles/search:
 *   get:
 *     summary: Recherche des articles par titre ou contenu
 *     tags:
 *       - Articles
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Mot clé pour la recherche
 *     responses:
 *       200:
 *         description: Résultats de la recherche
 */
router.get('/articles/search', controller.search);

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Récupère un article par ID
 *     tags:
 *       - Articles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'article
 *     responses:
 *       200:
 *         description: Article trouvé
 *       404:
 *         description: Article non trouvé
 */
router.get('/articles/:id', controller.getOne);

/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Met à jour un article par ID
 *     tags:
 *       - Articles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'article à modifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Article mis à jour
 *       404:
 *         description: Article non trouvé
 */
router.put('/articles/:id', controller.update);

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Supprime un article par ID
 *     tags:
 *       - Articles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'article à supprimer
 *     responses:
 *       200:
 *         description: Article supprimé
 *       404:
 *         description: Article non trouvé
 */
router.delete('/articles/:id', controller.delete);

module.exports = router;