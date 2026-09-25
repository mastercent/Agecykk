import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onStartProject: () => void;
  onBookConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartProject, onBookConsultation }) => {
  return (
    <section className="relative py-28 lg:py-36 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Intense Burnt Orange & Amber Radial Light Wave */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[850px] h-[500px] rounded-full blur-[170px] opacity-45 bg-[radial-gradient(circle,_#FF5E00_0%,_#B33B00_40%,_transparent_75%)] animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      {/* Decorative hairline architectural rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
        <div className="w-[600px] h-[600px] rounded-full border border-white/30" />
        <div className="w-[900px] h-[900px] rounded-full border border-white/20 absolute" />
        <div className="w-[1200px] h-[1200px] rounded-full border border-white/10 absolute" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E00]/15 border border-[#FF5E00]/30 text-xs font-mono text-[#FF7700] uppercase tracking-widest font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>New Q4 / Q1 Engagements Open</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display text-white tracking-tight leading-[0.98] mb-8">
          READY TO BUILD
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7700] via-[#FF5E00] to-[#E64A00] drop-shadow-[0_0_40px_rgba(255,94,0,0.5)]">
            SOMETHING
          </span>
          <br />
          SIGNIFICANT?
        </h2>

        <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us what you're building. We'll help you turn the idea into a digital experience people remember.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6600] to-[#D84600] text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(255,94,0,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm tracking-wide backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#FF5E00]" />
            <span>BOOK A CONSULTATION</span>
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-xs font-mono text-neutral-400">
          <span>· Direct Partner Access</span>
          <span>· Fixed Sprints</span>
          <span>· Guaranteed Sub-second Latency</span>
        </div>

      </div>
    </section>
  );
};
