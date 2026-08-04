"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, PhoneCall, Building, Mail, User, PackageCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface ResearchInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResearchInquiryModal({ isOpen, onClose }: ResearchInquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    email: "",
    compoundInterest: "RETATRUTIDE 10 MG",
    quantity: "5 Vials",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#2CE58D", "#1E8C63", "#FFFFFF"],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0F1411] rounded-3xl border border-[#2CE58D]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#080A09] text-[#94A3B8] hover:text-white hover:bg-[#1E2923] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-[#080A09] border border-[#2CE58D]/40 text-[#2CE58D]">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-serif" style={{ fontFamily: "Cinzel, serif" }}>
                  INQUIRY / <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CE58D] to-white">ORDER RESMI</span>
                </h3>
                <p className="text-xs text-[#94A3B8] font-mono uppercase">
                  PEMESANAN FORMULASI PEPTIDA & PAKET LENGKAP
                </p>
              </div>
            </div>

            {/* Included Bonus Kit Banner in Modal */}
            <div className="mb-5 p-3.5 rounded-xl bg-[#080A09] border border-[#2CE58D]/30 flex items-start gap-2.5 text-xs text-[#CBD5E1] font-mono">
              <PackageCheck className="w-4.5 h-4.5 text-[#2CE58D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#2CE58D] block font-bold">PAKET PEMBELIAN SUDAH TERMASUK (FREE KIT):</strong>
                <span className="text-[11px] text-[#94A3B8] leading-relaxed block mt-1">
                  • 1x Bacteriostatic Water (BAC Water) 3ML Steril<br />
                  • 5x Spuit / Jarum Insulin Steril (31G Ultra-Fine, 50iu)<br />
                  • 5x Swab Alkohol Steril (70% Isopropyl)<br />
                  • 1x Spuit 3cc Khusus Rekonstitusi / Pelarutan
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#94A3B8] mb-1">Nama Pemesan / Peneliti</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Lengkap..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#080A09] border border-[#1E2923] text-xs text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2CE58D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#94A3B8] mb-1">Kontak WhatsApp / No. HP / Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="0812-xxxx-xxxx / email@domain.com"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#080A09] border border-[#1E2923] text-xs text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2CE58D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] mb-1">Pilih Produk</label>
                  <select
                    value={formData.compoundInterest}
                    onChange={(e) => setFormData({ ...formData, compoundInterest: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#080A09] border border-[#1E2923] text-xs text-[#2CE58D] font-bold focus:outline-none focus:border-[#2CE58D]"
                  >
                    <option value="RETATRUTIDE 10 MG">RETATRUTIDE 10 MG</option>
                    <option value="GHK-Cu 100 MG (Coming Soon)">GHK-Cu 100 MG (Pre-Order)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] mb-1">Jumlah</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#080A09] border border-[#1E2923] text-xs text-[#2CE58D] font-bold focus:outline-none focus:border-[#2CE58D]"
                  >
                    <option value="1 Vial + Kit">1 Vial + Paket Kit</option>
                    <option value="5 Vials + Kit">5 Vials + Paket Kit</option>
                    <option value="10 Vials + Kit">10 Vials + Paket Kit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#94A3B8] mb-1">Catatan Tambahan / Alamat Pengiriman</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Catatan pengiriman atau pertanyaan..."
                  className="w-full p-3 rounded-xl bg-[#080A09] border border-[#1E2923] text-xs text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2CE58D]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#2CE58D] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_25px_rgba(44,229,141,0.35)] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Kirim Inquiry / Pesanan
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#2CE58D] mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-white font-serif" style={{ fontFamily: "Cinzel, serif" }}>
              PESANAN TERKIRIM
            </h3>
            <p className="text-xs text-[#CBD5E1] leading-relaxed max-w-sm mx-auto">
              Terima kasih, <span className="text-[#2CE58D] font-mono font-bold">{formData.name}</span>. Permintaan formulasi <span className="text-white font-mono font-bold">{formData.compoundInterest}</span> beserta paket perlengkapan alat riset telah diterima oleh tim kami.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#080A09] border border-[#2CE58D]/40 text-[#2CE58D] font-bold text-xs uppercase tracking-wider hover:bg-[#2CE58D] hover:text-black transition-all"
            >
              Tutup Jendela
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
