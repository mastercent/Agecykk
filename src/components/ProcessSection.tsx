import React, { useState } from 'react';
import { PROCESS_DATA, ProcessStep } from '../data/agencyData';
import { Check, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PROCESS_DATA[activeStepIndex];

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[160px] opacity-20 bg-[radial-gradient(ellipse,_rgba(255,94,0,0.4)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase font-bold">
                03 / METHODOLOGY
              </span>
              <div className="h-[1px] w-8 bg-[#FF5E00]/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              HOW WE BUILD
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            A battle-tested five-stage execution architecture engineered to eliminate ambiguity and deliver measurable market dominance.
          </p>
        </div>

        {/* Horizontal Timeline Navigation Bar */}
        <div className="relative mb-12 sm:mb-16">
          {/* Progress Connecting Line */}
          <div className="absolute top-6 left-0 right-0 h-[2px] bg-white/10 hidden md:block">
            <div
              className="h-full bg-gradient-to-r from-[#FF5E00] to-[#FF8800] transition-all duration-500 ease-out"
              style={{
                width: `${(activeStepIndex / (PROCESS_DATA.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 relative z-10">
            {PROCESS_DATA.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group text-left p-4 rounded-2xl border transition-all duration-300 relative ${
                    isActive
                      ? 'bg-[#151518] border-[#FF5E00] shadow-[0_4px_25px_rgba(255,94,0,0.25)]'
                      : 'bg-[#0B0B0E] border-white/5 hover:border-white/20'
                  }`}
                >
                  {/* Step Number Dot indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold ${
                      isActive ? 'text-[#FF5E00]' : isPast ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                      {step.step}
                    </span>
                    <div className={`w-3 h-3 rounded-full transition-all ${
                      isActive
                        ? 'bg-[#FF5E00] shadow-[0_0_10px_#FF5E00]'
                        : isPast
                        ? 'bg-neutral-500'
                        : 'bg-white/10 group-hover:bg-white/30'
                    }`} />
                  </div>

                  <h3 className={`text-sm sm:text-base font-bold font-display tracking-tight transition-colors ${
                    isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                  }`}>
                    {step.title}
                  </h3>

                  <span className="text-[11px] text-neutral-500 block mt-1">
                    {step.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Spotlight of Selected Process Step */}
        <div className="glass-card-dark rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Orange Glow in Corner */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-25 bg-[radial-gradient(circle,_#FF5E00_0%,_transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Step Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF5E00] uppercase tracking-widest font-semibold">
                <span>Phase {currentStep.step}</span>
                <span>·</span>
                <span>{currentStep.duration}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                {currentStep.title} —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7700] to-[#FF5E00]">
                  {currentStep.tagline}
                </span>
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-xl">
                {currentStep.description}
              </p>

              {/* Navigation controls between steps */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 disabled:opacity-30 disabled:pointer-events-none hover:bg-white/10 transition-colors"
                >
                  Previous Phase
                </button>

                <button
                  disabled={activeStepIndex === PROCESS_DATA.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(PROCESS_DATA.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-lg bg-[#FF5E00] text-white text-xs font-bold disabled:opacity-30 disabled:pointer-events-none hover:bg-[#E64A00] transition-colors flex items-center gap-1.5 shadow-[0_2px_12px_rgba(255,94,0,0.3)]"
                >
                  <span>Next: Phase {activeStepIndex + 2 <= 5 ? `0${activeStepIndex + 2}` : ''}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Key Deliverables Card */}
            <div className="lg:col-span-5 bg-black/60 rounded-2xl p-6 border border-white/10 shadow-inner">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF5E00] font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Phase Deliverables</span>
              </h4>

              <div className="space-y-3">
                {currentStep.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="w-5 h-5 rounded-full bg-[#FF5E00]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#FF5E00]" />
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>Phase Guarantee</span>
                <span className="text-neutral-300">Client Sign-off Required</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
