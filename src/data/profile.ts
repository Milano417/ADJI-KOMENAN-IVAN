export interface ProfileData {
  fullName: string;
  professionalName: string;
  role: string;
  tagline: string;
  shortBio: string;
  detailedBio: string[];
  location: string;
  email: string;
  status: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    whatsapp?: string;
    email?: string;
  };
  keyHighlights: {
    label: string;
    detail: string;
  }[];
  identityKeywords: string[];
}

export const PROFILE_DATA: ProfileData = {
  fullName: "ADJI KOMENAN IVAN FLORIAN EKRA",
  professionalName: "MILANO",
  role: "Web & Mobile Developer · Digital Creator · Graphic Designer",
  tagline: "Je transforme des idées en expériences digitales modernes, utiles et performantes.",
  shortBio: "Jeune développeur et créateur digital ivoirien basé à Abidjan. Je conçois et développe des produits numériques complets — du concept UX/UI et de l'architecture logicielle jusqu'au déploiement en production.",
  detailedBio: [
    "Passionné par l'artisanat numérique, je combine rigueur d'ingénierie et sensibilité visuelle. Mon travail repose sur une conviction : un code propre n'a de valeur que s'il résout un problème humain et concret.",
    "Formé en Informatique Développeur d'Applications (BTS IDA à l'ISATECH), j'ai consolidé mon savoir-faire au fil de projets réels : plateformes SaaS, logiciels de gestion hôtelière et commerciale, applications mobiles et identités de marque.",
    "Je m'intéresse activement au développement full-stack moderne, aux technologies émergentes et aux flux de travail assistés par intelligence artificielle pour accélérer le prototypage sans jamais sacrifier la robustesse architecturale."
  ],
  location: "Abidjan, Côte d'Ivoire",
  email: "adjikomenan@gmail.com",
  status: "Disponible pour nouveaux projets & collaborations",
  socials: {
    github: "https://github.com/Milano417",
    linkedin: "https://www.linkedin.com/in/adji-komenan-ivan-0248a3350",
    email: "mailto:adjikomenan@gmail.com"
  },
  keyHighlights: [
    { label: "Spécialisation", detail: "Full-Stack Web & Mobile" },
    { label: "Approche", detail: "Design Produit + Code Propre" },
    { label: "Diplôme", detail: "BTS IDA (ISATECH)" },
    { label: "Localisation", detail: "Abidjan, Côte d'Ivoire" }
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
