import { useEffect } from 'react';
import { Project } from '../data/projects';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Compass, AlertCircle } from 'lucide-react';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectCaseStudyModal({
  project,
  onClose,
}: ProjectCaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm z-10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#FF5500] dark:text-[#FFE7D6]">
              Étude de cas · {project.category}
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-xs text-slate-500 font-mono">{project.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Fermer l'étude de cas"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Banner */}
          <div className="space-y-4">
            <h2 id="case-study-title" className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {project.subtitle}
            </p>

            {/* Metadata line without pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Rôle :</span>
              <span>{project.role}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Année :</span>
              <span>{project.year}</span>
            </div>

            {/* Showcase Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 aspect-16/9 shadow-inner">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* External Links */}
            {(project.demoUrl || project.githubUrl) && (
              <div className="flex items-center gap-3 pt-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#FF5500] hover:bg-orange-600 rounded-lg shadow-sm transition-colors"
                  >
                    <span>Consulter le projet</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code source</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Structured 7-Step Case Study */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* 01 — Le problème */}
            <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-[#FF5500] dark:text-[#FFE7D6]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">01 · Le Problème</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* 02 — La réflexion */}
            <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-[#FF5500] dark:text-[#FFE7D6]">
                <Compass className="w-4 h-4 shrink-0" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">02 · La Réflexion</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.reflection}
              </p>
            </div>

            {/* 03 — La solution */}
            <div className="md:col-span-2 p-5 rounded-2xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/40 space-y-2">
              <div className="flex items-center gap-2 text-[#FF5500] dark:text-[#FFE7D6]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">03 · La Solution Conçue</span>
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>

            {/* 04 — Design & Ergonomie */}
            <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-[#FF5500] dark:text-[#FFE7D6]">
                <Layers className="w-4 h-4 shrink-0" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">04 · Design & Interfaces</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {project.caseStudy.designHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF5500] font-bold">›</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 05 — Développement & Architecture */}
            <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-[#FF5500] dark:text-[#FFE7D6]">
                <Cpu className="w-4 h-4 shrink-0" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">05 · Développement & Stack</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {project.caseStudy.devArchitecture.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF5500] font-bold">›</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 06 — Fonctionnalités Clés */}
            <div className="md:col-span-2 p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5500] dark:text-[#FFE7D6]">
                06 · Principales Fonctionnalités
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {project.caseStudy.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 07 — Résultat Réel Documenté */}
            <div className="md:col-span-2 p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/40 space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                07 · Résultat Documenté
              </span>
              <p className="text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-medium">
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>

          {/* Tech Stack list at bottom */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Technologies mobilisées :</span>
            {project.technologies.map((tech, i) => (
              <span key={tech} className="inline-flex items-center gap-2">
                <span>{tech}</span>
                {i < project.technologies.length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between shrink-0">
          <p className="text-xs text-slate-500">
            Étude de cas réalisée et validée par MILANO
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
