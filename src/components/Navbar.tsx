import { useState, useEffect } from 'react';
import { Compass, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { Analytics } from "@vercel/analytics/next"
interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onStartTour: () => void;
  onTriggerEasterEgg: () => void;
}

export default function Navbar({
  darkMode,
  onToggleDarkMode,
  onStartTour,
  onTriggerEasterEgg,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'services', 'projects', 'workflow', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 5) {
      onTriggerEasterEgg();
      setLogoClicks(0);
    }
  };

  const navLinks = [
    { label: 'Accueil', href: '#hero', id: 'hero' },
    { label: 'À propos', href: '#about', id: 'about' },
    { label: 'Compétences', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projets', href: '#projects', id: 'projects' },
    { label: 'Parcours', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={handleLogoClick}
            className="group text-left focus-visible:outline-hidden"
            title="MILANO · Développeur Web & Mobile"
            aria-label="MILANO Accueil"
          >
            <span className="font-display text-xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-[#FF5500]">
              ADJI KOMENAN IVAN
            </span>
          </button>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#FF5500] dark:text-[#FFE7D6] font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5500] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Tour, Dark Mode, Contact CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Guided Tour Trigger */}
            <button
              onClick={onStartTour}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-[#FF5500] dark:hover:text-[#FFE7D6] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
              title="Lancer la visite guidée"
              aria-label="Visite guidée interactive"
            >
              <Compass className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="hidden sm:inline">Visite guidée</span>
            </button>

            {/* Dark Mode Switch */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label={darkMode ? 'Basculer en mode clair' : 'Basculer en mode sombre'}
              title={darkMode ? 'Mode clair' : 'Mode sombre'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#FF5500] hover:bg-orange-600 rounded-lg shadow-xs shadow-orange-500/20 transition-all hover:translate-y-[-1px] whitespace-nowrap"
            >
              <span>Parlons de votre projet</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-orange-50 dark:bg-orange-950/40 text-[#FF5500] dark:text-[#FFE7D6]'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#FF5500] hover:bg-orange-600 rounded-lg"
              >
                <span>Parlons de votre projet</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
