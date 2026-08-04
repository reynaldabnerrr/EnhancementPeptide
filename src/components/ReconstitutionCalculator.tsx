"use client";

import React, { useState } from "react";
import { FlaskConical, Info, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface ReconstitutionCalculatorProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ReconstitutionCalculator({ isOpen = true, onClose }: ReconstitutionCalculatorProps) {
  const { text } = useLanguage();
  const [vialMg, setVialMg] = useState<number>(10); // 10 mg vial
  const [bacWaterMl, setBacWaterMl] = useState<number>(2.0); // 2.0 mL water
  const [desiredDoseMg, setDesiredDoseMg] = useState<number>(2.5); // 2.5 mg target dose

  // Calculations
  const totalMcgInVial = vialMg * 1000;
  const mcgPerMl = totalMcgInVial / bacWaterMl;
  const mgPerMl = vialMg / bacWaterMl;
  
  // U-100 Insulin Syringe (100 units = 1.0 mL, 1 unit = 0.01 mL)
  const mlNeededForDose = desiredDoseMg / mgPerMl;
  const syringeUnits = Math.round(mlNeededForDose * 100);

  if (!isOpen) return null;

  return (
    <div className="relative glass-card rounded-3xl border border-[#2CE58D]/30 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#23442F]/60 text-[#C8CCD2] hover:text-white hover:bg-[#1E8C63] transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-[#0E5C4A]/40 border border-[#2CE58D]/40 text-[#2CE58D]">
          <FlaskConical className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white font-serif" style={{ fontFamily: "var(--font-cinzel), serif" }}>
             {text("REKONSTITUSI & ", "RECONSTITUTION & ")}<span className="text-gradient-emerald">{text("KALKULATOR DOSIS", "DOSING CALCULATOR")}</span>
          </h3>
          <p className="text-xs text-[#C8CCD2]/70 font-mono">
             {text("RASIO BAC WATER & PENANDA SPUIT U-100 PRESISI", "PRECISION BAC WATER RATIO & U-100 SYRINGE MARKS")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-5">
          {/* Step 1: Vial Quantity */}
          <div>
            <label className="block text-xs font-bold text-[#C8CCD2] uppercase tracking-wider mb-2 font-mono">
               {text("1. Isi Vial Peptida (MG)", "1. Peptide Vial Quantity (MG)")}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 15, 50].map((mg) => (
                <button
                  key={mg}
                  onClick={() => setVialMg(mg)}
                  className={`py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                    vialMg === mg
                      ? "bg-[#2CE58D] text-black shadow-[0_0_15px_rgba(44,229,141,0.3)]"
                      : "bg-[#0B0B0B] border border-[#1E8C63]/30 text-[#C8CCD2] hover:border-[#2CE58D]"
                  }`}
                >
                  {mg} MG
                </button>
              ))}
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={vialMg}
              onChange={(e) => setVialMg(Number(e.target.value))}
              className="w-full mt-2 accent-[#2CE58D]"
            />
          </div>

          {/* Step 2: BAC Water Volume */}
          <div>
            <label className="block text-xs font-bold text-[#C8CCD2] uppercase tracking-wider mb-2 font-mono">
               {text("2. Bacteriostatic Water yang Ditambahkan (mL)", "2. Bacteriostatic Water Added (mL)")}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1.0, 2.0, 3.0, 5.0].map((ml) => (
                <button
                  key={ml}
                  onClick={() => setBacWaterMl(ml)}
                  className={`py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                    bacWaterMl === ml
                      ? "bg-[#2CE58D] text-black shadow-[0_0_15px_rgba(44,229,141,0.3)]"
                      : "bg-[#0B0B0B] border border-[#1E8C63]/30 text-[#C8CCD2] hover:border-[#2CE58D]"
                  }`}
                >
                  {ml.toFixed(1)} mL
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Desired Research Dose */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-[#C8CCD2] uppercase tracking-wider font-mono">
                 {text("3. Target Dosis Riset (MG)", "3. Target Research Dose (MG)")}
              </label>
              <span className="text-xs font-mono font-bold text-[#2CE58D]">
                {desiredDoseMg} MG ({desiredDoseMg * 1000} mcg)
              </span>
            </div>
            <input
              type="range"
              min="0.25"
              max={vialMg}
              step="0.25"
              value={desiredDoseMg}
              onChange={(e) => setDesiredDoseMg(Number(e.target.value))}
              className="w-full accent-[#2CE58D]"
            />
            <div className="flex justify-between text-[10px] text-[#C8CCD2]/50 font-mono mt-1">
              <span>0.25 mg</span>
              <span>{(vialMg / 2).toFixed(1)} mg</span>
              <span>{vialMg} mg</span>
            </div>
          </div>
        </div>

        {/* Output Results & Syringe Visualization */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0B0B0B] border border-[#1E8C63]/30 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-[#2CE58D] uppercase font-serif tracking-wider mb-4">
               {text("HASIL PERHITUNGAN REKONSTITUSI", "CALCULATED RECONSTITUTION RESULTS")}
            </h4>

            <div className="grid grid-cols-2 gap-3 mb-6 font-mono">
              <div className="p-3 rounded-xl bg-[#23442F]/30 border border-[#1E8C63]/20">
                <span className="text-[10px] text-[#C8CCD2]/60 uppercase block">{text("Konsentrasi", "Concentration")}</span>
                <span className="text-sm font-extrabold text-white">{mgPerMl.toFixed(2)} mg/mL</span>
                <span className="text-[10px] text-[#2CE58D] block font-light">({mcgPerMl.toFixed(0)} mcg/mL)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#23442F]/30 border border-[#1E8C63]/20">
                <span className="text-[10px] text-[#C8CCD2]/60 uppercase block">{text("Tarikan Spuit", "Syringe Draw")}</span>
                <span className="text-base font-extrabold text-[#2CE58D]">{syringeUnits} Units</span>
                <span className="text-[10px] text-[#C8CCD2] block">({mlNeededForDose.toFixed(2)} mL)</span>
              </div>
            </div>

            {/* Syringe Visual Depiction */}
            <div className="p-4 rounded-2xl bg-[#070707] border border-[#1E8C63]/20">
              <div className="flex justify-between items-center text-[10px] font-mono text-[#C8CCD2]/70 mb-2">
                 <span>{text("Spuit Insulin U-100 (100 IU = 1 mL)", "U-100 Insulin Syringe (100 IU = 1 mL)")}</span>
                 <span className="text-[#2CE58D] font-bold">{text("Tarik hingga:", "Draw to:")} {syringeUnits} IU</span>
              </div>

              {/* Syringe Barrel graphic */}
              <div className="relative h-10 w-full bg-[#111] rounded-lg border border-[#C8CCD2]/30 flex items-center overflow-hidden">
                {/* Liquid Fill Progress */}
                <div
                  className="h-full bg-gradient-to-r from-[#0E5C4A] to-[#2CE58D] transition-all duration-300 relative shadow-[0_0_15px_rgba(44,229,141,0.5)]"
                  style={{ width: `${Math.min(100, Math.max(0, syringeUnits))}%` }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-md animate-pulse" />
                </div>

                {/* Syringe Tick Marks Overlay */}
                <div className="absolute inset-0 flex justify-between px-2 items-center pointer-events-none text-[8px] font-mono text-white/50">
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

          <div className="mt-4 pt-3 border-t border-[#1E8C63]/20 flex items-center gap-2 text-[10px] text-[#C8CCD2]/60 font-mono">
            <Info className="w-4 h-4 text-[#2CE58D] shrink-0" />
             <span>{text("Selalu gunakan Bacteriostatic Water steril (0.9% Benzyl Alcohol) dan lakukan rekonstitusi dalam kondisi aseptik.", "Always use sterile Bacteriostatic Water (0.9% Benzyl Alcohol) and reconstitute under aseptic conditions.")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
