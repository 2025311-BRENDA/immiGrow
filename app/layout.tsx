import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter for body, Outfit for headings
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { SubmissionProvider } from "@/context/SubmissionContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.immigrow.ie"),
  title: "immiGrow Dublin | Salud, Actividad y Comunidad",
  description: "La guía de bienestar para migrantes en Dublín. Trámites esenciales (IRP/PPSN), salud mental, deporte gratuito y vida comunitaria.",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo_final_v2.svg?v=7",
    apple: "/logo_final_v2.svg?v=7",
  },
  openGraph: {
    title: "immiGrow Dublin | Salud, Actividad y Comunidad",
    description: "Salud, bienestar y trámites para migrantes en Dublín.",
    url: "https://www.immigrow.ie",
    siteName: "immiGrow",
    images: [
      {
        url: "https://www.immigrow.ie/logo_final_v2.svg?v=7",
        width: 1024,
        height: 1024,
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
    images: ["https://www.immigrow.ie/logo_final_v2.svg?v=7"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "immiGrow",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "apple-touch-icon": "https://www.immigrow.ie/logo_final_v2.svg?v=7",
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
          <SubmissionProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SubmissionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
