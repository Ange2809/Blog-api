let articles = []; // le tableau correct
let id = 1;

function createArticle(data) {
    const article = {
        id: id++,
        titre: data.titre,
        contenu: data.contenu,
        auteur: data.auteur,
        categorie: data.categorie,
        tags: data.tags,
        date: new Date()
    };
    articles.push(article);
    return article;
}

function getAllArticles() {
    return articles;
}

function getArticleById(articleId) {
    return articles.find(a => a.id == articleId);
}

function deleteArticle(articleId) {
    const index = articles.findIndex(a => a.id == articleId);
    if (index === -1) return null;
    return articles.splice(index, 1)[0];
}

function updateArticle(articleId, data) {
    const article = articles.find(a => a.id == articleId);
    if (!article) return null;

    if (data.titre) article.titre = data.titre;
    if (data.contenu) article.contenu = data.contenu;
    if (data.categorie) article.categorie = data.categorie;
    if (data.tags) article.tags = data.tags;

    return article;
}

function searchArticles(query) {
    return articles.filter(a =>
        a.titre.includes(query) || a.contenu.includes(query)
    );
}

module.exports = {
    createArticle,
    getAllArticles,
    getArticleById,
    deleteArticle,
    updateArticle,
    searchArticles
};