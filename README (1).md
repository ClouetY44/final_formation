# PROJET DE FIN DE FORMATION

On va adapter notre app fil rouge wiki-character en application complète !
- La base de donnée SQL
- Le serveur Node API
- La vue React, avec ViteJS

Travail en local
Repository, commit régulier
Déployer sur l'IDE 3WA quand le projet est terminé

## Modules

### Le back
Les modules requis :
- nodemon
- dotenv
- express
- mysql2
- bcrypt
- cors 
- jsonwebtoken - `nouveau !` couche de sécurité qui remplace express-session, mise en place à la fin

### Le front 

Les modules requis :
- react-router-dom
- react-redux 
- @reduxjs/toolkit
- sass

### Fonctionnalités

#### L'application utilisateur

- Sécurisé les routes utilisateurs
- Affichages d'articles/personnages, présentation brève et image
- Lien vers la description complète de l'article/personnage
- Peut se connecter à son espace, lui permettant d'accéder a des statistiques, et modification de son profil
- **BONUS** Commentaires sur un article/personnage (compte obligatoire)
- **BONUS** Un utilisateur pourra créer un article, sa validation/rejet sera faite par l'administrateur

##### Pages
- Accueil
    - présentation
    - affichages des derniers articles/personnage créés
    - **BONUS** affichages des derniers commentaires créés
- Articles/Liste des personnage
    - Affichages de tous les articles/personnages
    - recherche
    - **BONUS** pagination
- Detail de l'article/d'un personnage
    - affichage complet (titre, contenu, date de publication, auteur, tags/catégories, ...)
    - **BONUS** affichage des commentaires
    - **BONUS** formulaire d'ajout d'un commentaire
- Connexion
    - formulaire
    - navigation vers le formulaire d'inscription
- Inscription
    - formulaire
- Profil (gestion de compte utilisateur)
    - modification des informations
    - Statistiques (nombre d'article/personnage ajoutés, nombre de commentaire, ...)


#### BACK-OFFICE

- Son accès doit être sécurisé
- L'administrateur sera l'auteur principal des articles
- Affichera des statistiques( nombre d'utilisateurs, de commentaires d'articles, personnages,...).
- **BONUS** Validation des demandes de publication d'articles, et de création de personnages

Le back-office implémente les opérations CRUD (Create, Read, Update, Delete) :
- **Create** (Création) : Utilise la méthode POST pour créer de nouvelles données.
- **Read** (Lecture) : Utilise la méthode GET pour lire et afficher les données existantes.
- **Update** (Mise à jour) : Utilise les méthodes PUT/PATCH (PATCH est préféré) pour mettre à jour les données existantes.
- **Delete** (Suppression) : Utilise la méthode DELETE pour supprimer les données existantes.

##### Pages
*Au moins un CRUD complet doit être mis en place pour la fin du projet*

- Accueil
- Liste des utilisateurs **RUD**
    - Permet l'affichage, la modification et la suppression des utilisateurs.
- Liste des articles **CRUD**
    - Permet l'affichage, la création, la modification et la suppression des articles.
- Liste des personnages **CRUD**
    - Permet l'affichage, la création, la modification et la suppression des personnages.
- Liste des catégories **CRUD**
    - Permet l'affichage, la création, la modification et la suppression des catégories.
- Liste des roles **CRUD**
    - Permet l'affichage, la création, la modification et la suppression des roles.
- ...
- **BONUS** Liste des commentaires **CRUD**
    - Permet l'affichage, la modification et la suppression des commentaires.

**IL CONVIENT DE PREPARER DES SCHEMAS (mcd-relation/cardinalités, maquette front responsive (low ou high fidelity), un fichier README présentant l'application et comment l'installer ! )**

# PLANIFICATION
- Lundi 15
    - préparation du projet
- Mardi 16 et Mercredi 17
    - Le projet doit être commencé le mardi matin (le back)
- Jeudi 18 et Vendredi 19
    - Le front doit être commencé le jeudi matin
- Lundi 22
    - Présentation du projet