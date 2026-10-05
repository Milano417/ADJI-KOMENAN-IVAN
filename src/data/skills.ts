export interface SkillItem {
  name: string;
  level: "Maîtrise Opérationnelle" | "Avancé" | "Pratique Quotidienne" | "Spécialité";
  highlight: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  shortDesc: string;
  items: SkillItem[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    shortDesc: "Création d'interfaces web réactives, modulaires et fluides.",
    items: [
      { name: "React", level: "Pratique Quotidienne", highlight: "Composants fonctionnels, hooks personnalisés, gestion d'état" },
      { name: "JavaScript (ES6+)", level: "Avancé", highlight: "DOM dynamique, asynchrone, promesses, modularité" },
      { name: "TypeScript", level: "Pratique Quotidienne", highlight: "Typage strict, interfaces fiables, sécurité au build" },
      { name: "Tailwind CSS & CSS3", level: "Maîtrise Opérationnelle", highlight: "Design systems réactifs, flexbox, grid, animations fluides" },
      { name: "HTML5 Sémantique", level: "Maîtrise Opérationnelle", highlight: "Structure propre, accessibilité WCAG, SEO on-page" },
      { name: "Interfaces Responsive", level: "Maîtrise Opérationnelle", highlight: "Mobile-first, adaptation fluide sur smartphones et desktop" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Données",
    shortDesc: "Modélisation relationnelle, logique métier et sécurité des données.",
    items: [
      { name: "PHP", level: "Maîtrise Opérationnelle", highlight: "Architecture MVC, sessions sécurisées, traitement des flux" },
      { name: "MySQL", level: "Maîtrise Opérationnelle", highlight: "Modélisation relationnelle, requêtes optimisées, transactions" },
      { name: "APIs & Services", level: "Avancé", highlight: "Conception et consommation d'APIs RESTful, formats JSON" },
      { name: "Conception de Systèmes", level: "Avancé", highlight: "Schémas relationnels normalisés, logique métier transactionnelle" },
      { name: "Sécurité Applicative", level: "Pratique Quotidienne", highlight: "Protection XSS/CSRF, requêtes préparées, gestion des rôles" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile & Multi-Plateforme",
    shortDesc: "Expériences mobiles modernes et ergonomiques adaptées aux usages africains.",
    items: [
      { name: "Applications Mobiles", level: "Pratique Quotidienne", highlight: "Architectures mobiles, réactivité tactile, optimisation réseau" },
      { name: "Conception UI Mobile", level: "Spécialité", highlight: "Zones de pouce, navigation par onglets, accessibilité tactile" },
      { name: "PWA & Offline First", level: "Avancé", highlight: "Mise en cache, manifest applicatif, fonctionnement basse bande passante" }
    ]
  },
  {
    id: "design",
    title: "UI / UX & Création Visuelle",
    shortDesc: "Du croquis d'intention jusqu'à l'identité de marque complète.",
    items: [
      { name: "UI Design", level: "Spécialité", highlight: "Grilles, hiérarchie typographique, cohérence des composants" },
      { name: "UX Research & Parcours", level: "Avancé", highlight: "Analyse des irritants utilisateurs, wireframing, tests de flux" },
      { name: "Design Graphique & PAO", level: "Maîtrise Opérationnelle", highlight: "Identités visuelles, logos, chartes, supports d'impression" },
      { name: "Création de Contenu Digital", level: "Avancé", highlight: "Visuels pour réseaux sociaux, présentations, assets digitaux" }
    ]
  },
  {
    id: "tools",
    title: "Outils, DevOps & IA",
    shortDesc: "Flux de travail moderne axé sur la vélocité et la fiabilité.",
    items: [
      { name: "Git & GitHub", level: "Pratique Quotidienne", highlight: "Gestion de versions, branches, pull requests, collaboration" },
      { name: "VS Code & DBeaver", level: "Maîtrise Opérationnelle", highlight: "Environnements de développement et administration SQL" },
      { name: "Outils d'Assistance IA", level: "Spécialité", highlight: "Accélération du prototypage, refactoring et tests assistés" },
      { name: "Suite Graphique & Design", level: "Maîtrise Opérationnelle", highlight: "Figma, Photoshop, Illustrator, outils de conception vectorielle" },
      { name: "Vercel & Déploiement", level: "Pratique Quotidienne", highlight: "Build continu, intégration, gestion des domaines et variables" }
    ]
  }
];

export const TECH_WALL = [
  "React", "TypeScript", "JavaScript", "PHP", "MySQL", 
  "Tailwind CSS", "HTML5", "CSS3", "Node.js", "Git", 
  "GitHub", "VS Code", "DBeaver", "Figma", "Photoshop", 
  "Vercel", "REST APIs", "IA Assistée"
];
