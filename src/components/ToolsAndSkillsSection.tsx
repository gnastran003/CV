import React, { useState } from 'react';
import { TOOLS_LIST, SKILLS_LIST, INTERESTS_LIST } from '../data/resumeData';
import { Camera, Sparkles, Search, PenTool, Info } from 'lucide-react';

export const ToolsAndSkillsSection: React.FC = () => {
  const [activeToolId, setActiveToolId] = useState<string | null>(null);

  return (
    <section id="tools-skills" className="py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bottom row grid: 5 columns for Tools, 7 columns for Skills & Int */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Box: TOOLS (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="resume-box p-6 sm:p-7 flex-1 border border-neutral-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between rounded-3xl bg-white">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
                
                {/* "Tools" Heading */}
                <h2 className="font-serif-title text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                  Tools
                </h2>

                {/* Horizontal Logos: [PS] [AI] [PR] [Camera] exactly from image_0.png */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {TOOLS_LIST.map((tool) => {
                    const isActive = activeToolId === tool.id;
                    return (
                      <div
                        key={tool.id}
                        onMouseEnter={() => setActiveToolId(tool.id)}
                        onMouseLeave={() => setActiveToolId(null)}
                        className="relative group"
                      >
                        {/* Black stylized logo badge from image_0.png */}
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#111111] text-white flex items-center justify-center font-sans font-bold text-base sm:text-lg tracking-tight shadow-md transition-all duration-200 cursor-pointer ${
                          isActive ? 'scale-110 -translate-y-1 bg-black ring-2 ring-neutral-400' : 'hover:scale-105'
                        }`}>
                          {tool.id === 'camera' ? (
                            <Camera className="w-6 h-6 text-white" />
                          ) : (
                            <span>{tool.shortLabel}</span>
                          )}
                        </div>

                        {/* Hover proficiency tooltip */}
                        {isActive && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 rounded-xl bg-[#111] text-white text-xs shadow-xl border border-white/20 z-30 animate-fadeIn pointer-events-none">
                            <div className="font-bold text-amber-300 mb-0.5">
                              {tool.name}
                            </div>
                            <p className="text-neutral-300 text-[11px] leading-snug">
                              {tool.description}
                            </p>
                            <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                              <span>Proficiency</span>
                              <span>{tool.proficiency}%</span>
                            </div>
                            <div className="w-full bg-neutral-800 h-1 rounded-full mt-1 overflow-hidden">
                              <div
                                className="bg-amber-300 h-full rounded-full"
                                style={{ width: `${tool.proficiency}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Helpful footer label */}
              <div className="mt-6 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>ADOBE CREATIVE CLOUD + DSLR STUDIO</span>
                <span className="hidden sm:inline-block">HOVER ICONS</span>
              </div>

            </div>
          </div>

          {/* Right Box: SKILLS & INT (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="resume-box p-6 sm:p-7 flex-1 border border-neutral-200 shadow-sm hover:shadow-md transition-all rounded-3xl bg-white">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
                
                {/* Left part: SKILLS vertical text + 2x2 items (7 col on md) */}
                <div className="md:col-span-7 flex items-stretch gap-4 sm:gap-6">
                  {/* Vertical "Skills" text */}
                  <div className="flex items-center border-r border-neutral-200/80 pr-4 sm:pr-6">
                    <h2 className="vertical-text-heading text-3xl sm:text-4xl text-neutral-300 tracking-tighter uppercase font-black select-none">
                      Skills
                    </h2>
                  </div>

                  {/* 2-column text layout from image_0.png */}
                  <div className="flex-1 grid grid-cols-2 gap-y-3 gap-x-4 items-center">
                    {SKILLS_LIST.map((skill) => (
                      <div
                        key={skill.id}
                        className="group flex flex-col justify-center p-2 rounded-lg hover:bg-neutral-50/80 transition-colors"
                      >
                        <span className="font-sans font-semibold text-sm sm:text-base text-[#111] group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[11px] text-neutral-500 line-clamp-1">
                          {skill.description.split(',')[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right part: INT (Interests) vertical text + items (5 col on md) */}
                <div className="md:col-span-5 flex items-stretch gap-4 sm:gap-6 md:border-l md:border-neutral-200/80 md:pl-6">
                  {/* Vertical "Int" text */}
                  <div className="flex items-center border-r border-neutral-200/80 pr-3 sm:pr-4">
                    <h2 className="vertical-text-heading text-3xl sm:text-4xl text-neutral-300 tracking-tighter uppercase font-black select-none">
                      Int
                    </h2>
                  </div>

                  {/* 2x2 layout for: Mystical, Travel, Jogging, Discover */}
                  <div className="flex-1 grid grid-cols-2 gap-y-3 gap-x-3 items-center">
                    {INTERESTS_LIST.map((interest) => (
                      <div
                        key={interest.id}
                        className="group flex flex-col justify-center p-2 rounded-lg hover:bg-neutral-50/80 transition-colors"
                      >
                        <span className="font-sans font-semibold text-sm sm:text-base text-[#111] group-hover:text-amber-700 transition-colors">
                          {interest.name}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                          {interest.name === 'Mystical' ? 'Folklore' : interest.name === 'Jogging' ? 'Danang' : 'Active'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
