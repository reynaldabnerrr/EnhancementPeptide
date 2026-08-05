"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Interactive3DVial from "@/components/Interactive3DVial";
import CompoundCatalog from "@/components/CompoundCatalog";
import ReconstitutionCalculator from "@/components/ReconstitutionCalculator";
import StandardsGrid from "@/components/StandardsGrid";
import ResearchInquiryModal from "@/components/ResearchInquiryModal";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AmbientMotionBackground from "@/components/AmbientMotionBackground";
import { LanguageProvider } from "@/components/LanguageContext";
import ResearchPurposeWarningModal from "@/components/ResearchPurposeWarningModal";

export default function Home() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#080A09] text-[#F8FAFC] selection:bg-[#2CE58D] selection:text-black relative">
        <ResearchPurposeWarningModal />

        {/* Dynamic Hardware-Accelerated Ambient Motion Background */}
        <AmbientMotionBackground />

        {/* Fixed Glass Navbar with Scroll Progress Bar */}
        <Navbar
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* Luxury Editorial Hero Section */}
        <HeroSection
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* Interactive Photorealistic Specimen Inspector with Scroll Reveal */}
        <section id="specimen" className="py-12 bg-[#080A09]/60 backdrop-blur-sm border-y border-[#1E2923] relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" duration={0.7}>
              <Interactive3DVial />
            </ScrollReveal>
          </div>
        </section>

        {/* Scientific Compound Catalog with Scroll Reveal */}
        <div className="relative z-10">
          <ScrollReveal direction="up" duration={0.8} delay={0.1}>
            <CompoundCatalog
              onOpenCalculator={() => setIsCalculatorOpen(true)}
              onOpenInquiry={() => setIsInquiryOpen(true)}
            />
          </ScrollReveal>
        </div>

        {/* Dosing Calculator Section with Scroll Reveal */}
        <section id="calculator" className="py-20 bg-[#080A09]/60 backdrop-blur-sm relative border-y border-[#1E2923] z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" duration={0.7}>
              <ReconstitutionCalculator />
            </ScrollReveal>
          </div>
        </section>

        {/* Brand Quality & Laboratory Standards Grid with Scroll Reveal */}
        <div className="relative z-10">
          <ScrollReveal direction="up" duration={0.8}>
            <StandardsGrid />
          </ScrollReveal>
        </div>

        {/* Footer with Scroll Reveal */}
        <div className="relative z-10">
          <ScrollReveal direction="none" duration={0.6}>
            <Footer />
          </ScrollReveal>
        </div>

        {/* Contact / Inquiry Modal */}
        <ResearchInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </main>
    </LanguageProvider>
  );
}
