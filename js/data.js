/* Données du portfolio : modifier ce fichier pour mettre à jour le contenu du site */

/* ---- profile ---- */
const PROFILE_DATA = {
  fullName: "ADJI KOMENAN IVAN FLORIAN EKRA",
  professionalName: "MILANO",
  role: "Web & Mobile Developer \xB7 Digital Creator \xB7 Graphic Designer",
  tagline: "Je transforme des id\xE9es en exp\xE9riences digitales modernes, utiles et performantes.",
  shortBio: "Jeune d\xE9veloppeur et cr\xE9ateur digital ivoirien bas\xE9 \xE0 Abidjan. Je con\xE7ois et d\xE9veloppe des produits num\xE9riques complets \u2014 du concept UX/UI et de l'architecture logicielle jusqu'au d\xE9ploiement en production.",
  detailedBio: [
    "Passionn\xE9 par l'artisanat num\xE9rique, je combine rigueur d'ing\xE9nierie et sensibilit\xE9 visuelle. Mon travail repose sur une conviction : un code propre n'a de valeur que s'il r\xE9sout un probl\xE8me humain et concret.",
    "Form\xE9 en Informatique D\xE9veloppeur d'Applications (BTS IDA \xE0 l'ISATECH), j'ai consolid\xE9 mon savoir-faire au fil de projets r\xE9els : plateformes SaaS, logiciels de gestion h\xF4teli\xE8re et commerciale, applications mobiles et identit\xE9s de marque.",
    "Je m'int\xE9resse activement au d\xE9veloppement full-stack moderne, aux technologies \xE9mergentes et aux flux de travail assist\xE9s par intelligence artificielle pour acc\xE9l\xE9rer le prototypage sans jamais sacrifier la robustesse architecturale."
  ],
  location: "Abidjan, C\xF4te d'Ivoire",
  email: "adjikomenan@gmail.com",
  status: "Disponible pour nouveaux projets & collaborations",
  socials: {
    github: "https://github.com/Milano417",
    linkedin: "https://www.linkedin.com/in/adji-komenan-ivan-0248a3350",
    email: "mailto:adjikomenan@gmail.com"
  },
  keyHighlights: [
    { label: "Sp\xE9cialisation", detail: "Full-Stack Web & Mobile" },
    { label: "Approche", detail: "Design Produit + Code Propre" },
    { label: "Dipl\xF4me", detail: "BTS IDA (ISATECH)" },
    { label: "Localisation", detail: "Abidjan, C\xF4te d'Ivoire" }
  ],
  identityKeywords: [
    "Full-Stack Development",
    "Mobile Apps",
    "UI/UX Systems",
    "Brand Identity",
    "Digital Strategy",
    "AI Workflows"
  ]
};

