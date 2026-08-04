import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ENHANCEMENT PEPTIDE | The New Era of Biohacking",
  description: "Enhancement Peptide is a premium research compound brand dedicated to precision, purity, and scientific biohacking excellence.",
  keywords: ["Peptide Research", "Retatrutide", "GHK-Cu", "Biohacking", "Janoshik Analytical", "Enhancement Peptide", "Purity >99%"],
  icons: {
    icon: [
      { url: "/enhancement-logo-transparent.webp" },
      { url: "/icon.png" },
    ],
    shortcut: "/enhancement-logo-transparent.webp",
    apple: "/enhancement-logo-transparent.webp",
  },
  openGraph: {
    title: "ENHANCEMENT PEPTIDE - The New Era of Biohacking",
    description: "Premium research compound brand dedicated to precision, purity, and scientific excellence.",
    images: ["/Peptide_hero.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENHANCEMENT PEPTIDE - The New Era of Biohacking",
    description: "Premium research compound brand dedicated to precision, purity, and scientific excellence.",
    images: ["/Peptide_hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#080A09] text-[#F8FAFC] antialiased selection:bg-[#2CE58D] selection:text-black">
        {children}
      </body>
    </html>
  );
}
