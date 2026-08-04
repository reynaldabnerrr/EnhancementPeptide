"use client";

import React from "react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "seal" | "graphic";
  className?: string;
}

export default function BrandLogo({ size = "md", variant = "full", className = "" }: BrandLogoProps) {
  const sizeMap = {
    sm: { height: 36, title: "text-lg", subtitle: "text-[9px]" },
    md: { height: 48, title: "text-xl", subtitle: "text-[10px]" },
    lg: { height: 72, title: "text-2xl", subtitle: "text-xs" },
    xl: { height: 110, title: "text-4xl", subtitle: "text-sm" },
  };

  const currentSize = sizeMap[size];

  if (variant === "seal") {
    return (
      <div className={`relative inline-flex items-center justify-center p-1.5 rounded-full border border-[#2CE58D]/40 bg-[#0F1411] backdrop-blur-md ${className}`}>
        <img
          src="/enhancement-logo-transparent.png"
          alt="Enhancement Peptide Secondary Seal"
          className="w-14 h-14 object-contain drop-shadow-[0_0_12px_rgba(44,229,141,0.5)]"
        />
      </div>
    );
  }

  if (variant === "icon") {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <img
          src="/enhancement-logo-transparent.png"
          alt="Enhancement Peptide Crest"
          className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(44,229,141,0.5)]"
        />
      </div>
    );
  }

  if (variant === "graphic") {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <img
          src="/enhancement-logo-transparent.png"
          alt="Enhancement Peptide Crest Transparent"
          className="max-h-72 object-contain filter drop-shadow-[0_0_30px_rgba(44,229,141,0.4)]"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {/* Official Transparent Logo Crest Image */}
      <div className="relative flex items-center justify-center">
        <img
          src="/enhancement-logo-transparent.png"
          alt="ENHANCEMENT PEPTIDE Transparent Crest"
          style={{ height: `${currentSize.height * 1.15}px`, width: "auto" }}
          className="object-contain filter drop-shadow-[0_0_12px_rgba(44,229,141,0.4)] group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
