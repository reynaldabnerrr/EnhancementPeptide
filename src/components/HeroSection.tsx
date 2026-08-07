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
import {
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Award,
  Activity,
  Sparkles,
  Zap,
  Dna,
  FileCheck2,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenInquiry: () => void;
}

export default function HeroSection({ onOpenCalculator, onOpenInquiry }: HeroSectionProps) {
  const { text } = useLanguage();
  const reducedMotion = useReducedMotion();

  // High-Precision Smooth Parallax Tilt Physics
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), {
    stiffness: 140,
    damping: 26,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 140,
    damping: 26,
  });

  // Subtle Interactive Glass Sheen Tracking
  const lightX = useTransform(pointerX, [-0.5, 0.5], [20, 80]);
  const lightY = useTransform(pointerY, [-0.5, 0.5], [20, 80]);
  
  const glassSheen = useTransform(
    [lightX, lightY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(44,229,141,0.2), transparent 70%)`,
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
    <section id="hero" className="relative pt-24 sm:pt-36 pb-20 sm:pb-32 overflow-hidden bg-transparent z-10">
      
      {/* Global Ambient Backlight Field (Centered Soft Glow Behind Card) */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] xs:w-[360px] sm:w-[800px] max-w-full h-[340px] sm:h-[480px] bg-gradient-to-tr from-[#10543F]/30 via-[#2CE58D]/20 to-transparent rounded-full blur-[110px] sm:blur-[170px] pointer-events-none will-change-transform transform-gpu"
      />
      
      {/* Technical Background Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1E2923_1px,transparent_1px),linear-gradient(to_bottom,#1E2923_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)] opacity-25 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 sm:space-y-11">
        
        {/* Top Quality Pill with Soft Breathing Glow */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0F1411]/90 border border-[#2CE58D]/40 text-[#2CE58D] text-xs font-mono shadow-[0_0_25px_rgba(44,229,141,0.2)] backdrop-blur-md max-w-full"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2CE58D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2CE58D]"></span>
          </span>
          <ShieldCheck className="w-4 h-4 text-[#2CE58D] shrink-0" />
          <span className="uppercase font-bold text-[8.5px] xs:text-[10px] sm:text-xs tracking-wider whitespace-normal sm:whitespace-nowrap">
            {text("JANOSHIK ANALYTICAL VERIFIED • KEMURNIAN >99.4%", "JANOSHIK ANALYTICAL VERIFIED • PURITY >99.4%")}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#2CE58D] shrink-0 opacity-80" />
        </motion.div>

        {/* Master Brand Headline & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1
            className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] sm:leading-none font-serif uppercase drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            ENHANCEMENT <br className="sm:hidden" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] via-[#6EE7B7] to-white drop-shadow-[0_0_45px_rgba(44,229,141,0.5)]">
              PEPTIDE
            </span>
          </h1>

          <p
            className="text-[10px] sm:text-sm font-semibold tracking-[0.28em] sm:tracking-[0.4em] text-[#2CE58D]/90 uppercase font-serif pt-1 flex items-center justify-center gap-2"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#2CE58D]/60" />
            <span>The New Era of Biohacking</span>
            <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#2CE58D]/60" />
          </p>

          <p className="text-xs sm:text-lg text-[#CBD5E1] font-light max-w-2xl mx-auto leading-relaxed pt-1">
            {text(
              "Formulasi peptida riset murni berstandar laboratorium tinggi. Setiap spesimen diproduksi dengan presisi molekuler dan diverifikasi secara independen oleh Janoshik Analytical (Kemurnian >99.4%).",
              "Ultra-pure research-grade peptide formulations. Engineered with molecular precision and independently verified by Janoshik Analytical (>99.4% Purity)."
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
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#2CE58D] text-black font-bold text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest hover:bg-white transition-all shadow-[0_0_35px_rgba(44,229,141,0.45)] cursor-pointer transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
          >
            <span>{text("Katalog Produk", "Explore Products")}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          <button
            onClick={() => handleScrollTo("calculator")}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#0F1411]/90 border border-[#2CE58D]/40 text-[#2CE58D] font-bold text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest hover:bg-[#2CE58D]/10 transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95 backdrop-blur-md whitespace-nowrap"
          >
            <FlaskConical className="w-4 h-4 text-[#2CE58D] shrink-0" />
            <span>{text("Kalkulator Dosis", "Dose Calculator")}</span>
          </button>
        </motion.div>

        {/* ========================================================= */}
        {/* LUXURY ELEGANT 3D PARALLAX SHOWCASE CARD WITH ORGANIC HALO */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative max-w-2xl mx-auto pt-4 [perspective:1200px]"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          {/* Product Backlight Halo Aura (Directly Framing Product Showcase) */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 m-auto w-full h-full bg-[#2CE58D]/20 blur-3xl rounded-3xl pointer-events-none will-change-transform transform-gpu"
          />

          {/* Ambient Floating Motion Container */}
          <motion.div
            animate={reducedMotion ? undefined : { y: [0, -8, 0], rotateZ: [0, 0.3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="will-change-transform transform-gpu"
          >
            {/* 3D Rotated Card Frame - Optimized for Chrome Graphics Engine */}
            <motion.div
              style={reducedMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-3xl bg-gradient-to-b from-[#131E17]/95 via-[#0E1510]/95 to-[#070A08]/95 p-3.5 sm:p-5 border border-[#2CE58D]/35 shadow-[0_30px_90px_rgba(0,0,0,0.95)] group [backface-visibility:hidden] will-change-transform transform-gpu"
            >
              {/* Soft Refractive Glass Sheen overlay */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-60 transition-opacity duration-300 overflow-hidden"
                style={{ background: glassSheen }}
              />

              {/* Main Image Frame with Deep Z Parallax */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#050706] border border-[#1E2923] p-1 flex items-center justify-center [transform:translateZ(40px)] [transform-style:preserve-3d] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#2CE58D]/45 transition-colors duration-500">
                
                {/* High-Res Hero Image with Smooth Scale Zoom */}
                <Image
                  src="/peptide_hero2.webp"
                  alt="Enhancement Peptide Specimen Showcase"
                  fill
                  sizes="(max-width: 639px) calc(100vw - 3rem), 672px"
                  priority
                  className="object-contain object-center transform group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                />

                {/* LAYER 1: Top Left Floating Live Metric Badge (High Z Depth) */}
                <motion.div
                  style={{ transform: `translateZ(75px)` }}
                  className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080A09]/95 border border-[#2CE58D]/45 text-[10px] sm:text-xs font-mono font-bold text-[#2CE58D] shadow-[0_8px_20px_rgba(0,0,0,0.8)] [backface-visibility:hidden]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2CE58D] animate-ping shrink-0" />
                  <Activity className="w-3.5 h-3.5 text-[#2CE58D]" />
                  <span>{"HPLC VERIFIED > 99.4%"}</span>
                </motion.div>

                {/* LAYER 2: Bottom Full-Width Laboratory Bar (Maximum Z Depth) */}
                <motion.div
                  style={{ transform: `translateZ(95px)` }}
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-[#0A0F0C]/95 border border-[#2CE58D]/30 shadow-[0_12px_30px_rgba(0,0,0,0.9)] [backface-visibility:hidden]"
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#2CE58D] shrink-0" />
                    <div className="text-left">
                      <span className="text-[10px] sm:text-xs font-mono text-white font-bold block leading-none">
                        Janoshik Certified Laboratory
                      </span>
                      <span className="text-[9px] font-mono text-[#94A3B8] font-light pt-0.5 block">
                        Analytical Report #2026-EP
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[9.5px] font-mono text-[#2CE58D] bg-[#2CE58D]/15 px-2.5 py-1 rounded-md border border-[#2CE58D]/40 font-bold uppercase tracking-wider">
                      Batch 2026
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Card Caption */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#94A3B8] px-1">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#2CE58D]" />
                  <span>3D Parallax Motion Active</span>
                </span>
                <span className="text-[#2CE58D] font-bold">SOLID-PHASE SYNTHESIS</span>
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
              title: text("Kemurnian >99.4% HPLC", ">99.4% HPLC Purity"),
              desc: text("Uji kromatogram independen dari Janoshik Analytical Labs", "Independent Janoshik Analytical chromatogram testing"),
              icon: ShieldCheck,
            },
            {
              title: text("Formulasi Riset Presisi", "Precision Research Grade"),
              desc: text("Proses manufaktur terstandarisasi bebas bahan pengisi", "Filler-free standardized manufacturing protocol"),
              icon: Dna,
            },
            {
              title: text("Termasuk Paket Rekonstitusi", "Complete Reconstitution Kit"),
              desc: text("Setiap order dilengkapi Bac Water & spuit 3cc steril", "Every kit includes Bac Water & 3cc sterile syringe"),
              icon: FileCheck2,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-2xl bg-[#0F1411]/85 border border-[#1E2923] backdrop-blur-md flex items-start gap-3 hover:border-[#2CE58D]/50 transition-all hover:bg-[#121A15] group"
            >
              <item.icon className="w-4.5 h-4.5 text-[#2CE58D] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
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
