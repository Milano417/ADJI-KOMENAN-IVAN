# 🚀 MILANO — Portfolio Professionnel & Ingénierie Digitale

> **ADJI KOMENAN IVAN FLORIAN EKRA (« MILANO »)**  
> *Web & Mobile Developer · Digital Creator · Graphic Designer*  
> Abidjan, Côte d'Ivoire — [adjikomenan@gmail.com](mailto:adjikomenan@gmail.com)

---

## 1. Vision & Identité

Portfolio numérique haut de gamme fondé sur les principes **Cyber Minimal × Digital Creative × Professional**. Conçu avec une palette lumineuse et énergique dominée par le **Solar Orange (`#FF5500`)** et le **Warm Peach / Amber Light (`#FFF3EB`)**, ce produit démontre la capacité d'Ivan Milano à concevoir, modéliser, développer et déployer des applications logicielles réelles, centrées sur le résultat et l'ergonomie.

### Piliers de l'architecture :
- **Ingénierie Web & Mobile** : React 19, TypeScript strict, architecture par composants.
- **Rigueur Backend & Données** : Modélisation Merise / SQL, PHP, transactions MySQL.
- **Direction Artistique & UI/UX** : Système typographique soigné (`Outfit` + `Plus Jakarta Sans`), respect de la règle zéro-pill, contrastes WCAG AA.
- **Visite Guidée Interactive** : Parcours d'onboarding en 7 étapes avec mémorisation locale (`localStorage`).
- **Études de Cas Détaillées** : Analyse méthodique en 7 points pour chaque projet (Problème, Réflexion, Solution, Design, Dev, Fonctionnalités, Résultat).
- **SEO & Données Structurées** : OpenGraph, Twitter Cards, Schema.org JSON-LD (Person, WebSite).

---

## 2. Technologies

- **Frontend Core** : React 19, TypeScript, Vite 8
- **Styling** : Tailwind CSS v4, CSS Variables, Typography & Subtle Grids
- **Motion & Interactions** : Micro-interactions réactives, curseur personnalisé desktop, modales accessibles
- **Iconographie** : Lucide React
- **Dev & Build** : Bun / Vite / PostCSS / TypeScript

---

## 3. Structure du Projet

```text
/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── images/                # Visuels éditoriaux et mockups de projets haute résolution
│   ├── components/
│   │   ├── Navbar.tsx             # Barre de navigation sticky 3 zones + dark mode + tour
│   │   ├── CustomCursor.tsx       # Curseur interactif desktop (désactivé sur tactile)
│   │   ├── GuidedTourModal.tsx    # Visite guidée en 7 étapes avec défilement fluide
│   │   ├── ProjectCaseStudyModal.tsx # Modale d'étude de cas structurée
│   │   ├── CVModal.tsx            # Visualiseur et impression de CV haute lisibilité
│   │   ├── EasterEggBanner.tsx    # Milano Mode ⚡ déclenché sur 5 clics
│   │   ├── Preloader.tsx          # Préchargement instantané (<600ms)
│   │   ├── NotFoundPage.tsx       # Page 404 épurée
│   │   └── Footer.tsx             # Pied de page avec liens et relecture de la visite
│   ├── data/
│   │   ├── profile.ts             # Informations d'identité, bio, réseaux, coordonnées
│   │   ├── projects.ts            # Données des 10 projets réels & études de cas
│   │   ├── skills.ts              # Compétences par domaine (sans faux pourcentages)
│   │   ├── services.ts            # 7 services d'ingénierie et design
│   │   ├── experience.ts          # Parcours professionnel (CIMIF, SONAPIE) et BTS IDA
│   │   ├── process.ts             # Workflow en 7 étapes « Comment je travaille »
│   │   └── tour.ts                # Configuration des étapes de visite
│   ├── sections/
│   │   ├── HeroSection.tsx        # Accroche, portrait studio, statut et CTA
│   │   ├── AboutSection.tsx       # Storytelling « Derrière MILANO » et timeline
│   │   ├── SkillsSection.tsx      # Matrice de compétences, mur tech et encart MILANO + IA
│   │   ├── ServicesSection.tsx    # Cartes de solutions avec redirection formulaire
│   │   ├── ProjectsSection.tsx    # Grille filtrable et accès aux études de cas
│   │   ├── WorkflowSection.tsx    # Déroulé méthodologique pas à pas
│   │   ├── ExperienceSection.tsx  # Chronologie des missions et diplôme BTS
│   │   └── ContactSection.tsx     # Formulaire validé avec protection anti-spam
│   ├── App.tsx                    # Orchestrateur applicatif
│   ├── index.css                  # Import Tailwind CSS et règles typographiques
│   └── main.tsx                   # Point d'entrée React
├── index.html                     # Balises SEO complètes, OpenGraph, JSON-LD Schema
├── metadata.json                  # Métadonnées de l'application
└── package.json
```

---

## 4. Installation & Démarrage Local

### Prérequis
- Node.js (v18+ ou v20+) ou Bun

### Commandes
```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement (port 3000)
npm run dev

# Vérification du build de production
npm run build

# Prévisualisation du bundle produit
npm run preview
```

---

## 5. Déploiement sur Vercel

1. Créer un nouveau dépôt sur GitHub et pousser le code :
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio professionnel haut de gamme - Milano"
   git branch -M main
   git remote add origin <URL_DE_VOTRE_REPO>
   git push -u origin main
   ```
2. Connecter le projet sur [Vercel](https://vercel.com) :
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
3. Domaine personnalisé : ajouter votre domaine (ex. `milano.dev` ou `adjikomenan.com`) dans les réglages DNS de Vercel.

---

## 6. Checklist de Maintenance & Ajout de Contenu

- **Ajouter un nouveau projet** : Ajouter simplement une entrée dans `src/data/projects.ts` en renseignant le résumé, la catégorie et les 7 points de l'étude de cas. L'interface se met à jour automatiquement.
- **Ajouter une nouvelle expérience ou certification** : Compléter `EXPERIENCES_DATA` ou `EDUCATION_DATA` dans `src/data/experience.ts`.
- **Modifier les coordonnées** : Modifier `src/data/profile.ts`.

---

© 2026 ADJI KOMENAN IVAN « MILANO » — Tous droits réservés.
