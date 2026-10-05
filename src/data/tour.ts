export interface TourStep {
  step: number;
  targetId: string;
  title: string;
  description: string;
  badge: string;
}

export const TOUR_STEPS: TourStep[] = [
  {
    step: 1,
    targetId: "hero",
    title: "Bienvenue dans mon univers digital",
    description: "Voici qui je suis et ce que je fais. Je transforme des idées en expériences numériques modernes, utiles et performantes.",
    badge: "01 / 07 · Identité"
  },
  {
    step: 2,
    targetId: "about",
    title: "Derrière MILANO",
    description: "Découvrez mon parcours, ma philosophie de travail et ma passion pour la résolution de problèmes par le code et le design.",
    badge: "02 / 07 · Storytelling"
  },
  {
    step: 3,
    targetId: "skills",
    title: "Compétences & Technologies",
    description: "Voici les technologies et domaines dans lesquels je travaille au quotidien : Frontend, Backend, Mobile, UI/UX et outils modernes.",
    badge: "03 / 07 · Expertise"
  },
  {
    step: 4,
    targetId: "services",
    title: "Services & Solutions Proposées",
    description: "Découvrez les solutions concrètes que je peux apporter à votre entreprise ou organisation, de la maquette jusqu'au produit déployé.",
    badge: "04 / 07 · Solutions"
  },
  {
    step: 5,
    targetId: "projects",
    title: "Projets & Études de Cas",
    description: "Explorez mes réalisations concrètes : chaque projet illustre un problème précis, une méthode d'analyse et une solution technique.",
    badge: "05 / 07 · Réalisations"
  },
  {
    step: 6,
    targetId: "experience",
    title: "Expériences & Formation",
    description: "Consultez mon parcours professionnel en entreprise (imprimerie, conseil en système d'information) et mon diplôme BTS IDA.",
    badge: "06 / 07 · Parcours"
  },
  {
    step: 7,
    targetId: "contact",
    title: "Parlons de votre projet",
    description: "Vous avez une idée, un besoin de digitalisation ou une opportunité de collaboration ? Échangeons directement.",
    badge: "07 / 07 · Contact"
  }
];
