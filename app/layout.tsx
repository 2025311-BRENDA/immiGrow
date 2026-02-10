import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter for body, Outfit for headings
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "immiGrow Dublin | Salud, Actividad y Comunidad",
  description: "La guía de bienestar para migrantes en Dublín. Trámites esenciales (IRP/PPSN), salud mental, deporte gratuito y vida comunitaria.",
  manifest: "/manifest.json",
  icons: {
    icon: "/iGrow-logo.jpg",
    apple: "/iGrow-logo.jpg",
  },
  openGraph: {
    title: "immiGrow Dublin | Salud, Actividad y Comunidad",
    description: "Salud, bienestar y trámites para migrantes en Dublín.",
    url: "https://immigrow.ie",
    siteName: "immiGrow",
    images: [
      {
        url: "https://immigrow.ie/iGrow-logo.jpg", // NEW LOGO WITH ABSOLUTE URL
        width: 1200,
        height: 630,
        alt: "immiGrow Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "immiGrow Dublin | Salud, Actividad y Comunidad",
    description: "Salud, bienestar y trámites para migrantes en Dublín.",
    images: ["https://immigrow.ie/iGrow-logo.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "immiGrow",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "apple-touch-icon": "/icons/icon.png",
    "keywords": "salud migrantes dublin, tramites irlanda, pps number dublin, salud mental inmigrantes, deportes gratis dublin, educacion irlanda, immigrow"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased pb-20", // Added pb-20 for navbar space
          `${inter.variable} ${outfit.variable}`
        )}
      >
        <LanguageProvider>
          <main className="min-h-screen">
            {children}
          </main>
          <Navbar />
        </LanguageProvider>
      </body>
    </html>
  );
}