/* ---- skills ---- */
const SKILLS_DATA = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    shortDesc: "Cr\xE9ation d'interfaces web r\xE9actives, modulaires et fluides.",
    items: [
      { name: "React", level: "Pratique Quotidienne", highlight: "Composants fonctionnels, hooks personnalis\xE9s, gestion d'\xE9tat" },
      { name: "JavaScript (ES6+)", level: "Avanc\xE9", highlight: "DOM dynamique, asynchrone, promesses, modularit\xE9" },
      { name: "TypeScript", level: "Pratique Quotidienne", highlight: "Typage strict, interfaces fiables, s\xE9curit\xE9 au build" },
      { name: "Tailwind CSS & CSS3", level: "Ma\xEEtrise Op\xE9rationnelle", highlight: "Design systems r\xE9actifs, flexbox, grid, animations fluides" },
      { name: "HTML5 S\xE9mantique", level: "Ma\xEEtrise Op\xE9rationnelle", highlight: "Structure propre, accessibilit\xE9 WCAG, SEO on-page" },
      { name: "Interfaces Responsive", level: "Ma\xEEtrise Op\xE9rationnelle", highlight: "Mobile-first, adaptation fluide sur smartphones et desktop" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Donn\xE9es",
    shortDesc: "Mod\xE9lisation relationnelle, logique m\xE9tier et s\xE9curit\xE9 des donn\xE9es.",
    items: [
      { name: "PHP", level: "Ma\xEEtrise Op\xE9rationnelle", highlight: "Architecture MVC, sessions s\xE9curis\xE9es, traitement des flux" },
      { name: "MySQL", level: "Ma\xEEtrise Op\xE9rationnelle", highlight: "Mod\xE9lisation relationnelle, requ\xEAtes optimis\xE9es, transactions" },
      { name: "APIs & Services", level: "Avanc\xE9", highlight: "Conception et consommation d'APIs RESTful, formats JSON" },
      { name: "Conception de Syst\xE8mes", level: "Avanc\xE9", highlight: "Sch\xE9mas relationnels normalis\xE9s, logique m\xE9tier transactionnelle" },
      { name: "S\xE9curit\xE9 Applicative", level: "Pratique Quotidienne", highlight: "Protection XSS/CSRF, requ\xEAtes pr\xE9par\xE9es, gestion des r\xF4les" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile & Multi-Plateforme",
    shortDesc: "Exp\xE9riences mobiles modernes et ergonomiques adapt\xE9es aux usages africains.",
    items: [
      { name: "Applications Mobiles", level: "Pratique Quotidienne", highlight: "Architectures mobiles, r\xE9activit\xE9 tactile, optimisation r\xE9seau" },
      { name: "Conception UI Mobile", level: "Sp\xE9cialit\xE9", highlight: "Zones de pouce, navigation par onglets, accessibilit\xE9 tactile" },
      { name: "PWA & Offline First", level: "Avanc\xE9", highlight: "Mise en cache, manifest applicatif, fonctionnement basse bande passante" }
    ]
  },
  {
    id: "design",
    title: "UI / UX & Cr\xE9ation Visuelle",
    shortDesc: "Du croquis d'intention jusqu'\xE0 l'identit\xE9 de marque compl\xE8te.",
    items: [
      { name: "UI Design", level: "Sp\xE9cialit\xE9", highlight: "Grilles, hi\xE9rarchie typographique, coh\xE9rence des composants" },
      { name: "UX Research & Parcours", level: "Avanc\xE9", highlight: "Analyse des irritants utilisateurs, wireframing, tests de flux" },
      { name: "Design Graphique & PAO", level: "Ma\xEEtrise Op\xE9rationnelle", highlight: "Identit\xE9s visuelles, logos, chartes, supports d'impression" },
      { name: "Cr\xE9ation de Contenu Digital", level: "Avanc\xE9", highlight: "Visuels pour r\xE9seaux sociaux, pr\xE9sentations, assets digitaux" }
    ]
  },
  {
    id: "tools",
    title: "Outils, DevOps & IA",
    shortDesc: "Flux de travail moderne ax\xE9 sur la v\xE9locit\xE9 et la fiabilit\xE9.",
    items: [
      { name: "Git & GitHub", level: "Pratique Quotidienne", highlight: "Gestion de versions, branches, pull requests, collaboration" },
      { name: "VS Code & DBeaver", level: "Ma\xEEtrise Op\xE9rationnelle", highlight: "Environnements de d\xE9veloppement et administration SQL" },
      { name: "Outils d'Assistance IA", level: "Sp\xE9cialit\xE9", highlight: "Acc\xE9l\xE9ration du prototypage, refactoring et tests assist\xE9s" },
      { name: "Suite Graphique & Design", level: "Ma\xEEtrise Op\xE9rationnelle", highlight: "Figma, Photoshop, Illustrator, outils de conception vectorielle" },
      { name: "Vercel & D\xE9ploiement", level: "Pratique Quotidienne", highlight: "Build continu, int\xE9gration, gestion des domaines et variables" }
    ]
  }
];
const TECH_WALL = [
  "React",
  "TypeScript",
  "JavaScript",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Node.js",
  "Git",
  "GitHub",
  "VS Code",
  "DBeaver",
  "Figma",
  "Photoshop",
  "Vercel",
  "REST APIs",
  "IA Assist\xE9e"
];

/* ---- services ---- */
const SERVICES_DATA = [
  {
    id: "web-dev",
    number: "01",
    title: "D\xE9veloppement Web",
    description: "Cr\xE9ation de sites web vitrines et institutionnels modernes, responsives, s\xE9curis\xE9s et optimis\xE9s pour le r\xE9f\xE9rencement naturel.",
    deliverables: [
      "Site vitrine responsive multi-\xE9crans",
      "Structure SEO optimis\xE9e et balisage s\xE9mantique",
      "Temps de chargement rapide et accessibilit\xE9",
      "Formulaire de contact et int\xE9gration sociale"
    ],
    idealFor: "Entreprises, institutions, PME voulant asseoir leur cr\xE9dibilit\xE9.",
    actionText: "Discuter d'un site web",
    iconName: "globe"
  },
  {
    id: "web-apps",
    number: "02",
    title: "Applications Web",
    description: "Conception et programmation d'applications m\xE9tier sur-mesure pour automatiser vos op\xE9rations et fluidifier le travail de vos \xE9quipes.",
    deliverables: [
      "Tableaux de bord d'administration sur-mesure",
      "Gestion des utilisateurs, droits d'acc\xE8s et r\xF4les",
      "Int\xE9gration de bases de donn\xE9es fiables (MySQL)",
      "Connexion aux APIs et exports de rapports"
    ],
    idealFor: "Organisations ayant des processus internes \xE0 automatiser.",
    actionText: "Concevoir une app web",
    iconName: "laptop"
  },
  {
    id: "mobile-apps",
    number: "03",
    title: "Applications Mobiles",
    description: "Cr\xE9ation d'exp\xE9riences mobiles ergonomiques, rapides et adapt\xE9es aux habitudes d'utilisation des smartphones en Afrique.",
    deliverables: [
      "Interfaces tactiles intuitives et r\xE9actives",
      "Gestion hors-ligne ou basse connectivit\xE9 (PWA)",
      "Int\xE9gration d'interactions et notifications",
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
    description: "Transformation concr\xE8te d'une probl\xE9matique ou d'un besoin terrain en outil num\xE9rique simple, fiable et rentable.",
    deliverables: [
      "Audit des processus actuels et identification des goulots",
      "Cahier des charges fonctionnel et priorisation",
      "D\xE9ploiement progressif avec formation des \xE9quipes",
      "Suivi op\xE9rationnel et ajustements"
    ],
    idealFor: "Structures souhaitant digitaliser des registres papier ou Excel.",
    actionText: "Explorer une solution",
    iconName: "cpu"
  },
  {
    id: "ui-ux",
    number: "05",
    title: "UI / UX Design",
    description: "Conception d'interfaces utilisateurs claires, intuitives et \xE9pur\xE9es qui simplifient chaque t\xE2che sans surcharge visuelle.",
    deliverables: [
      "Recherche utilisateur et cartographie de parcours",
      "Wireframes et maquettes haute fid\xE9lit\xE9",
      "Design system complet (couleurs, typographie, composants)",
      "Prototypes interactifs testables"
    ],
    idealFor: "Produits existants \xE0 moderniser ou projets en phase de cadrage.",
    actionText: "Am\xE9liorer l'ergonomie",
    iconName: "layout"
  },
  {
    id: "graphic-design",
    number: "06",
    title: "Design Graphique",
    description: "Cr\xE9ation d'identit\xE9s visuelles m\xE9morables et de supports de communication coh\xE9rents pour valoriser votre image de marque.",
    deliverables: [
      "Logotypes et chartes graphiques de marque",
      "Supports d'impression (affiches, brochures, kak\xE9monos)",
      "Gabarits normalis\xE9s pour l'imprimerie (PAO)",
      "D\xE9clinaisons pour papeterie et enseignes"
    ],
    idealFor: "Marques en lancement ou entreprises renouvelant leur image.",
    actionText: "Cr\xE9er une identit\xE9 visuelle",
    iconName: "palette"
  },
  {
    id: "content-creation",
    number: "07",
    title: "Cr\xE9ation de Contenu",
    description: "Conception de contenus visuels et \xE9ditoriaux professionnels pour renforcer la pr\xE9sence en ligne des marques et organisations.",
    deliverables: [
      "Visuels pour r\xE9seaux sociaux et campagnes",
      "Pr\xE9sentations d'entreprise et pitch decks",
      "Infographies et fiches de synth\xE8se",
      "Direction artistique \xE9ditoriale"
    ],
    idealFor: "Entreprises souhaitant communiquer avec impact et r\xE9gularit\xE9.",
    actionText: "Structurer vos contenus",
    iconName: "sparkles"
  }
];

/* ---- projects ---- */
const PROJECTS_DATA = [
  {
    id: "milaweb",
    title: "MILAWEB",
    subtitle: "Entreprise & \xC9cosyst\xE8me de Solutions Num\xE9riques",
    category: "Web App",
    categoryKey: "web",
    year: "2025 \u2013 2026",
    role: "Fondateur, Concepteur & D\xE9veloppeur Principal",
    summary: "Plateforme digitale et initiative personnelle structurant l'offre de d\xE9veloppement web, d'applications sur-mesure et de services technologiques pour entreprises.",
    image: "assets/images/project_milaweb_showcase_1791033976721.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Architecture Modulaire"],
    featured: true,
    demoUrl: "https://milaweb.dev",
    caseStudy: {
      problem: "Les PME et organisations locales rencontrent des difficult\xE9s \xE0 obtenir des solutions num\xE9riques compl\xE8tes, alliant architecture moderne, identit\xE9 visuelle soign\xE9e et accompagnement technique rigoureux.",
      reflection: "Analyse des besoins des structures locales : besoin d'une structure claire, d'un interlocuteur unique capable de piloter \xE0 la fois le code, l'interface utilisateur et le d\xE9ploiement.",
      solution: "Conception de MILAWEB comme un \xE9cosyst\xE8me modulaire proposant des interfaces web r\xE9actives, des architectures fiables et une m\xE9thodologie ax\xE9e sur le r\xE9sultat m\xE9tier.",
      designHighlights: [
        "Syst\xE8me visuel cyber-minimal orient\xE9 clart\xE9",
        "Composants interactifs fluides et responsive",
        "Hi\xE9rarchie typographique forte et contrastes soign\xE9s"
      ],
      devArchitecture: [
        "Frontend React avec typage TypeScript strict",
        "Syst\xE8me de composants r\xE9utilisables et stylis\xE9s",
        "Optimisation du bundle et respect des bonnes pratiques SEO"
      ],
      features: [
        "Pr\xE9sentation interactive de solutions logicielles",
        "Formulaire de cadrage de projet avec calcul de p\xE9rim\xE8tre",
        "Showcase des r\xE9alisations et veille technologique",
        "Structure pr\xEAte pour l'int\xE9gration de back-office"
      ],
      outcome: "Socle op\xE9rationnel servant de vitrine et d'incubateur pour l'ensemble des solutions d\xE9velopp\xE9es par MILANO."
    }
  },
  {
    id: "hotelflow",
    title: "HotelFlow",
    subtitle: "Syst\xE8me Int\xE9gr\xE9 de Gestion H\xF4teli\xE8re & R\xE9servations",
    category: "Syst\xE8me de Gestion",
    categoryKey: "system",
    year: "2025 \u2013 2026",
    role: "Architecte & D\xE9veloppeur Full-Stack",
    summary: "Solution num\xE9rique compl\xE8te con\xE7ue pour rationaliser les op\xE9rations h\xF4teli\xE8res : occupation des chambres, planning de r\xE9servation, facturation et suivi client.",
    image: "assets/images/project_hotelflow_showcase_1791033990104.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS3 / Tailwind", "Mod\xE9lisation Relationnelle"],
    featured: true,
    caseStudy: {
      problem: "Gestion manuelle ou fragment\xE9e des r\xE9servations et des s\xE9jours, causant des risques de doublons (overbooking), des lenteurs au check-in et un manque de visibilit\xE9 sur l'occupation temps r\xE9el.",
      reflection: "Immersion et observations directes des processus d'accueil et d'administration h\xF4teli\xE8re (r\xE9ception, facturation, entretien des chambres, gestion des relances clients).",
      solution: "D\xE9veloppement d'une application de gestion centralis\xE9e avec tableau de bord visuel de l'\xE9tat des chambres (libre, occup\xE9e, nettoyage, maintenance) et planning dynamique.",
      designHighlights: [
        "Matrice visuelle des chambres avec code couleur intuitif",
        "Formulaires de check-in / check-out rapides en un clic",
        "Tableau de bord synth\xE9tique des arriv\xE9es et d\xE9parts journaliers"
      ],
      devArchitecture: [
        "Base de donn\xE9es relationnelle MySQL normalis\xE9e pour \xE9viter les conflits d'attribution",
        "Backend PHP structur\xE9 avec requ\xEAtes pr\xE9par\xE9es et s\xE9curisation des acc\xE8s",
        "Interface web l\xE9g\xE8re ex\xE9cutable sur les postes informatiques de r\xE9ception"
      ],
      features: [
        "Planning interactif de r\xE9servation par dates et types de chambres",
        "G\xE9n\xE9ration automatique des factures et re\xE7us de s\xE9jour",
        "Gestion du statut d'entretien des chambres pour l'\xE9quipe d'\xE9tage",
        "Fiches clients s\xE9curis\xE9es et historique des s\xE9jours"
      ],
      outcome: "Architecture op\xE9rationnelle pr\xEAte \xE0 \xEAtre d\xE9ploy\xE9e en environnement h\xF4telier pour automatiser la gestion quotidienne."
    }
  },
  {
    id: "caispro",
    title: "CaisPro",
    subtitle: "Application Commerciale & Gestion de Caisse",
    category: "Syst\xE8me de Gestion",
    categoryKey: "system",
    year: "2025",
    role: "D\xE9veloppeur Logiciel & Designer UI",
    summary: "Logiciel de caisse et de suivi commercial destin\xE9 aux commerces et points de vente : saisie rapide des encaissements, gestion des stocks et cl\xF4ture journali\xE8re.",
    image: "assets/images/project_caispro_showcase_1791034003320.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "DBeaver"],
    featured: true,
    caseStudy: {
      problem: "Difficult\xE9s de tra\xE7abilit\xE9 des flux de caisse, \xE9carts lors des cl\xF4tures journali\xE8res et gestion des articles artisanale sur support papier ou classeurs non s\xE9curis\xE9s.",
      reflection: "\xC9tude des gestes m\xE9tiers en caisse : besoin d'une interface tactile/clavier r\xE9active sans latence, avec calcul instantan\xE9 du rendu de monnaie et verrouillage des cl\xF4tures.",
      solution: "Conception de CaisPro, une application web locale et s\xE9curis\xE9e permettant l'encaissement direct, l'impression des tickets et le bilan financier par p\xE9riode.",
      designHighlights: [
        "Pav\xE9 num\xE9rique virtuel et raccourcis clavier pour saisie express",
        "Panier d'achat en temps r\xE9el avec remise et calcul de taxes",
        "Tableau r\xE9capitulatif des recettes par mode de r\xE8glement (esp\xE8ces, mobile money, carte)"
      ],
      devArchitecture: [
        "Transactions SQL strictes pour garantir l'int\xE9grit\xE9 comptable",
        "Gestion des r\xF4les (caissier, superviseur, administrateur)",
        "Audit trail consignant chaque modification et annulation de ticket"
      ],
      features: [
        "Module de vente et d'encaissement en temps r\xE9el",
        "Cl\xF4ture de caisse Z avec rapport imprimable",
        "Suivi des entr\xE9es et sorties de stock par produit",
        "Exportation des rapports financiers pour la comptabilit\xE9"
      ],
      outcome: "Syst\xE8me fiable \xE9liminant les erreurs manuelles d'encaissement et fiabilisant les donn\xE9es de vente."
    }
  },
  {
    id: "isatech",
    title: "ISATECH Portal",
    subtitle: "Plateforme Universitaire & Portail Acad\xE9mique",
    category: "Web App",
    categoryKey: "web",
    year: "2024 \u2013 2025",
    role: "Concepteur & D\xE9veloppeur Frontend / Full-Stack",
    summary: "Projet de portail web pour l'Institut Sup\xE9rieur d'Application et de Technologie, valorisant les fili\xE8res de formation et facilitant l'acc\xE8s aux ressources.",
    image: "assets/images/project_isatech_showcase_1791034055550.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Architecture MVC"],
    featured: true,
    caseStudy: {
      problem: "Visibilit\xE9 num\xE9rique insuffisante pour les fili\xE8res technologiques de l'\xE9tablissement et lourdeur de la diffusion des plannings et annonces institutionnelles.",
      reflection: "Analyser le parcours d'un futur bachelier (recherche de formation, crit\xE8res d'admission) et celui d'un \xE9tudiant inscrit (emploi du temps, examens, actualit\xE9s).",
      solution: "Un portail acad\xE9mique moderne, accessible sur mobile, int\xE9grant le catalogue des fili\xE8res (notamment IDA) et un espace d'informations dynamiques.",
      designHighlights: [
        "Identit\xE9 visuelle acad\xE9mique dynamique aux couleurs institutionnelles",
        "Fiches fili\xE8res d\xE9taill\xE9es avec d\xE9bouch\xE9s et comp\xE9tences vis\xE9es",
        "Espace d'actualit\xE9s structur\xE9 avec filtres par d\xE9partement"
      ],
      devArchitecture: [
        "Architecture MVC facilitant l'\xE9volution des fonctionnalit\xE9s",
        "Back-office de gestion des publications d'articles et circulaires",
        "Structure optimis\xE9e pour le chargement rapide sur r\xE9seaux mobiles"
      ],
      features: [
        "Catalogue complet des programmes de formation (BTS, Licences)",
        "Module de pr\xE9-inscription en ligne pour les nouveaux candidats",
        "Panneau d'affichage num\xE9rique des circulaires et dates cl\xE9s",
        "Formulaire de contact et orientation vers le secr\xE9tariat acad\xE9mique"
      ],
      outcome: "Projet acad\xE9mique structurant attestant de la capacit\xE9 \xE0 mod\xE9liser un syst\xE8me institutionnel complet."
    }
  },
  {
    id: "alertci",
    title: "AlertCI",
    subtitle: "Plateforme Num\xE9rique d'Alerte & d'Information Citoyenne",
    category: "Web App",
    categoryKey: "web",
    year: "2025",
    role: "Concepteur & D\xE9veloppeur Logiciel",
    summary: "Projet orient\xE9 alerte, diffusion d'informations critiques et pr\xE9vention d'incidents, pens\xE9 pour une distribution rapide et g\xE9olocalis\xE9e.",
    image: "assets/images/project_alertci_showcase_1791034086012.jpg",
    technologies: ["JavaScript", "APIs G\xE9olocalisation", "PHP / Node.js", "WebSockets / SSE", "CSS Responsive"],
    featured: true,
    caseStudy: {
      problem: "La lenteur de transmission des informations d'urgence (travaux, incidents routiers, alertes m\xE9t\xE9o, coupures) entra\xEEne des d\xE9sagr\xE9ments \xE9vitables pour les usagers urbains.",
      reflection: "Comment diffuser une notification en moins de 5 secondes avec un niveau de criticit\xE9 clair et une v\xE9rification de la source ?",
      solution: "Conception d'une application d'alerte instantan\xE9e associant cartographie interactive, fils d'actualit\xE9 en continu et cat\xE9gorisation par niveau de gravit\xE9.",
      designHighlights: [
        "Flux d'alerte en direct avec pastilles de s\xE9v\xE9rit\xE9 claires",
        "Vue cartographique pour localiser les zones signal\xE9es",
        "Mode \xE9conomie de bande passante pour r\xE9seaux mobiles instables"
      ],
      devArchitecture: [
        "Flux d'\xE9v\xE9nements asynchrones pour notification sans rechargement",
        "Validation rigoureuse des soumissions pour pr\xE9venir les fausses alertes",
        "Interface responsive adapt\xE9e aux smartphones"
      ],
      features: [
        "Fil d'actualit\xE9 des alertes class\xE9es par commune et th\xE9matique",
        "Soumission guid\xE9e d'un signalement citoyen avec localisation",
        "Diffusion de consignes de s\xE9curit\xE9 officielles",
        "Filtrage par rayon kilom\xE9trique et type d'incident"
      ],
      outcome: "Prototype fonctionnel validant l'architecture de diffusion temps r\xE9el pour le contexte local."
    }
  },
  {
    id: "milyshop",
    title: "Milyshop",
    subtitle: "Plateforme E-Commerce Moderne & Panier Intelligent",
    category: "E-Commerce",
    categoryKey: "ecommerce",
    year: "2025",
    role: "D\xE9veloppeur Full-Stack & UI Designer",
    summary: "Boutique en ligne interactive proposant une exp\xE9rience d'achat fluide, du catalogue produit avec filtres dynamiques jusqu'au tunnel de commande optimis\xE9.",
    image: "assets/images/project_milyshop_showcase_1791034068242.jpg",
    technologies: ["React", "JavaScript", "Tailwind CSS", "API REST", "Stockage Local"],
    featured: true,
    caseStudy: {
      problem: "Les sites e-commerce surcharg\xE9s souffrent d'abandons de panier \xE9lev\xE9s dus \xE0 la lourdeur des pages et \xE0 des formulaires d'exp\xE9dition trop complexes sur mobile.",
      reflection: "Simplifier au maximum les \xE9tapes : recherche pr\xE9dictive, aper\xE7u express des articles et panier lat\xE9ral accessible sans quitter la navigation.",
      solution: "Cr\xE9ation d'une boutique en ligne ultra-r\xE9active avec gestion d'\xE9tat centralis\xE9e et parcours d'achat optimis\xE9 pour le paiement mobile.",
      designHighlights: [
        "Grille de produits a\xE9r\xE9e avec zoom et s\xE9lecteur de variantes",
        "Tiroir panier (cart drawer) interactif avec calcul imm\xE9diat des totaux",
        "Palette lumineuse Ice Blue et blanc pur assurant une lisibilit\xE9 maximale"
      ],
      devArchitecture: [
        "Gestion r\xE9active de l'\xE9tat du panier avec persistance locale",
        "Filtrage c\xF4t\xE9 client par cat\xE9gorie, tranche de prix et disponibilit\xE9",
        "Architecture d\xE9coupl\xE9e pr\xEAte pour l'int\xE9gration de passerelles de paiement (Mobile Money, Carte)"
      ],
      features: [
        "Catalogue multi-cat\xE9gories avec tri dynamique",
        "Fiches produits compl\xE8tes avec sp\xE9cifications et galerie",
        "Tunnel de commande responsive en 2 \xE9tapes",
        "Gestion des favoris et historique de navigation"
      ],
      outcome: "Exp\xE9rience e-commerce moderne, rapide et optimis\xE9e pour les habitudes d'achat sur mobile."
    }
  },
  {
    id: "cimif",
    title: "CIMIF Imprimerie",
    subtitle: "Communication Visuelle, PAO & Processus de Production",
    category: "Branding & Print",
    categoryKey: "brand",
    year: "2025 \u2013 2026",
    role: "Designer Graphique & Optimisation Digitale",
    summary: "Cr\xE9ation d'identit\xE9s graphiques, supports d'impression grand format, communication visuelle et rationalisation des flux de commandes clients.",
    image: "assets/images/milano_creative_work_1791034040389.jpg",
    technologies: ["Design Graphique", "PAO", "Photoshop", "Illustrator", "Excel Avanc\xE9", "Pr\xE9-presse"],
    featured: false,
    caseStudy: {
      problem: "Perte de temps dans le traitement des sp\xE9cifications d'impression des clients (formats, r\xE9solutions, profils colorim\xE9triques CMJN) et suivi manuel des devis.",
      reflection: "Combiner rigueur technique du print avec des gabarits normalis\xE9s et des tableaux de bord de suivi de commande.",
      solution: "Conception de visuels professionnels pr\xEAts \xE0 l'impression et structuration des devis et bons de commande pour acc\xE9l\xE9rer la production.",
      designHighlights: [
        "Cr\xE9ations graphiques corporate et \xE9v\xE9nementielles percutantes",
        "Respect strict des normes d'imprimerie (fond perdu, traits de coupe, colorim\xE9trie)",
        "D\xE9clinaisons multi-supports (b\xE2ches, affiches, flyers, cartes de visite)"
      ],
      devArchitecture: [
        "Mod\xE8les de calcul automatis\xE9s Excel pour l'\xE9valuation des co\xFBts de m\xE9trage et d'encre",
        "Organisation d'un r\xE9f\xE9rentiel de fichiers sources norm\xE9",
        "Liaison entre demande client et validation technique d'atelier"
      ],
      features: [
        "Cr\xE9ation de chartes graphiques et logotypes",
        "Conception de supports publicitaires grand format",
        "Suivi des \xE9tats d'avancement des tirages",
        "Gestion et archivage s\xE9curis\xE9 des assets num\xE9riques"
      ],
      outcome: "R\xE9duction des allers-retours de correction et hausse de la satisfaction des clients de l'atelier."
    }
  },
  {
    id: "e-garage",
    title: "E-Garage",
    subtitle: "Gestion Num\xE9rique d'Atelier Automobile & Entretien",
    category: "Syst\xE8me de Gestion",
    categoryKey: "system",
    year: "2025",
    role: "Concepteur Logiciel & D\xE9veloppeur",
    summary: "Solution num\xE9rique pour la gestion des r\xE9parations automobiles, du suivi des v\xE9hicules clients, de la facturation des pi\xE8ces et du planning d'atelier.",
    image: "",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS3", "Mod\xE9lisation des Processus"],
    featured: false,
    caseStudy: {
      problem: "Les garages et centres automobiles g\xE8rent souvent les ordres de r\xE9paration (OR) sur fiches papier, entra\xEEnant des pertes d'historique et des retards de restitution.",
      reflection: "Mod\xE9liser le cycle de vie complet d'un v\xE9hicule en atelier : r\xE9ception, diagnostic, devis, commande de pi\xE8ces, r\xE9paration, contr\xF4le et facturation.",
      solution: "Un outil de suivi par plaque d'immatriculation permettant d'avoir l'historique complet des interventions et des devis valid\xE9s.",
      designHighlights: [
        "Fiche v\xE9hicule centralis\xE9e avec alertes d'entretien p\xE9riodique",
        "Tableau de bord des interventions en cours par pont / m\xE9canicien",
        "G\xE9n\xE9ration claire d'ordres de r\xE9paration et de factures d\xE9taill\xE9es"
      ],
      devArchitecture: [
        "Sch\xE9ma de base relationnel structurant v\xE9hicules, propri\xE9taires, pi\xE8ces et r\xE9parations",
        "Gestion fine des statuts d'intervention (en attente de pi\xE8ce, en cours, termin\xE9)",
        "Calcul automatique de la marge sur pi\xE8ces et main d'\u0153uvre"
      ],
      features: [
        "Enregistrement des v\xE9hicules et carnet d'entretien num\xE9rique",
        "\xC9mission de devis estimatifs et transformation en facture",
        "Gestion du stock de pi\xE8ces d\xE9tach\xE9es et alertes seuils",
        "Historique des r\xE9parations accessible en un clic"
      ],
      outcome: "Application robuste permettant \xE0 un atelier de digitaliser int\xE9gralement sa gestion technique et commerciale."
    }
  },
  {
    id: "digiafrik",
    title: "Digiafrik",
    subtitle: "Plateforme & Initiative d'Acc\xE9l\xE9ration Digitale",
    category: "Web App",
    categoryKey: "web",
    year: "2024",
    role: "D\xE9veloppeur Web & Cr\xE9ateur de Contenu",
    summary: "Projet num\xE9rique valorisant les opportunit\xE9s technologiques en Afrique, les outils num\xE9riques et les solutions web adapt\xE9es aux r\xE9alit\xE9s du continent.",
    image: "",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Strat\xE9gie de Contenu"],
    featured: false,
    caseStudy: {
      problem: "Besoin de ressources num\xE9riques claires, contextualis\xE9es et vulgaris\xE9es pour accompagner la transformation digitale des entrepreneurs locaux.",
      reflection: "Cr\xE9er un espace p\xE9dagogique et inspirant mettant en lumi\xE8re les meilleures pratiques web et les outils accessibles sans barri\xE8re technique.",
      solution: "Une vitrine web optimis\xE9e, rapide sur mobile et enrichie de guides pratiques sur le digital et la conception de produits num\xE9riques.",
      designHighlights: [
        "Lecture confortable et a\xE9r\xE9e pens\xE9e pour les \xE9crans mobiles",
        "Organisation th\xE9matique claire des articles et ressources",
        "\xC9l\xE9ments visuels p\xE9dagogiques facilitant la compr\xE9hension"
      ],
      devArchitecture: [
        "Code HTML/CSS ultra-l\xE9ger garantissant un chargement instantan\xE9",
        "Optimisation s\xE9mantique pour un bon r\xE9f\xE9rencement naturel",
        "Architecture pr\xEAte pour l'ajout d'une newsletter ou communaut\xE9"
      ],
      features: [
        "Guides pratiques sur la digitalisation d'activit\xE9s",
        "S\xE9lection d'outils et technologies recommand\xE9s",
        "Formulaire de mise en relation pour conseil num\xE9rique",
        "Fiches r\xE9capitulatives t\xE9l\xE9chargeables"
      ],
      outcome: "Projet ayant pos\xE9 les fondations de ma vision du digital au service de l'autonomie et de la croissance locale."
    }
  },
  {
    id: "coin",
    title: "COIN Platform",
    subtitle: "Marque & Plateforme E-Commerce",
    category: "E-Commerce",
    categoryKey: "ecommerce",
    year: "2025",
    role: "Direction Visuelle & D\xE9veloppement Web",
    summary: "Conception de marque et plateforme e-commerce ax\xE9e sur l'exclusivit\xE9, l'\xE9pure visuelle et une exp\xE9rience d'achat minimaliste et m\xE9morable.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Design Graphique", "Exp\xE9rience Utilisateur"],
    featured: false,
    caseStudy: {
      problem: "Cr\xE9er une identit\xE9 de marque singuli\xE8re qui se d\xE9marque des boutiques g\xE9n\xE9riques, avec une proposition graphique forte et un tunnel fluide.",
      reflection: "Travailler la marque sous l'angle du minimalisme \xE9ditorial : typographie de caract\xE8re, contrastes nets et mise en valeur des produits par le vide spatial.",
      solution: "Un site vitrine et marchand fusionnant direction artistique soign\xE9e et fluidit\xE9 technique.",
      designHighlights: [
        "Mise en page \xE9ditoriale valorisant les silhouettes et produits",
        "Micro-animations au survol et transitions de pages d\xE9licates",
        "Palette \xE9pur\xE9e noire, blanche et bleu signature"
      ],
      devArchitecture: [
        "Architecture par composants r\xE9utilisables",
        "S\xE9paration stricte entre les assets de marque et la logique applicative",
        "Performances d'affichage soign\xE9es avec chargement progressif"
      ],
      features: [
        "Lookbook interactif avec points d'int\xE9r\xEAt cliquables",
        "S\xE9lecteur de tailles et gestion des stocks par article",
        "Panier interactif avec r\xE9capitulatif instantan\xE9",
        "Page de contact de marque et FAQ int\xE9gr\xE9e"
      ],
      outcome: "Identit\xE9 de marque forte et vitrine digitale engageante pr\xEAte pour la commercialisation."
    }
  }
];

