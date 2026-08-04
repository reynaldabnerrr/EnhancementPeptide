"use client";

import React, { useState } from "react";
import { FlaskConical, Clock, CheckCircle2, PhoneCall, ShieldCheck, Atom, Sparkles, AlertCircle, Check, PackageCheck } from "lucide-react";
import { Language, useLanguage } from "./LanguageContext";

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

export const getFeaturedProducts = (language: Language): Compound[] => {
  const t = (id: string, en: string) => language === "id" ? id : en;
  return [
  {
    id: "retatrutide",
    name: "RETATRUTIDE",
    subtitle: "Triple Agonist (GLP-1 / GIP / Glucagon)",
    status: "available",
    dose: "10 MG",
    statusBadge: t("TERSEDIA • 10 MG", "IN STOCK • 10 MG"),
    purity: t("Kemurnian Teruji >99% (HPLC)", "Tested Purity >99% (HPLC)"),
    casNo: "2381089-83-2",
    formula: "C223H343N55O70",
    batchNo: "EP-RET-2026-099",
    simpleExplanation: t("Peptida generasi baru yang mengaktifkan GLP-1, GIP, dan Glucagon secara bersamaan. Formulasi ini dikaji untuk metabolisme energi, pembakaran lemak basal, pengaturan gula darah, dan kendali selera makan.", "A next-generation peptide that activates GLP-1, GIP, and Glucagon together. It is studied for energy metabolism, basal fat oxidation, blood glucose regulation, and appetite control."),
    benefits: [
      t("Mendukung riset pembakaran lemak dan kalori basal", "Supports research into fat oxidation and basal calorie expenditure"),
      t("Membantu mengkaji pengaturan selera makan dan pengosongan lambung", "Helps investigate appetite regulation and gastric emptying"),
      t("Dikaji untuk sensitivitas insulin dan kestabilan gula darah", "Studied for insulin sensitivity and blood glucose stability"),
      t("Mendukung penelitian pemanfaatan energi harian", "Supports research into daily energy utilization"),
    ],
    sideEffects: [
      t("Mual ringan atau rasa kenyang berlebih dapat muncul saat penyesuaian awal", "Mild nausea or excessive fullness may occur during initial adjustment"),
      t("Gangguan pencernaan sementara seperti kembung atau konstipasi mungkin terjadi", "Temporary digestive effects such as bloating or constipation may occur"),
      t("Hidrasi yang memadai perlu diperhatikan selama aktivitas metabolik meningkat", "Adequate hydration should be maintained during increased metabolic activity"),
    ],
    includedKit: [
      t("1x BAC Water 3ML Steril", "1x Sterile BAC Water 3ML"),
      t("5x Spuit Insulin (31G, 50iu)", "5x Insulin Syringes (31G, 50iu)"),
      t("5x Swab Alkohol Steril (70%)", "5x Sterile Alcohol Swabs (70%)"),
      t("1x Spuit 3cc Rekonstitusi", "1x 3cc Reconstitution Syringe"),
    ],
    buttonText: t("Tanya / Pesan Retatrutide", "Inquire / Order Retatrutide"),
    image: "/reta_hero.png",
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    subtitle: t("Copper Tripeptide-1 (Regenerasi Sel & Kolagen)", "Copper Tripeptide-1 (Cell Regeneration & Collagen)"),
    status: "coming_soon",
    dose: "100 MG",
    statusBadge: t("SEGERA HADIR • 100 MG", "COMING SOON • 100 MG"),
    purity: t("Kemurnian >99% (HPLC)", ">99% Purity (HPLC)"),
    casNo: "49557-75-7",
    formula: "C14H24CuN6O4",
    batchNo: "EP-GHK-2026-SOON",
    simpleExplanation: t("Peptida tembaga murni yang diteliti untuk pemulihan jaringan, sintesis kolagen dan elastin, regenerasi sel kulit, serta stimulasi folikel rambut.", "A pure copper peptide researched for tissue repair, collagen and elastin synthesis, skin cell renewal, and hair follicle stimulation."),
    benefits: [
      t("Mendukung sintesis kolagen dan elastin alami", "Supports natural collagen and elastin synthesis"),
      t("Dikaji untuk pemulihan sel kulit dan regenerasi jaringan", "Studied for skin cell repair and tissue regeneration"),
      t("Mendukung penelitian pertumbuhan folikel rambut", "Supports research into hair follicle growth"),
      t("Dikaji untuk respons anti-inflamasi dan perbaikan struktur sel", "Studied for anti-inflammatory response and cellular structure repair"),
    ],
    sideEffects: [
      t("Kemerahan atau sensasi hangat ringan dapat muncul pada area aplikasi", "Mild redness or warmth may occur at the application site"),
      t("Paparan dosis tinggi berulang memerlukan pemantauan kadar Zinc", "Repeated high-dose exposure requires Zinc level monitoring"),
      t("Simpan dalam suhu dingin dan jauhkan dari sumber panas", "Keep refrigerated and protected from heat"),
    ],
    includedKit: [
      t("1x BAC Water 3ML Steril", "1x Sterile BAC Water 3ML"),
      t("5x Spuit Insulin (31G, 50iu)", "5x Insulin Syringes (31G, 50iu)"),
      t("5x Swab Alkohol Steril (70%)", "5x Sterile Alcohol Swabs (70%)"),
      t("1x Spuit 3cc Rekonstitusi", "1x 3cc Reconstitution Syringe"),
    ],
    buttonText: t("Segera Hadir / Pra-Pesan GHK-Cu", "Coming Soon / Pre-Order GHK-Cu"),
    image: "/ghk_cu_hero.png",
  },
];
};

