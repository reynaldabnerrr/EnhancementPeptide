import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://enhancementpeptide.com"),
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
    images: [
      {
        url: "/peptide_hero2.webp",
        width: 1200,
        height: 630,
        alt: "Enhancement Peptide Hero",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENHANCEMENT PEPTIDE - The New Era of Biohacking",
    description: "Premium research compound brand dedicated to precision, purity, and scientific excellence.",
    images: ["/peptide_hero2.webp"],
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
