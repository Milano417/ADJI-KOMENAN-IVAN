import { useState, FormEvent } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight, Github, Linkedin } from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
}

export default function ContactSection({ initialProjectType = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: initialProjectType || 'Site web',
    message: '',
    honeypot: '', // anti-spam
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Site web',
    'Application web',
    'Application mobile',
    'Design',
    'Solution digitale',
    'Autre',
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot verification
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Veuillez saisir une adresse email valide.');
      return;
    }

    setStatus('submitting');

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        projectType: 'Site web',
        message: '',
        honeypot: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#FF5500] dark:text-[#FFE7D6]">
            08 · Contact Direct & Collaboration
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Parlons de votre projet.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Vous avez une idée, un projet ou un besoin numérique ? Échangeons sur la meilleure manière de le transformer en solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-6">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Coordonnées directes
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Réponse garantie sous 24h ouvrées.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-[#FF5500] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-orange-950 flex items-center justify-center text-[#FF5500] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-slate-400 block font-mono">Email professionnel</span>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-[#FF5500] transition-colors truncate block">
                      {PROFILE_DATA.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Localisation</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {PROFILE_DATA.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Réseaux Professionnels
                </span>
                <div className="flex flex-wrap gap-2">
                  {PROFILE_DATA.socials.linkedin && (
                    <a
                      href={PROFILE_DATA.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#FF5500] hover:text-[#FF5500] transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </a>
                  )}

                  {PROFILE_DATA.socials.github && (
                    <a
                      href={PROFILE_DATA.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#FF5500] hover:text-[#FF5500] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-5"
            >
              {/* Spam honeypot field - hidden */}
              <input
                type="text"
                name="user_nickname"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-emerald-900 dark:text-emerald-200">
                      Message envoyé avec succès.
                    </h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                      Merci pour votre sollicitation. Je reviendrai vers vous très rapidement par email.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-rose-800 dark:text-rose-200 font-medium">
                    {errorMessage}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nom */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Nom complet <span className="text-[#FF5500]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="ex. Jean Marc Koffi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Email professionnel <span className="text-[#FF5500]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="ex. contact@entreprise.ci"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Sujet */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Sujet de l'échange
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="ex. Refonte de plateforme web"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all"
                  />
                </div>

                {/* Type de projet */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-project-type" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Type de projet
                  </label>
                  <select
                    id="contact-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Votre message ou description du besoin <span className="text-[#FF5500]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Décrivez brièvement les objectifs de votre projet, les fonctionnalités souhaitées ou votre calendrier..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  * Champs obligatoires
                </span>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#FF5500] hover:bg-orange-600 rounded-xl shadow-md shadow-orange-500/20 transition-all hover:translate-y-[-1px] disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
