"use client";

import React, { useState } from "react";
import { Dna, Share2, Shield, FlaskConical, Target, Leaf, Sparkles, CheckCircle2, XCircle, Layers, Maximize2, X, Eye } from "lucide-react";

export default function BrandGuidelineShowcase() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const colors = [
    { name: "#0B0B0B", label: "Rich Obsidian Dark", role: "Primary Background", hex: "#0B0B0B" },
    { name: "#0E5C4A", label: "Dark Emerald", role: "Brand Core Accent", hex: "#0E5C4A" },
    { name: "#1E8C63", label: "Accent Emerald", role: "Glow & Borders", hex: "#1E8C63" },
    { name: "#23442F", label: "Deep Pine Green", role: "Badge & Container fill", hex: "#23442F" },
    { name: "#C8CCD2", label: "Silver Metallic", role: "Sub-headings & Metallic", hex: "#C8CCD2" },
    { name: "#F5F5F5", label: "Soft Pure White", role: "Body & Title text", hex: "#F5F5F5" },
    { name: "#2CE58D", label: "Bio-luminescent Neon", role: "Active Status & Highlights", hex: "#2CE58D" },
  ];

  const iconsList = [
    { name: "DNA", desc: "Genomic Precision", icon: Dna },
    { name: "MOLECULE", desc: "Structural Integrity", icon: Share2 },
    { name: "PURE", desc: "99.8%+ High Purity", icon: Shield },
    { name: "LABORATORY", desc: "ISO 17025 Tested", icon: FlaskConical },
    { name: "PRECISION", desc: "Targeted Affinity", icon: Target },
    { name: "BOTANICAL", desc: "Bio-Organic Biohacking", icon: Leaf },
    { name: "STRENGTH", desc: "Winged Crest Potency", icon: Sparkles },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="brand-guidelines" className="py-20 bg-[#070707] relative border-t border-[#1E8C63]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23442F]/60 border border-[#2CE58D]/30 text-[#2CE58D] text-xs font-mono font-bold tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            STANDAR BRAND & ASET LOGO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
            ASET LOGO <span className="text-gradient-emerald">TRANSPARAN</span>
          </h2>
          <p className="text-sm text-[#C8CCD2]/70">
            Aset logo resmi <span className="text-[#2CE58D] font-mono">enhancement-logo-transparent.png</span> dan spesifikasi visual lengkap dari poster brand.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setLightboxImg("/brand_guideline.png")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#23442F]/80 border border-[#2CE58D]/40 text-xs font-bold text-[#2CE58D] hover:bg-[#2CE58D] hover:text-black transition-all shadow-[0_0_20px_rgba(44,229,141,0.2)]"
            >
              <Maximize2 className="w-4 h-4" />
              Lihat Poster Brand Guideline Lengkap
            </button>
          </div>
        </div>

        {/* 1. Extract Asset Gallery */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold text-[#2CE58D] uppercase tracking-widest block mb-6">
            ASET MEDIA RESMI BRAND
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Primary Transparent Logo */}
            <div className="glass-card p-5 rounded-3xl border border-[#C8CCD2]/15 flex flex-col justify-between group hover:border-[#2CE58D] transition-all">
              <div className="relative h-48 bg-[#0B0B0B] rounded-2xl border border-[#1E8C63]/30 p-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/enhancement-logo-transparent.png"
                  alt="Transparent Logo Crest"
                  className="max-h-40 object-contain drop-shadow-[0_0_15px_rgba(44,229,141,0.4)] group-hover:scale-105 transition-transform"
                />
                <button
                  onClick={() => setLightboxImg("/enhancement-logo-transparent.png")}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/70 text-[#2CE58D] hover:bg-[#1E8C63] hover:text-black transition-all"
                  title="Enlarge Image"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-mono text-[#2CE58D] block">01. LOGO TRANSPARAN</span>
                <span className="text-sm font-bold text-white font-serif">enhancement-logo-transparent.png</span>
              </div>
            </div>

            {/* Product Vial */}
            <div className="glass-card p-5 rounded-3xl border border-[#C8CCD2]/15 flex flex-col justify-between group hover:border-[#2CE58D] transition-all">
              <div className="relative h-48 bg-[#0B0B0B] rounded-2xl border border-[#1E8C63]/30 p-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/product_vial.png"
                  alt="Product Vial"
                  className="max-h-40 object-contain drop-shadow-[0_0_15px_rgba(44,229,141,0.3)] group-hover:scale-105 transition-transform"
                />
                <button
                  onClick={() => setLightboxImg("/assets/product_vial.png")}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/70 text-[#2CE58D] hover:bg-[#1E8C63] hover:text-black transition-all"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-mono text-[#2CE58D] block">06. BOTOL VIAL</span>
                <span className="text-sm font-bold text-white font-serif">Retatrutide 10 MG Vial</span>
              </div>
            </div>

            {/* Box Packaging */}
            <div className="glass-card p-5 rounded-3xl border border-[#C8CCD2]/15 flex flex-col justify-between group hover:border-[#2CE58D] transition-all">
              <div className="relative h-48 bg-[#0B0B0B] rounded-2xl border border-[#1E8C63]/30 p-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/box_packaging.png"
                  alt="Box Packaging"
                  className="max-h-40 object-contain drop-shadow-[0_0_15px_rgba(44,229,141,0.3)] group-hover:scale-105 transition-transform"
                />
                <button
                  onClick={() => setLightboxImg("/assets/box_packaging.png")}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/70 text-[#2CE58D] hover:bg-[#1E8C63] hover:text-black transition-all"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-mono text-[#2CE58D] block">09. KEMASAN BOX</span>
                <span className="text-sm font-bold text-white font-serif">Packaging Motif Molekuler</span>
              </div>
            </div>

            {/* Social Media Example */}
            <div className="glass-card p-5 rounded-3xl border border-[#C8CCD2]/15 flex flex-col justify-between group hover:border-[#2CE58D] transition-all">
              <div className="relative h-48 bg-[#0B0B0B] rounded-2xl border border-[#1E8C63]/30 p-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/social_media.png"
                  alt="Social Media Mockup"
                  className="max-h-40 object-contain drop-shadow-[0_0_15px_rgba(44,229,141,0.3)] group-hover:scale-105 transition-transform"
                />
                <button
                  onClick={() => setLightboxImg("/assets/social_media.png")}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/70 text-[#2CE58D] hover:bg-[#1E8C63] hover:text-black transition-all"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-mono text-[#2CE58D] block">15. SOCIAL MEDIA</span>
                <span className="text-sm font-bold text-white font-serif">Enhancement.Peptide Feed</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Color Palette */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold text-[#2CE58D] uppercase tracking-widest block mb-6">
            PALET WARNA RESMI BRAND
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {colors.map((c) => (
              <button
                key={c.hex}
                onClick={() => handleCopy(c.hex)}
                className="group p-4 rounded-2xl border border-[#C8CCD2]/15 bg-[#0B0B0B] hover:border-[#2CE58D] transition-all text-left flex flex-col justify-between h-40"
              >
                <div
                  className="w-full h-12 rounded-xl shadow-inner border border-white/10 flex items-center justify-center relative"
                  style={{ backgroundColor: c.hex }}
                >
                  {copiedHex === c.hex && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-black text-[#2CE58D]">
                      COPIED!
                    </span>
                  )}
                </div>
                <div className="mt-2 space-y-0.5">
                  <span className="text-xs font-bold text-white block truncate">{c.label}</span>
                  <span className="text-[10px] font-mono text-[#2CE58D] block">{c.hex}</span>
                  <span className="text-[9px] text-[#C8CCD2]/60 block truncate">{c.role}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fade-in">
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#23442F] text-[#2CE58D] hover:bg-[#1E8C63] hover:text-black transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto p-2 rounded-2xl glass-card border border-[#2CE58D]/40">
            <img src={lightboxImg} alt="Brand Guideline Asset Enlarged" className="w-full h-auto rounded-xl object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
