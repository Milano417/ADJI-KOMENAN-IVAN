export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  activities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  years: string;
  status: string;
  highlights: string[];
}

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "cimif",
    role: "Designer Graphique & Responsable Pré-Presse",
    company: "CIMIF Imprimerie",
    period: "Décembre 2025 — Avril 2026",
    location: "Abidjan, Côte d'Ivoire",
    type: "Mission Professionnelle",
    description: "Prise en charge de la conception visuelle, de la préparation des fichiers techniques d'impression et de la relation client au sein d'une structure d'imprimerie et de communication.",
    activities: [
      "Conception graphique de supports de communication visuelle (affiches, brochures, flyers, chartes)",
      "Vérification et normalisation technique des fichiers pour tirage d'impression (profils CMJN, résolutions, fonds perdus)",
      "Gestion et analyse des demandes clients avec élaboration de devis et métrages sous Excel",
      "Coordination entre les exigences esthétiques du client et les contraintes matérielles d'atelier"
    ]
  },
  {
    id: "sonapie",
    role: "Stagiaire Consultant Système d'Information",
    company: "Hôtel de la Paix / SONAPIE",
    period: "Décembre 2025 — Mars 2026",
    location: "Côte d'Ivoire",
    type: "Stage Professionnel",
    description: "Immersion opérationnelle et analyse systémique des processus informatiques, d'accueil et de facturation d'un complexe hôtelier.",
    activities: [
      "Analyse des processus informatiques et des flux d'information au niveau de la réception et de la caisse",
      "Étude du système de réservation, de la facturation des nuitées et de l'attribution des chambres",
      "Évaluation des points de friction et des risques d'erreurs dans le suivi de l'état d'entretien des chambres",
      "Formulation de recommandations et réflexion sur la digitalisation des processus internes (base du projet HotelFlow)"
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bts-ida",
    degree: "Brevet de Technicien Supérieur (BTS)",
    field: "Informatique Développeur d'Applications (IDA)",
    institution: "ISATECH (Institut Supérieur d'Application et de Technologie)",
    years: "2023 — 2025",
    status: "Diplôme Obtenu",
    highlights: [
      "1ère année (2023–2024) : Fondamentaux de l'algorithmique, programmation procédurale, modélisation relationnelle (Merise / SQL), architecture matérielle et réseaux.",
      "2ème année (2024–2025) : Développement d'applications orientées objet, programmation web (PHP, JavaScript), bases de données relationnelles avancées et réalisation de projet de fin de cycle."
    ]
  }
];
