import { EXPERIENCES_DATA, EDUCATION_DATA } from '../data/experience';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-50/50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#FF5500] dark:text-[#FFE7D6]">
            07 · Expériences & Formation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Parcours professionnel & académique
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Une trajectoire bâtie sur le terrain : formation d'ingénierie applicative, missions en imprimerie de production et audit des processus d'accueil hôtelier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Professional Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <Briefcase className="w-4 h-4 text-[#FF5500]" />
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Expériences Professionnelles
              </h3>
            </div>

            <div className="space-y-6">
              {EXPERIENCES_DATA.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 hover:border-[#FF5500]/40 transition-colors shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono text-[#FF5500] dark:text-[#FFE7D6] font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 font-medium">
                    <span className="text-slate-700 dark:text-slate-300 font-semibold">{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-slate-400">{exp.type}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Activités Réalisées
                    </span>
                    {exp.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Formation Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <GraduationCap className="w-4 h-4 text-emerald-500" />
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Diplômes & Formation
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        {edu.status}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{edu.years}</span>
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-[#FF5500] dark:text-[#FFE7D6]">
                      {edu.field}
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 font-medium">
                    Établissement : <strong className="text-slate-800 dark:text-slate-200">{edu.institution}</strong>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Parcours de Validation
                    </span>
                    {edu.highlights.map((h, i) => (
                      <p key={i} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {h}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Extensible placeholder note */}
              <div className="p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-700 text-xs text-slate-500 text-center">
                Section extensible pour formations continues et certifications spécialisées futures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
