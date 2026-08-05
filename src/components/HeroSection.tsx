"use client";

import React from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ShieldCheck, FlaskConical, Award, Activity, CheckCircle2 } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenInquiry: () => void;
}

export default function HeroSection({ onOpenCalculator, onOpenInquiry }: HeroSectionProps) {
  const { text } = useLanguage();
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 22,
  });
  const lightX = useTransform(pointerX, [-0.5, 0.5], [25, 75]);
  const lightY = useTransform(pointerY, [-0.5, 0.5], [25, 75]);
  const sheenBackground = useTransform(
    [lightX, lightY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(110,231,183,0.32), transparent 38%)`,
  );

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -75;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-40 pb-20 sm:pb-32 overflow-hidden bg-transparent z-10">
      {/* Mobile & Desktop Ambient Neon Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[850px] h-[340px] sm:h-[500px] bg-gradient-to-b from-[#2CE58D]/20 via-[#10543F]/15 to-transparent rounded-full blur-[90px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#2CE58D]/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Background Subtle Tech Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1E2923_1px,transparent_1px),linear-gradient(to_bottom,#1E2923_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 sm:space-y-12">
        
        {/* Top Quality Pill with Pulsing Live Dot */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 xs:px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0F1411]/90 border border-[#2CE58D]/50 text-[#2CE58D] text-xs font-mono shadow-[0_0_25px_rgba(44,229,141,0.25)] backdrop-blur-md max-w-full"
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2CE58D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#2CE58D]"></span>
          </span>
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2CE58D] shrink-0" />
          <span className="uppercase font-bold text-[8.5px] xs:text-[10px] sm:text-xs tracking-tight xs:tracking-wider whitespace-nowrap">
            {text("JANOSHIK ANALYTICAL VERIFIED • KEMURNIAN >99%", "JANOSHIK ANALYTICAL VERIFIED • PURITY >99%")}
          </span>
        </motion.div>

        {/* Master Brand Headline & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1
            className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] sm:leading-none font-serif uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            ENHANCEMENT <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] via-[#6EE7B7] to-white drop-shadow-[0_0_40px_rgba(44,229,141,0.55)]">
              PEPTIDE
            </span>
          </h1>

          <p
            className="text-[10px] sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-[#2CE58D]/90 uppercase font-serif pt-1"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            The New Era of Biohacking
          </p>

          <p className="text-xs sm:text-lg text-[#CBD5E1] font-light max-w-2xl mx-auto leading-relaxed pt-1">
            {text(
              "Formulasi peptida riset murni berstandar tinggi. Setiap produk diproduksi dengan presisi molekuler dan diverifikasi secara independen oleh Janoshik Analytical (Kemurnian >99%).",
              "Ultra-pure research-grade peptide formulations. Each product is engineered with molecular precision and independently verified by Janoshik Analytical (>99% Purity)."
            )}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-lg mx-auto"
        >
          <button
            onClick={() => handleScrollTo("catalog")}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#2CE58D] text-black font-bold text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest hover:bg-white transition-all shadow-[0_0_35px_rgba(44,229,141,0.45)] cursor-pointer transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
          >
            <span>{text("Katalog Produk", "Explore Products")}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </button>

          <button
            onClick={() => handleScrollTo("calculator")}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#0F1411]/90 border border-[#2CE58D]/40 text-[#2CE58D] font-bold text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest hover:bg-[#2CE58D]/10 transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95 backdrop-blur-md whitespace-nowrap"
          >
            <FlaskConical className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2CE58D] shrink-0" />
            <span>{text("Kalkulator Dosis", "Dose Calculator")}</span>
          </button>
        </motion.div>

        {/* HERO VISUAL SHOWCASE CARD (High Impact on Mobile & Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative max-w-xl mx-auto pt-4 [perspective:1200px]"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <motion.div
            animate={reducedMotion ? undefined : { y: [0, -8, 0], rotateZ: [0, 0.35, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              style={reducedMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-3xl bg-gradient-to-b from-[#141E18] to-[#0A0E0B] p-3 sm:p-5 border border-[#2CE58D]/30 shadow-[0_28px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl group"
            >
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none opacity-50"
              style={{ background: sheenBackground }}
            />

            <div className="absolute inset-x-12 -bottom-8 h-14 rounded-full bg-[#2CE58D]/20 blur-2xl pointer-events-none [transform:translateZ(-70px)]" />

            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#080A09] border border-[#1E2923] p-1 flex items-center justify-center [transform:translateZ(35px)] shadow-[0_16px_40px_rgba(0,0,0,0.55)]">
              <Image
                src="/peptide_hero2.webp"
                alt="Enhancement Peptide Hero Showcase"
                fill
                sizes="(max-width: 639px) calc(100vw - 3rem), 576px"
                priority
                className="object-contain object-center transform group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Floating Tech Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#080A09]/80 border border-[#2CE58D]/40 backdrop-blur-md text-[10px] sm:text-xs font-mono font-bold text-[#2CE58D] shadow-lg">
                <Activity className="w-3.5 h-3.5 text-[#2CE58D]" />
                <span>HPLC Verified &gt;99.4%</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#0F1411]/90 border border-[#1E2923] backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#2CE58D]" />
                  <span className="text-[11px] sm:text-xs font-mono text-white font-semibold">
                    Janoshik Certified Laboratory
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#2CE58D] bg-[#2CE58D]/10 px-2 py-0.5 rounded border border-[#2CE58D]/30 font-bold uppercase">
                  Batch 2026
                </span>
              </div>
            </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 3 Pillar Trust Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto pt-2 text-left"
        >
          {[
            {
              title: text("Kemurnian >99% HPLC", ">99% HPLC Purity"),
              desc: text("Uji kromatogram independen dari Janoshik Analytical", "Independent Janoshik Analytical chromatogram testing"),
            },
            {
              title: text("Formulasi Riset Presisi", "Precision Research Grade"),
              desc: text("Proses manufaktur terstandarisasi bebas bahan pengisi", "Filler-free standardized manufacturing protocol"),
            },
            {
              title: text("Termasuk Paket Rekonstitusi", "Complete Reconstitution Kit"),
              desc: text("Setiap order dilengkapi Bac Water & spuit 3cc steril", "Every kit includes Bac Water & 3cc sterile syringe"),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-2xl bg-[#0F1411]/80 border border-[#1E2923] backdrop-blur-md flex items-start gap-3 hover:border-[#2CE58D]/40 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-[#2CE58D] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#94A3B8] leading-tight pt-1 font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