/* ---- process ---- */
const WORK_PROCESS_STEPS = [
  {
    number: "01",
    title: "Comprendre",
    subtitle: "Immersion & \xC9coute du besoin m\xE9tier",
    description: "Avant d'\xE9crire la moindre ligne de code, j'\xE9coute le porteur de projet pour cerner les objectifs strat\xE9giques, les utilisateurs cibles et la valeur recherch\xE9e.",
    focusPoints: ["Entretiens d'alignement", "Clarification des objectifs r\xE9els", "D\xE9finition des crit\xE8res de succ\xE8s"]
  },
  {
    number: "02",
    title: "Analyser",
    subtitle: "Identification des contraintes techniques",
    description: "Examen minutieux des contraintes de terrain : connectivit\xE9 r\xE9seau locale, habitudes d'\xE9quipements des usagers, contraintes budg\xE9taires et r\xE9glementaires.",
    focusPoints: ["Cartographie des flux existants", "Choix du mod\xE8le de donn\xE9es", "\xC9valuation des risques techniques"]
  },
  {
    number: "03",
    title: "Concevoir",
    subtitle: "UX / UI & Architecture logicielle",
    description: "Mod\xE9lisation de l'architecture de la base de donn\xE9es, \xE9laboration des parcours \xE9crans et cr\xE9ation de maquettes \xE9pur\xE9es qui simplifient chaque t\xE2che.",
    focusPoints: ["Sch\xE9mas de base relationnelle", "Wireframes & prototypes haute fid\xE9lit\xE9", "Design system coh\xE9rent"]
  },
  {
    number: "04",
    title: "D\xE9velopper",
    subtitle: "Construction du code propre & modulaire",
    description: "Programmation de la solution selon les standards modernes : typage rigoureux, s\xE9paration claire entre donn\xE9es et affichage, et optimisation du temps de chargement.",
    focusPoints: ["Code TypeScript / React / PHP structur\xE9", "Composants r\xE9utilisables", "S\xE9curisation des transactions et entr\xE9es"]
  },
  {
    number: "05",
    title: "Tester",
    subtitle: "Qualit\xE9, responsive & s\xE9curit\xE9",
    description: "Contr\xF4le qualit\xE9 syst\xE9matique sur multiples appareils : tests de mise en page (du mobile 320px au grand \xE9cran), validation des formulaires et s\xE9curit\xE9 des flux.",
    focusPoints: ["Tests responsive r\xE9els", "Audit d'accessibilit\xE9 & contraste", "Validation anti-injection et gestion d'erreurs"]
  },
  {
    number: "06",
    title: "D\xE9ployer",
    subtitle: "Mise en production & configuration",
    description: "Publication sur des infrastructures fiables, configuration des noms de domaine, des certificats HTTPS et des variables d'environnement s\xE9curis\xE9es.",
    focusPoints: ["Int\xE9gration continue", "Configuration DNS & HTTPS", "V\xE9rification des performances de chargement"]
  },
  {
    number: "07",
    title: "Am\xE9liorer",
    subtitle: "Observation d'usage & \xE9volution",
    description: "Un produit vit apr\xE8s sa livraison : observation des premiers retours utilisateurs r\xE9els, maintenance corrective et ajustements continus.",
    focusPoints: ["Retours d'exp\xE9rience utilisateurs", "Optimisations incr\xE9mentales", "Support technique r\xE9actif"]
  }
];

