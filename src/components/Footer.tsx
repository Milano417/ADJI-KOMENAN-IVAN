import { PROFILE_DATA } from '../data/profile';
import { Compass, ArrowUp, Mail, Github, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  onRestartTour: () => void;
}

export default function Footer({ onRestartTour }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projets', href: '#projects' },
    { label: 'Méthodologie', href: '#workflow' },
    { label: 'Expériences', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Description (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white block">
                {PROFILE_DATA.fullName}
              </span>
              <span className="text-sm font-mono text-[#FFE7D6]">
                « {PROFILE_DATA.professionalName} » · {PROFILE_DATA.role}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Conception et développement de solutions logicielles complètes, d'applications mobiles réactives et d'identités visuelles à fort impact.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {PROFILE_DATA.socials.linkedin && (
                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#FF5500] transition-colors"
                  aria-label="LinkedIn de Milano"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {PROFILE_DATA.socials.github && (
                <a
                  href={PROFILE_DATA.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#FF5500] transition-colors"
                  aria-label="GitHub de Milano"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#FF5500] transition-colors"
                aria-label="Envoyer un email à Milano"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Guided Tour & Action (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
              Interactivité
            </span>
            <div className="space-y-2">
              <button
                onClick={onRestartTour}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#FFE7D6] bg-orange-950/70 hover:bg-orange-900/90 border border-orange-800/60 rounded-xl transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Rejouer la visite</span>
              </button>

              <button
                onClick={scrollToTop}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Haut de page</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 MILANO. Tous droits réservés.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Conçu & développé avec rigueur et passion à Abidjan
          </p>
        </div>
      </div>
    </footer>
  );
}
