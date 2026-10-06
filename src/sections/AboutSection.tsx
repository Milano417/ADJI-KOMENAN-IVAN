import { PROFILE_DATA } from '../data/profile';
import { ArrowUpRight, Code, Palette, Smartphone, Lightbulb, Brain, Layers, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  onOpenCV: () => void;
}

export default function AboutSection({ onOpenCV }: AboutSectionProps) {
  const pillars = [
    {
      icon: Code,
      title: "Code Propre & Robuste",
      desc: "Développement full-stack (React, TypeScript, PHP, MySQL) structuré selon les standards modernes, garantissant évolutivité et maintenabilité."
    },
    {
      icon: Palette,
      title: "Sensibilité Design & UI/UX",
      desc: "Une culture visuelle aiguisée par l'imprimerie et le graphisme : chaque interface est épurée, ergonomique et centrée utilisateur."
    },
    {
      icon: Smartphone,
      title: "Mobile & Multi-Plateforme",
      desc: "Création d'expériences optimisées pour les usages réels en Afrique de l'Ouest : rapidité, zones tactiles intuitives et résilience réseau."
    },
    {
      icon: Brain,
      title: "Ingénierie Assistée par IA",
      desc: "Utilisation des outils d'intelligence artificielle pour accélérer le prototypage, sécuriser les flux et concevoir des solutions innovantes."
    }
  ];

  const milestones = [
    {
      year: "2023 – 2025",
      title: "Formation BTS Informatique Développeur d'Applications",
      place: "ISATECH · Abidjan",
      detail: "Acquisition des fondements de l'algorithmique, de la modélisation Merise/SQL, de la programmation web et de la conception logicielle."
    },
    {
      year: "Fin 2025",
      title: "Conseil & Digitalisation en Système d'Information",
      place: "Hôtel de la Paix / SONAPIE",
      detail: "Immersion opérationnelle, analyse des flux de réception, facturation et modélisation du prototype HotelFlow."
    },
    {
      year: "2025 – 2026",
      title: "PAO & Communication Visuelle",
      place: "CIMIF Imprimerie",
      detail: "Rigueur technique du print, conception de chartes graphiques professionnelles et gestion des spécifications d'impression."
    },
    {
      year: "2026",
      title: "Lancement de MILAWEB & Projets Métiers",
      place: "Écosystème Digital Indépendant",
      detail: "Développement de solutions complètes (MILAWEB, CaisPro, AlertCI, Milyshop) du cahier des charges jusqu'au produit final."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#FF5500] dark:text-[#FFE7D6]">
            02 · Storytelling & Vision
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Derrière ADJI IVAN
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Comprendre le problème avant d'écrire une seule ligne de code : telle est ma définition de l'ingénierie numérique.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Je m'appelle <strong className="text-slate-900 dark:text-white font-semibold">ADJI KOMENAN IVAN FLORIAN EKRA</strong>, plus connu sous le nom de <strong className="text-[#FF5500] dark:text-[#FFE7D6] font-semibold">MILANO</strong>. Je suis un jeune développeur et créateur digital ivoirien basé à Abidjan.
              </p>
              <p>
                Mon approche se distingue par une double compétence rare : la rigueur de l'architecture logicielle full-stack alliée à la sensibilité du design graphique. Ayant exercé en environnement d'imprimerie (CIMIF) et dans le conseil opérationnel de systèmes d'information (Hôtel de la Paix / SONAPIE), je sais que le succès d'un outil digital ne se mesure pas au nombre de lignes de code, mais à son adoption par les utilisateurs finaux.
              </p>
              <p>
                Qu'il s'agisse de concevoir un système de caisse pour un commerce local, une plateforme de gestion hôtelière ou une présence en ligne institutionnelle, je m'assure que chaque interaction soit limpide, performante et directement rentable pour l'organisation.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-2 hover:border-[#FF5500]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-950/60 flex items-center justify-center text-[#FF5500]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#FF5500] hover:bg-orange-600 rounded-lg shadow-sm transition-all"
              >
                <span>Consulter le CV complet</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#workflow"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Découvrir ma méthode de travail</span>
                <span className="text-[#FF5500]">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Milestones Timeline */}
          <div className="lg:col-span-5 space-y-8">
            {/* Work & Creative Portrait */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 aspect-4/3 relative shadow-md">
              <img
                src="/src/assets/images/ivane1.png"
                alt="Adji Komenan Ivan Milano en atelier créatif"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-mono">
                ADJI IVAN · En studio créatif & technique
              </div>
            </div>

            {/* Visual Milestones Timeline */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-4">
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#FF5500]" />
                <span>Parcours d'évolution</span>
              </h3>

              <div className="space-y-4 border-l border-orange-200 dark:border-orange-900/60 ml-2 pl-4">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative space-y-0.5">
                    <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#FF5500] ring-4 ring-white dark:ring-slate-900" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#FF5500] dark:text-[#FFE7D6]">
                        {item.year}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.place}
                      </span>
                    </div>
                    <h4 className="font-display font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
