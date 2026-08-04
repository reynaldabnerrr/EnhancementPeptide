"use client";

import React, { useState } from "react";
import { ShieldCheck, FlaskConical, PhoneCall } from "lucide-react";

interface ProductVial3DProps {
  productName?: string;
  dosage?: string;
  category?: string;
  purity?: string;
  batchNo?: string;
  onOpenCalc?: () => void;
  onOpenInquiry?: () => void;
}

export default function ProductVial3D({
  productName = "RETATRUTIDE",
  dosage = "10 MG",
  category = "GIP / GLP-1 / Glucagon Tri-Agonist",
  purity = ">99%",
  batchNo = "EP-RET-2026-099",
  onOpenCalc,
  onOpenInquiry,
}: ProductVial3DProps) {
  const [activeAsset, setActiveAsset] = useState<"vial" | "box" | "label" | "cap">("vial");
  const [isHovered, setIsHovered] = useState(false);

  const assetMap = {
    vial: { src: "/assets/product_vial.png", title: "Product Vial", sub: "Botol Vial Retatrutide Resmi" },
    box: { src: "/assets/box_packaging.png", title: "Box Packaging", sub: "Kemasan Box Premium Motif Molekuler" },
    label: { src: "/assets/product_label.png", title: "Product Label", sub: "Desain Label Produk Retatrutide" },
    cap: { src: "/assets/vial_cap.png", title: "Vial Cap", sub: "Tutup Vial Emerald Metallic" },
  };

  return (
    <div
      className="relative group flex flex-col items-center justify-center p-6 rounded-3xl glass-card border border-[#C8CCD2]/20 hover:border-[#2CE58D]/40 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Emerald Glow */}
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#1E8C63]/30 via-[#0E5C4A]/20 to-[#2CE58D]/20 blur-xl transition-opacity duration-500 pointer-events-none ${
          isHovered ? "opacity-100 scale-105" : "opacity-40"
        }`}
      />

      {/* Top Header Badge */}
      <div className="relative z-10 w-full flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#23442F]/80 border border-[#2CE58D]/40 text-[#2CE58D]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2CE58D]" />
          STANDAR PEPTIDE • {purity}
        </span>
        <span className="text-[10px] tracking-widest text-[#C8CCD2]/70 font-mono">
          {batchNo}
        </span>
      </div>

      {/* Asset Switcher Buttons */}
      <div className="relative z-10 flex items-center gap-1 p-1 bg-[#0B0B0B]/80 rounded-xl border border-[#1E8C63]/30 mb-4">
        <button
          onClick={() => setActiveAsset("vial")}
          className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all ${
            activeAsset === "vial"
              ? "bg-[#2CE58D] text-black shadow-[0_0_10px_rgba(44,229,141,0.3)]"
              : "text-[#C8CCD2] hover:text-white"
          }`}
        >
          Vial
        </button>
        <button
          onClick={() => setActiveAsset("box")}
          className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all ${
            activeAsset === "box"
              ? "bg-[#2CE58D] text-black shadow-[0_0_10px_rgba(44,229,141,0.3)]"
              : "text-[#C8CCD2] hover:text-white"
          }`}
        >
          Box
        </button>
        <button
          onClick={() => setActiveAsset("label")}
          className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all ${
            activeAsset === "label"
              ? "bg-[#2CE58D] text-black shadow-[0_0_10px_rgba(44,229,141,0.3)]"
              : "text-[#C8CCD2] hover:text-white"
          }`}
        >
          Label
        </button>
        <button
          onClick={() => setActiveAsset("cap")}
          className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all ${
            activeAsset === "cap"
              ? "bg-[#2CE58D] text-black shadow-[0_0_10px_rgba(44,229,141,0.3)]"
              : "text-[#C8CCD2] hover:text-[#2CE58D]"
          }`}
        >
          Cap
        </button>
      </div>

      {/* Image Container with Floating Glow */}
      <div className="relative z-10 my-2 h-64 w-full flex items-center justify-center overflow-hidden">
        <div
          className={`relative transition-all duration-500 ease-out flex items-center justify-center ${
            isHovered ? "scale-105 -translate-y-2" : "scale-100"
          }`}
        >
          <img
            src={assetMap[activeAsset].src}
            alt={assetMap[activeAsset].title}
            className="max-h-56 object-contain rounded-xl drop-shadow-[0_15px_30px_rgba(44,229,141,0.25)] border border-[#1E8C63]/20"
          />
        </div>
      </div>

      {/* Asset Subtitle */}
      <span className="relative z-10 text-[10px] font-mono text-[#2CE58D] mb-3">
        {assetMap[activeAsset].sub}
      </span>

      {/* Product Information */}
      <div className="relative z-10 w-full text-center">
        <h4 className="text-xl font-bold text-white font-serif tracking-wide" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          {productName}
        </h4>
        <p className="text-xs text-[#C8CCD2]/70 font-light mt-0.5">{category}</p>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 mt-4">
          <button
            onClick={onOpenInquiry}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#2CE58D] text-xs font-bold text-black hover:bg-white transition-all shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Tanya / Order
          </button>
          <button
            onClick={onOpenCalc}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#23442F]/50 border border-[#C8CCD2]/20 text-xs font-semibold text-[#C8CCD2] hover:border-[#2CE58D] hover:text-white transition-all shadow-sm"
          >
            <FlaskConical className="w-3.5 h-3.5" />
            Kalkulator
          </button>
        </div>
      </div>
    </div>
  );
}
