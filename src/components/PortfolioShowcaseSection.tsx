import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/resumeData';
import { PortfolioProject } from '../types';
import { ExternalLink, Sparkles, X, Eye, Layers, Calendar, User } from 'lucide-react';

interface PortfolioShowcaseSectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenContactModal: () => void;
}

export const PortfolioShowcaseSection: React.FC<PortfolioShowcaseSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenContactModal,
}) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'F&B', 'Travel', 'Fashion', 'Gaming', 'Photography'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <section id="portfolio" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block inside an editorial rounded-3xl header box */}
        <div className="resume-box p-6 sm:p-8 mb-8 border border-neutral-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>3+ Years Experience — Selected Projects</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-5xl text-neutral-900 font-normal tracking-tight">
              Design Showcase & Gallery
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase() || 
                (selectedCategory === 'All' && cat === 'All');
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#111] text-white shadow-sm'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="resume-box group cursor-pointer overflow-hidden flex flex-col border border-neutral-200 hover:border-neutral-400 shadow-sm hover:shadow-lg transition-all duration-300 rounded-3xl bg-white"
            >
              {/* Project preview image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                  {project.category}
                </div>

                {/* Hover Eye Action */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#111] font-semibold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </div>
                </div>
              </div>

              {/* Project Card Footer Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-2">
                    <span>{project.year}</span>
                    <span>{project.client}</span>
                  </div>
                  <h3 className="font-serif-cormorant text-2xl font-bold text-[#111] group-hover:text-blue-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2 font-sans">
                    {project.summary}
                  </p>
                </div>

                {/* Deliverable pills */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
                  {project.deliverables.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.deliverables.length > 3 && (
                    <span className="text-[11px] font-medium px-1.5 py-0.5 text-neutral-400">
                      +{project.deliverables.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA banner */}
        <div className="mt-10 resume-box p-6 sm:p-8 border border-neutral-300/90 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-title text-2xl sm:text-3xl text-[#111]">
              Want to see more of my creative works?
            </h3>
            <p className="text-sm text-neutral-600 mt-1 font-sans">
              Explore my full design archive and interactive case studies on Behance.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://behance.net/congsang00c0cf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold transition-colors border border-neutral-300/80"
            >
              <span>behance.net/congsang00c0cf</span>
              <ExternalLink className="w-4 h-4 text-neutral-500" />
            </a>
            <button
              onClick={onOpenContactModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111] text-white hover:bg-neutral-800 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <span>Get In Touch</span>
            </button>
          </div>
        </div>

        {/* Project Detail Preview Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-neutral-300 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md transition-transform hover:scale-105"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Image */}
              <div className="relative aspect-[16/9] w-full bg-neutral-100">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#111] text-white text-xs font-mono uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#111] text-xs font-mono">
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">
                  <User className="w-3.5 h-3.5" />
                  <span>Client: {selectedProject.client}</span>
                </div>

                <h3 className="font-serif-title text-3xl sm:text-4xl text-[#111] font-normal leading-tight">
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-neutral-700 text-base leading-relaxed font-sans">
                  {selectedProject.summary}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2.5">
                    Project Deliverables & Capabilities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.deliverables.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Modal Actions */}
                <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Close Preview
                  </button>
                  <a
                    href={selectedProject.behanceUrl || "https://behance.net/congsang00c0cf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                  >
                    <span>View on Behance</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
