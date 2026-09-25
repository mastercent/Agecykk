import React, { useState, useEffect } from 'react';
import { ArrowUp, Twitter, Instagram, Linkedin, Globe, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [times, setTimes] = useState({
    sf: '',
    london: '',
    tokyo: '',
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const formatTime = (timeZone: string) => {
        return new Intl.DateTimeFormat('en-US', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(now);
      };

      setTimes({
        sf: formatTime('America/Los_Angeles'),
        london: formatTime('Europe/London'),
        tokyo: formatTime('Asia/Tokyo'),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020202] text-neutral-400 text-xs border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/5 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF5E00] to-[#992E00] p-[1px]">
                <div className="w-full h-full bg-[#0A0A0A] rounded-[6px] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#FF6600]">
                    <path
                      d="M19 6C19 6 15 4 11 7C7 10 17 14 13 18C9 22 5 18 5 18"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-extrabold font-display tracking-tight text-white">
                STRUCT
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 font-light max-w-sm leading-relaxed">
              Bespoke digital architecture, brand systems, and high-frequency web applications crafted for visionary companies.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse" />
              <span>Global Studio Availability · Active Q4/Q1 Roster</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2">
              {['Expertise', 'Process', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Clocks & Coordinates */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white font-semibold block">
              Operating Coordinates
            </span>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <span>San Francisco, CA</span>
                <span className="text-white font-bold">{times.sf || '19:15'} PST</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <span>London, UK</span>
                <span className="text-white font-bold">{times.london || '03:15'} GMT</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <span>Tokyo, JP</span>
                <span className="text-white font-bold">{times.tokyo || '11:15'} JST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} STRUCT Studio Inc. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors font-mono"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF5E00] group-hover:text-black group-hover:border-[#FF5E00] transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
