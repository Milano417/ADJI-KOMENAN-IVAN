export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  actionText: string;
  iconName: "globe" | "laptop" | "smartphone" | "cpu" | "layout" | "palette" | "sparkles";
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Développement Web",
    description: "Création de sites web vitrines et institutionnels modernes, responsives, sécurisés et optimisés pour le référencement naturel.",
    deliverables: [
      "Site vitrine responsive multi-écrans",
      "Structure SEO optimisée et balisage sémantique",
      "Temps de chargement rapide et accessibilité",
      "Formulaire de contact et intégration sociale"
    ],
    idealFor: "Entreprises, institutions, PME voulant asseoir leur crédibilité.",
    actionText: "Discuter d'un site web",
    iconName: "globe"
  },
  {
    id: "web-apps",
    number: "02",
    title: "Applications Web",
    description: "Conception et programmation d'applications métier sur-mesure pour automatiser vos opérations et fluidifier le travail de vos équipes.",
    deliverables: [
      "Tableaux de bord d'administration sur-mesure",
      "Gestion des utilisateurs, droits d'accès et rôles",
      "Intégration de bases de données fiables (MySQL)",
      "Connexion aux APIs et exports de rapports"
    ],
    idealFor: "Organisations ayant des processus internes à automatiser.",
    actionText: "Concevoir une app web",
    iconName: "laptop"
  },
  {
    id: "mobile-apps",
    number: "03",
    title: "Applications Mobiles",
    description: "Création d'expériences mobiles ergonomiques, rapides et adaptées aux habitudes d'utilisation des smartphones en Afrique.",
    deliverables: [
      "Interfaces tactiles intuitives et réactives",
      "Gestion hors-ligne ou basse connectivité (PWA)",
      "Intégration d'interactions et notifications",
      "Adaptation multi-formats (smartphones & tablettes)"
    ],
    idealFor: "Services grand public, e-commerce nomade et outils de terrain.",
    actionText: "Lancer un projet mobile",
    iconName: "smartphone"
  },
  {
    id: "digital-solutions",
    number: "04",
    title: "Solutions Digitales",
    description: "Transformation concrète d'une problématique ou d'un besoin terrain en outil numérique simple, fiable et rentable.",
    deliverables: [
      "Audit des processus actuels et identification des goulots",
      "Cahier des charges fonctionnel et priorisation",
      "Déploiement progressif avec formation des équipes",
      "Suivi opérationnel et ajustements"
    ],
    idealFor: "Structures souhaitant digitaliser des registres papier ou Excel.",
    actionText: "Explorer une solution",
    iconName: "cpu"
  },
  {
    id: "ui-ux",
    number: "05",
    title: "UI / UX Design",
    description: "Conception d'interfaces utilisateurs claires, intuitives et épurées qui simplifient chaque tâche sans surcharge visuelle.",
    deliverables: [
      "Recherche utilisateur et cartographie de parcours",
      "Wireframes et maquettes haute fidélité",
      "Design system complet (couleurs, typographie, composants)",
      "Prototypes interactifs testables"
    ],
    idealFor: "Produits existants à moderniser ou projets en phase de cadrage.",
    actionText: "Améliorer l'ergonomie",
    iconName: "layout"
  },
  {
    id: "graphic-design",
    number: "06",
    title: "Design Graphique",
    description: "Création d'identités visuelles mémorables et de supports de communication cohérents pour valoriser votre image de marque.",
    deliverables: [
      "Logotypes et chartes graphiques de marque",
      "Supports d'impression (affiches, brochures, kakémonos)",
      "Gabarits normalisés pour l'imprimerie (PAO)",
      "Déclinaisons pour papeterie et enseignes"
    ],
    idealFor: "Marques en lancement ou entreprises renouvelant leur image.",
    actionText: "Créer une identité visuelle",
    iconName: "palette"
  },
  {
    id: "content-creation",
    number: "07",
    title: "Création de Contenu",
    description: "Conception de contenus visuels et éditoriaux professionnels pour renforcer la présence en ligne des marques et organisations.",
    deliverables: [
      "Visuels pour réseaux sociaux et campagnes",
      "Présentations d'entreprise et pitch decks",
      "Infographies et fiches de synthèse",
      "Direction artistique éditoriale"
    ],
    idealFor: "Entreprises souhaitant communiquer avec impact et régularité.",
    actionText: "Structurer vos contenus",
    iconName: "sparkles"
  }
];
