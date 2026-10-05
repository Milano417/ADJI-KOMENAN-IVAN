export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusPoints: string[];
}

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Comprendre",
    subtitle: "Immersion & Écoute du besoin métier",
    description: "Avant d'écrire la moindre ligne de code, j'écoute le porteur de projet pour cerner les objectifs stratégiques, les utilisateurs cibles et la valeur recherchée.",
    focusPoints: ["Entretiens d'alignement", "Clarification des objectifs réels", "Définition des critères de succès"]
  },
  {
    number: "02",
    title: "Analyser",
    subtitle: "Identification des contraintes techniques",
    description: "Examen minutieux des contraintes de terrain : connectivité réseau locale, habitudes d'équipements des usagers, contraintes budgétaires et réglementaires.",
    focusPoints: ["Cartographie des flux existants", "Choix du modèle de données", "Évaluation des risques techniques"]
  },
  {
    number: "03",
    title: "Concevoir",
    subtitle: "UX / UI & Architecture logicielle",
    description: "Modélisation de l'architecture de la base de données, élaboration des parcours écrans et création de maquettes épurées qui simplifient chaque tâche.",
    focusPoints: ["Schémas de base relationnelle", "Wireframes & prototypes haute fidélité", "Design system cohérent"]
  },
  {
    number: "04",
    title: "Développer",
    subtitle: "Construction du code propre & modulaire",
    description: "Programmation de la solution selon les standards modernes : typage rigoureux, séparation claire entre données et affichage, et optimisation du temps de chargement.",
    focusPoints: ["Code TypeScript / React / PHP structuré", "Composants réutilisables", "Sécurisation des transactions et entrées"]
  },
  {
    number: "05",
    title: "Tester",
    subtitle: "Qualité, responsive & sécurité",
    description: "Contrôle qualité systématique sur multiples appareils : tests de mise en page (du mobile 320px au grand écran), validation des formulaires et sécurité des flux.",
    focusPoints: ["Tests responsive réels", "Audit d'accessibilité & contraste", "Validation anti-injection et gestion d'erreurs"]
  },
  {
    number: "06",
    title: "Déployer",
    subtitle: "Mise en production & configuration",
    description: "Publication sur des infrastructures fiables, configuration des noms de domaine, des certificats HTTPS et des variables d'environnement sécurisées.",
    focusPoints: ["Intégration continue", "Configuration DNS & HTTPS", "Vérification des performances de chargement"]
  },
  {
    number: "07",
    title: "Améliorer",
    subtitle: "Observation d'usage & évolution",
    description: "Un produit vit après sa livraison : observation des premiers retours utilisateurs réels, maintenance corrective et ajustements continus.",
    focusPoints: ["Retours d'expérience utilisateurs", "Optimisations incrémentales", "Support technique réactif"]
  }
];
