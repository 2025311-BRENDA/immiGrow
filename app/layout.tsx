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
  title: "immiGrow Dublin | Guía para Migrantes: Trabajo, Salud y Trámites",
  description: "La plataforma definitiva para recién llegados a Dublín. Encuentra trabajo, entiende los trámites de PPSN/IRP, cuida tu salud mental y únete a grupos deportivos gratuitos.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png",
    apple: "/icons/icon.png",
  },
  openGraph: {
    title: "immiGrow Dublin | Guía para Migrantes",
    description: "Encuentra trabajo, salud y comunidad en Dublín.",
    url: "https://immi-grow.vercel.app",
    siteName: "immiGrow",
    images: [
      {
        url: "/logo.png", // This will be the image shown in the preview
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
    title: "immiGrow Dublin",
    description: "Guía completa para migrantes en Dublín.",
    images: ["/logo.png"],
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
    "keywords": "migrantes dublin, trabajar en irlanda, pps number dublin, salud mental inmigrantes, deportes gratis dublin, immigrow"
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
