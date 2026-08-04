"use client";

import React from "react";
import BrandLogo from "./BrandLogo";
import { ShieldCheck, AlertTriangle, ArrowUp } from "lucide-react";

export default function Footer() {
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
              Enhancement Peptide adalah brand formulasi peptida riset murni berstandar tinggi. Didedikasikan untuk presisi molekuler, kemurnian bergaransi &gt;99%, dan kepastian pengujian laboratorium HPLC.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-[#2CE58D]">
              <ShieldCheck className="w-4 h-4 text-[#2CE58D]" />
              <span>Pengujian Analitis Berstandar ISO 17025</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[#2CE58D] font-bold uppercase tracking-wider block font-serif">
              KATALOG FORMULASI
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#catalog" className="hover:text-[#2CE58D] transition-colors">
                  RETATRUTIDE 10 MG (Ready Stock)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#2CE58D] transition-colors">
                  GHK-Cu 10 MG (Coming Soon)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#2CE58D] transition-colors">
                  Kalkulator Pelarutan Dosis
                </a>
              </li>
            </ul>
          </div>

          {/* Verification & Standards Links */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[#2CE58D] font-bold uppercase tracking-wider block font-serif">
              STANDAR KUALITAS LAB
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#standards" className="hover:text-[#2CE58D] transition-colors">
                  Kromatogram HPLC Batch Verification
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-[#2CE58D] transition-colors">
                  Sertifikasi Mass Spectrometry (MS)
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-[#2CE58D] transition-colors">
                  Jaminan Kemurnian Molekuler &gt;99%
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
              DISCLAIMER RISET LABORATORIUM (RUO)
            </span>
            Seluruh senyawa peptida dari Enhancement Peptide diperuntukkan khusus untuk riset laboratorium, analisis kromatografi, dan pengujian ilmiah oleh institusi atau peneliti berwenang. Produk tidak diperuntukkan bagi konsumsi medis, diagnosis klinis, atau penggunaan manusia secara langsung.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]/60">
          <p>© {new Date().getFullYear()} ENHANCEMENT PEPTIDE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#2CE58D] transition-colors cursor-pointer">Privasi Protocol</span>
            <span className="hover:text-[#2CE58D] transition-colors cursor-pointer">Syarat & Ketentuan</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#0F1411] border border-[#2CE58D]/40 text-[#2CE58D] hover:bg-[#2CE58D] hover:text-black transition-all"
              title="Ke Atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
