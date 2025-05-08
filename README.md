RailPlanner
Application web permettant la gestion d'une liste de trains, avec formulaire d'ajout et affichage dynamique.

# Sommaire
✨ Aperçu du projet
⚖️ Stack technique
📊 Fonctionnalités principales
⚙️ Installation et lancement
📁 Structure des dossiers
💡 Améliorations possibles
🔗 Liens utiles (GitHub, Vercel)

1. ✨ Aperçu du projet

RailPlanner est une application full-stack Angular + Node.js + MongoDB permettant :

D'ajouter un train via un formulaire

De consulter dynamiquement la liste des trains existants

D'avoir une mise à jour automatique de la liste

De démarrer rapidement avec des données de démonstration (via seed.js)

2. ⚖️ Stack technique

Frontend : Angular 17 standalone (SCSS + Formulaires Template-driven)

Backend : Node.js + Express

Base de données : MongoDB Atlas

Déploiement prévu : Vercel (frontend) + Railway / Render / Atlas (backend)

3. 📊 Fonctionnalités principales

✍️ Formulaire d'ajout de train (n°, destination, heure, statut, wagons)

📅 Auto-rechargement de la liste lors d'un ajout

✔️ Validation des champs

🌎 Affichage responsive (mobile/tablette/desktop)

🎨 Intégration d'images locales depuis /src/assets

📊 Seed automatique de trains prédéfinis avec seed.js

4. ⚙️ Installation et lancement

Prérequis

Node.js v18+

Angular CLI 17+

Compte MongoDB Atlas (ou local Mongo)

🔄 Clone et configuration

npm install # backend
cd backend && cp .env.example .env # ajouter votre URI Mongo
npm run dev

cd frontend
npm install
ng serve

5. 📁 Structure des dossiers

rail-planner/
├── backend/
│   ├── index.js
│   ├── models/Train.js
│   ├── routes/Train.js
│   └── seed.js
├── frontend/
│   └── src/
│       ├── app/
│       │   ├── components/
│       │   │   ├── train-form/
│       │   │   └── train-list/
│       │   ├── services/
│       │   ├── app.component.ts/html
│       │   └── assets/ [images locales]

6. 💡 Améliorations possibles

✅ Suppression / édition d'un train

🌐 Traduction i18n (FR/EN)

🤖 Authentification / rôles admin

🌿 Tri et filtre sur la liste

7. 🔗 Liens utiles

📚 MongoDB : https://www.mongodb.com/docs/ & https://cloud.mongodb.com/v2/681cbd7a896a4f56714dc06b#/security/database
🎨 Site Angular : https://angular.dev

👁️ GitHub : https://github.com/Louis75011/rail-planner
🚀 Démo Vercel : (ajouter votre lien)