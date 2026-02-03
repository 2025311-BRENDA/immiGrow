"use client";

import { RouteCard } from "@/components/RouteCard";
import { FileText, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SlangDictionary } from "@/components/SlangDictionary";

export default function MorePage() {
    const { language, t } = useLanguage();

    const modules = [
        {
            title: t("nav.jobs"),
            description: language === "en"
                ? "Guides for finding work, CV tips, and recruitment agencies."
                : "Guías para encontrar trabajo, consejos para CV y agencias.",
            distance: "Career",
            difficulty: "Easy" as const,
            icon: Sparkles,
            href: "/jobs",
        },
        {
            title: t("nav.calculator"),
            description: language === "en"
                ? "Estimate your monthly living costs in Dublin."
                : "Estima tus gastos mensuales de vida en Dublín.",
            distance: "Finanzas",
            difficulty: "Easy" as const,
            icon: FileText,
            href: "/calculator",
        },
        {
            title: t("nav.community"),
            description: language === "en"
                ? "Join groups, circles, and connect with other migrants."
                : "Únete a grupos, círculos y conecta con otros migrantes.",
            distance: "Social",
            difficulty: "Easy" as const,
            icon: Heart,
            href: "/community",
        },
    ];

    return (
        <div className="min-h-screen bg-brand-sand pb-20">
            {/* Header */}
            <header className="bg-brand-beige text-brand-navy py-12 px-6 shadow-sm border-b border-brand-navy/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-5 h-5 text-brand-purple" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-purple/60">
                            {language === "en" ? "Premium Content" : "Contenido Premium"}
                        </span>
                    </div>
                    <h1 className="text-4xl font-heading font-black mb-4">
                        {language === "en" ? "More Resources" : "Más Recursos"}
                    </h1>
                    <p className="text-brand-navy/80 text-lg max-w-2xl font-medium leading-relaxed">
                        {language === "en"
                            ? "Dive deeper into life in Dublin with these specialized guides."
                            : "Explora más sobre la vida en Dublín con estas guías especializadas."}
                    </p>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto max-w-5xl px-6 py-12 space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {modules.map((module, index) => (
                            <RouteCard
                                key={index}
                                {...module}
                                colorClass="bg-white hover:border-brand-purple/20 shadow-sm hover:shadow-xl transition-all"
                            />
                        ))}
                    </div>
                </section>

                <SlangDictionary />
            </main>
        </div>
    );
}
