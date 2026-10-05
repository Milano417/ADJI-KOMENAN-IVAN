import { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/projects';
import { ArrowUpRight, ExternalLink, Github, Eye, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectsSection({ onOpenCaseStudy }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'system' | 'web' | 'ecommerce' | 'brand'>('all');

  const filterTabs = [
    { key: 'all', label: 'Tous les projets' },
    { key: 'system', label: 'Systèmes de Gestion' },
    { key: 'web', label: 'Applications Web' },
    { key: 'ecommerce', label: 'E-Commerce' },
    { key: 'brand', label: 'Branding & Print' },
  ] as const;

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.categoryKey === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50/50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#FF5500] dark:text-[#FFE7D6]">
              05 · Réalisations & Études de Cas
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Projets réels, architecture & conception
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Chaque projet ci-dessous représente une problématique concrète analysée et résolue. Cliquez sur un projet pour consulter son étude de cas détaillée.
            </p>
          </div>

          {/* Interactive filter control tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-200/60 dark:bg-slate-800/60 rounded-xl shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === tab.key
                    ? 'bg-white dark:bg-slate-900 text-[#FF5500] dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Bento / Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#FF5500]/50 transition-all duration-300"
            >
              {/* Media Container with Zoom Hover */}
              <div
                onClick={() => onOpenCaseStudy(project)}
                className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-semibold shadow-md">
                    <Eye className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Consulter l'étude de cas</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  {/* Category & Year unboxed line */}
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="text-[#FF5500] dark:text-[#FFE7D6] font-semibold">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3
                    onClick={() => onOpenCaseStudy(project)}
                    className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-[#FF5500] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1 line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Tech list & Action Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={tech} className="inline-flex items-center gap-1.5">
                        <span>{tech}</span>
                        {i < Math.min(2, project.technologies.length - 1) && (
                          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                        )}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-slate-400">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF5500] dark:text-[#FFE7D6] hover:underline"
                    >
                      <span>Étude de cas</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 inline-flex items-center gap-1"
                        title="Consulter le lien"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
