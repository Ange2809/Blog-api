# Blog API – Backend REST

## Description

Ce projet est une **API REST backend** permettant de gérer les articles d’un blog.

L’API permet de :

* créer un article
* afficher les articles
* afficher un article spécifique
* modifier un article
* supprimer un article
* rechercher un article

La documentation de l’API est disponible grâce à **Swagger**.

# Technologies utilisées

Ce projet utilise les technologies suivantes :

* **Node.js** – environnement JavaScript côté serveur
* **Express.js** – framework pour créer l’API
* **Swagger UI** – documentation interactive de l’API
* **JavaScript (ES6)**
* **HTML / Bootstrap** pour l’interface simple

# Installation du projet

## 1. Cloner le projet

```bash
git clone https://github.com/VOTRE_USERNAME/blog-api.git
cd blog-api
```

## 2. Installer les dépendances

```bash
npm install
```

## 3. Lancer le serveur

```bash
node app.js
```

Le serveur démarre sur :

```
http://localhost:3000
```

# Documentation de l’API

La documentation est disponible avec **Swagger** :

```
http://localhost:3000/api-docs
```

Swagger permet de :

* voir toutes les routes
* tester les requêtes
* voir les réponses JSON

---

# Structure du projet

```
blog-api
│
├── app.js
├── swagger.js
├── package.json
│
├── routes
│   └── articles.js
│
├── controllers
│   └── articlesController.js
│
├── models
│   └── articleModel.js
│
├── public
│   └── index.html
│
└── README.md
```

# Structure d’un article

Chaque article contient les informations suivantes :

| Champ     | Description          |
| --------- | -------------------- |
| id        | identifiant unique   |
| titre     | titre de l’article   |
| contenu   | contenu de l’article |
| auteur    | auteur               |
| date      | date de publication  |
| categorie | catégorie            |
| tags      | mots clés            |

Exemple JSON :

```json
{
  "id": 1,
  "titre": "Introduction à Node.js",
  "contenu": "Node.js permet de créer des applications backend...",
  "auteur": "Ange Domguem",
  "date": "2026-03-20",
  "categorie": "Programmation",
  "tags": ["nodejs","backend"]
}
```
# Endpoints de l’API

## Créer un article

```
POST /api/articles

## Afficher tous les articles
```
GET /api/articles
```
## Afficher un article par ID
```
GET /api/articles/:id
```
## Modifier un article
```
PUT /api/articles/:id
```

## Supprimer un article

```
DELETE /api/articles/:id
```
## Rechercher un article

```
GET /api/articles/search?query=texte
```

# Interface Web

Une interface web simple est disponible dans le dossier :

```
public/index.html
```

Elle permet :

* créer un article
* afficher les articles
* modifier un article
* supprimer un article
* rechercher un article

# Bonnes pratiques appliquées

* Validation des données utilisateurs
* Utilisation correcte des codes HTTP :

  * **200** : succès
  * **201** : création réussie
  * **400** : requête invalide
  * **404** : ressource non trouvée
  * **500** : erreur serveur

Projet réalisé dans le cadre d’un travail académique.
