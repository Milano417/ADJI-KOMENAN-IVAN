export interface ProjectCaseStudy {
  problem: string;
  reflection: string;
  solution: string;
  designHighlights: string[];
  devArchitecture: string[];
  features: string[];
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Web App" | "Mobile & Multi-Platform" | "Système de Gestion" | "E-Commerce" | "Branding & Print";
  categoryKey: "web" | "mobile" | "system" | "ecommerce" | "brand";
  year: string;
  role: string;
  summary: string;
  image: string;
  technologies: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "milaweb",
    title: "MILAWEB",
    subtitle: "Entreprise & Écosystème de Solutions Numériques",
    category: "Web App",
    categoryKey: "web",
    year: "2025 – 2026",
    role: "Fondateur, Concepteur & Développeur Principal",
    summary: "Plateforme digitale et initiative personnelle structurant l'offre de développement web, d'applications sur-mesure et de services technologiques pour entreprises.",
    image: "/src/assets/images/project_milaweb_showcase_1791033976721.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Architecture Modulaire"],
    featured: true,
    demoUrl: "https://milaweb.dev",
    caseStudy: {
      problem: "Les PME et organisations locales rencontrent des difficultés à obtenir des solutions numériques complètes, alliant architecture moderne, identité visuelle soignée et accompagnement technique rigoureux.",
      reflection: "Analyse des besoins des structures locales : besoin d'une structure claire, d'un interlocuteur unique capable de piloter à la fois le code, l'interface utilisateur et le déploiement.",
      solution: "Conception de MILAWEB comme un écosystème modulaire proposant des interfaces web réactives, des architectures fiables et une méthodologie axée sur le résultat métier.",
      designHighlights: [
        "Système visuel cyber-minimal orienté clarté",
        "Composants interactifs fluides et responsive",
        "Hiérarchie typographique forte et contrastes soignés"
      ],
      devArchitecture: [
        "Frontend React avec typage TypeScript strict",
        "Système de composants réutilisables et stylisés",
        "Optimisation du bundle et respect des bonnes pratiques SEO"
      ],
      features: [
        "Présentation interactive de solutions logicielles",
        "Formulaire de cadrage de projet avec calcul de périmètre",
        "Showcase des réalisations et veille technologique",
        "Structure prête pour l'intégration de back-office"
      ],
      outcome: "Socle opérationnel servant de vitrine et d'incubateur pour l'ensemble des solutions développées par MILANO."
    }
  },
  {
    id: "hotelflow",
    title: "HotelFlow",
    subtitle: "Système Intégré de Gestion Hôtelière & Réservations",
    category: "Système de Gestion",
    categoryKey: "system",
    year: "2025 – 2026",
    role: "Architecte & Développeur Full-Stack",
    summary: "Solution numérique complète conçue pour rationaliser les opérations hôtelières : occupation des chambres, planning de réservation, facturation et suivi client.",
    image: "/src/assets/images/project_hotelflow_showcase_1791033990104.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS3 / Tailwind", "Modélisation Relationnelle"],
    featured: true,
    caseStudy: {
      problem: "Gestion manuelle ou fragmentée des réservations et des séjours, causant des risques de doublons (overbooking), des lenteurs au check-in et un manque de visibilité sur l'occupation temps réel.",
      reflection: "Immersion et observations directes des processus d'accueil et d'administration hôtelière (réception, facturation, entretien des chambres, gestion des relances clients).",
      solution: "Développement d'une application de gestion centralisée avec tableau de bord visuel de l'état des chambres (libre, occupée, nettoyage, maintenance) et planning dynamique.",
      designHighlights: [
        "Matrice visuelle des chambres avec code couleur intuitif",
        "Formulaires de check-in / check-out rapides en un clic",
        "Tableau de bord synthétique des arrivées et départs journaliers"
      ],
      devArchitecture: [
        "Base de données relationnelle MySQL normalisée pour éviter les conflits d'attribution",
        "Backend PHP structuré avec requêtes préparées et sécurisation des accès",
        "Interface web légère exécutable sur les postes informatiques de réception"
      ],
      features: [
        "Planning interactif de réservation par dates et types de chambres",
        "Génération automatique des factures et reçus de séjour",
        "Gestion du statut d'entretien des chambres pour l'équipe d'étage",
        "Fiches clients sécurisées et historique des séjours"
      ],
      outcome: "Architecture opérationnelle prête à être déployée en environnement hôtelier pour automatiser la gestion quotidienne."
    }
  },
  {
    id: "caispro",
    title: "CaisPro",
    subtitle: "Application Commerciale & Gestion de Caisse",
    category: "Système de Gestion",
    categoryKey: "system",
    year: "2025",
    role: "Développeur Logiciel & Designer UI",
    summary: "Logiciel de caisse et de suivi commercial destiné aux commerces et points de vente : saisie rapide des encaissements, gestion des stocks et clôture journalière.",
    image: "/src/assets/images/project_caispro_showcase_1791034003320.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "DBeaver"],
    featured: true,
    caseStudy: {
      problem: "Difficultés de traçabilité des flux de caisse, écarts lors des clôtures journalières et gestion des articles artisanale sur support papier ou classeurs non sécurisés.",
      reflection: "Étude des gestes métiers en caisse : besoin d'une interface tactile/clavier réactive sans latence, avec calcul instantané du rendu de monnaie et verrouillage des clôtures.",
      solution: "Conception de CaisPro, une application web locale et sécurisée permettant l'encaissement direct, l'impression des tickets et le bilan financier par période.",
      designHighlights: [
        "Pavé numérique virtuel et raccourcis clavier pour saisie express",
        "Panier d'achat en temps réel avec remise et calcul de taxes",
        "Tableau récapitulatif des recettes par mode de règlement (espèces, mobile money, carte)"
      ],
      devArchitecture: [
        "Transactions SQL strictes pour garantir l'intégrité comptable",
        "Gestion des rôles (caissier, superviseur, administrateur)",
        "Audit trail consignant chaque modification et annulation de ticket"
      ],
      features: [
        "Module de vente et d'encaissement en temps réel",
        "Clôture de caisse Z avec rapport imprimable",
        "Suivi des entrées et sorties de stock par produit",
        "Exportation des rapports financiers pour la comptabilité"
      ],
      outcome: "Système fiable éliminant les erreurs manuelles d'encaissement et fiabilisant les données de vente."
    }
  },
  {
    id: "isatech",
    title: "ISATECH Portal",
    subtitle: "Plateforme Universitaire & Portail Académique",
    category: "Web App",
    categoryKey: "web",
    year: "2024 – 2025",
    role: "Concepteur & Développeur Frontend / Full-Stack",
    summary: "Projet de portail web pour l'Institut Supérieur d'Application et de Technologie, valorisant les filières de formation et facilitant l'accès aux ressources.",
    image: "/src/assets/images/project_isatech_showcase_1791034055550.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Architecture MVC"],
    featured: true,
    caseStudy: {
      problem: "Visibilité numérique insuffisante pour les filières technologiques de l'établissement et lourdeur de la diffusion des plannings et annonces institutionnelles.",
      reflection: "Analyser le parcours d'un futur bachelier (recherche de formation, critères d'admission) et celui d'un étudiant inscrit (emploi du temps, examens, actualités).",
      solution: "Un portail académique moderne, accessible sur mobile, intégrant le catalogue des filières (notamment IDA) et un espace d'informations dynamiques.",
      designHighlights: [
        "Identité visuelle académique dynamique aux couleurs institutionnelles",
        "Fiches filières détaillées avec débouchés et compétences visées",
        "Espace d'actualités structuré avec filtres par département"
      ],
      devArchitecture: [
        "Architecture MVC facilitant l'évolution des fonctionnalités",
        "Back-office de gestion des publications d'articles et circulaires",
        "Structure optimisée pour le chargement rapide sur réseaux mobiles"
      ],
      features: [
        "Catalogue complet des programmes de formation (BTS, Licences)",
        "Module de pré-inscription en ligne pour les nouveaux candidats",
        "Panneau d'affichage numérique des circulaires et dates clés",
        "Formulaire de contact et orientation vers le secrétariat académique"
      ],
      outcome: "Projet académique structurant attestant de la capacité à modéliser un système institutionnel complet."
    }
  },
  {
    id: "alertci",
    title: "AlertCI",
    subtitle: "Plateforme Numérique d'Alerte & d'Information Citoyenne",
    category: "Web App",
    categoryKey: "web",
    year: "2025",
    role: "Concepteur & Développeur Logiciel",
    summary: "Projet orienté alerte, diffusion d'informations critiques et prévention d'incidents, pensé pour une distribution rapide et géolocalisée.",
    image: "/src/assets/images/project_alertci_showcase_1791034086012.jpg",
    technologies: ["JavaScript", "APIs Géolocalisation", "PHP / Node.js", "WebSockets / SSE", "CSS Responsive"],
    featured: true,
    caseStudy: {
      problem: "La lenteur de transmission des informations d'urgence (travaux, incidents routiers, alertes météo, coupures) entraîne des désagréments évitables pour les usagers urbains.",
      reflection: "Comment diffuser une notification en moins de 5 secondes avec un niveau de criticité clair et une vérification de la source ?",
      solution: "Conception d'une application d'alerte instantanée associant cartographie interactive, fils d'actualité en continu et catégorisation par niveau de gravité.",
      designHighlights: [
        "Flux d'alerte en direct avec pastilles de sévérité claires",
        "Vue cartographique pour localiser les zones signalées",
        "Mode économie de bande passante pour réseaux mobiles instables"
      ],
      devArchitecture: [
        "Flux d'événements asynchrones pour notification sans rechargement",
        "Validation rigoureuse des soumissions pour prévenir les fausses alertes",
        "Interface responsive adaptée aux smartphones"
      ],
      features: [
        "Fil d'actualité des alertes classées par commune et thématique",
        "Soumission guidée d'un signalement citoyen avec localisation",
        "Diffusion de consignes de sécurité officielles",
        "Filtrage par rayon kilométrique et type d'incident"
      ],
      outcome: "Prototype fonctionnel validant l'architecture de diffusion temps réel pour le contexte local."
    }
  },
  {
    id: "milyshop",
    title: "Milyshop",
    subtitle: "Plateforme E-Commerce Moderne & Panier Intelligent",
    category: "E-Commerce",
    categoryKey: "ecommerce",
    year: "2025",
    role: "Développeur Full-Stack & UI Designer",
    summary: "Boutique en ligne interactive proposant une expérience d'achat fluide, du catalogue produit avec filtres dynamiques jusqu'au tunnel de commande optimisé.",
    image: "/src/assets/images/project_milyshop_showcase_1791034068242.jpg",
    technologies: ["React", "JavaScript", "Tailwind CSS", "API REST", "Stockage Local"],
    featured: true,
    caseStudy: {
      problem: "Les sites e-commerce surchargés souffrent d'abandons de panier élevés dus à la lourdeur des pages et à des formulaires d'expédition trop complexes sur mobile.",
      reflection: "Simplifier au maximum les étapes : recherche prédictive, aperçu express des articles et panier latéral accessible sans quitter la navigation.",
      solution: "Création d'une boutique en ligne ultra-réactive avec gestion d'état centralisée et parcours d'achat optimisé pour le paiement mobile.",
      designHighlights: [
        "Grille de produits aérée avec zoom et sélecteur de variantes",
        "Tiroir panier (cart drawer) interactif avec calcul immédiat des totaux",
        "Palette lumineuse Ice Blue et blanc pur assurant une lisibilité maximale"
      ],
      devArchitecture: [
        "Gestion réactive de l'état du panier avec persistance locale",
        "Filtrage côté client par catégorie, tranche de prix et disponibilité",
        "Architecture découplée prête pour l'intégration de passerelles de paiement (Mobile Money, Carte)"
      ],
      features: [
        "Catalogue multi-catégories avec tri dynamique",
        "Fiches produits complètes avec spécifications et galerie",
        "Tunnel de commande responsive en 2 étapes",
        "Gestion des favoris et historique de navigation"
      ],
      outcome: "Expérience e-commerce moderne, rapide et optimisée pour les habitudes d'achat sur mobile."
    }
  },
  {
    id: "cimif",
    title: "CIMIF Imprimerie",
    subtitle: "Communication Visuelle, PAO & Processus de Production",
    category: "Branding & Print",
    categoryKey: "brand",
    year: "2025 – 2026",
    role: "Designer Graphique & Optimisation Digitale",
    summary: "Création d'identités graphiques, supports d'impression grand format, communication visuelle et rationalisation des flux de commandes clients.",
    image: "/src/assets/images/milano_creative_work_1791034040389.jpg",
    technologies: ["Design Graphique", "PAO", "Photoshop", "Illustrator", "Excel Avancé", "Pré-presse"],
    featured: false,
    caseStudy: {
      problem: "Perte de temps dans le traitement des spécifications d'impression des clients (formats, résolutions, profils colorimétriques CMJN) et suivi manuel des devis.",
      reflection: "Combiner rigueur technique du print avec des gabarits normalisés et des tableaux de bord de suivi de commande.",
      solution: "Conception de visuels professionnels prêts à l'impression et structuration des devis et bons de commande pour accélérer la production.",
      designHighlights: [
        "Créations graphiques corporate et événementielles percutantes",
        "Respect strict des normes d'imprimerie (fond perdu, traits de coupe, colorimétrie)",
        "Déclinaisons multi-supports (bâches, affiches, flyers, cartes de visite)"
      ],
      devArchitecture: [
        "Modèles de calcul automatisés Excel pour l'évaluation des coûts de métrage et d'encre",
        "Organisation d'un référentiel de fichiers sources normé",
        "Liaison entre demande client et validation technique d'atelier"
      ],
      features: [
        "Création de chartes graphiques et logotypes",
        "Conception de supports publicitaires grand format",
        "Suivi des états d'avancement des tirages",
        "Gestion et archivage sécurisé des assets numériques"
      ],
      outcome: "Réduction des allers-retours de correction et hausse de la satisfaction des clients de l'atelier."
    }
  },
  {
    id: "e-garage",
    title: "E-Garage",
    subtitle: "Gestion Numérique d'Atelier Automobile & Entretien",
    category: "Système de Gestion",
    categoryKey: "system",
    year: "2025",
    role: "Concepteur Logiciel & Développeur",
    summary: "Solution numérique pour la gestion des réparations automobiles, du suivi des véhicules clients, de la facturation des pièces et du planning d'atelier.",
    image: "/src/assets/images/project_caispro_showcase_1791034003320.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS3", "Modélisation des Processus"],
    featured: false,
    caseStudy: {
      problem: "Les garages et centres automobiles gèrent souvent les ordres de réparation (OR) sur fiches papier, entraînant des pertes d'historique et des retards de restitution.",
      reflection: "Modéliser le cycle de vie complet d'un véhicule en atelier : réception, diagnostic, devis, commande de pièces, réparation, contrôle et facturation.",
      solution: "Un outil de suivi par plaque d'immatriculation permettant d'avoir l'historique complet des interventions et des devis validés.",
      designHighlights: [
        "Fiche véhicule centralisée avec alertes d'entretien périodique",
        "Tableau de bord des interventions en cours par pont / mécanicien",
        "Génération claire d'ordres de réparation et de factures détaillées"
      ],
      devArchitecture: [
        "Schéma de base relationnel structurant véhicules, propriétaires, pièces et réparations",
        "Gestion fine des statuts d'intervention (en attente de pièce, en cours, terminé)",
        "Calcul automatique de la marge sur pièces et main d'œuvre"
      ],
      features: [
        "Enregistrement des véhicules et carnet d'entretien numérique",
        "Émission de devis estimatifs et transformation en facture",
        "Gestion du stock de pièces détachées et alertes seuils",
        "Historique des réparations accessible en un clic"
      ],
      outcome: "Application robuste permettant à un atelier de digitaliser intégralement sa gestion technique et commerciale."
    }
  },
  {
    id: "digiafrik",
    title: "Digiafrik",
    subtitle: "Plateforme & Initiative d'Accélération Digitale",
    category: "Web App",
    categoryKey: "web",
    year: "2024",
    role: "Développeur Web & Créateur de Contenu",
    summary: "Projet numérique valorisant les opportunités technologiques en Afrique, les outils numériques et les solutions web adaptées aux réalités du continent.",
    image: "/src/assets/images/project_milaweb_showcase_1791033976721.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Stratégie de Contenu"],
    featured: false,
    caseStudy: {
      problem: "Besoin de ressources numériques claires, contextualisées et vulgarisées pour accompagner la transformation digitale des entrepreneurs locaux.",
      reflection: "Créer un espace pédagogique et inspirant mettant en lumière les meilleures pratiques web et les outils accessibles sans barrière technique.",
      solution: "Une vitrine web optimisée, rapide sur mobile et enrichie de guides pratiques sur le digital et la conception de produits numériques.",
      designHighlights: [
        "Lecture confortable et aérée pensée pour les écrans mobiles",
        "Organisation thématique claire des articles et ressources",
        "Éléments visuels pédagogiques facilitant la compréhension"
      ],
      devArchitecture: [
        "Code HTML/CSS ultra-léger garantissant un chargement instantané",
        "Optimisation sémantique pour un bon référencement naturel",
        "Architecture prête pour l'ajout d'une newsletter ou communauté"
      ],
      features: [
        "Guides pratiques sur la digitalisation d'activités",
        "Sélection d'outils et technologies recommandés",
        "Formulaire de mise en relation pour conseil numérique",
        "Fiches récapitulatives téléchargeables"
      ],
      outcome: "Projet ayant posé les fondations de ma vision du digital au service de l'autonomie et de la croissance locale."
    }
  },
  {
    id: "coin",
    title: "COIN Platform",
    subtitle: "Marque & Plateforme E-Commerce",
    category: "E-Commerce",
    categoryKey: "ecommerce",
    year: "2025",
    role: "Direction Visuelle & Développement Web",
    summary: "Conception de marque et plateforme e-commerce axée sur l'exclusivité, l'épure visuelle et une expérience d'achat minimaliste et mémorable.",
    image: "/src/assets/images/project_milyshop_showcase_1791034068242.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Design Graphique", "Expérience Utilisateur"],
    featured: false,
    caseStudy: {
      problem: "Créer une identité de marque singulière qui se démarque des boutiques génériques, avec une proposition graphique forte et un tunnel fluide.",
      reflection: "Travailler la marque sous l'angle du minimalisme éditorial : typographie de caractère, contrastes nets et mise en valeur des produits par le vide spatial.",
      solution: "Un site vitrine et marchand fusionnant direction artistique soignée et fluidité technique.",
      designHighlights: [
        "Mise en page éditoriale valorisant les silhouettes et produits",
        "Micro-animations au survol et transitions de pages délicates",
        "Palette épurée noire, blanche et bleu signature"
      ],
      devArchitecture: [
        "Architecture par composants réutilisables",
        "Séparation stricte entre les assets de marque et la logique applicative",
        "Performances d'affichage soignées avec chargement progressif"
      ],
      features: [
        "Lookbook interactif avec points d'intérêt cliquables",
        "Sélecteur de tailles et gestion des stocks par article",
        "Panier interactif avec récapitulatif instantané",
        "Page de contact de marque et FAQ intégrée"
      ],
      outcome: "Identité de marque forte et vitrine digitale engageante prête pour la commercialisation."
    }
  }
];
