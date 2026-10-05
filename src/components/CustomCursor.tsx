import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setIsPointerDevice(isFinePointer);
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, textarea, select, [role="button"], .clickable');
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isPointerDevice || !isVisible) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer subtle ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#FF5500]/40 dark:border-[#FFD0B5]/40 transition-transform duration-150 ease-out will-change-transform ${
          isHovered
            ? 'w-10 h-10 -ml-5 -mt-5 bg-[#FF5500]/10 scale-125'
            : 'w-7 h-7 -ml-3.5 -mt-3.5 scale-100'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
      {/* Inner dot */}
      <div
        className={`fixed top-0 left-0 rounded-full bg-[#FF5500] transition-transform duration-75 ease-out will-change-transform ${
          isHovered ? 'w-2 h-2 -ml-1 -mt-1 scale-150' : 'w-1.5 h-1.5 -ml-[3px] -mt-[3px]'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
    </div>
  );
}
