import { ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage({ onBackToHome }: { onBackToHome: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-950/60 text-[#FF5500] border border-orange-200 dark:border-orange-900">
          <span className="font-mono text-2xl font-bold">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
            Cette page a quitté le réseau.
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            L'URL demandée n'existe pas ou a été déplacée vers une nouvelle architecture.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#FF5500] hover:bg-orange-600 rounded-xl shadow-sm transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour au portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
}
