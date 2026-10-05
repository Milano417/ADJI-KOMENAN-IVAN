import { useState } from 'react';
import { SKILLS_DATA, TECH_WALL } from '../data/skills';
import { Cpu, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(SKILLS_DATA[0].id);

  const activeCategory = SKILLS_DATA.find((c) => c.id === activeCategoryId) || SKILLS_DATA[0];

  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#FF5500] dark:text-[#FFE7D6]">
            03 · Compétences & Technologies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Savoir-faire technique par la preuve
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Pas de faux pourcentages ni de jauges arbitraires : un socle de compétences concrètes, éprouvées sur des projets déployés et des systèmes opérationnels.
          </p>
        </div>

        {/* Category Tabs (Functional segmented filter controls) */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/60 dark:bg-slate-800/60 rounded-2xl w-fit">
          {SKILLS_DATA.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-[#FF5500] dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              {activeCategory.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {activeCategory.shortDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2 hover:border-[#FF5500]/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#FF5500] dark:text-[#FFE7D6]">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 19: Tech Wall */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
              Technologies & Écosystème Quotidien
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {TECH_WALL.map((tech) => (
              <div
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:border-[#FF5500] hover:text-[#FF5500] transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Section 20: MILANO + IA Differentiation Banner */}
        <div className="rounded-3xl p-8 bg-gradient-to-br from-orange-950 via-slate-900 to-slate-950 text-white border border-orange-800/50 shadow-xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5500]/20 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#FFE7D6]">
              <Sparkles className="w-4 h-4 text-[#FFE7D6]" />
              <span>APPROCHE HYBRIDE · MILANO + IA</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              « Je combine développement logiciel, design et outils d'intelligence artificielle pour accélérer la conception et améliorer la qualité des produits numériques. »
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Pour moi, l'intelligence artificielle n'est pas un substitut au développeur, mais un puissant amplificateur de productivité. Elle permet d'explorer plus rapidement les hypothèses architecturales, d'automatiser les tests de non-régression et d'affiner l'expérience utilisateur, tandis que mon esprit critique d'ingénieur garantit la sécurité, la structure des bases de données et la pertinence métier.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FFE7D6]" />
                <span>Vélocité de prototypage ×3</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFE7D6]" />
                <span>Rigueur de typage & sécurité</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FFE7D6]" />
                <span>Architecture 100% maîtrisée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
