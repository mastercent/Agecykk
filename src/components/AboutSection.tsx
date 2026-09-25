import React, { useEffect, useState, useRef } from 'react';
import { STUDIO_STATS } from '../data/agencyData';
import { Award, Compass, Zap, Target, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[600px] h-[500px] rounded-full blur-[150px] opacity-25 bg-[radial-gradient(circle,_#FF5E00_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase font-bold">
            05 / ABOUT THE STUDIO
          </span>
          <div className="h-[1px] w-8 bg-[#FF5E00]/40" />
        </div>

        {/* Large Editorial Heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
            WE BUILD DIGITAL EXPERIENCES FOR BRANDS THAT{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7700] via-[#FF5E00] to-[#E64A00]">
              REFUSE TO LOOK ORDINARY.
            </span>
          </h2>
        </div>

        {/* 2-Column Split: Studio Story + Interactive Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-6 space-y-6 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              Founded on the belief that software design has succumbed to sterile, cookie-cutter monotony, STRUCT operates as a high-discipline atelier. We fuse architectural rigor with cinematic visual hierarchy and hardware-level performance engineering.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base">
              We work with a select cohort of ambitious enterprises each year. By intentionally restricting our client intake, our principal directors code, design, and direct every project directly — guaranteeing uncompromising craft from initial strategy to deployment.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-[#FF5E00] hover:text-white transition-all shadow-[0_4px_16px_rgba(255,255,255,0.1)] flex items-center gap-2"
              >
                <span>Work With Our Principals</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Stats Grid with Animated Numeric Reveal */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {STUDIO_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F0F12] border border-white/5 hover:border-[#FF5E00]/30 transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-5xl font-extrabold font-mono text-white group-hover:text-[#FF6600] transition-colors">
                  {hasAnimated ? stat.value : '0'}
                </div>
                <div className="text-xs sm:text-sm font-bold font-display text-neutral-200 mt-2">
                  {stat.label}
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 font-light">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 3 Core Operating Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5E00]/10 flex items-center justify-center text-[#FF5E00]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-white">Radical Specificity</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              No shared code libraries or repetitive themes. We design typography, layouts, and interaction physics exclusive to each client identity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5E00]/10 flex items-center justify-center text-[#FF5E00]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-white">Sub-100ms Reaction</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              We treat web experiences as high-framerate instruments. Zero stutter, silky smooth transitions, and instant perceived responsiveness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5E00]/10 flex items-center justify-center text-[#FF5E00]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-white">Sovereignty of Taste</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              We do not build generic corporate templates. We engineer digital assets that command boardroom respect and industry reverence.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