/* ---- experience ---- */
const EXPERIENCES_DATA = [
  {
    id: "cimif",
    role: "Designer Graphique & Responsable Pr\xE9-Presse",
    company: "CIMIF Imprimerie",
    period: "D\xE9cembre 2025 \u2014 Avril 2026",
    location: "Abidjan, C\xF4te d'Ivoire",
    type: "Mission Professionnelle",
    description: "Prise en charge de la conception visuelle, de la pr\xE9paration des fichiers techniques d'impression et de la relation client au sein d'une structure d'imprimerie et de communication.",
    activities: [
      "Conception graphique de supports de communication visuelle (affiches, brochures, flyers, chartes)",
      "V\xE9rification et normalisation technique des fichiers pour tirage d'impression (profils CMJN, r\xE9solutions, fonds perdus)",
      "Gestion et analyse des demandes clients avec \xE9laboration de devis et m\xE9trages sous Excel",
      "Coordination entre les exigences esth\xE9tiques du client et les contraintes mat\xE9rielles d'atelier"
    ]
  },
  {
    id: "sonapie",
    role: "Stagiaire Consultant Syst\xE8me d'Information",
    company: "H\xF4tel de la Paix / SONAPIE",
    period: "D\xE9cembre 2025 \u2014 Mars 2026",
    location: "C\xF4te d'Ivoire",
    type: "Stage Professionnel",
    description: "Immersion op\xE9rationnelle et analyse syst\xE9mique des processus informatiques, d'accueil et de facturation d'un complexe h\xF4telier.",
    activities: [
      "Analyse des processus informatiques et des flux d'information au niveau de la r\xE9ception et de la caisse",
      "\xC9tude du syst\xE8me de r\xE9servation, de la facturation des nuit\xE9es et de l'attribution des chambres",
      "\xC9valuation des points de friction et des risques d'erreurs dans le suivi de l'\xE9tat d'entretien des chambres",
      "Formulation de recommandations et r\xE9flexion sur la digitalisation des processus internes (base du projet HotelFlow)"
    ]
  }
];
const EDUCATION_DATA = [
  {
    id: "bts-ida",
    degree: "Brevet de Technicien Sup\xE9rieur (BTS)",
    field: "Informatique D\xE9veloppeur d'Applications (IDA)",
    institution: "ISATECH (Institut Sup\xE9rieur d'Application et de Technologie)",
    years: "2023 \u2014 2025",
    status: "Dipl\xF4me Obtenu",
    highlights: [
      "1\xE8re ann\xE9e (2023\u20132024) : Fondamentaux de l'algorithmique, programmation proc\xE9durale, mod\xE9lisation relationnelle (Merise / SQL), architecture mat\xE9rielle et r\xE9seaux.",
      "2\xE8me ann\xE9e (2024\u20132025) : D\xE9veloppement d'applications orient\xE9es objet, programmation web (PHP, JavaScript), bases de donn\xE9es relationnelles avanc\xE9es et r\xE9alisation de projet de fin de cycle."
    ]
  }
];
