"use client";

import React from "react";
import { Leaf, BarChart3, UserCheck, ShieldCheck, Award, FileCheck } from "lucide-react";

export default function StandardsGrid() {
  return (
    <section id="standards" className="py-20 bg-[#080A09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold text-[#2CE58D] uppercase tracking-widest block">
            JAMINAN KUALITAS & PENGUJIANKU
          </span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            STANDAR ANALISIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] to-white">JANOSHIK ANALYTICAL</span>
          </h2>
          <p className="text-sm text-[#94A3B8] font-light">
            Setiap batch produk peptida kami diuji secara independen oleh laboratorium analitis terkemuka dunia **Janoshik Analytical** untuk memastikan kemurnian &gt;99% tanpa bahan kontaminan.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-[#0F1411] border border-[#1E2923] flex flex-col items-center text-center space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <div className="p-4 rounded-2xl bg-[#080A09] text-[#2CE58D] border border-[#2CE58D]/30 shadow-[0_0_20px_rgba(44,229,141,0.15)]">
              <FileCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-serif tracking-wider" style={{ fontFamily: "Cinzel, serif" }}>
              JANOSHIK TESTED
            </h3>
            <p className="text-xs text-[#CBD5E1] leading-relaxed font-light">
              Laporan pengujian kromatogram HPLC & Mass Spectrometry asli dari Janoshik Analytical dapat diverifikasi untuk setiap batch produksi.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-[#0F1411] border border-[#1E2923] flex flex-col items-center text-center space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <div className="p-4 rounded-2xl bg-[#080A09] text-[#2CE58D] border border-[#2CE58D]/30 shadow-[0_0_20px_rgba(44,229,141,0.15)]">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-serif tracking-wider" style={{ fontFamily: "Cinzel, serif" }}>
              KEMURNIAN &gt;99% VERIFIED
            </h3>
            <p className="text-xs text-[#CBD5E1] leading-relaxed font-light">
              Menjamin tingkat kemurnian molekuler tertinggi tanpa bahan pengisi (*fillers*), produk sampingan sintesis, atau logam berat.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-[#0F1411] border border-[#1E2923] flex flex-col items-center text-center space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <div className="p-4 rounded-2xl bg-[#080A09] text-[#2CE58D] border border-[#2CE58D]/30 shadow-[0_0_20px_rgba(44,229,141,0.15)]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-serif tracking-wider" style={{ fontFamily: "Cinzel, serif" }}>
              ISO 17025 ACCREDITED
            </h3>
            <p className="text-xs text-[#CBD5E1] leading-relaxed font-light">
              Diuji menggunakan standar fasilitas laboratorium analisis terakreditasi internasional dengan jaminan presisi massa molekul.
            </p>
          </div>
        </div>

        {/* Janoshik Seal Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0F1411] border border-[#2CE58D]/40 bg-gradient-to-r from-[#10543F]/20 via-[#0F1411] to-[#10543F]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-[#080A09] text-[#2CE58D] border border-[#2CE58D]/40">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#2CE58D] uppercase tracking-widest">
                VERIFIKASI LABORATORIUM INDEPENDEN
              </span>
              <h4 className="text-xl font-bold text-white font-serif" style={{ fontFamily: "Cinzel, serif" }}>
                JANOSHIK ANALYTICAL CERTIFIED
              </h4>
            </div>
          </div>
          <div className="text-right text-xs font-mono text-[#CBD5E1]">
            <span>SERTIFIKAT KROMATOGRAM HPLC</span>
            <span className="block text-[#2CE58D] font-bold">100% AUDIT REPRODUKSIBILITAS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
