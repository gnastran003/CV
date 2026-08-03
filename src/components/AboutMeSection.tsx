import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData';

interface AboutMeSectionProps {
  onSelectCategory?: (category: string) => void;
  onOpenContactModal: () => void;
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  onSelectCategory,
  onOpenContactModal,
}) => {
  const fields = [
    { label: "F&B", category: "F&B" },
    { label: "Travel", category: "Travel" },
    { label: "Fashion", category: "Fashion" },
    { label: "Gaming & Cyber", category: "Gaming" },
  ];

  return (
    <section id="about" className="py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Me Card - Editorial Aesthetic rounded-3xl box */}
        <div className="-mt-[60px] bg-white p-6 sm:p-8 lg:p-10 border border-neutral-200 rounded-3xl shadow-sm hover:shadow-md transition-all relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12">
            
            {/* Left Box: Large vertical editorial "About me" text */}
            <div className="flex sm:flex-col items-center justify-between sm:justify-center sm:border-r sm:border-neutral-200 sm:pr-8 lg:pr-10">
              <h2 className="vertical-text-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-300 tracking-tighter uppercase font-black select-none">
                About me
              </h2>
              <div className="sm:hidden text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full border border-neutral-200">
                3+ YEARS EXP
              </div>
            </div>

            {/* Right Main Content: Full bio text */}
            <div className="flex-1 flex flex-col justify-center">
              
              {/* Bio Paragraph */}
              <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-800 leading-relaxed font-normal">
                Hi, my name is <span className="font-bold text-neutral-900 underline decoration-neutral-300 decoration-1 underline-offset-4">{RESUME_INFO.vietnameseName}</span>. I am a Graphic Designer with more than <span className="font-bold text-neutral-900">3 years of experience</span> in design fields such as: <span className="font-bold text-neutral-900">F&B, Travel, Fashion, ...</span> A responsible person at work and leisure. Hit me up and I’ll be happy to help with your design ideas.
              </p>

              {/* Interactive design field tags & contact trigger */}
              <div className="mt-6 sm:mt-8 pt-5 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-4">
                
                {/* Clickable specialty chips */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mr-1">
                    Specialties:
                  </span>
                  {fields.map((f) => (
                    <button
                      key={f.label}
                      onClick={() => {
                        if (onSelectCategory) {
                          onSelectCategory(f.category);
                          const el = document.getElementById('portfolio');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-neutral-100 hover:bg-neutral-900 text-neutral-700 hover:text-white transition-colors border border-neutral-200 active:scale-95"
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Hit me up editorial button action */}
                <button
                  onClick={onOpenContactModal}
                  className="group bg-neutral-900 text-white text-[11px] sm:text-xs uppercase tracking-widest py-3 px-6 rounded-full hover:bg-neutral-700 transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
