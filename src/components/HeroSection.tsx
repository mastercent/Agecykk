import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, MoveRight } from 'lucide-react';
import { AGENCY_ASSETS } from '../data/agencyData';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExploreWork: () => void;
  onViewServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreWork,
  onViewServices,
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized offset from center [-1 to 1]
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center">
      {/* Background Ambience: Deep Radial Orange Glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] rounded-full blur-[140px] opacity-65 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255, 94, 0, 0.4) 0%, rgba(200, 60, 0, 0.15) 45%, transparent 70%)',
          transform: `translate(calc(-50% + ${mouseOffset.x * 30}px), calc(-33% + ${mouseOffset.y * 30}px))`,
        }}
      />
      
      {/* Soft secondary amber glow near the bottom */}
      <div className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 bg-[radial-gradient(circle,_rgba(255,120,0,0.25)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Main Grid: Headline & Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Eyebrow + Cinematic Headline + Brief */}
          <div className="lg:col-span-5 flex flex-col justify-center z-20">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-[#FF6600]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00] animate-pulse" />
              <span>Digital Experience Studio</span>
            </div>

            {/* Main Headline with clamp and highlighted phrase */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-extrabold leading-[1.05] tracking-tight font-display text-white mb-6">
              Design That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7700] via-[#FF5E00] to-[#E64A00] drop-shadow-[0_0_35px_rgba(255,94,0,0.35)]">
                Reveals The True
              </span>{' '}
              Essence Of Your Brand
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-lg mb-8">
              We create digital experiences that turn ambitious ideas into memorable brands. Engineering invisible architecture for visionary companies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm text-white overflow-hidden shadow-[0_0_25px_rgba(255,94,0,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Glowing button gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6600] via-[#FF5E00] to-[#D84600] transition-opacity duration-300 group-hover:opacity-90" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={onExploreWork}
                className="group inline-flex items-center justify-center px-6 py-3.5 rounded-full font-medium text-sm text-neutral-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 hover:border-white/20"
              >
                <span>Explore Work</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Trust Marker */}
            <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-6 text-xs text-neutral-500">
              <div>
                <span className="text-white font-semibold font-mono text-sm block">99.4%</span>
                <span>On-time Delivery</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-white font-semibold font-mono text-sm block">100%</span>
                <span>Custom Architecture</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-white font-semibold font-mono text-sm block">Awwwards</span>
                <span>Recognized Studio</span>
              </div>
            </div>
          </div>

          {/* Center / Right Column: Portrait Visual + Floating UI Cards */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[480px] sm:min-h-[560px] lg:min-h-[640px]">
            
            {/* Central Portrait Visual with warm orange rim light */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={AGENCY_ASSETS.heroPortrait}
                alt="STRUCT Creative Silhouette"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle orange ambient edge burn */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#FF5E00]/15 to-transparent pointer-events-none mix-blend-screen" />
            </div>

            {/* Massive Bold Typography Overlay: "digital agency" matching reference image */}
            <div className="absolute bottom-6 sm:bottom-10 right-0 sm:right-4 z-20 flex flex-col items-end pointer-events-auto">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                  digital
                </span>
                
                {/* Inline Start a Project Button next to typography */}
                <button
                  onClick={onOpenConsultation}
                  className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-[#FF5E00] hover:bg-[#E64A00] text-white text-xs font-bold tracking-wide shadow-[0_4px_20px_rgba(255,94,0,0.5)] transition-all hover:scale-105 active:scale-95"
                >
                  Start a Project
                </button>
              </div>
              <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
                agency
              </span>
            </div>

            {/* Floating Card 1: Orange solid card - "DIGITAL STRATEGY & RESEARCH" */}
            <div
              className="absolute -top-4 left-0 sm:-left-6 z-30 transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${mouseOffset.x * -15}px, ${mouseOffset.y * -15}px)`,
              }}
            >
              <div className="orange-card-solid w-44 sm:w-48 p-4 rounded-2xl text-white shadow-2xl flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-6 opacity-80">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider font-bold leading-snug">
                    DIGITAL
                    <br />
                    STRATEGY &
                    <br />
                    RESEARCH
                  </h4>
                  <div className="mt-3 flex justify-end">
                    <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center">
                      <MoveRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Clean white card - "FULL-CYCLE" with fluid preview */}
            <div
              className="absolute bottom-2 sm:-bottom-6 left-0 sm:-left-10 z-30 transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${mouseOffset.x * 20}px, ${mouseOffset.y * 20}px)`,
              }}
            >
              <div className="glass-card-white w-64 sm:w-72 p-4 rounded-2xl flex gap-3 items-center">
                <div className="flex-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-neutral-500 block mb-1">
                    FULL-CYCLE
                  </span>
                  <p className="text-xs text-neutral-800 leading-snug font-medium line-clamp-2">
                    From deep-rooted strategy to flawless UX/UI. We build your core.
                  </p>
                  <button
                    onClick={onViewServices}
                    className="mt-2.5 text-xs font-bold text-black hover:text-[#FF5E00] flex items-center gap-1 transition-colors"
                  >
                    <span>View services</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Fluid 3D Thumbnail + Action Circle */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-neutral-200">
                  <img
                    src={AGENCY_ASSETS.fluidRibbon}
                    alt="Full cycle visual"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={onViewServices}
                    className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#FF5E00] transition-colors"
                    aria-label="Explore services"
                  >
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Card 3: Top Right "FUTURE-READY" */}
            <div
              className="hidden sm:block absolute -top-8 -right-2 sm:-right-4 z-30 transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${mouseOffset.x * -18}px, ${mouseOffset.y * -18}px)`,
              }}
            >
              <div className="glass-card-dark p-4 rounded-2xl w-64 sm:w-72 shadow-2xl flex gap-3 items-center">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#FF6600]">
                      FUTURE-READY
                    </span>
                    <Sparkles className="w-3 h-3 text-[#FF5E00]" />
                  </div>
                  <p className="text-[11px] text-neutral-300 leading-snug line-clamp-2">
                    Integrating advanced AI and high-end design to keep you ahead.
                  </p>
                  <button
                    onClick={onOpenConsultation}
                    className="mt-2.5 px-3 py-1 rounded-full bg-white text-black text-[11px] font-bold hover:bg-[#FF5E00] hover:text-white transition-colors"
                  >
                    Consultation
                  </button>
                </div>

                {/* Dark glowing silhouette preview */}
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#0A0A0A] relative">
                  <img
                    src={AGENCY_ASSETS.heroPortrait}
                    alt="Future ready preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-[#FF5E00]/20 mix-blend-color-dodge" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
