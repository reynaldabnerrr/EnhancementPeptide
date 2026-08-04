"use client";

import React, { useState } from "react";
import { FlaskConical, Clock, CheckCircle2, PhoneCall, ShieldCheck, Atom, Sparkles, AlertCircle, Check, PackageCheck } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export interface Compound {
  id: string;
  name: string;
  subtitle: string;
  status: "available" | "coming_soon";
  dose: string;
  statusBadge: string;
  purity: string;
  casNo: string;
  formula: string;
  batchNo: string;
  simpleExplanation: string;
  benefits: string[];
  sideEffects: string[];
  includedKit: string[];
  buttonText: string;
  image: string;
}

interface CompoundCatalogProps {
  onOpenCalculator: () => void;
  onOpenInquiry: () => void;
}

export default function CompoundCatalog({ onOpenCalculator, onOpenInquiry }: CompoundCatalogProps) {
  const { text } = useLanguage();

  const products: Compound[] = [
    {
      id: "retatrutide",
      name: "RETATRUTIDE",
      subtitle: text("Triple Agonist (GLP-1 / GIP / Glucagon)", "Triple Agonist (GLP-1 / GIP / Glucagon)"),
      status: "available",
      dose: "10 MG",
      statusBadge: text("READY STOCK • 10 MG", "READY STOCK • 10 MG"),
      purity: text("Kemurnian Teruji >99% (HPLC)", "Tested Purity >99% (HPLC)"),
      casNo: "2381089-83-2",
      formula: "C223H343N55O70",
      batchNo: "EP-RET-2026-099",
      simpleExplanation: text(
        "Formulasi peptida generasi terbaru yang mengaktifkan 3 jalur hormon sekaligus (GLP-1, GIP, dan Glucagon). Diriset secara spesifik untuk mengoptimalkan pembakaran lemak, pembakaran kalori basal, regulasi gula darah, serta metabolisme energi.",
        "Next-generation peptide formulation activating 3 hormone pathways simultaneously (GLP-1, GIP, and Glucagon). Specifically researched to optimize fat oxidation, basal metabolic rate, blood glucose regulation, and energy expenditure."
      ),
      benefits: [
        text("Mendorong pembakaran lemak tubuh & kalori basal secara maksimal", "Promotes maximal fat oxidation & basal caloric burn"),
        text("Menekan nafsu makan & memperlambat pengosongan lambung", "Suppresses appetite & delays gastric emptying"),
        text("Meningkatkan sensitivitas insulin & stabilisasi gula darah", "Improves insulin sensitivity & stabilizes blood glucose"),
        text("Meningkatkan pemanfaatan energi metabolisme harian", "Enhances daily metabolic energy utilization"),
      ],
      sideEffects: [
        text("Mual ringan atau rasa kenyang berlebih di awal penyesuaian dosis", "Mild nausea or excessive satiety during initial titration"),
        text("Potensi gangguan pencernaan ringan (kembung/konstipasi sementara)", "Potential mild digestive adjustment (transient bloating/constipation)"),
        text("Memerlukan asupan hidrasi air yang cukup saat metabolisme meningkat", "Requires adequate hydration intake as metabolic rate increases"),
      ],
      includedKit: [
        text("1x BAC Water 3ML Steril", "1x Sterile BAC Water 3ML"),
        text("5x Spuit Insulin (31G, 50iu)", "5x Sterile Insulin Syringes (31G, 50iu)"),
        text("5x Swab Alkohol Steril (70%)", "5x Sterile Alcohol Swabs (70%)"),
        text("1x Spuit 3cc Rekonstitusi", "1x 3cc Reconstitution Syringe"),
      ],
      buttonText: text("Inquiry / Order Retatrutide", "Inquire / Order Retatrutide"),
      image: "/reta_hero.png",
    },
    {
      id: "ghk-cu",
      name: "GHK-Cu",
      subtitle: text("Copper Tripeptide-1 (Regenerasi Sel & Kolagen)", "Copper Tripeptide-1 (Cellular & Collagen Renewal)"),
      status: "coming_soon",
      dose: "100 MG",
      statusBadge: text("COMING SOON • 100 MG", "COMING SOON • 100 MG"),
      purity: text("Kemurnian >99% (HPLC)", "Purity >99% (HPLC)"),
      casNo: "49557-75-7",
      formula: "C14H24CuN6O4",
      batchNo: "EP-GHK-2026-SOON",
      simpleExplanation: text(
        "Peptida tembaga murni yang diriset mendalam untuk regenerasi jaringan tubuh, peningkatan sintesis kolagen & elastin, penyembuhan sel kulit, serta stimulasi folikel rambut tebal & sehat.",
        "Pure copper peptide extensively researched for tissue remodeling, enhancement of natural collagen & elastin synthesis, wound healing acceleration, and stimulation of healthy hair follicle density."
      ),
      benefits: [
        text("Merangsang sintesis kolagen & elastin alami seluler", "Stimulates cellular collagen & elastin synthesis"),
        text("Mempercepat penyembuhan sel kulit & regenerasi jaringan tubuh", "Accelerates skin cell healing & tissue regeneration"),
        text("Mendorong pertumbuhan folikel rambut lebih tebal & sehat", "Promotes thicker, healthier hair follicle growth"),
        text("Efek anti-inflamasi alami & perbaikan struktur selular", "Natural anti-inflammatory & cellular structural repair"),
      ],
      sideEffects: [
        text("Sensasi kemerahan atau hangat ringan pada area aplikasi lokal", "Mild redness or warming sensation at local application site"),
        text("Penggunaan dosis tinggi berturut-turut memerlukan kontrol suplemen Zinc", "High continuous dosing requires zinc supplement balance monitoring"),
        text("Memerlukan penyimpanan pada suhu dingin dan terhindar dari panas", "Requires cool temperature storage away from heat exposure"),
      ],
      includedKit: [
        text("1x BAC Water 3ML Steril", "1x Sterile BAC Water 3ML"),
        text("5x Spuit Insulin (31G, 50iu)", "5x Sterile Insulin Syringes (31G, 50iu)"),
        text("5x Swab Alkohol Steril (70%)", "5x Sterile Alcohol Swabs (70%)"),
        text("1x Spuit 3cc Rekonstitusi", "1x 3cc Reconstitution Syringe"),
      ],
      buttonText: text("Segera Hadir / Pre-Order GHK-Cu", "Coming Soon / Pre-Order GHK-Cu"),
      image: "/ghk_cu_hero.png",
    },
  ];

  const [activeTabMap, setActiveTabMap] = useState<Record<string, "benefits" | "sideEffects">>({
    retatrutide: "benefits",
    "ghk-cu": "benefits",
  });

  const toggleTab = (id: string, tab: "benefits" | "sideEffects") => {
    setActiveTabMap((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-[#080A09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-mono font-bold text-[#2CE58D] uppercase tracking-widest block">
            {text("FORMULASI PILIHAN & PAKET LENGKAP", "FEATURED FORMULATIONS & COMPLETE KITS")}
          </span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            {text("KATALOG", "PEPTIDE")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] to-white">{text("PRODUK PEPTIDA", "PRODUCT CATALOG")}</span>
          </h2>
          <p className="text-sm text-[#94A3B8] font-light max-w-xl mx-auto">
            {text("Formulasi berkemurnian tinggi dengan verifikasi HPLC dan paket perlengkapan rekonstitusi yang sudah termasuk.", "High-purity formulations with HPLC verification and an included reconstitution kit.")}
          </p>
        </div>

        {/* Product Cards Grid - Clean Responsive Flex Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {products.map((product) => {
            const currentTab = activeTabMap[product.id] || "benefits";

            return (
              <div
                key={product.id}
                className={`rounded-3xl p-6 sm:p-8 bg-[#0F1411] border flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  product.status === "available"
                    ? "border-[#2CE58D]/30 hover:border-[#2CE58D]/60 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
                    : "border-[#1E2923] opacity-95"
                }`}
              >
                {/* Card Body Content */}
                <div className="space-y-6 flex-1 flex flex-col">
                  
                  {/* 1. Header Pills Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1E2923]">
                    {product.status === "available" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#080A09] text-[#2CE58D] border border-[#2CE58D]/40 shadow-[0_0_15px_rgba(44,229,141,0.2)]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {product.statusBadge}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-amber-950/80 text-amber-300 border border-amber-500/40">
                        <Clock className="w-3.5 h-3.5 text-amber-400" /> {product.statusBadge}
                      </span>
                    )}

                    <span className="text-xs font-mono text-[#2CE58D] font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#2CE58D]" />
                      {product.purity}
                    </span>
                  </div>

                  {/* 2. Main Product Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    <div className="sm:col-span-5 flex justify-center">
                      <div className="w-36 sm:w-44 h-36 sm:h-44 rounded-2xl bg-[#040605] border border-[#1E2923] p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-inner relative group">
                        <img
                          src={product.image}
                          alt={text(`Kemasan produk ${product.name}`, `${product.name} product packaging`)}
                          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Official Brand Logo Watermark Overlay */}
                        <div className="absolute top-2 left-2 p-1.5 rounded-lg bg-[#080A09]/85 border border-[#2CE58D]/30 backdrop-blur-md shadow-md">
                          <img src="/enhancement-logo-transparent.png" alt="Logo" className="w-5 h-5 object-contain" />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-7 space-y-2 text-center sm:text-left">
                      <h3
                        className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-wide"
                        style={{ fontFamily: "Cinzel, serif" }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#2CE58D] font-mono font-medium leading-snug">
                        {product.subtitle}
                      </p>

                      <div className="pt-1">
                        <div className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-[#080A09] border border-[#1E2923] text-[11px] font-mono text-[#94A3B8]">
                          <span className="flex items-center gap-1 text-white font-semibold">
                            <Atom className="w-3.5 h-3.5 text-[#2CE58D]" />
                            CAS: {product.casNo}
                          </span>
                          <span>•</span>
                          <span className="text-[#CBD5E1] font-mono">{product.formula}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Simple Explanation Box */}
                  <div className="p-4 rounded-2xl bg-[#080A09] border border-[#1E2923] flex-1 flex items-center">
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                      {product.simpleExplanation}
                    </p>
                  </div>

                  {/* 4. PERMANENT PAKET BONUS BOX */}
                  <div className="p-4 rounded-2xl bg-[#080A09] border border-[#2CE58D]/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#2CE58D] font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <PackageCheck className="w-4 h-4 text-[#2CE58D]" />
                        {text("PAKET REKONSTITUSI BONUS:", "BONUS RECONSTITUTION KIT:")}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#2CE58D]/20 text-[#2CE58D] border border-[#2CE58D]/30">
                        {text("SUDAH TERMASUK", "INCLUDED")}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs font-mono text-white">
                      {product.includedKit.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#2CE58D] shrink-0" />
                          <span className="text-[11px] text-[#CBD5E1]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5. INTERACTIVE MANFAAT vs EFEK SAMPING TABS */}
                  <div className="space-y-3">
                    {/* Tab Switcher */}
                    <div className="flex items-center gap-2 p-1 bg-[#080A09] rounded-xl border border-[#1E2923]">
                      <button
                        onClick={() => toggleTab(product.id, "benefits")}
                        className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                          currentTab === "benefits"
                            ? "bg-[#2CE58D] text-black shadow-[0_0_12px_rgba(44,229,141,0.3)]"
                            : "text-[#94A3B8] hover:text-white"
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        {text("Manfaat Utama", "Key Benefits")}
                      </button>

                      <button
                        onClick={() => toggleTab(product.id, "sideEffects")}
                        className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                          currentTab === "sideEffects"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : "text-[#94A3B8] hover:text-white"
                        }`}
                      >
                        <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                        {text("Efek Samping", "Side Effects")}
                      </button>
                    </div>

                    {/* Tab Content Container */}
                    <div className="p-4 rounded-2xl bg-[#080A09] border border-[#1E2923] min-h-[160px] flex flex-col justify-center">
                      {currentTab === "benefits" ? (
                        <div className="space-y-2.5">
                          <span className="text-[10px] font-mono text-[#2CE58D] font-bold uppercase tracking-wider block">
                            {text("MANFAAT KLINIS & HASIL RISET:", "CLINICAL & RESEARCH BENEFITS:")}
                          </span>
                          {product.benefits.map((b, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                              <Check className="w-3.5 h-3.5 text-[#2CE58D] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-2.5">
                          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                            {text("CATATAN OBSERVASI EFEK SAMPING:", "SIDE EFFECTS OBSERVATION NOTES:")}
                          </span>
                          {product.sideEffects.map((se, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-amber-200/90">
                              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                              <span>{se}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* 6. Action Buttons at Card Bottom */}
                <div className="pt-6 mt-6 border-t border-[#1E2923] flex items-center gap-3">
                  {product.status === "available" ? (
                    <>
                      <button
                        onClick={onOpenInquiry}
                        className="flex-1 py-3.5 px-4 rounded-xl bg-[#2CE58D] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(44,229,141,0.35)] flex items-center justify-center gap-2"
                      >
                        <PhoneCall className="w-4 h-4" />
                        {product.buttonText}
                      </button>
                      <button
                        onClick={onOpenCalculator}
                        className="px-4 py-3.5 rounded-xl bg-[#080A09] border border-[#2CE58D]/40 text-[#2CE58D] hover:bg-[#2CE58D] hover:text-black transition-all"
                        title={text("Kalkulator Pelarutan Dosis", "Dosing Calculator")}
                      >
                        <FlaskConical className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={onOpenInquiry}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#080A09] border border-amber-500/40 text-amber-300 font-bold text-xs uppercase tracking-widest hover:border-amber-400 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Clock className="w-4 h-4 text-amber-400" />
                      {product.buttonText}
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
