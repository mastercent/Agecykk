import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Instagram, Twitter, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/85 backdrop-blur-xl border-b border-white/5 py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-white tracking-tighter"
            aria-label="STRUCT home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5E00] to-[#992E00] p-[1px] shadow-[0_0_15px_rgba(255,94,0,0.3)]">
              <div className="w-full h-full bg-[#0A0A0A] rounded-[7px] flex items-center justify-center">
                {/* Custom geometric ribbon mark inspired by reference header icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#FF6600] group-hover:scale-110 transition-transform duration-300"
                >
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
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight font-display text-white">
              STRUCT
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop Segmented Bar inspired by reference) */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-[#141416]/90 border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#FF5E00] text-white shadow-[0_2px_12px_rgba(255,94,0,0.4)]'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Social & Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-1.5 text-neutral-400 mr-1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF5E00]/50 hover:bg-white/5 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF5E00]/50 hover:bg-white/5 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact Us CTA Button matching reference layout */}
            <button
              onClick={onOpenConsultation}
              className="group flex items-center gap-2 pl-4 pr-2.5 py-1.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#FF5E00] hover:text-white transition-all duration-300 shadow-[0_4px_16px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_20px_rgba(255,94,0,0.4)]"
            >
              <span className="whitespace-nowrap">Contact Us</span>
              <div className="w-6 h-6 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          {/* Mobile Right Controls: Phone Quick CTA & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="w-9 h-9 rounded-full bg-[#18181A] border border-white/10 flex items-center justify-center text-[#FF6600]"
              aria-label="Quick consultation"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-[#18181A] border border-white/10 flex items-center justify-center text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF5E00]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#0A0A0C]/98 backdrop-blur-2xl z-50 flex flex-col justify-between p-6 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4 pt-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5E00]">
              Navigation
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between text-2xl font-bold font-display text-neutral-200 hover:text-[#FF5E00] py-2 border-b border-white/5 transition-colors"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-neutral-600">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF5E00] to-[#E64A00] text-white font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(255,94,0,0.4)] flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-xs text-neutral-500 pt-2">
              <span>San Francisco · London · Tokyo</span>
              <div className="flex items-center gap-3 text-neutral-400">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">TW</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">IG</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LI</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
