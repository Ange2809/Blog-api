const Article = require('../models/articlesModel');

exports.create = (req, res) => {
    const { titre, contenu, auteur } = req.body;
    if (!titre || !contenu || !auteur) {
        return res.status(400).json({ message: "Champs obligatoire" });
    }
    const article = Article.createArticle(req.body);
    res.status(201).json(article);
};


const Article = require('../models/articlesModel');

exports.getAll = (req, res) => {
    const articles = Article.getAllArticles(); // ← récupère tous les articles
    res.json(articles); // ← retourne la variable correctement définie
};

exports.getOne = (req, res) => {
    const article = Article.getArticleById(req.params.id);
    if (!article) {
        return res.status(404).json({ message: "Article non trouvé" });
    }
    res.json(article);
};

exports.update = (req, res) => {
    const article = Article.updateArticle(req.params.id, req.body);
    if (!article) {
        return res.status(404).json({ message: "Article non trouvé" });
    }
    res.json(article);
};

exports.delete = (req, res) => {
    const article = Article.deleteArticle(req.params.id);
    if (!article) {
        return res.status(404).json({ message: "Article non trouvé" });
    }
    res.json({ message: "Article supprimé" });
};

exports.search = (req, res) => {
    const query = req.query.query || "";
    const result = Article.searchArticles(query);
    res.json(result);
};