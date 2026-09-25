import React, { useState } from 'react';
import { SERVICES_DATA, Service } from '../data/agencyData';
import { ArrowUpRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string>('strategy');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#08080A] border-t border-white/5">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 bg-[radial-gradient(circle,_rgba(255,94,0,0.35)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase font-bold">
                02 / CAPABILITIES
              </span>
              <div className="h-[1px] w-8 bg-[#FF5E00]/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            From deep foundational positioning to sub-second digital execution. We engineer every touchpoint of your brand ecosystem.
          </p>
        </div>

        {/* Services List / Accordion */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service: Service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#121215] border-[#FF5E00]/50 shadow-[0_8px_30px_rgba(255,94,0,0.15)]'
                    : 'bg-[#0E0E10] border-white/5 hover:border-white/20 hover:bg-[#121215]/80'
                }`}
              >
                {/* Header row / Click trigger */}
                <button
                  type="button"
                  onClick={() => toggleExpand(service.id)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF5E00]"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className={`text-sm sm:text-base font-mono font-bold transition-colors ${
                      isExpanded ? 'text-[#FF5E00]' : 'text-neutral-500 group-hover:text-white'
                    }`}>
                      {service.number}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold font-display text-white group-hover:text-[#FF7700] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block text-xs font-mono uppercase tracking-wider text-neutral-400 px-3 py-1 rounded-full bg-white/5">
                      {service.highlight}
                    </span>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? 'bg-[#FF5E00] text-black rotate-45'
                        : 'bg-white/5 text-white group-hover:bg-white/10 group-hover:scale-105'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-2 border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Full Description & Timeline */}
                      <div className="lg:col-span-7 space-y-4">
                        <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                          {service.fullDesc}
                        </p>

                        <div className="flex items-center gap-6 pt-2 text-xs font-mono text-neutral-400">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-[#FF5E00]" />
                            <span>Typical Cycle: {service.timeline}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#FF5E00]" />
                            <span>Sprint-based Delivery</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Deliverables List & Direct Action */}
                      <div className="lg:col-span-5 bg-black/40 rounded-xl p-5 border border-white/5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 font-semibold">
                          Key Deliverables:
                        </h4>
                        <ul className="space-y-2 mb-5">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5E00] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() => onSelectService(service.title)}
                          className="w-full py-2.5 px-4 rounded-lg bg-[#FF5E00] hover:bg-[#E64A00] text-white text-xs font-bold transition-all shadow-[0_4px_16px_rgba(255,94,0,0.3)] flex items-center justify-center gap-2"
                        >
                          <span>Commission {service.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
