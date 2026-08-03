import React, { useState } from 'react';
import { ExternalLink, Mail, Phone, MapPin, Sparkles, Image as ImageIcon, Check } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal: () => void;
  onTogglePhotoSource: () => void;
  isCustomPhoto: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContactModal,
  onTogglePhotoSource,
  isCustomPhoto,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("congsang003@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f5f5f5]/90 backdrop-blur-md border-b border-neutral-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand signature */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 font-serif-title font-normal text-lg sm:text-xl tracking-tight text-neutral-900 hover:opacity-80 transition-opacity"
        >
          <span className="w-2 h-2 rounded-full bg-neutral-900 group-hover:scale-125 transition-transform" />
          <span className="uppercase">CONG SANG TRAN</span>
          <span className="hidden sm:inline-block text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
            Danang, VN
          </span>
        </a>

        {/* Navigation links */}
        <nav aria-label="Page navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
          <a 
            href="#hero" 
            className="hover:text-[#111] transition-colors py-1 border-b-2 border-transparent hover:border-[#111]"
          >
            Resume Grid
          </a>
          <a 
            href="#about" 
            className="hover:text-[#111] transition-colors py-1 border-b-2 border-transparent hover:border-[#111]"
          >
            About Me
          </a>
          <a 
            href="#experience" 
            className="hover:text-[#111] transition-colors py-1 border-b-2 border-transparent hover:border-[#111]"
          >
            Experience
          </a>
          <a 
            href="#tools-skills" 
            className="hover:text-[#111] transition-colors py-1 border-b-2 border-transparent hover:border-[#111]"
          >
            Tools & Skills
          </a>
          <a 
            href="#portfolio" 
            className="hover:text-[#111] transition-colors py-1 border-b-2 border-transparent hover:border-[#111]"
          >
            Selected Works
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            title="Copy Email Address"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors border border-neutral-200/80"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span>congsang003@gmail.com</span>
              </>
            )}
          </button>

          {/* Behance Link */}
          <a
            href="https://behance.net/congsang00c0cf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors border border-neutral-200"
          >
            <span>Behance</span>
            <ExternalLink className="w-3 h-3 text-neutral-500" />
          </a>

          {/* Primary CTA button */}
          <button
            onClick={onOpenContactModal}
            className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-[#111] text-white hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </header>
  );
};
