import { useState, useEffect } from 'react';
import { TOUR_STEPS } from '../data/tour';
import { ArrowLeft, ArrowRight, X, Compass, Sparkles } from 'lucide-react';

interface GuidedTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialWelcome?: boolean;
}

export default function GuidedTourModal({
  isOpen,
  onClose,
  initialWelcome = false,
}: GuidedTourModalProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(initialWelcome);

  useEffect(() => {
    if (initialWelcome) {
      setShowWelcome(true);
    }
  }, [initialWelcome]);

  useEffect(() => {
    if (isOpen && !showWelcome) {
      const step = TOUR_STEPS[currentStepIndex];
      if (step) {
        const targetElement = document.getElementById(step.targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, [isOpen, currentStepIndex, showWelcome]);

  if (!isOpen) return null;

  const currentStep = TOUR_STEPS[currentStepIndex];
  const progressPercent = ((currentStepIndex + 1) / TOUR_STEPS.length) * 100;

  const handleNext = () => {
    if (currentStepIndex < TOUR_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      localStorage.setItem('milano_tour_completed', 'true');
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleStartFromWelcome = () => {
    setShowWelcome(false);
    setCurrentStepIndex(0);
  };

  const handleDismissWelcome = () => {
    localStorage.setItem('milano_tour_completed', 'true');
    setShowWelcome(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-heading"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-200"
    >
      <div className="bg-white dark:bg-slate-900 border border-orange-200/80 dark:border-orange-900/50 rounded-2xl shadow-2xl p-5 sm:p-6 backdrop-blur-md">
        {showWelcome ? (
          /* Welcome Card */
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-orange-950 flex items-center justify-center text-[#FF5500]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="tour-heading" className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    Bienvenue dans mon portfolio 👋
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    ADJI KOMENAN IVAN · MILANO
                  </p>
                </div>
              </div>
              <button
                onClick={handleDismissWelcome}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg"
                aria-label="Fermer la bienvenue"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Je peux vous faire découvrir rapidement mon parcours, mes compétences et mes projets à travers une visite guidée interactive en 7 étapes.
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={handleDismissWelcome}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                Explorer seul
              </button>
              <button
                onClick={handleStartFromWelcome}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#FF5500] hover:bg-orange-600 rounded-lg shadow-sm transition-all"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Commencer la visite</span>
              </button>
            </div>
          </div>
        ) : (
          /* Step Flow */
          <div className="space-y-3">
            {/* Header info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500] dark:text-[#FFE7D6]">
                <span>{currentStep.badge}</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg"
                aria-label="Quitter la visite guidée"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FF5500] transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Content */}
            <div className="py-1">
              <h4 id="tour-heading" className="font-display font-bold text-base text-slate-900 dark:text-white mb-1">
                {currentStep.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentStepIndex === 0}
                className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  currentStepIndex === 0
                    ? 'opacity-40 cursor-not-allowed text-slate-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Précédent</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                {currentStepIndex + 1} / {TOUR_STEPS.length}
              </span>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-semibold text-white bg-[#FF5500] hover:bg-orange-600 rounded-lg shadow-sm transition-all"
              >
                <span>{currentStepIndex === TOUR_STEPS.length - 1 ? 'Terminer' : 'Suivant'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
