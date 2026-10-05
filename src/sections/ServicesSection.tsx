import { SERVICES_DATA } from '../data/services';
import { Globe, Laptop, Smartphone, Cpu, Layout, Palette, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'globe': return Globe;
      case 'laptop': return Laptop;
      case 'smartphone': return Smartphone;
      case 'cpu': return Cpu;
      case 'layout': return Layout;
      case 'palette': return Palette;
      case 'sparkles': return Sparkles;
      default: return Globe;
    }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#FF5500] dark:text-[#FFE7D6]">
            04 · Services & Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Des réponses précises à chaque enjeu numérique
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            De la vitrine institutionnelle jusqu'au système d'information complet, j'accompagne entreprises, créateurs et organisations avec une exigence de résultats concrets.
          </p>
        </div>

        {/* 7 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-[#FF5500]/60 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Top card bar with number and icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950 flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-[#FF5500] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-[#FF5500] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables list */}
                  <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Livrables Clés
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Target & Action Button */}
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 italic max-w-[170px] truncate">
                    {service.idealFor}
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF5500] dark:text-[#FFE7D6] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{service.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
