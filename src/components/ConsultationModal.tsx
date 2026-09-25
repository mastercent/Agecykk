import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Sparkles, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState('Digital Experience & Brand Redesign');
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow, 2:00 PM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const topics = [
    'Digital Experience & Brand Redesign',
    'High-End Web Engineering & WebGL',
    'AI Systems & Product Architecture',
    'Executive Strategic Advisory',
  ];

  const availableSlots = [
    'Tomorrow, 10:00 AM EST',
    'Tomorrow, 2:00 PM EST',
    'Thursday, 11:30 AM EST',
    'Friday, 3:00 PM EST',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#0D0D10] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E00]" />
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#FF5E00] font-bold">
              Executive Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isBooked ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FF5E00]/20 border border-[#FF5E00]/40 flex items-center justify-center text-[#FF5E00] mx-auto shadow-[0_0_20px_#FF5E00]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-bold font-display text-white">
              Consultation Scheduled
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto font-light leading-relaxed">
              A private calendar invitation with video bridge credentials has been sent to <span className="text-white font-semibold">{email}</span> for <span className="text-[#FF7700] font-semibold">{selectedSlot}</span>.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#FF5E00] text-white text-xs font-bold transition-all shadow-[0_4px_16px_rgba(255,94,0,0.3)]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                Focus of Discussion
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTopic(t)}
                    className={`p-3 rounded-xl text-left text-xs font-medium transition-all ${
                      selectedTopic === t
                        ? 'bg-[#FF5E00]/20 border border-[#FF5E00] text-white font-semibold'
                        : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                Select 30-min Executive Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-3 rounded-xl text-left text-xs font-mono transition-all flex items-center gap-2 ${
                      selectedSlot === slot
                        ? 'bg-[#FF5E00] text-white font-semibold shadow-[0_2px_12px_rgba(255,94,0,0.3)]'
                        : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{slot}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Elena Rostova"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5E00]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5E00]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF6600] to-[#D84600] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(255,94,0,0.4)] flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              <span>Confirm 30-Min Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
