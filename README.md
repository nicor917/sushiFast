# 🍣 SushiFast

> Application web moderne de présentation de menus sushi — TP React

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat-square&logo=bootstrap)

---

## 📋 Description

**SushiFast** est une application React permettant de consulter et filtrer des menus de sushi. Ce projet a été réalisé dans le cadre d'un TP React et met en œuvre les concepts fondamentaux de React avec un design moderne et des animations fluides.

---

## ✨ Fonctionnalités

- 🏠 **Page d'accueil** — Affichage de tous les menus avec filtrage par saveurs
- 🔍 **Détails du menu** — Vue détaillée avec liste des aliments et quantités
- 🥑 **Filtres avancés** — Recherche par saveurs (avocat, coriandre...)
- 🚫 **Exclusion** — Page sans "California Saumon Avocat"
- 💰 **Prix extrêmes** — Affichage du menu le moins cher et le plus cher
- 📊 **Calcul de prix** — Total des menus avec moins de 13 pièces

---

## 🛠️ Technologies utilisées

| Technologie | Version | Description |
|-------------|---------|-------------|
| **React** | 19.2.0 | Bibliothèque UI |
| **React Router DOM** | 7.9.6 | Navigation SPA |
| **Vite** | 7.2.4 | Build tool & dev server |
| **Bootstrap** | 5.3.8 | Framework CSS |
| **ESLint** | 9.39.1 | Linter JavaScript |

---

## 🚀 Installation

### Prérequis

- Node.js (v18+)
- npm ou yarn

### Étapes

```bash
# 1. Cloner le repository
git clone <url-du-repo>
cd sushifast

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur **http://localhost:5173/**

---

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile le projet pour la production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie le code avec ESLint |

---

## 📁 Structure du projet

```
sushifast/
├── public/
│   └── images/              # Images des menus
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Header.jsx       # Navigation principale
│   │   ├── Footer.jsx       # Pied de page
│   │   ├── MenuCard.jsx     # Carte de menu
│   │   └── MenuListe.jsx    # Liste des menus
│   ├── pages/               # Pages de l'application
│   │   ├── Home.jsx         # Page d'accueil
│   │   ├── MenuDetails.jsx  # Détails d'un menu
│   │   ├── Saveurs.jsx      # Saveurs d'un menu
│   │   ├── FiltreSaveurs.jsx# Filtrage par saveurs
│   │   ├── FiltreAliments.jsx# Filtrage par aliments
│   │   ├── PrixInferieur.jsx# Menus < 13 pièces
│   │   └── PrixExtreme.jsx  # Menus extrêmes
│   ├── data/
│   │   └── boxes.json       # Données des menus
│   ├── App.jsx              # Composant principal
│   ├── App.css              # Styles spécifiques
│   ├── index.css            # Styles globaux
│   └── main.jsx             # Point d'entrée
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 🎨 Design

Le projet utilise un thème **japonais moderne** avec :

- **Palette de couleurs** : Bleu nuit (`#1a1a2e`), accent rose-rouge (`#e94560`), turquoise (`#0f9b8e`)
- **Typographie** : Outfit + Noto Sans JP
- **Animations** : Fade-in, hover effects, transitions fluides
- **Responsive** : Adapté mobile, tablette et desktop

---

## 🗺️ Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Liste de tous les menus |
| `/details/:id` | MenuDetails | Détails d'un menu |
| `/saveurs/:id` | Saveurs | Saveurs d'un menu |
| `/saveurs-filtre` | FiltreSaveurs | Menus avocat/coriandre |
| `/sans-california` | FiltreAliments | Menus sans California |
| `/prix-inferieur` | PrixInferieur | Total < 13 pièces |
| `/prix-extremes` | PrixExtremes | Menu min/max prix |

---

## 👤 Auteur

**Nicolas Rannou**  
TD2 TPC — 2025

---

## 📄 Licence

Ce projet est réalisé dans un cadre pédagogique.

---

<p align="center">
  Fait avec ❤️ et 🍣
</p>
