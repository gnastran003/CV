import React, { useState } from 'react';
import { EXPERIENCE_LIST, RESUME_INFO } from '../data/resumeData';
import { ExperienceItem } from '../types';
import { GraduationCap, Briefcase, ChevronRight, ChevronDown, Award, Calendar } from 'lucide-react';

interface ExperienceAndEducationSectionProps {
  onSelectCategory?: (category: string) => void;
}

export const ExperienceAndEducationSection: React.FC<ExperienceAndEducationSectionProps> = ({
  onSelectCategory,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 8 columns for Experience, 4 columns for Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Block: Experience Box (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="-mt-[50px] resume-box p-6 sm:p-8 flex-1 border border-neutral-200 shadow-sm hover:shadow-md transition-all rounded-3xl bg-white">
              
              {/* Heading row */}
              <div className="flex items-center justify-between mb-6 border-b border-neutral-200/80 pb-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-serif-title text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                    Experience
                  </h2>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                  CLICK ROW FOR DETAILS
                </span>
              </div>

              {/* Experience list table / interactive rows */}
              <div className="divide-y divide-neutral-200/70">
                {EXPERIENCE_LIST.map((item) => {
                  const isExpanded = expandedId === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleExpand(item.id)}
                      className={`group cursor-pointer py-4 sm:py-5 transition-colors ${
                        isExpanded ? 'bg-neutral-50/80 -mx-3 px-3 rounded-xl' : 'hover:bg-neutral-50/50 -mx-3 px-3 rounded-xl'
                      }`}
                    >
                      {/* Row line: period | role | company */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                        
                        {/* Period column (4 col on md) */}
                        <div className="md:col-span-3 flex items-center gap-2">
                          <span className="font-mono text-xs sm:text-sm text-neutral-500 font-semibold tracking-wide">
                            {item.period}
                          </span>
                        </div>

                        {/* Role Column (5 col on md) */}
                        <div className="md:col-span-5">
                          <h3 className="font-sans text-sm sm:text-base font-bold text-[#111] group-hover:text-blue-600 transition-colors">
                            {item.role}
                          </h3>
                        </div>

                        {/* Company Column (4 col on md) */}
                        <div className="md:col-span-4 flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-neutral-600">
                            {item.company}
                          </span>
                          <div className="text-neutral-400 group-hover:text-[#111] transition-colors">
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </div>
                        </div>

                      </div>

                      {/* Interactive Expandable Detail Panel */}
                      {isExpanded && (
                        <div className="mt-4 pt-3 border-t border-neutral-200/80 text-xs sm:text-sm text-neutral-700 space-y-3 animate-fadeIn">
                          <p className="leading-relaxed font-sans text-neutral-800">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            {item.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700 text-xs font-medium shadow-2xs"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Block: Education Box (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="-mt-[10px] resume-box p-6 sm:p-8 flex-1 border border-neutral-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between rounded-3xl bg-white">
              
              <div>
                {/* Heading */}
                <div className="flex items-center justify-between mb-6 border-b border-neutral-200/80 pb-3">
                  <h2 className="font-serif-title text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                    Education
                  </h2>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 border border-neutral-200">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                {/* Education Content */}
                <div className="mt-4">
                  <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-[#111] leading-snug">
                    Bachelor of E-commerce
                  </h3>
                  <p className="mt-2 text-base font-semibold text-neutral-800">
                    Danang University of Economics
                  </p>
                  <p className="mt-1 font-mono text-sm text-neutral-500 font-medium">
                    (2015 - 2020)
                  </p>

                  {/* Supplemental E-commerce / Graphic design connection */}
                  <div className="mt-6 p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/80 text-xs sm:text-sm text-neutral-700 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#111] font-semibold">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>Academic Foundation</span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      Bridging commercial marketing strategy with visual brand communication and digital consumer behavior.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom footer note */}
              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>DANANG, VIETNAM</span>
                <span>GRADUATED 2020</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
