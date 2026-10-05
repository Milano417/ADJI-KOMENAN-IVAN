import { useEffect } from 'react';
import { Zap, X } from 'lucide-react';

interface EasterEggBannerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EasterEggBanner({ isOpen, onClose }: EasterEggBannerProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 max-w-sm animate-in fade-in slide-in-from-top-3 duration-200">
      <div className="flex items-center gap-3 p-4 bg-slate-900 text-white border border-[#FF5500]/60 rounded-2xl shadow-xl shadow-orange-500/20 backdrop-blur-md">
        <div className="w-8 h-8 rounded-xl bg-[#FF5500] flex items-center justify-center text-white shrink-0">
          <Zap className="w-4 h-4 fill-white" />
        </div>
        <div className="space-y-0.5 pr-2">
          <p className="font-display font-bold text-xs tracking-wider text-[#FFE7D6]">
           ADJI IVAN MODE ⚡ ACTIVÉ
          </p>
          <p className="text-xs text-slate-300">
            Vélocité maximale, code affûté et précision créative !
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-md"
          aria-label="Fermer la notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
