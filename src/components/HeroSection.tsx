import React, { useState } from 'react';
import { MapPin, Phone, Globe, Mail, ExternalLink, Copy, Check, Camera, RefreshCw, Upload } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData';
import defaultPortrait from '../assets/images/cong_sang_tran_portrait_1785723287595.jpg';

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [photoSrc, setPhotoSrc] = useState<string>(defaultPortrait);
  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleCustomImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="hero" className="pt-6 pb-6 sm:pt-8 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row: Name & Subtitle on left, Framed Portrait on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Big Serif Title & Info & Contact Box */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            
            {/* Main Name Heading - Editorial Aesthetic typography */}
            <div className="mb-6 sm:mb-8">
              <h1 className="font-serif-title text-[65px] font-bold leading-none text-neutral-900 uppercase select-none mb-3">
                {RESUME_INFO.fullName}
              </h1>
              <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3">
                <p className="text-[15px] tracking-[0.2em] uppercase font-light text-neutral-600">
                  {RESUME_INFO.title}
                </p>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span className="text-xs sm:text-sm font-sans text-neutral-500 uppercase tracking-widest font-semibold">
                  Danang, Vietnam
                </span>
              </div>
            </div>

            {/* Info & Contact Box - editorial rounded-3xl box */}
            <div className="-mt-[20px] resume-box p-6 sm:p-7 border border-neutral-300 shadow-sm hover:shadow-md transition-all rounded-3xl bg-white">
              <div className="flex items-center justify-between mb-4 border-b border-neutral-200/80 pb-3">
                <h2 className="font-serif-title text-2xl sm:text-3xl text-neutral-900 font-normal">
                  Info & Contact
                </h2>
                <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-neutral-500 px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200">
                  AVAILABLE FOR WORK
                </span>
              </div>

              {/* Contact list with cleaner icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-sm">
                
                {/* Base in */}
                <div className="flex items-center justify-between group py-1 border-b border-neutral-100 sm:border-0">
                  <div className="flex items-center gap-2.5 text-neutral-500">
                    <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-medium">Base in</span>
                  </div>
                  <span className="font-semibold text-[#111]">{RESUME_INFO.contact.base}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between group py-1 border-b border-neutral-100 sm:border-0">
                  <div className="flex items-center gap-2.5 text-neutral-500">
                    <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-medium">Phone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#111] font-mono">{RESUME_INFO.contact.phone}</span>
                    <button
                      onClick={() => handleCopy(RESUME_INFO.contact.phone, 'phone')}
                      className="p-1 rounded hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700 transition-colors"
                      title="Copy Phone"
                    >
                      {copiedField === 'phone' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Website (Behance) */}
                <div className="flex items-center justify-between group py-1 border-b border-neutral-100 sm:border-0">
                  <div className="flex items-center gap-2.5 text-neutral-500">
                    <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span className="font-medium">Website</span>
                  </div>
                  <a
                    href={RESUME_INFO.contact.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#111] hover:text-blue-600 transition-colors inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>{RESUME_INFO.contact.website}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-600" />
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between group py-1">
                  <div className="flex items-center gap-2.5 text-neutral-500">
                    <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium">Email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${RESUME_INFO.contact.email}`}
                      className="font-semibold text-[#111] hover:text-blue-600 transition-colors"
                    >
                      {RESUME_INFO.contact.email}
                    </a>
                    <button
                      onClick={() => handleCopy(RESUME_INFO.contact.email, 'email')}
                      className="p-1 rounded hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700 transition-colors"
                      title="Copy Email"
                    >
                      {copiedField === 'email' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Stylized Framed Portrait Photo from image_0.png */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div
              className="relative group w-full max-w-[340px] sm:max-w-[380px] lg:max-w-full"
              onMouseEnter={() => setIsHoveringPhoto(true)}
              onMouseLeave={() => setIsHoveringPhoto(false)}
            >
              {/* Outer Editorial Frame with rounded-3xl and white card aesthetic */}
              <div className="-mt-[20px] relative bg-white p-3 sm:p-4 rounded-3xl shadow-sm border border-neutral-300">
                
                {/* Subtle top badge inside frame */}
                <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-200 text-neutral-800 text-[10px] uppercase font-bold tracking-widest shadow-xs">
                  <Camera className="w-3 h-3 text-neutral-700" />
                  <span>PORTRAIT</span>
                </div>

                {/* Inner Photo Container */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img
                    src={photoSrc}
                    alt="Cong Sang Tran — Graphic Designer wearing cap and camera strap"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Subtle caption overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12 text-white">
                    <p className="font-serif-title text-xl font-normal tracking-wide">
                      Trần Công Sang
                    </p>
                    <p className="text-xs text-neutral-300 font-sans tracking-wider uppercase mt-0.5">
                      Visual & Graphic Designer
                    </p>
                  </div>
                </div>

                {/* Hover Quick Action to change/upload photo */}
                {isHoveringPhoto && (
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 z-30 px-6">
                    <label className="cursor-pointer flex items-center gap-2 px-3.5 py-2 bg-[#111]/90 hover:bg-black text-white rounded-full text-xs font-medium border border-white/30 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                      <Upload className="w-3.5 h-3.5 text-amber-300" />
                      <span>Upload Custom Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCustomImageUpload}
                        className="hidden"
                      />
                    </label>
                    {photoSrc !== defaultPortrait && (
                      <button
                        onClick={() => setPhotoSrc(defaultPortrait)}
                        className="flex items-center gap-1.5 px-3 py-2 bg-neutral-900/90 hover:bg-black text-white rounded-full text-xs font-medium border border-white/20 backdrop-blur-md shadow-lg transition-transform hover:scale-105"
                        title="Reset to default studio portrait"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Reset</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Decorative accent grid shadow behind */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[2.5rem] border-2 border-[#111111]/15 -z-10" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
