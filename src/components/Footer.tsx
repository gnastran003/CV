import React from 'react';
import { ArrowUp, ExternalLink, MapPin } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 py-10 border-t border-neutral-200/80 bg-[#f8f8f8]/80 text-neutral-600 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left signature */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-serif-title font-bold text-sm sm:text-base text-[#111]">
              CONG SANG TRAN
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <span className="text-neutral-500">
              Graphic Designer & Creative Professional — Danang, Vietnam
            </span>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <a
              href="https://behance.net/congsang00c0cf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111] transition-colors inline-flex items-center gap-1 font-semibold"
            >
              <span>Behance Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-200 transition-colors shadow-2xs font-medium"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-neutral-200/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 font-mono">
          <span>© {new Date().getFullYear()} CONG SANG TRAN. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED WITH EDITORIAL SERIF & GRID PAPER AESTHETIC</span>
        </div>
      </div>
    </footer>
  );
};
