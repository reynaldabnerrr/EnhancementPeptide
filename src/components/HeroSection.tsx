"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, PhoneCall, ShieldCheck, FlaskConical } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenInquiry: () => void;
}

export default function HeroSection({ onOpenCalculator, onOpenInquiry }: HeroSectionProps) {
  const [activeProduct, setActiveProduct] = useState<"reta" | "ghk">("reta");
  const { text } = useLanguage();

  const productDetails = {
    reta: {
      name: "RETATRUTIDE",
      dosage: "10 MG",
      status: "ready",
      statusBadge: "READY STOCK",
      tag: "Triple Agonist (GLP-1 / GIP / Glucagon)",
      purity: text(">99% Kemurnian (Janoshik Tested)", ">99% Purity (Janoshik Tested)"),
      desc: text(
        "Formulasi peptida generasi terbaru yang mengaktifkan 3 reseptor metabolisme sekaligus. Diriset secara khusus untuk pembakaran lemak basal & kontrol nafsu makan.",
        "Next-generation peptide formulation activating 3 metabolic receptors simultaneously. Researched for basal fat oxidation & appetite regulation."
      ),
      image: "/reta_hero.png",
      batch: "EP-RET-2026-099",
    },
    ghk: {
      name: "GHK-Cu",
      dosage: "100 MG",
      status: "coming_soon",
      statusBadge: "COMING SOON",
      tag: "Copper Tripeptide-1 (Regenerasi & Kolagen)",
      purity: text(">99% Kemurnian (Janoshik Tested)", ">99% Purity (Janoshik Tested)"),
      desc: text(
        "Peptida tembaga murni untuk merangsang sintesis kolagen & elastin alami sel, regenerasi jaringan kulit, serta stimulasi folikel rambut tebal.",
        "Pure copper peptide designed to stimulate natural collagen & elastin synthesis, tissue remodeling, and hair follicle density."
      ),
      image: "/ghk_cu_hero.png",
      batch: "EP-GHK-2026-SOON",
    },
  };

  const currentProduct = productDetails[activeProduct];

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -90; // Fixed navbar offset height
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 sm:pb-24 overflow-hidden bg-[#080A09]">
      {/* Editorial Ambient Background Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#10543F]/25 via-[#0E4232]/15 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#2CE58D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Permanent Brand Thesis */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Top Brand Pill & Janoshik Verified Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0F1411] border border-[#2CE58D]/30 text-[#2CE58D] text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(44,229,141,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-[#2CE58D]" />
                <span className="uppercase font-bold text-[11px]">BRAND PEPTIDE PREMIUM</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#040605] border border-[#2CE58D]/40 text-[#2CE58D] text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(44,229,141,0.2)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2CE58D]" />
                <span className="font-bold text-[10px] text-white">JANOSHIK ANALYTICAL TESTED</span>
              </div>
            </div>

            {/* Permanent Brand Headline */}
            <div className="space-y-2">
              <h1
                className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none font-serif"
                style={{ fontFamily: "Cinzel, Playfair Display, serif" }}
              >
                ENHANCEMENT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] via-[#6EE7B7] to-white drop-shadow-[0_0_30px_rgba(44,229,141,0.4)]">
                  PEPTIDE
                </span>
              </h1>
              <p
                className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#94A3B8] uppercase font-serif pt-1"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                The New Era of Biohacking
              </p>
            </div>

            {/* Brand Statement */}
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-light">
              {text(
                "Brand formulasi peptida murni berstandar riset tinggi dengan jaminan uji analisis independen dari Janoshik Analytical. Kami menghadirkan dua formulasi utama: RETATRUTIDE 10 MG dan GHK-Cu 100 MG.",
                "Premium research peptide formulation brand with independent analytical verification from Janoshik Analytical. Featuring two primary formulations: RETATRUTIDE 10 MG and GHK-Cu 100 MG."
              )}
            </p>

            {/* Product Switcher Drawer Box inside Hero */}
            <div className="p-4 rounded-2xl bg-[#0F1411] border border-[#1E2923] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2CE58D]" />
                  {text("SPESIMEN TERVERIFIKASI JANOSHIK:", "JANOSHIK-VERIFIED SPECIMEN:")}
                </span>
                <div className="flex items-center gap-1 p-1 bg-[#080A09] rounded-lg border border-[#1E2923]">
                  <button
                    onClick={() => setActiveProduct("reta")}
                    className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                      activeProduct === "reta"
                        ? "bg-[#2CE58D] text-black shadow-[0_0_10px_rgba(44,229,141,0.3)]"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    RETATRUTIDE
                  </button>
                  <button
                    onClick={() => setActiveProduct("ghk")}
                    className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                      activeProduct === "ghk"
                        ? "bg-[#2CE58D] text-black shadow-[0_0_10px_rgba(44,229,141,0.3)]"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    GHK-Cu
                  </button>
                </div>
              </div>

              {/* Active Selected Product Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between text-xs font-mono pt-1 border-t border-[#1E2923]"
                >
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#2CE58D]" />
                    <span>{currentProduct.name} ({currentProduct.dosage})</span>
                  </div>
                  <span className={currentProduct.status === "ready" ? "text-[#2CE58D] font-bold" : "text-amber-400 font-bold"}>
                    {currentProduct.purity} • {currentProduct.statusBadge}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons - Fully Functional Scroll & Modal Triggers */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => handleScrollTo("catalog")}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2CE58D] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(44,229,141,0.35)] cursor-pointer z-10"
              >
                {text("Jelajahi Katalog", "Explore Catalog")}
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo("calculator")}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F1411] border border-[#2CE58D]/40 text-[#2CE58D] font-bold text-xs uppercase tracking-wider hover:bg-[#2CE58D]/10 transition-all cursor-pointer z-10"
              >
                <FlaskConical className="w-4 h-4 text-[#2CE58D]" />
                {text("Kalkulator Dosis", "Dose Calculator")}
              </button>

              <button
                onClick={onOpenInquiry}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F1411] sm:bg-transparent border border-[#1E2923] sm:border-0 text-[#94A3B8] hover:text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer z-10"
              >
                <PhoneCall className="w-4 h-4 text-[#2CE58D]" />
                {text("Tanya / Pesan", "Inquire / Order")}
              </button>
            </div>
          </motion.div>

          {/* Right Column: High-Res Official Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="relative group rounded-3xl p-3 bg-gradient-to-b from-[#10543F]/40 via-[#0F1411]/80 to-[#080A09] border border-[#2CE58D]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              {/* Border Light Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#2CE58D]/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#040605] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentProduct.image}
                    src={currentProduct.image}
                    alt={text(`Kemasan ${currentProduct.name} dari Enhancement Peptide`, `Enhancement Peptide ${currentProduct.name} packaging`)}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </AnimatePresence>

                {/* Overlaid Laboratory Watermark */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#080A09]/85 border border-[#2CE58D]/40 backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2CE58D] animate-pulse" />
                  <span className="text-[10px] font-mono text-white tracking-widest uppercase">
                    JANOSHIK TESTED: {currentProduct.name}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-[#080A09]/85 border border-[#2CE58D]/30 backdrop-blur-md text-[10px] font-mono text-[#2CE58D]">
                  {currentProduct.dosage} • BATCH {currentProduct.batch}
                </div>
              </div>

              {/* Spec Footer Details */}
              <div className="mt-3 px-3 py-2 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2CE58D]" />
                  <span>{currentProduct.name}</span>
                </div>
                <span className={`font-bold ${currentProduct.status === "ready" ? "text-[#2CE58D]" : "text-amber-400"}`}>
                  JANOSHIK VERIFIED
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
