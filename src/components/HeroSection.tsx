"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, FlaskConical } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenInquiry: () => void;
}

export default function HeroSection({ onOpenCalculator, onOpenInquiry }: HeroSectionProps) {
  const { text } = useLanguage();

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-36 sm:pt-48 pb-28 sm:pb-36 overflow-hidden bg-[#080A09]">
      {/* Cinematic Ambient Background Light Grid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-[#10543F]/25 via-[#0E4232]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#2CE58D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Top Minimalist Quality Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#0F1411] border border-[#2CE58D]/40 text-[#2CE58D] text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(44,229,141,0.2)]"
        >
          <ShieldCheck className="w-4 h-4 text-[#2CE58D]" />
          <span className="uppercase font-bold text-[11px] sm:text-xs">
            {text("JANOSHIK ANALYTICAL VERIFIED • KEMURNIAN >99%", "JANOSHIK ANALYTICAL VERIFIED • PURITY >99%")}
          </span>
        </motion.div>

        {/* Master Brand Headline & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none font-serif"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            ENHANCEMENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] via-[#6EE7B7] to-white drop-shadow-[0_0_40px_rgba(44,229,141,0.45)]">
              PEPTIDE
            </span>
          </h1>

          <p
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-[#94A3B8] uppercase font-serif pt-2"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            The New Era of Biohacking
          </p>

          <p className="text-base sm:text-lg text-[#CBD5E1] font-light max-w-3xl mx-auto leading-relaxed pt-3">
            {text(
              "Enhancement Peptide menghadirkan formulasi peptida murni berstandar riset laboratorium untuk kebutuhan sains dan biohacking. Setiap produk peptida diproduksi dengan pengawasan ketat dan diverifikasi secara independen oleh Janoshik Analytical melalui pengujian kromatogram HPLC untuk memastikan kemurnian di atas 99%.",
              "Enhancement Peptide provides high-purity research-grade peptide formulations tailored for biohacking and scientific applications. Every peptide product is manufactured under strict quality standards and independently verified by Janoshik Analytical via HPLC chromatogram testing to guarantee >99% purity."
            )}
          </p>
        </motion.div>

        {/* Centered Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2"
        >
          <button
            onClick={() => handleScrollTo("catalog")}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#2CE58D] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_35px_rgba(44,229,141,0.45)] cursor-pointer transform hover:-translate-y-0.5"
          >
            {text("Lihat Katalog Produk", "Explore Products")}
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScrollTo("calculator")}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0F1411] border border-[#2CE58D]/40 text-[#2CE58D] font-bold text-xs uppercase tracking-widest hover:bg-[#2CE58D]/10 transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <FlaskConical className="w-4 h-4 text-[#2CE58D]" />
            {text("Kalkulator Dosis", "Dosing Calculator")}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
