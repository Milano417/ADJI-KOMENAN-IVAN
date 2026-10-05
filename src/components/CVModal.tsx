import { useEffect } from 'react';
import { X, Printer, Mail, MapPin, Award, CheckCircle } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { EXPERIENCES_DATA, EDUCATION_DATA } from '../data/experience';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[92vh] flex flex-col print:shadow-none print:border-none print:max-w-none print:max-h-none print:m-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm text-slate-900 dark:text-white">Curriculum Vitæ</span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-500 font-mono">Format Professionnel</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#FF5500] hover:bg-orange-600 rounded-lg shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / Sauvegarder PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Fermer le CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-slate-800 dark:text-slate-200 print:p-0 print:text-black">
          {/* Top CV Hero */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 id="cv-title" className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white print:text-black">
                  {PROFILE_DATA.fullName}
                </h1>
                <p className="text-sm font-semibold text-[#FF5500] dark:text-[#FFE7D6] mt-0.5 print:text-orange-600">
                  {PROFILE_DATA.professionalName} · {PROFILE_DATA.role}
                </p>
              </div>
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400 print:text-slate-700 sm:text-right">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PROFILE_DATA.location}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`mailto:${PROFILE_DATA.email}`} className="hover:underline">
                    {PROFILE_DATA.email}
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 print:text-slate-700 leading-relaxed pt-2">
              {PROFILE_DATA.shortBio}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5500] dark:text-[#FFE7D6] print:text-orange-600">
              Compétences Clés
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">Développement Web & Mobile</span>
                <p className="text-slate-600 dark:text-slate-400">React, TypeScript, JavaScript (ES6+), PHP, MySQL, Tailwind CSS, HTML5/CSS3, PWA</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">UI/UX & Design Graphique</span>
                <p className="text-slate-600 dark:text-slate-400">Conception d'interfaces, Wireframes, Figma, Photoshop, Illustrator, Identités visuelles</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">Architecture & Données</span>
                <p className="text-slate-600 dark:text-slate-400">Modélisation relationnelle (Merise/SQL), DBeaver, logique métier, APIs RESTful</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">Méthodes & Outils</span>
                <p className="text-slate-600 dark:text-slate-400">Git/GitHub, VS Code, Vercel, Outils d'assistance IA, Rigueur qualité & accessibilité</p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5500] dark:text-[#FFE7D6] print:text-orange-600">
              Expériences Professionnelles
            </h2>
            <div className="space-y-4">
              {EXPERIENCES_DATA.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#FF5500] pl-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white print:text-black">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {exp.company} · {exp.location}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pt-0.5 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="pt-1 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {exp.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#FF5500]">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5500] dark:text-[#FFE7D6] print:text-orange-600">
              Formation & Diplômes
            </h2>
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.id} className="border-l-2 border-emerald-500 pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white print:text-black">
                    {edu.degree} — {edu.field}
                  </h3>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{edu.status} · {edu.years}</span>
                </div>
                <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  {edu.institution}
                </div>
                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400 pt-1">
                  {edu.highlights.map((h, i) => (
                    <p key={i}>{h}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notable Projects */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5500] dark:text-[#FFE7D6] print:text-orange-600">
              Projets Phares Réalisés
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              <div>
                <span className="font-bold">MILAWEB :</span> Écosystème web et solutions logicielles modulaires.
              </div>
              <div>
                <span className="font-bold">HotelFlow :</span> Système complet de gestion d'hôtellerie & réservations (PHP/MySQL).
              </div>
              <div>
                <span className="font-bold">CaisPro :</span> Application de caisse commerciale et suivi financier.
              </div>
              <div>
                <span className="font-bold">ISATECH Portal :</span> Plateforme académique et gestion des programmes.
              </div>
            </div>
          </div>
        </div>

        {/* Footer print note */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-500 flex items-center justify-between print:hidden">
          <span>Adji Komenan Ivan · Portfolio certifié 2026</span>
          <button
            onClick={onClose}
            className="px-3 py-1 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
