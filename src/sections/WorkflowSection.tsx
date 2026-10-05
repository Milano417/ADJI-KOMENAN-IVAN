import { WORK_PROCESS_STEPS } from '../data/process';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#FF5500] dark:text-[#FFE7D6]">
            06 · Méthodologie & Rigueur
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comment je travaille
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Un processus structuré en 7 étapes séquentielles, garantissant clarté, anticipation des risques et livraison dans les délais.
          </p>
        </div>

        {/* 7-Step Workflow Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {WORK_PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className={`p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-4 hover:border-[#FF5500]/50 transition-colors ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3 bg-orange-50/40 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900/40' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-[#FF5500] dark:text-[#FFE7D6]">
                  {step.number}
                </span>
                <span className="text-xs font-mono text-slate-400">Étape {idx + 1}/7</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-[#FF5500] dark:text-[#FFE7D6]">
                  {step.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>

              <div className="pt-2 space-y-1 border-t border-slate-100 dark:border-slate-800">
                {step.focusPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-[#FF5500]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
