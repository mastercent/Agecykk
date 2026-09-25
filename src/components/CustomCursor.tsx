import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  cursorType: 'default' | 'project' | 'button' | 'hidden';
  cursorText?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorType, cursorText = 'VIEW' }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible || cursorType === 'hidden') return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {cursorType === 'project' ? (
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FF5E00] text-black font-semibold tracking-wider text-xs shadow-2xl transition-all duration-200 animate-in fade-in zoom-in-75">
          <span>{cursorText}</span>
        </div>
      ) : cursorType === 'button' ? (
        <div className="h-10 w-10 rounded-full border border-[#FF5E00]/60 bg-[#FF5E00]/15 backdrop-blur-[2px] transition-all duration-150" />
      ) : (
        <div className="relative flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5E00] shadow-[0_0_12px_#FF5E00]" />
          <div className="absolute h-7 w-7 rounded-full border border-white/20 transition-all duration-200" />
        </div>
      )}
    </div>
  );
};
