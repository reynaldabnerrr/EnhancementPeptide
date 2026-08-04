"use client";

import React, { useState } from "react";
import { FlaskConical, Info, X, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface ReconstitutionCalculatorProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ReconstitutionCalculator({ isOpen = true, onClose }: ReconstitutionCalculatorProps) {
  const { text } = useLanguage();
  const [vialMg, setVialMg] = useState<number>(10); // 10 mg vial default
  const [bacWaterMl, setBacWaterMl] = useState<number>(2.0); // 2.0 mL water default
  const [desiredDoseMg, setDesiredDoseMg] = useState<number>(2.5); // 2.5 mg target dose default

  // Calculations
  const totalMcgInVial = vialMg * 1000;
  const mcgPerMl = totalMcgInVial / bacWaterMl;
  const mgPerMl = vialMg / bacWaterMl;
  
  // U-100 Insulin Syringe (100 units = 1.0 mL, 1 unit = 0.01 mL)
  const mlNeededForDose = desiredDoseMg / mgPerMl;
  const syringeUnits = Math.min(100, Math.max(0, Math.round(mlNeededForDose * 100)));

  if (!isOpen) return null;

  const handleVialChange = (mg: number) => {
    setVialMg(mg);
    if (desiredDoseMg > mg) {
      setDesiredDoseMg(mg);
    }
  };

  return (
    <div className="relative bg-[#0F1411] rounded-2xl border border-[#2CE58D]/30 p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.9)] overflow-hidden">
      {/* Background Accent Ambient Glow */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-[#2CE58D]/5 rounded-full blur-[100px] pointer-events-none" />

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-[#080A09] text-[#94A3B8] hover:text-white hover:bg-[#1E2923] transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Compact Header */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#1E2923]">
        <div className="p-2.5 rounded-xl bg-[#080A09] border border-[#2CE58D]/40 text-[#2CE58D]">
          <FlaskConical className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[9px] font-mono text-[#2CE58D] font-bold uppercase tracking-widest block">
            {text("PRESISI REKONSTITUSI & REKAP DOSIS", "RECONSTITUTION PRECISION & DOSE SUMMARY")}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-serif tracking-tight leading-none pt-0.5" style={{ fontFamily: "Cinzel, serif" }}>
            {text("KALKULATOR REKONSTITUSI & ", "RECONSTITUTION & ")}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] to-white">{text("DOSIS", "DOSING CALCULATOR")}</span>
          </h3>
        </div>
      </div>

      {/* Compact Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          
          {/* Step 1: Vial Quantity (MG) */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="font-bold text-[#CBD5E1] uppercase">{text("1. Jumlah Peptida dalam Vial (MG)", "1. Peptide Vial Quantity (MG)")}</span>
              <span className="text-[#2CE58D] font-bold">{vialMg} MG</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[5, 10, 15, 50].map((mg) => (
                <button
                  key={mg}
                  onClick={() => handleVialChange(mg)}
                  className={`py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                    vialMg === mg
                      ? "bg-[#2CE58D] text-black shadow-[0_0_12px_rgba(44,229,141,0.3)]"
                      : "bg-[#080A09] border border-[#1E2923] text-[#94A3B8] hover:text-white hover:border-[#2CE58D]/40"
                  }`}
                >
                  {mg} MG
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: BAC Water Added (mL) */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="font-bold text-[#CBD5E1] uppercase">{text("2. Volume Air Bakteriostatik (mL)", "2. Bacteriostatic Water Added (mL)")}</span>
              <span className="text-[#2CE58D] font-bold">{bacWaterMl.toFixed(1)} mL</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[1.0, 2.0, 3.0, 5.0].map((ml) => (
                <button
                  key={ml}
                  onClick={() => setBacWaterMl(ml)}
                  className={`py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                    bacWaterMl === ml
                      ? "bg-[#2CE58D] text-black shadow-[0_0_12px_rgba(44,229,141,0.3)]"
                      : "bg-[#080A09] border border-[#1E2923] text-[#94A3B8] hover:text-white hover:border-[#2CE58D]/40"
                  }`}
                >
                  {ml.toFixed(1)} mL
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Target Research Dose (MG) */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="font-bold text-[#CBD5E1] uppercase">{text("3. Target Dosis Riset (MG)", "3. Target Research Dose (MG)")}</span>
              <span className="text-[#2CE58D] font-bold">
                {desiredDoseMg.toFixed(2)} MG ({(desiredDoseMg * 1000).toLocaleString()} mcg)
              </span>
            </div>

            {/* Quick Presets */}
            <div className="grid grid-cols-5 gap-1">
              {[0.25, 0.5, 1.0, 2.5, 5.0].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setDesiredDoseMg(Math.min(vialMg, preset))}
                  className={`py-1 rounded-md text-[10px] font-mono font-bold transition-all ${
                    desiredDoseMg === preset
                      ? "bg-[#2CE58D]/20 text-[#2CE58D] border border-[#2CE58D]/50"
                      : "bg-[#080A09] text-[#94A3B8] border border-[#1E2923] hover:text-white"
                  }`}
                >
                  {preset} mg
                </button>
              ))}
            </div>

            <input
              type="range"
              min="0.05"
              max={vialMg}
              step="0.05"
              value={desiredDoseMg}
              onChange={(e) => setDesiredDoseMg(Number(e.target.value))}
              className="w-full accent-[#2CE58D] bg-[#080A09] cursor-pointer h-1 rounded"
            />
          </div>

        </div>

        {/* Output Results & Visual Syringe Column */}
        <div className="lg:col-span-6 p-4 rounded-xl bg-[#080A09] border border-[#1E2923] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1E2923]">
              <h4 className="text-[11px] font-mono font-bold text-[#2CE58D] uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {text("HASIL PERHITUNGAN", "CALCULATED RESULTS")}
              </h4>
              <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold bg-[#2CE58D]/15 text-[#2CE58D] border border-[#2CE58D]/30">
                 {text("STANDAR U-100", "U-100 STANDARD")}
              </span>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-2 mb-3 font-mono">
              <div className="p-2.5 rounded-lg bg-[#0F1411] border border-[#1E2923]">
                <span className="text-[9px] text-[#94A3B8] uppercase block font-semibold">{text("Konsentrasi", "Concentration")}</span>
                <span className="text-base font-extrabold text-white block">{mgPerMl.toFixed(2)} mg/mL</span>
                <span className="text-[9px] text-[#2CE58D] block font-light">({mcgPerMl.toLocaleString()} mcg/mL)</span>
              </div>
              
              <div className="p-2.5 rounded-lg bg-[#0F1411] border border-[#2CE58D]/40 shadow-[0_0_12px_rgba(44,229,141,0.15)]">
                <span className="text-[9px] text-[#94A3B8] uppercase block font-semibold">{text("Tarikan Spuit", "Syringe Draw")}</span>
                <span className="text-lg font-extrabold text-[#2CE58D] block">{syringeUnits} {text("Unit", "Units")}</span>
                <span className="text-[9px] text-[#CBD5E1] block">({mlNeededForDose.toFixed(2)} mL)</span>
              </div>
            </div>

            {/* Compact Syringe Gauge */}
            <div className="p-3 rounded-xl bg-[#040605] border border-[#1E2923] space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-[#CBD5E1]">
                 <span>{text("Spuit Insulin U-100 (100 IU = 1 mL)", "U-100 Insulin Syringe (100 IU = 1 mL)")}</span>
                 <span className="text-[#2CE58D] font-bold">{text("Tarik hingga", "Draw to")}: {syringeUnits} IU</span>
              </div>

              {/* Syringe Fill Graphic */}
              <div className="relative h-8 w-full bg-[#080A09] rounded-lg border border-[#1E2923] flex items-center overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-[#10543F] via-[#1E8C63] to-[#2CE58D] rounded transition-all duration-300 relative shadow-[0_0_15px_rgba(44,229,141,0.5)]"
                  style={{ width: `${syringeUnits}%` }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_8px_#FFFFFF] animate-pulse" />
                </div>

                <div className="absolute inset-0 flex justify-between px-2 items-center pointer-events-none text-[8px] font-mono text-[#94A3B8] font-bold">
                  <span>0</span>
                  <span>20</span>
                  <span>40</span>
                  <span>60</span>
                  <span>80</span>
                  <span>100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Safety Disclaimer */}
          <div className="pt-2 border-t border-[#1E2923] flex items-start gap-2 text-[10px] text-[#94A3B8] font-mono leading-relaxed">
            <Info className="w-3.5 h-3.5 text-[#2CE58D] shrink-0 mt-0.5" />
             <span>{text("Selalu gunakan air bakteriostatik steril (0,9% benzil alkohol) dan lakukan proses dalam kondisi aseptik.", "Always use sterile Bacteriostatic Water (0.9% Benzyl Alcohol) under aseptic conditions.")}</span>
          </div>

        </div>

      </div>
    </div>
  );
}
