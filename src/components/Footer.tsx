"use client";

import React from "react";
import BrandLogo from "./BrandLogo";
import { ShieldCheck, AlertTriangle, ArrowUp } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { text } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050605] text-[#CBD5E1] pt-16 pb-12 border-t border-[#1E2923] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1E2923]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="md" variant="full" />
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-md font-light">
               {text("Enhancement Peptide menghadirkan formulasi peptida berkemurnian tinggi untuk riset, dengan fokus pada presisi molekuler, kemurnian >99%, dan verifikasi laboratorium HPLC.", "Enhancement Peptide provides high-purity peptide formulations for research, focused on molecular precision, >99% purity, and HPLC laboratory verification.")}
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-[#2CE58D]">
              <ShieldCheck className="w-4 h-4 text-[#2CE58D]" />
              <span>{text("Pengujian Analitis Berstandar ISO 17025", "ISO 17025-Standard Analytical Testing")}</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[#2CE58D] font-bold uppercase tracking-wider block font-serif">
               {text("KATALOG FORMULASI", "FORMULATION CATALOG")}
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#catalog" className="hover:text-[#2CE58D] transition-colors">
                  RETATRUTIDE 10 MG (Ready Stock)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#2CE58D] transition-colors">
                   GHK-Cu 100 MG ({text("Segera Hadir", "Coming Soon")})
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#2CE58D] transition-colors">
                   {text("Kalkulator Pelarutan Dosis", "Dose Reconstitution Calculator")}
                </a>
              </li>
            </ul>
          </div>

          {/* Verification & Standards Links */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[#2CE58D] font-bold uppercase tracking-wider block font-serif">
               {text("STANDAR KUALITAS LAB", "LAB QUALITY STANDARDS")}
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#standards" className="hover:text-[#2CE58D] transition-colors">
                   {text("Verifikasi Kromatogram HPLC per Batch", "Per-Batch HPLC Chromatogram Verification")}
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-[#2CE58D] transition-colors">
                   {text("Sertifikasi Mass Spectrometry (MS)", "Mass Spectrometry (MS) Certification")}
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-[#2CE58D] transition-colors">
                   {text("Jaminan Kemurnian Molekuler >99%", ">99% Molecular Purity Assurance")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Research Disclaimer */}
        <div className="my-8 p-5 rounded-2xl bg-[#080A09] border border-amber-500/20 text-amber-200/80 text-[11px] leading-relaxed flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold uppercase tracking-wider block text-amber-300 font-mono mb-0.5">
               {text("PENAFIAN RISET LABORATORIUM (RUO)", "LABORATORY RESEARCH DISCLAIMER (RUO)")}
            </span>
             {text("Seluruh senyawa peptida Enhancement Peptide hanya ditujukan untuk riset laboratorium, analisis kromatografi, dan pengujian ilmiah oleh institusi atau peneliti berwenang. Produk bukan untuk konsumsi medis, diagnosis klinis, atau penggunaan langsung pada manusia.", "All Enhancement Peptide compounds are intended solely for laboratory research, chromatographic analysis, and scientific testing by authorized institutions or researchers. Products are not for medical consumption, clinical diagnosis, or direct human use.")}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]/60">
          <p>© {new Date().getFullYear()} ENHANCEMENT PEPTIDE. {text("Hak cipta dilindungi.", "All rights reserved.")}</p>
          <div className="flex items-center gap-4">
<span className="hover:text-[#2CE58D] transition-colors cursor-pointer">{text("Protokol Privasi", "Privacy Protocol")}</span>
             <span className="hover:text-[#2CE58D] transition-colors cursor-pointer">{text("Syarat & Ketentuan", "Terms & Conditions")}</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#0F1411] border border-[#2CE58D]/40 text-[#2CE58D] hover:bg-[#2CE58D] hover:text-black transition-all"
               title={text("Kembali ke atas", "Back to top")}
               aria-label={text("Kembali ke atas", "Back to top")}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
