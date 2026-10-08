import { ArrowDown, ArrowUpRight, FileText, Sparkles, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface HeroSectionProps {
  onOpenCV: () => void;
}

export default function HeroSection({ onOpenCV }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-subtle"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#FF5500]/10 via-[#FFE7D6]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typographic Identity */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Petit label unboxed without pills */}
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#FF5500] dark:text-[#FFE7D6]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span>WEB & MOBILE DEVELOPER · DIGITAL CREATOR · GRAPHIC DESIGNER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
                Je transforme des idées en{' '}
                <span className="text-[#FF5500] dark:text-orange-400">
                  expériences digitales.
                </span>
              </h1>

              {/* Subheading with full name & Milano callout */}
              <div className="pt-2 flex flex-wrap items-baseline gap-2">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                  {PROFILE_DATA.fullName}
                </span>
                <span className="text-sm font-mono text-slate-400">/</span>
                <span className="font-mono text-sm sm:text-base font-semibold text-[#FF5500] dark:text-[#FFE7D6]">
                  « {PROFILE_DATA.professionalName} »
                </span>
              </div>
            </div>

            {/* Presentation paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {PROFILE_DATA.tagline} {PROFILE_DATA.shortBio}
            </p>

            {/* Quick Proof Points */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400 pt-2 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Full-Stack & UI/UX</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">Disponible pour projets</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#FF5500] hover:bg-orange-600 rounded-xl shadow-md shadow-orange-500/25 transition-all hover:translate-y-[-2px]"
              >
                <span>Découvrir mon travail</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xs transition-all hover:translate-y-[-2px]"
              >
                <span>Me contacter</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#FF5500] dark:hover:text-white transition-colors"
                title="Consulter et télécharger le CV"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-[#FF5500]" />
                <span>Voir mon CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Professional Portrait Integration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer frame styling */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-orange-950/5 aspect-3/4 group">
                <img
                  src="/src/assets/images/ivane.png"
                  alt="Portrait officiel de Adji Komenan Ivan « Milano »"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Refined gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Bottom overlay card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-white/20 dark:border-slate-800/80 shadow-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      ADJI IVAN
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      En ligne
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Développeur Web & Mobile · Créateur Digital
                  </p>
                </div>
              </div>

              {/* Decorative accent element behind */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF5500]/15 rounded-3xl -z-10 blur-xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 sm:pt-20 flex flex-col items-center justify-center gap-2">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-[#FF5500] transition-colors"
            aria-label="Faire défiler vers la section À propos"
          >
            <span className="font-mono text-[11px] tracking-wider uppercase">Explorer mon univers</span>
            <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-[#FF5500] group-hover:translate-y-1 transition-all">
              <ArrowDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#FF5500]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
