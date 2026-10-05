import { useEffect, useState } from 'react';

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Quick, elegant 600ms display then fade out smoothly
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(onFinish, 300);
    }, 600);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-950 transition-opacity duration-300 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FF5500] text-white shadow-lg shadow-orange-500/25">
          <span className="font-display text-2xl font-bold tracking-tighter">M</span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFE7D6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg tracking-wider text-slate-900 dark:text-white">
            ADJI IVAN-CODEV
          </span>
          <span className="text-xs text-orange-600 dark:text-orange-400 font-mono font-medium">
            · digital-dev studio
          </span>
        </div>
        <div className="w-24 h-0.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
          <div className="h-full bg-[#FF5500] w-full animate-[pulse_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
