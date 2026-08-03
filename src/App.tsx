/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutMeSection } from './components/AboutMeSection';
import { ExperienceAndEducationSection } from './components/ExperienceAndEducationSection';
import { ToolsAndSkillsSection } from './components/ToolsAndSkillsSection';
import { PortfolioShowcaseSection } from './components/PortfolioShowcaseSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleTogglePhotoSource = () => {
    setIsCustomPhoto((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-grid-paper text-[#111111] antialiased flex flex-col justify-between">
      {/* Sticky top navbar */}
      <Navbar
        onOpenContactModal={handleOpenContactModal}
        onTogglePhotoSource={handleTogglePhotoSource}
        isCustomPhoto={isCustomPhoto}
      />

      {/* Main Single-Page Content Grid */}
      <main className="flex-1 space-y-2 sm:space-y-4 pb-12">
        {/* 1. Hero Section: Large serif title, contact info box, framed photo */}
        <HeroSection onOpenContactModal={handleOpenContactModal} />

        {/* 2. About Me Box: Vertical "About me" heading + Bio */}
        <AboutMeSection
          onSelectCategory={(category) => setSelectedCategory(category)}
          onOpenContactModal={handleOpenContactModal}
        />

        {/* 3. Experience timeline table & Education card */}
        <ExperienceAndEducationSection
          onSelectCategory={(category) => setSelectedCategory(category)}
        />

        {/* 4. Tools badges, Skills & Int vertical layouts */}
        <ToolsAndSkillsSection />

        {/* 5. Selected Works / Design Showcase with interactive case studies */}
        <PortfolioShowcaseSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenContactModal={handleOpenContactModal}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

