import React, { useState } from 'react';
import { X, Mail, Phone, Globe, MapPin, Send, Check, Copy, Sparkles } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setSenderEmail('');
      setMessage('');
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-8 bg-neutral-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Danang Creative Studio</span>
          </div>
          <h3 className="font-serif-title text-3xl sm:text-4xl font-normal tracking-tight">
            Get in Touch
          </h3>
          <p className="mt-1 text-sm text-neutral-300 font-sans">
            Have a design project in F&B, Travel, or Fashion? Hit me up and I'll be happy to help!
          </p>
        </div>

        {/* Quick Copy Contact Chips */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Email Chip */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-neutral-400">Email</div>
                  <div className="text-xs font-semibold text-[#111]">{RESUME_INFO.contact.email}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(RESUME_INFO.contact.email, 'email')}
                className="p-2 rounded-lg hover:bg-neutral-200/70 text-neutral-500 transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Chip */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-neutral-400">Phone</div>
                  <div className="text-xs font-semibold text-[#111] font-mono">{RESUME_INFO.contact.phone}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(RESUME_INFO.contact.phone, 'phone')}
                className="p-2 rounded-lg hover:bg-neutral-200/70 text-neutral-500 transition-colors"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Contact Form */}
          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif-cormorant text-2xl font-bold text-emerald-900">
                Message Sent Successfully
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 font-sans">
                Thank you for reaching out! Trần Công Sang will get back to your inquiry soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-xs sm:text-sm text-[#111] focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-xs sm:text-sm text-[#111] focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">
                  Project Details / Inquiry
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Sang, I'd like to collaborate on a design project for..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-xs sm:text-sm text-[#111] focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={RESUME_INFO.contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-neutral-600 hover:text-[#111] underline underline-offset-2"
                >
                  Visit Behance Profile
                </a>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
                >
                  <Send className="w-3.5 h-3.5 text-amber-300" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
