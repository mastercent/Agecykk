import React from 'react';
import { Project } from '../data/agencyData';
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Calendar, Building, Globe } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactForSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactForSimilar }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0C0C0E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-white animate-in zoom-in-95 duration-300">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121215]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF5E00] font-bold">
              Case Study
            </span>
            <span className="text-white/20">/</span>
            <span className="text-xs text-neutral-400 font-mono">{project.name}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Hero Image */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-black/30" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6600] block mb-1">
                {project.industry} · {project.year}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                {project.name}
              </h2>
            </div>
            
            <button
              onClick={() => onContactForSimilar(project.name)}
              className="px-5 py-2.5 rounded-full bg-[#FF5E00] hover:bg-[#E64A00] text-white text-xs font-bold transition-all shadow-[0_4px_16px_rgba(255,94,0,0.4)] flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
            >
              <span>Build Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#FF5E00] block">
                  {metric.value}
                </span>
                <span className="text-xs text-neutral-400 uppercase tracking-wider mt-1 block font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Headline & Overview */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold font-display text-white">
              {project.headline}
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem vs Solution 2-column breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FF5E00]/5 border border-[#FF5E00]/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF6600] font-bold mb-2">
                Our Engineering & Design Solution
              </h4>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3">
              Delivered Capabilities
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#121215] border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
          <span>Client: {project.client}</span>
          <button
            onClick={onClose}
            className="text-white hover:text-[#FF5E00] font-semibold transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
