"use client";

import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "text";
}

export default function BrandLogo({ className = "", size = "md", variant = "full" }: BrandLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10 sm:h-11",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24",
  };

  const iconSizeClasses = {
    sm: "w-7 h-7",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
    xl: "w-16 h-16 sm:w-20 sm:h-20",
  };

  if (variant === "icon") {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <img
          src="/enhancement-logo-transparent.webp"
          alt="Enhancement Peptide Emblem"
          className={`${iconSizeClasses[size]} object-contain drop-shadow-[0_0_15px_rgba(44,229,141,0.4)]`}
        />
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className={`flex items-center gap-2.5 sm:gap-3 group ${className}`}>
        <img
          src="/enhancement-logo-transparent.webp"
          alt="Enhancement Peptide Logo"
          className={`${sizeClasses[size]} w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(44,229,141,0.3)]`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/enhancement-logo-transparent.webp"
        alt="Enhancement Peptide Icon"
        className={`${iconSizeClasses[size]} object-contain`}
      />
      <div className="flex flex-col text-left">
        <span
          className="font-bold text-white tracking-wider leading-none text-base sm:text-lg font-serif"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          ENHANCEMENT
        </span>
        <span
          className="font-bold text-[#2CE58D] tracking-widest leading-none text-xs sm:text-sm font-serif pt-0.5"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          PEPTIDE
        </span>
      </div>
    </div>
  );
}
