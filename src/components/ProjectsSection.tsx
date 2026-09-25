import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/agencyData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  setCursorType: (type: 'default' | 'project' | 'button') => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject, setCursorType }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Digital Products', 'Brand Identity', 'Web Experiences'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#08080A] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-[180px] opacity-20 bg-[radial-gradient(circle,_#FF5E00_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase font-bold">
                04 / PORTFOLIO
              </span>
              <div className="h-[1px] w-8 bg-[#FF5E00]/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              SELECTED WORK
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#121215] border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#FF5E00] text-white shadow-[0_2px_12px_rgba(255,94,0,0.35)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              onMouseEnter={() => setCursorType('project')}
              onMouseLeave={() => setCursorType('default')}
              className="group relative cursor-pointer rounded-3xl overflow-hidden bg-[#0F0F12] border border-white/10 hover:border-[#FF5E00]/50 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Image Viewport with subtle zoom & warm amber glow */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-95 transition-transform duration-700 ease-out"
                />
                
                {/* Orange atmospheric gradient wash on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-black/30" />
                <div className="absolute inset-0 bg-[#FF5E00]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen pointer-events-none" />

                {/* Top Badges: Year & Industry */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white">
                    {project.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FF5E00]/20 backdrop-blur-md border border-[#FF5E00]/30 text-[#FF8800] font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Card Content Footer */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      {project.industry}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white group-hover:text-[#FF7700] transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  {/* Circular Arrow Button */}
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FF5E00] group-hover:text-black group-hover:border-[#FF5E00] transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <p className="text-sm text-neutral-400 font-light line-clamp-2 leading-relaxed">
                  {project.headline}
                </p>

                {/* Metrics Highlights */}
                <div className="pt-4 border-t border-white/5 grid grid-cols-3 gap-2 text-left">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-sm sm:text-base font-extrabold font-mono text-white block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
