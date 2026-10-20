# 🚀 MILANO — Portfolio Professionnel & Ingénierie Digitale

> **ADJI KOMENAN IVAN FLORIAN EKRA (« MILANO »)**  
> *Web & Mobile Developer · Digital Creator · Graphic Designer*  
> Abidjan, Côte d'Ivoire — [adjikomenan@gmail.com](mailto:adjikomenan@gmail.com)

---

## 1. Identité visuelle

Design immersif et animé, construit autour du logo « AI » :

| Rôle | Couleur |
| --- | --- |
| Bleu nuit (fond principal, intro, contact) | `#070D2B` / `#0B1A55` |
| Bleu roi (boutons, survols, plaque du logo 3D) | `#1D47C8` / `#3E66F0` |
| Rouge (accent : bandeau, points, lignes de progression) | `#EE2F3C` |
| Pervenche (textes en contour, particules) | `#AAB6E6` |

- **Typographie** : Syne (titres), Manrope (texte), JetBrains Mono (métadonnées).
- **3D** : le logo « AI » modélisé en relief avec Three.js, entouré de particules ; il réagit à la souris, au défilement et au clic.
- **Animations** (GSAP + ScrollTrigger) : écran d'entrée avec tracé du logo, titres mot à mot, texte qui s'illumine au défilement, projets en défilement horizontal, lignes de progression, compteurs, bandeau qui accélère avec le défilement, curseur personnalisé, boutons magnétiques, cartes inclinées en 3D.
- **Thèmes** : sombre par défaut, clair en option (mémorisé).
- **Robustesse** : si la 3D ou GSAP ne se chargent pas, le contenu reste entièrement lisible (logo en image, sections affichées). Les animations sont coupées si l'appareil demande de réduire les mouvements.
- **Accessibilité** : navigation au clavier, modales natives `<dialog>`, lien d'évitement.
- **SEO** : OpenGraph, Twitter Cards, Schema.org JSON-LD (Person, WebSite).

---

## 2. Technologies

- **Structure** : HTML5 sémantique
- **Styles** : CSS3 (variables CSS, grid, flexbox, mode clair / sombre)
- **Interactions** : JavaScript natif (ES6+)
- **Bibliothèques (CDN, aucune installation)** : [Three.js](https://threejs.org) 0.160 pour la 3D, [GSAP](https://gsap.com) 3.12 + ScrollTrigger pour les animations
- **Polices** : Syne, Manrope, JetBrains Mono (Google Fonts)

---

## 3. Structure du Projet

```text
/
├── index.html        # Page unique : sections, modales, SEO, scène 3D du logo (module intégré)
├── css/
│   └── style.css     # Design system complet (couleurs, typographie, mode sombre, responsive)
├── js/
│   ├── data.js       # Contenu du site : profil, projets, services, compétences, parcours
│   └── main.js       # Comportements : animations, curseur, thème, navigation, modales, CV, formulaire
├── assets/
│   ├── logo.svg      # Logo « AI » (aussi utilisé comme favicon)
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

- **Ajouter un projet** : ajouter une entrée dans `PROJECTS_DATA` (résumé, catégorie, image dans `assets/images/` et les 7 points de l'étude de cas). Avec `featured: true`, le projet s'affiche en grand avec son image ; sinon il apparaît dans la liste « Autres projets ».
- **Ajouter une expérience ou une formation** : compléter `EXPERIENCES_DATA` ou `EDUCATION_DATA`.
- **Modifier les coordonnées** : modifier `PROFILE_DATA`.

L'interface se met à jour automatiquement.

---

## 7. Formulaire de contact

Les messages sont envoyés par [FormSubmit](https://formsubmit.co) vers l'email défini dans `PROFILE_DATA.email` (aucun compte ni clé API).

- **Activation (une seule fois)** : le tout premier message envoyé depuis le site déclenche un email « Confirm your email » de FormSubmit. Il faut cliquer sur le lien de confirmation ; ce premier message n'est pas transmis, les suivants arrivent directement dans la boîte mail.
- **Répondre** : un simple « Répondre » dans la boîte mail répond directement au visiteur.
- **En cas d'échec** : le visiteur voit un lien pour écrire directement par email.

---

© 2026 ADJI KOMENAN IVAN « MILANO » — Tous droits réservés.
