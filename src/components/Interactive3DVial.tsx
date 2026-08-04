"use client";

import React, { useState } from "react";
import { Sparkles, Dna, ShieldCheck, CheckCircle2, ArrowRight, Activity, Zap, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Interactive3DVial() {
  const [activeTab, setActiveTab] = useState<"definisi" | "sains" | "keunggulan">("definisi");

  return (
    <div className="py-12 bg-[#080A09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Editorial Thesis */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0F1411] border border-[#2CE58D]/40 text-[#2CE58D] text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(44,229,141,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#2CE58D]" />
            <span className="uppercase font-bold text-[11px]">SAINS PEPTIDA & BIOLOGI SELULER</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight font-serif"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            APA ITU <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] via-[#6EE7B7] to-white drop-shadow-[0_0_30px_rgba(44,229,141,0.4)]">PEPTIDA?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] font-light max-w-2xl mx-auto leading-relaxed">
            Kurir komunikasi biologis yang menginstruksikan sel-sel tubuh untuk regenerasi, pemulihan jaringan, dan regulasi metabolisme.
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
                  alt="Enhancement Peptide High Purity Specimen"
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
                  Definisi Peptida
                </button>
                <button
                  onClick={() => setActiveTab("sains")}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-300 ${
                    activeTab === "sains"
                      ? "bg-[#2CE58D] text-black shadow-[0_0_15px_rgba(44,229,141,0.3)]"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  Mekanisme Kerja
                </button>
                <button
                  onClick={() => setActiveTab("keunggulan")}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-300 ${
                    activeTab === "keunggulan"
                      ? "bg-[#2CE58D] text-black shadow-[0_0_15px_rgba(44,229,141,0.3)]"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  Keunggulan Sains
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
                        Kunci Biologis Yang Menginstruksikan Kerja Sel Tubuh
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                        <strong className="text-[#2CE58D] font-semibold">Peptida</strong> adalah rantai asam amino pendek yang bertindak sebagai <strong className="text-white font-semibold">&quot;kurir komunikasi biokimia&quot;</strong> di dalam tubuh. Ibarat sebuah kunci presisi, peptida menempel pada reseptor sel spesifik untuk memerintahkan tubuh menjalankan fungsi penting—mulai dari memicu pemulihan sel, merangsang pembentukan kolagen alami, hingga mengoptimalkan pembakaran energi metabolisme.
                      </p>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                        Di tingkat molekuler, peptida terdiri dari rantai presisi yang dihubungkan oleh ikatan kovalen amida. Berbeda dengan obat sintetis biasa yang sering kali bekerja secara acak, peptida meniru molekul alami tubuh secara spesifik sehingga mampu memberikan hasil yang sangat efektif dengan tingkat presisi tinggi.
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
                        Bagaimana Peptida Menargetkan Reseptor Selular
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                        Setiap peptida dirancang dengan urutan asam amino yang unik yang hanya cocok dengan reseptor permukaan sel tertentu. Ketika peptida mengikat reseptor target, ia memicu rantai reaksi biokimia positif di dalam sel (*signal transduction pathway*).
                      </p>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                        Proses ini berjalan secara alami tanpa merusak atau membebani organ tubuh lainnya, menjadikan peptida instrumen utama dalam riset biohacking dan regenerasi sel modern.
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
                        Presisi Tinggi & Bioavailabilitas Alami
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                        Karena ukurannya yang ringkas (2 hingga 50 asam amino), peptida memiliki bioavailabilitas dan tingkat penyerapan yang jauh lebih baik dibandingkan protein kompleks berukuran besar.
                      </p>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                        Formulasi peptida berstandar laboratorium &gt;99% memastikan efektivitas kerja seluler yang konsisten dan bebas dari kontaminasi zat pengisi.
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
                  Sinyal Sel Presisi
                </h4>
                <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                  Menjangkau reseptor spesifik tanpa mengganggu sistem metabolisme tubuh lainnya.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#080A09] border border-[#1E2923] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#0F1411] text-[#2CE58D] border border-[#2CE58D]/30 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-serif" style={{ fontFamily: "Cinzel, serif" }}>
                  Penyerapan Cepat
                </h4>
                <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                  Ukuran rantai asam amino pendek memberikan efisiensi reaksi seluler yang instan.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#080A09] border border-[#1E2923] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#0F1411] text-[#2CE58D] border border-[#2CE58D]/30 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-serif" style={{ fontFamily: "Cinzel, serif" }}>
                  Regenerasi Alami
                </h4>
                <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                  Mendorong pemulihan sel, produksi kolagen, dan pembakaran energi basal.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
