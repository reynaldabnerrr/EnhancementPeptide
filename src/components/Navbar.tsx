"use client";

import React, { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "./LanguageContext";

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenCalculator, onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { language, setLanguage, text } = useLanguage();

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section Intersection Tracking
      const sections = [
        { id: "hero", offset: 0 },
        { id: "specimen", el: document.getElementById("specimen") },
        { id: "catalog", el: document.getElementById("catalog") },
        { id: "calculator", el: document.getElementById("calculator") },
        { id: "standards", el: document.getElementById("standards") },
      ];

      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.el && sec.el.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        } else if (i === 0 && window.scrollY < 300) {
          setActiveSection("hero");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clean, uniform, and natural navigation labels
  const navLinks = [
    { id: "specimen", label: text("Mengenal Peptida", "About Peptides"), href: "#specimen" },
    { id: "catalog", label: text("Katalog Produk", "Product Catalog"), href: "#catalog" },
    { id: "calculator", label: text("Kalkulator Dosis", "Dose Calculator"), href: "#calculator" },
    { id: "standards", label: text("Standar Kami", "Our Standards"), href: "#standards" },
  ];

  const languageControl = (
    <div className="flex items-center p-1 rounded-lg bg-[#080A09] border border-[#1E2923]" role="group" aria-label={text("Pilih bahasa", "Choose language")}>
      {(["id", "en"] as const).map((item) => (
        <button key={item} onClick={() => setLanguage(item)} aria-pressed={language === item} className={`px-2.5 py-1.5 rounded-md text-[10px] font-mono font-bold transition-all ${language === item ? "bg-[#2CE58D] text-black" : "text-[#94A3B8] hover:text-white"}`}>
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);

    // Explicit Smooth Scroll to Target Section Element with Navbar Height Offset
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        const yOffset = -90; // Fixed navbar offset height
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080A09]/95 backdrop-blur-xl border-b border-[#1E2923] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          : "bg-gradient-to-b from-[#080A09] to-transparent py-4"
      }`}
    >
      {/* Top Neon Scroll Progress Indicator Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#2CE58D] origin-left z-50 shadow-[0_0_12px_rgba(44,229,141,0.8)]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center">
            <BrandLogo size="md" variant="full" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 bg-[#0F1411]/80 p-1.5 rounded-full border border-[#1E2923] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 relative ${
                    isActive
                      ? "bg-[#2CE58D]/15 text-[#2CE58D] border border-[#2CE58D]/40 shadow-[0_0_15px_rgba(44,229,141,0.2)]"
                      : "text-[#CBD5E1] hover:text-white hover:bg-[#1E2923]/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2CE58D]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Clean CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            {languageControl}
            <button
              onClick={onOpenInquiry}
              className="px-6 py-2.5 rounded-xl bg-[#2CE58D] text-xs font-mono font-bold uppercase tracking-widest text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(44,229,141,0.35)] transform hover:-translate-y-0.5"
            >
              {text("Hubungi / Pesan", "Contact / Order")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {languageControl}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#CBD5E1] hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-5 rounded-2xl bg-[#0F1411] border border-[#1E2923] space-y-3 shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-[#2CE58D]/15 text-[#2CE58D] border border-[#2CE58D]/40"
                      : "text-[#CBD5E1] hover:text-white hover:bg-[#1E2923]/40"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-[#1E2923]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 rounded-xl bg-[#2CE58D] text-xs font-mono font-bold uppercase tracking-widest text-black"
              >
                {text("Hubungi / Pesan", "Contact / Order")}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