interface CompoundCatalogProps {
  onOpenCalculator: () => void;
  onOpenInquiry: () => void;
}

export default function CompoundCatalog({ onOpenCalculator, onOpenInquiry }: CompoundCatalogProps) {
  const { language, text } = useLanguage();
  const products = getFeaturedProducts(language);
  const [activeTabMap, setActiveTabMap] = useState<Record<string, "benefits" | "sideEffects">>({
    retatrutide: "benefits",
    "ghk-cu": "benefits",
  });

  const toggleTab = (id: string, tab: "benefits" | "sideEffects") => {
    setActiveTabMap((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section id="catalog" className="py-24 bg-[#080A09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold text-[#2CE58D] uppercase tracking-widest block">
            {text("FORMULASI PILIHAN & PAKET LENGKAP", "FEATURED FORMULATIONS & COMPLETE KITS")}
          </span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            {text("KATALOG", "PEPTIDE")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] to-white">{text("PRODUK PEPTIDA", "PRODUCT CATALOG")}</span>
          </h2>
          <p className="text-sm text-[#94A3B8] font-light">
            {text("Formulasi berkemurnian tinggi dengan verifikasi HPLC dan paket perlengkapan rekonstitusi yang sudah termasuk.", "High-purity formulations with HPLC verification and an included reconstitution kit.")}
          </p>
        </div>

        {/* Product Cards Grid - 100% Locked Symmetrical Grid Layout */}
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
                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  
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

                  {/* 2. Main Product Info - Locked Symmetrical Height */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center sm:h-[180px]">
                    <div className="sm:col-span-5 flex justify-center">
                      <div className="w-40 sm:w-44 h-40 sm:h-44 rounded-2xl bg-[#040605] border border-[#1E2923] p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-inner relative group">
                        <img
                          src={product.image}
                           alt={text(`Kemasan produk ${product.name}`, `${product.name} product packaging`)}
                          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Official Brand Logo Watermark Overlay */}
                        <div className="absolute top-2 left-2 p-1.5 rounded-lg bg-[#080A09]/85 border border-[#2CE58D]/30 backdrop-blur-md shadow-md">
                           <img src="/enhancement-logo-transparent.png" alt={text("Logo Enhancement Peptide", "Enhancement Peptide logo")} className="w-5 h-5 object-contain" />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-7 space-y-2.5 text-center sm:text-left flex flex-col justify-center">
                      <h3
                        className="text-3xl font-bold text-white font-serif tracking-wide"
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
                          <span className="text-[#CBD5E1] truncate max-w-[140px]" title={product.formula}>{product.formula}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Simple Explanation Box - Locked Symmetrical Height */}
                  <div className="p-4 rounded-2xl bg-[#080A09] border border-[#1E2923] sm:h-[110px] flex items-center">
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                      {product.simpleExplanation}
                    </p>
                  </div>

                  {/* 4. PERMANENT PAKET BONUS BOX - Locked Symmetrical Height */}
                  <div className="p-4 rounded-2xl bg-[#080A09] border border-[#2CE58D]/30 sm:h-[130px] flex flex-col justify-center space-y-2.5">
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

                  {/* 5. INTERACTIVE MANFAAT vs EFEK SAMPING TABS - Locked Symmetrical Height */}
                  <div className="space-y-3">
                    {/* Tab Switcher */}
                    <div className="flex items-center gap-2 p-1 bg-[#080A09] rounded-xl border border-[#1E2923]">
                      <button
                        onClick={() => toggleTab(product.id, "benefits")}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
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
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                          currentTab === "sideEffects"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : "text-[#94A3B8] hover:text-white"
                        }`}
                      >
                        <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                         {text("Catatan Efek", "Effect Notes")}
                      </button>
                    </div>

                    {/* Tab Content Container - Locked Symmetrical Height sm:h-[160px] */}
                    <div className="p-4 rounded-2xl bg-[#080A09] border border-[#1E2923] sm:h-[160px] flex flex-col justify-center">
                      {currentTab === "benefits" ? (
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono text-[#2CE58D] font-bold uppercase tracking-wider block">
                             {text("MANFAAT & TEMUAN RISET:", "BENEFITS & RESEARCH FINDINGS:")}
                          </span>
                          {product.benefits.map((b, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                              <Check className="w-3.5 h-3.5 text-[#2CE58D] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                             {text("CATATAN OBSERVASI EFEK:", "OBSERVED EFFECT NOTES:")}
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
                        title="Kalkulator Pelarutan Dosis"
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
