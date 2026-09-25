import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/agencyData';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="relative py-24 lg:py-32 bg-[#08080A] border-t border-white/5 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 right-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 bg-[radial-gradient(circle,_#FF5E00_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase font-bold">
                06 / PROOF
              </span>
              <div className="h-[1px] w-8 bg-[#FF5E00]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              LEADERS ON STRUCT
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-colors"
              aria-label="Previous quote"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#FF5E00]/40 bg-[#FF5E00]/10 flex items-center justify-center text-[#FF6600] hover:bg-[#FF5E00] hover:text-white transition-all shadow-[0_2px_12px_rgba(255,94,0,0.2)]"
              aria-label="Next quote"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="glass-card-dark rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative">
          <Quote className="w-12 h-12 text-[#FF5E00]/30 mb-8" />

          <p className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white leading-snug tracking-tight mb-10 max-w-4xl">
            "{current.quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-white/10 gap-4">
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                {current.author}
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-0.5">
                {current.role} · <span className="text-[#FF7700]">{current.company}</span>
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 self-start sm:self-auto">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block text-[10px]">
                Measured Outcome
              </span>
              <span className="text-sm font-bold font-mono text-[#FF5E00]">
                {current.metric}
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-[#FF5E00]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
