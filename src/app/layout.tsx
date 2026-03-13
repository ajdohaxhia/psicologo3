import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// DM Sans - Clean, modern sans-serif for body & UI
const dmSans = DM_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Cormorant Garamond - Refined luxury serif for headlines
const cormorant = Cormorant_Garamond({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Geist Mono - For technical/legal text only
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psicologodibase.it"),
  title: {
    default: "Psicologo Di Base | Supporto Psicologico Professionale",
    template: "%s | Psicologo Di Base",
  },
  description:
    "Psicologo Di Base offre supporto psicologico professionale con un approccio umano e attento. Colloqui individuali, sostegno psicologico e percorsi di ascolto con un team di psicologhe qualificate.",
  keywords: [
    "psicologo",
    "supporto psicologico",
    "psicoterapia",
    "colloqui psicologici",
    "aiuto psicologico",
    "ansia",
    "stress",
    "benessere mentale",
    "psicologo Roma",
  ],
  authors: [{ name: "Psicologo Di Base" }],
  creator: "Psicologo Di Base",
  publisher: "Psicologo Di Base",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://psicologodibase.it",
    siteName: "Psicologo Di Base",
    title: "Psicologo Di Base | Supporto Psicologico Professionale",
    description:
      "Supporto psicologico professionale con un approccio umano e attento. Colloqui individuali, sostegno psicologico e percorsi di ascolto.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Psicologo Di Base - Supporto Psicologico Professionale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicologo Di Base | Supporto Psicologico Professionale",
    description:
      "Supporto psicologico professionale con un approccio umano e attento.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://psicologodibase.it",
  },
  category: "Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${cormorant.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
