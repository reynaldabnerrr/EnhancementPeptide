"use client";

import React, { useState, useEffect } from "react";
import { X, Search, ShieldCheck, Download, CheckCircle2, AlertCircle, Award } from "lucide-react";
import confetti from "canvas-confetti";
import { FEATURED_PRODUCTS, Compound } from "./CompoundCatalog";

interface BatchVerifierModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCompound?: Compound | null;
}

export default function BatchVerifierModal({
  isOpen,
  onClose,
  selectedCompound,
}: BatchVerifierModalProps) {
  const [searchBatch, setSearchBatch] = useState<string>("EP-RET-2026-099");
  const [activeResult, setActiveResult] = useState<Compound | null>(FEATURED_PRODUCTS[0]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCompound) {
      setSearchBatch(selectedCompound.batchNo);
      setActiveResult(selectedCompound);
    }
  }, [selectedCompound]);

  if (!isOpen) return null;

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSearching(true);
    setErrorMsg(null);

    setTimeout(() => {
      const match = FEATURED_PRODUCTS.find(
        (c) => c.batchNo.toLowerCase() === searchBatch.trim().toLowerCase()
      );
      if (match) {
        setActiveResult(match);
      } else {
        setActiveResult(null);
        setErrorMsg(`Kode batch "${searchBatch}" tidak ditemukan dalam database HPLC aktif. Pastikan kode batch tertera pada label vial anda.`);
      }
      setIsSearching(false);
    }, 300);
  };

  const handleDownloadPDF = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#2CE58D", "#1E8C63", "#FFFFFF"],
    });

    const element = document.createElement("a");
    const file = new Blob([
      `ENHANCEMENT PEPTIDE - SERTIFIKAT ANALISIS HPLC (COA)\n` +
      `====================================================\n` +
      `Kode Batch: ${activeResult?.batchNo}\n` +
      `Produk: ${activeResult?.name} (${activeResult?.dose})\n` +
      `Hasil Kemurnian HPLC: ${activeResult?.purity}\n` +
      `CAS Number: ${activeResult?.casNo}\n` +
      `Formulasi: ${activeResult?.formula}\n` +
      `Fasilitas Pengujian: ISO 17025 Certified Bio-Analytical Facility\n` +
      `Persetujuan Analis: Dr. Aris Thorne, Ph.D. Chief Spectroscopist\n` +
      `Status: LULUS UJI KEMURNIAN TINGGI - Terbit Standar Riset\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${activeResult?.batchNo}_HPLC_COA.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-[#2CE58D]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#23442F]/60 text-[#C8CCD2] hover:text-white hover:bg-[#1E8C63] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[#0E5C4A]/40 border border-[#2CE58D]/40 text-[#2CE58D]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-serif" style={{ fontFamily: "var(--font-cinzel), serif" }}>
              VERIFIKASI BATCH <span className="text-gradient-emerald">HPLC & COA</span>
            </h3>
            <p className="text-xs text-[#C8CCD2]/70 font-mono">
              SISTEM HASIL UJI KEMURNIAN UJI LABORATORIUM INDEPENDEN
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#C8CCD2]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchBatch}
                onChange={(e) => setSearchBatch(e.target.value)}
                placeholder="Masukkan kode batch (contoh: EP-RET-2026-099)"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0B0B] border border-[#1E8C63]/50 text-xs font-mono text-[#2CE58D] placeholder-[#C8CCD2]/40 focus:outline-none focus:border-[#2CE58D]"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-3 rounded-xl bg-[#2CE58D] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-all"
            >
              {isSearching ? "Cari..." : "Verifikasi"}
            </button>
          </div>
        </form>

        {/* Error State */}
        {errorMsg && (
          <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-start gap-3 my-4">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Informasi Verifikasi</p>
              <p className="mt-1">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* COA Result Content */}
        {activeResult && !errorMsg && (
          <div className="space-y-6">
            {/* Header Status Banner */}
            <div className="p-4 rounded-2xl bg-[#0E5C4A]/20 border border-[#2CE58D]/40 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-[#2CE58D]" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white font-serif">{activeResult.name}</span>
                    <span className="px-2 py-0.5 rounded bg-[#2CE58D] text-black font-bold text-[10px] font-mono">
                      {activeResult.dose}
                    </span>
                  </div>
                  <p className="text-xs text-[#2CE58D] font-mono">
                    BATCH: {activeResult.batchNo} • TERVERIFIKASI TERUJI HPLC
                  </p>
                </div>
              </div>

              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2CE58D] text-black font-bold text-xs hover:bg-white transition-all shadow-[0_0_15px_rgba(44,229,141,0.3)]"
              >
                <Download className="w-4 h-4" />
                Unduh Sertifikat COA
              </button>
            </div>

            {/* Simple Spec Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-[#0B0B0B] border border-[#1E8C63]/30 space-y-2">
                <span className="text-[10px] text-[#2CE58D] font-bold uppercase block font-serif">
                  SPESIFIKASI ANALISIS
                </span>
                <div className="flex justify-between border-b border-[#1E8C63]/10 pb-1">
                  <span className="text-[#C8CCD2]/60">Nama Peptida:</span>
                  <span className="text-white font-bold">{activeResult.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E8C63]/10 pb-1">
                  <span className="text-[#C8CCD2]/60">Tingkat Kemurnian:</span>
                  <span className="text-[#2CE58D] font-extrabold">{activeResult.purity}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E8C63]/10 pb-1">
                  <span className="text-[#C8CCD2]/60">CAS Number:</span>
                  <span className="text-white">{activeResult.casNo}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E8C63]/10 pb-1">
                  <span className="text-[#C8CCD2]/60">Formulasi Log:</span>
                  <span className="text-white">{activeResult.formula}</span>
                </div>
              </div>

              {/* Simplified Peak Visualizer */}
              <div className="p-4 rounded-2xl bg-[#0B0B0B] border border-[#1E8C63]/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#2CE58D] font-bold uppercase block font-serif mb-2">
                    KROMATOGRAM PUNCAK KEMURNIAN
                  </span>
                  <div className="h-28 w-full bg-[#070707] rounded-xl border border-[#1E8C63]/20 p-2 flex items-center justify-center relative overflow-hidden">
                    <svg className="w-full h-24" viewBox="0 0 300 100" fill="none">
                      <path
                        d="M 10 90 L 110 90 Q 140 90 150 10 Q 160 90 190 90 L 290 90"
                        stroke="#2CE58D"
                        strokeWidth="2.5"
                        fill="url(#simpleGlow)"
                      />
                      <circle cx="150" cy="10" r="3" fill="#FFFFFF" />
                      <text x="155" y="25" fill="#2CE58D" fontSize="10" fontFamily="monospace" fontWeight="bold">
                        RT 14.8m ({activeResult.purity})
                      </text>
                      <defs>
                        <linearGradient id="simpleGlow" x1="150" y1="10" x2="150" y2="90" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#2CE58D" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#2CE58D" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-[10px] text-[#C8CCD2]/60">
                  <Award className="w-3.5 h-3.5 text-[#2CE58D]" />
                  <span>ISO 17025 Accredited Laboratory Approved</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
