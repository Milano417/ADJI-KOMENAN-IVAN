# 🚀 MILANO — Portfolio Professionnel & Ingénierie Digitale

> **ADJI KOMENAN IVAN FLORIAN EKRA (« MILANO »)**  
> *Web & Mobile Developer · Digital Creator · Graphic Designer*  
> Abidjan, Côte d'Ivoire — [adjikomenan@gmail.com](mailto:adjikomenan@gmail.com)

---

## 1. Vision & Identité

Portfolio numérique haut de gamme fondé sur les principes **Cyber Minimal × Digital Creative × Professional**. Conçu avec une palette lumineuse et énergique dominée par le **Solar Orange (`#FF5500`)** et le **Warm Peach / Amber Light (`#FFF3EB`)**, ce produit démontre la capacité d'Ivan Milano à concevoir, modéliser, développer et déployer des applications logicielles réelles, centrées sur le résultat et l'ergonomie.

### Piliers de l'architecture :
- **Ingénierie Web** : HTML5 sémantique, CSS3 moderne et JavaScript natif, sans framework ni étape de build.
- **Rigueur Backend & Données** : Modélisation Merise / SQL, PHP, transactions MySQL.
- **Direction Artistique & UI/UX** : Système typographique soigné (`Outfit` + `Plus Jakarta Sans`), respect de la règle zéro-pill, contrastes WCAG AA.
- **Visite Guidée Interactive** : Parcours d'onboarding en 7 étapes avec mémorisation locale (`localStorage`).
- **Études de Cas Détaillées** : Analyse méthodique en 7 points pour chaque projet (Problème, Réflexion, Solution, Design, Dev, Fonctionnalités, Résultat).
- **SEO & Données Structurées** : OpenGraph, Twitter Cards, Schema.org JSON-LD (Person, WebSite).

---

## 2. Technologies

- **Structure** : HTML5 sémantique
- **Styles** : CSS3 (variables CSS, grid, flexbox, mode clair / sombre)
- **Interactions** : JavaScript natif (ES6+), aucune dépendance
- **Iconographie** : tracés Lucide intégrés en SVG
- **Polices** : Outfit, Plus Jakarta Sans, JetBrains Mono (Google Fonts)

---

## 3. Structure du Projet

```text
/
├── index.html        # Page unique : sections, modales, SEO, OpenGraph, JSON-LD
├── css/
│   └── style.css     # Design system complet (couleurs, typographie, mode sombre, responsive)
├── js/
│   ├── data.js       # Contenu du site : profil, projets, services, compétences, parcours, visite
│   └── main.js       # Comportements : thème, navigation, filtres, modales, visite guidée, formulaire
├── assets/
│   └── images/       # Portraits et visuels des projets
├── robots.txt
└── sitemap.xml
```

---

## 4. Lancer le site en local

Aucune installation n'est nécessaire : ouvrir `index.html` dans un navigateur.

Pour un rendu identique à la production, on peut aussi utiliser un petit serveur local, par exemple l'extension **Live Server** de VS Code.

---

## 5. Déploiement sur Vercel

1. Pousser le code sur GitHub (`git push`).
2. Dans les réglages du projet sur [Vercel](https://vercel.com) :
   - **Framework Preset** : Other
   - **Build Command** : (vide)
   - **Output Directory** : (vide, la racine du dépôt)
3. Domaine personnalisé : ajouter votre domaine dans les réglages DNS de Vercel.

---

## 6. Ajouter ou modifier du contenu

Tout le contenu se trouve dans `js/data.js` :

- **Ajouter un projet** : ajouter une entrée dans `PROJECTS_DATA` (résumé, catégorie, image dans `assets/images/` et les 7 points de l'étude de cas).
- **Ajouter une expérience ou une formation** : compléter `EXPERIENCES_DATA` ou `EDUCATION_DATA`.
- **Modifier les coordonnées** : modifier `PROFILE_DATA`.

L'interface se met à jour automatiquement.

---

© 2026 ADJI KOMENAN IVAN « MILANO » — Tous droits réservés.
