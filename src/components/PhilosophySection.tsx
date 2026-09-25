import React from 'react';
import { AGENCY_ASSETS } from '../data/agencyData';
import { ArrowUpRight, Compass, Layers, ShieldCheck } from 'lucide-react';

interface PhilosophySectionProps {
  onExploreWork: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onExploreWork }) => {
  return (
    <section id="expertise" className="relative py-24 lg:py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30 bg-[radial-gradient(circle,_rgba(255,94,0,0.3)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Label: 01 / PHILOSOPHY */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase font-bold">
            01 / PHILOSOPHY
          </span>
          <div className="h-[1px] w-12 bg-[#FF5E00]/40" />
        </div>

        {/* Large Statement */}
        <div className="max-w-5xl mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.2] font-display text-white">
            We don't just draw interfaces. We build the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7700] via-[#FF5E00] to-[#E64A00] underline decoration-[#FF5E00]/40 underline-offset-8">
              invisible architecture
            </span>{' '}
            that supports your brand's growth. Engineering aesthetics for visionaries.
          </h2>
        </div>

        {/* Two-Column Composition: Left Editorial + Right Architectural Visual & Zero Templates Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Deconstruct Statement */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-wider">
                DECONSTRUCT.
                <br />
                STRUCTURE. ELEVATE.
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                We strip away the digital noise to find the core of your business. By structuring chaos into high-end UX/UI, we create digital ecosystems that command authority and drive growth.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#FF5E00]/30 transition-colors">
                <Compass className="w-5 h-5 text-[#FF5E00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Pure Intent</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Every element exists for a defined cognitive outcome.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#FF5E00]/30 transition-colors">
                <Layers className="w-5 h-5 text-[#FF5E00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Zero Bloat</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Micro-optimized code that renders in milliseconds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#FF5E00]/30 transition-colors">
                <ShieldCheck className="w-5 h-5 text-[#FF5E00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Enduring Distinction</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Defensible digital aesthetics immune to ephemeral trends.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Tunnel + Zero Templates Card */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Architectural Tunnel Visual */}
              <div className="md:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
                <img
                  src={AGENCY_ASSETS.philosophyTunnel}
                  alt="Architectural tunnel visual"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Visual Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                  <span className="font-mono uppercase tracking-wider text-[11px] text-[#FF7700]">
                    Architectural Order
                  </span>
                  <span className="text-white/60 text-[10px]">STRUCT Framework</span>
                </div>
              </div>

              {/* Zero Templates Card - Clean white luxury card matching reference */}
              <div className="md:col-span-5 relative z-20">
                <div className="glass-card-white p-6 sm:p-7 rounded-3xl shadow-2xl border border-white/20 transition-transform duration-300 hover:-translate-y-1">
                  
                  {/* Top Bar with Three Dots Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5E00]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                    </div>
                    <div className="w-8 h-2 rounded-full bg-neutral-900/10" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 mb-3 tracking-tight">
                    Zero Templates
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                    We design from absolute scratch. Every digital solution by STRUCT is tailored exclusively to your business objectives, ensuring a distinctive market presence that cannot be replicated.
                  </p>

                  <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#D84600] font-semibold">
                      Exclusively Bespoke
                    </span>
                    <button
                      onClick={onExploreWork}
                      className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-[#FF5E00] transition-colors"
                      aria-label="View work"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
