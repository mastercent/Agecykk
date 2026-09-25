import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Clock, ArrowUpRight, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  selectedServicePreset?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: selectedServicePreset || 'Digital Experience / Full Redesign',
    budget: '$50k — $100k',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Digital Experience / Full Redesign',
    'Brand Systems & Identity',
    'UI / UX Product Design',
    'Full-Stack Web Engineering',
    'AI & Custom Automation',
  ];

  const budgetRanges = [
    '$25k — $50k',
    '$50k — $100k',
    '$100k — $250k',
    '$250k+',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid work email address';
    }
    if (!formData.company.trim()) errs.company = 'Please enter your company or project name';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a brief outline of what you are building (min 10 characters)';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate fast reliable API transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#050505] border-t border-white/5">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-25 bg-[radial-gradient(circle,_#FF5E00_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase font-bold">
                07 / INITIATE
              </span>
              <div className="h-[1px] w-8 bg-[#FF5E00]/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              START A CONVERSATION
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Every engagement starts with a confidential deep dive into your business thesis and technical architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Agency Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display text-white">
                Direct Studio Desk
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                Whether you need a full enterprise rebrand, a high-frequency WebGL product platform, or bespoke design tokens, we respond within 24 business hours.
              </p>
            </div>

            {/* Direct Contact Badges */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#FF5E00]/10 flex items-center justify-center text-[#FF5E00] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Inquiries & New Engagements
                  </span>
                  <a
                    href="mailto:inquire@struct.design"
                    className="text-white hover:text-[#FF5E00] font-mono text-sm font-semibold transition-colors"
                  >
                    inquire@struct.design
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#FF5E00]/10 flex items-center justify-center text-[#FF5E00] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Primary Studios
                  </span>
                  <span className="text-white text-sm font-medium">
                    San Francisco · London · Tokyo
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#FF5E00]/10 flex items-center justify-center text-[#FF5E00] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Turnaround Commitment
                  </span>
                  <span className="text-white text-sm font-medium">
                    Initial Strategy Review in 24 Hours
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FF5E00]/10 border border-[#FF5E00]/25">
              <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-wider block mb-1">
                Confidentiality Standard
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                All client project briefs are protected under our mutual standard non-disclosure agreement prior to discovery.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-dark rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-[#FF5E00]/20 border border-[#FF5E00]/50 flex items-center justify-center text-[#FF5E00] mx-auto shadow-[0_0_20px_#FF5E00]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                      Inquiry Received
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our partners at STRUCT are reviewing your requirements for <span className="text-[#FF7700] font-semibold">{formData.company}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-neutral-400">
                    <div>Scope: <span className="text-white">{formData.projectType}</span></div>
                    <div>Budget: <span className="text-white">{formData.budget}</span></div>
                    <div>Direct Contact: <span className="text-white">{formData.email}</span></div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Digital Experience / Full Redesign',
                        budget: '$50k — $100k',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Two Column Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Vance"
                        className={`w-full px-4 py-3 rounded-xl bg-black/50 border text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5E00] focus:ring-1 focus:ring-[#FF5E00] transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-black/50 border text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5E00] focus:ring-1 focus:ring-[#FF5E00] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Apex Spatial Technologies"
                      className={`w-full px-4 py-3 rounded-xl bg-black/50 border text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5E00] focus:ring-1 focus:ring-[#FF5E00] transition-colors ${
                        errors.company ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                            formData.projectType === type
                              ? 'bg-[#FF5E00] text-white shadow-[0_2px_12px_rgba(255,94,0,0.35)]'
                              : 'bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                      Estimated Capital Allocation
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-3 py-2 rounded-xl text-xs font-mono text-center transition-all ${
                            formData.budget === b
                              ? 'bg-[#FF5E00]/20 border border-[#FF5E00] text-[#FF8800] font-bold'
                              : 'bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Brief */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                      Project Vision & Key Objectives *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline what you are building, your primary goals, and your target launch timeline..."
                      className={`w-full px-4 py-3 rounded-xl bg-black/50 border text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5E00] focus:ring-1 focus:ring-[#FF5E00] transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF6600] to-[#D84600] text-white font-bold text-sm tracking-wide shadow-[0_4px_25px_rgba(255,94,0,0.4)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center font-mono">
                    Protected by NDA. 24-hour partner response guarantee.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
