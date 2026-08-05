"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, FlaskConical } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const STORAGE_KEY = "enhancement-peptide-research-warning-v1";

export default function ResearchPurposeWarningModal() {
  const { language, setLanguage, text } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const acceptButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) === "accepted") return;

    const frame = window.requestAnimationFrame(() => setIsOpen(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    acceptButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-md">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="research-warning-title"
        aria-describedby="research-warning-description"
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#2CE58D]/30 bg-[#0F1411] shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_60px_rgba(44,229,141,0.08)]"
      >
        <div className="h-1 bg-gradient-to-r from-transparent via-[#2CE58D] to-transparent" />
        <div className="p-6 sm:p-9">
          <div className="mb-7 flex items-start justify-between gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#2CE58D]/30 bg-[#2CE58D]/10 text-[#2CE58D]">
              <FlaskConical className="h-6 w-6" />
            </div>
            <div className="flex rounded-xl border border-[#1E2923] bg-[#080A09] p-1" role="group" aria-label={text("Pilih bahasa", "Choose language")}>
              {(["id", "en"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  aria-pressed={language === item}
                  className={`rounded-lg px-4 py-2 font-mono text-xs font-bold transition-colors ${language === item ? "bg-[#2CE58D] text-black" : "text-[#94A3B8] hover:text-white"}`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            <AlertTriangle className="h-4 w-4" />
            {text("Peringatan penting", "Important notice")}
          </div>
          <h2 id="research-warning-title" className="mb-4 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
            {text("Hanya untuk tujuan penelitian", "For research purposes only")}
          </h2>
          <div id="research-warning-description" className="space-y-3 text-sm leading-7 text-[#B8C4BE] sm:text-base">
            <p>
              {text(
                "Produk dan informasi di situs ini ditujukan khusus untuk penelitian laboratorium dan bukan untuk konsumsi manusia, diagnosis, pengobatan, atau penggunaan medis.",
                "Products and information on this website are intended strictly for laboratory research and are not for human consumption, diagnosis, treatment, or medical use."
              )}
            </p>
            <p>
              {text(
                "Dengan melanjutkan, Anda menyatakan telah membaca, memahami, dan menyetujui batasan penggunaan ini.",
                "By continuing, you confirm that you have read, understood, and accepted these usage restrictions."
              )}
            </p>
          </div>

          <button
            ref={acceptButtonRef}
            type="button"
            onClick={accept}
            className="mt-8 w-full rounded-xl bg-[#2CE58D] px-5 py-4 text-sm font-extrabold uppercase tracking-wider text-[#06100B] transition-all hover:bg-[#5AF0A9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2CE58D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1411] active:scale-[0.99]"
          >
            {text("Saya mengerti dan lanjutkan", "I understand and continue")}
          </button>
        </div>
      </section>
    </div>
  );
}
