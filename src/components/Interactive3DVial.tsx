"use client";

import React, { useState } from "react";
import { Sparkles, Dna, ShieldCheck, CheckCircle2, ArrowRight, Activity, Zap, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function Interactive3DVial() {
  const [activeTab, setActiveTab] = useState<"definisi" | "sains" | "keunggulan">("definisi");
  const { text } = useLanguage();

  return (
    <div className="py-12 bg-[#080A09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Editorial Thesis */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0F1411] border border-[#2CE58D]/40 text-[#2CE58D] text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(44,229,141,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#2CE58D]" />
            <span className="uppercase font-bold text-[11px]">{text("SAINS PEPTIDA & BIOLOGI SELULER", "PEPTIDE SCIENCE & CELLULAR BIOLOGY")}</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight font-serif"
            style={{ fontFamily: "Cinzel, serif" }}
          >
             {text("APA ITU", "WHAT ARE")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] via-[#6EE7B7] to-white drop-shadow-[0_0_30px_rgba(44,229,141,0.4)]">{text("PEPTIDA?", "PEPTIDES?")}</span>
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] font-light max-w-2xl mx-auto leading-relaxed">
             {text("Molekul pembawa pesan biologis yang membantu sel mengatur regenerasi, pemulihan jaringan, dan metabolisme.", "Biological messenger molecules that help cells regulate regeneration, tissue repair, and metabolism.")}
          </p>
        </div>

        {/* Master Showcase Layout: Editorial Split */}
        <div className="bg-[#0F1411] rounded-3xl p-6 sm:p-10 border border-[#2CE58D]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden space-y-12">
          {/* Ambient Lighting Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2CE58D]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Main Section: High-Res Specimen Card vs Narrative Article Reader */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Photorealistic Specimen Frame with Lab Seals */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#040605] border border-[#2CE58D]/40 p-2 overflow-hidden shadow-2xl group">
                {/* Product Image Showcase */}
                <img
                  src="/reta_hero.png"
                   alt={text("Spesimen Enhancement Peptide berkemurnian tinggi", "High-purity Enhancement Peptide specimen")}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlaid Brand Emblem Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#080A09]/90 border border-[#2CE58D]/40 backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2CE58D] animate-pulse" />
                  <span className="text-[10px] font-mono text-white tracking-wider font-bold">
                    JANOSHIK TESTED: &gt;99% PURITY
                  </span>
                </div>

                {/* Overlaid Specimen Lab Seal */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-[#080A09]/90 border border-[#2CE58D]/30 backdrop-blur-md text-[10px] font-mono text-[#2CE58D]">
                  HIGH-PURITY SPPS SYNTHESIS
                </div>
              </div>

              {/* Lab Certification Badges */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono">
                <span className="px-3 py-1.5 rounded-full bg-[#080A09] border border-[#2CE58D]/40 text-[#2CE58D] font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> JANOSHIK VERIFIED
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#080A09] border border-[#1E2923] text-[#CBD5E1]">
                  HPLC CHROMATOGRAM CERTIFIED
                </span>
              </div>
            </div>

            {/* Right: Editorial 3-Tab Narrative Article */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Tab Selector */}
              <div className="flex items-center gap-2 p-1.5 bg-[#080A09] rounded-2xl border border-[#1E2923]">
                <button
                  onClick={() => setActiveTab("definisi")}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-300 ${
                    activeTab === "definisi"
                      ? "bg-[#2CE58D] text-black shadow-[0_0_15px_rgba(44,229,141,0.3)]"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                   {text("Definisi Peptida", "Peptide Basics")}
                </button>
                <button
                  onClick={() => setActiveTab("sains")}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-300 ${
                    activeTab === "sains"
                      ? "bg-[#2CE58D] text-black shadow-[0_0_15px_rgba(44,229,141,0.3)]"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                   {text("Mekanisme Kerja", "How They Work")}
                </button>
                <button
                  onClick={() => setActiveTab("keunggulan")}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-300 ${
                    activeTab === "keunggulan"
                      ? "bg-[#2CE58D] text-black shadow-[0_0_15px_rgba(44,229,141,0.3)]"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                   {text("Keunggulan Sains", "Scientific Advantages")}
                </button>
              </div>

              {/* Tab Narrative Article Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#080A09] border border-[#1E2923] min-h-[220px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === "definisi" && (
                    <motion.div
                      key="definisi"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-serif leading-snug" style={{ fontFamily: "Cinzel, serif" }}>
                         {text("Sinyal Biologis yang Mengarahkan Kerja Sel", "Biological Signals That Guide Cell Activity")}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                         {text("Peptida merupakan rantai pendek asam amino yang berfungsi sebagai pembawa pesan biokimia. Dengan berikatan pada reseptor tertentu, molekul ini dapat memicu proses seperti pemulihan sel, produksi kolagen, dan pengaturan metabolisme energi.", "Peptides are short amino-acid chains that act as biochemical messengers. By binding to specific receptors, they can trigger processes such as cell repair, collagen production, and energy metabolism regulation.")}
                      </p>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                         {text("Pada tingkat molekuler, asam amino di dalam peptida terhubung melalui ikatan amida. Susunannya dapat meniru sinyal alami tubuh sehingga interaksinya dengan target sel dapat dipelajari secara lebih spesifik.", "At the molecular level, peptide amino acids are linked by amide bonds. Their sequences can mimic natural body signals, enabling more targeted study of cellular interactions.")}
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "sains" && (
                    <motion.div
                      key="sains"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-serif leading-snug" style={{ fontFamily: "Cinzel, serif" }}>
                         {text("Cara Peptida Berinteraksi dengan Reseptor Sel", "How Peptides Interact with Cell Receptors")}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                         {text("Urutan asam amino tiap peptida menentukan kecocokannya dengan reseptor permukaan sel. Saat berikatan dengan target, peptida dapat memulai rangkaian reaksi biokimia yang disebut signal transduction pathway.", "Each peptide's amino-acid sequence determines its affinity for specific cell-surface receptors. Binding to a target can initiate a biochemical cascade known as a signal transduction pathway.")}
                      </p>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                         {text("Mekanisme yang terarah ini menjadikan peptida instrumen penting dalam penelitian biohacking dan regenerasi sel modern.", "This targeted mechanism makes peptides valuable tools in modern biohacking and cellular regeneration research.")}
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "keunggulan" && (
                    <motion.div
                      key="keunggulan"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-serif leading-snug" style={{ fontFamily: "Cinzel, serif" }}>
                         {text("Presisi Tinggi & Bioavailabilitas", "High Precision & Bioavailability")}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                         {text("Dengan panjang sekitar 2 hingga 50 asam amino, peptida lebih ringkas daripada protein kompleks dan menawarkan karakter penyerapan yang berbeda untuk diteliti.", "At roughly 2 to 50 amino acids long, peptides are smaller than complex proteins and offer distinct absorption characteristics for study.")}
                      </p>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                         {text("Formulasi dengan kemurnian laboratorium >99% membantu menjaga konsistensi penelitian dan meminimalkan kontaminasi bahan pengisi.", "Laboratory-grade formulations with >99% purity support research consistency and minimize filler contamination.")}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

          {/* Bottom 3 Core Scientific Features */}
          <div className="pt-8 border-t border-[#1E2923] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#080A09] border border-[#1E2923] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#0F1411] text-[#2CE58D] border border-[#2CE58D]/30 shrink-0">
                <Dna className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-serif" style={{ fontFamily: "Cinzel, serif" }}>
                   {text("Sinyal Sel Presisi", "Precision Cell Signaling")}
                </h4>
                <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                   {text("Menargetkan reseptor spesifik untuk mempelajari respons sel secara terarah.", "Targets specific receptors to study focused cellular responses.")}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#080A09] border border-[#1E2923] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#0F1411] text-[#2CE58D] border border-[#2CE58D]/30 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-serif" style={{ fontFamily: "Cinzel, serif" }}>
                   {text("Rantai Ringkas", "Compact Chains")}
                </h4>
                <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                   {text("Rantai asam amino pendek mendukung interaksi seluler yang efisien untuk diteliti.", "Short amino-acid chains support efficient cellular interactions for study.")}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#080A09] border border-[#1E2923] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#0F1411] text-[#2CE58D] border border-[#2CE58D]/30 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-serif" style={{ fontFamily: "Cinzel, serif" }}>
                   {text("Riset Regenerasi", "Regeneration Research")}
                </h4>
                <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                   {text("Mendukung kajian pemulihan sel, produksi kolagen, dan metabolisme energi.", "Supports studies of cell repair, collagen production, and energy metabolism.")}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
