"use client";

import React from "react";
import Link from "next/link";
import {
    Shield,
    Calculator,
    Briefcase,
    MessageSquare,
    Award,
    ChevronRight,
    Sparkles,
    Globe,
    Utensils
} from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";

export default function ToolkitPage() {
    const { language, t } = useLanguage();

    const tools = [
        {
            id: "community",
            title: t("nav.community"),
            description: t("tool.community.desc"),
            icon: Globe,
            href: "/community",
            color: "text-brand-irish-green",
            bgColor: "bg-brand-irish-green/10"
        },
        {
            id: "jobs",
            title: t("nav.career"),
            description: t("tool.career.desc"),
            icon: Briefcase,
            href: "/jobs",
            color: "text-brand-turquoise",
            bgColor: "bg-brand-turquoise/10"
        },
        {
            id: "vault",
            title: t("nav.vault"),
            description: t("tool.vault.desc"),
            icon: Shield,
            href: "/vault",
            color: "text-brand-pink",
            bgColor: "bg-brand-pink/10"
        },
        {
            id: "calculator",
            title: t("nav.budgeter"),
            description: t("tool.budgeter.desc"),
            icon: Calculator,
            href: "/calculator",
            color: "text-brand-sun",
            bgColor: "bg-brand-sun/10"
        },
        {
            id: "slang",
            title: t("nav.slang"),
            description: t("tool.slang.desc"),
            icon: MessageSquare,
            href: "/toolkit/slang",
            color: "text-brand-purple",
            bgColor: "bg-brand-purple/10"
        },
        {
            id: "recipes",
            title: t("nav.recipes"),
            description: t("tool.recipes.desc"),
            icon: Utensils,
            href: "/toolkit/recipes",
            color: "text-orange-500",
            bgColor: "bg-orange-50"
        },
        {
            id: "achievements",
            title: t("nav.achievements"),
            description: t("tool.achievements.desc"),
            icon: Award,
            href: "/achievements",
            color: "text-brand-teal",
            bgColor: "bg-brand-teal/10"
        }
    ];

    return (
        <div className="min-h-screen bg-brand-sand pb-32">
            {/* Header */}
            <header className="bg-brand-navy text-white py-16 px-6 rounded-b-[3.5rem] relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <BackButton />
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-5 h-5 text-brand-sun" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                            Essentials
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
                        {t("toolkit.title")}
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                        {t("toolkit.subtitle")}
                    </p>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto max-w-5xl px-6 -mt-8 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.map((tool) => (
                        <Link
                            key={tool.id}
                            href={tool.href}
                            className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative"
                        >
                            <div className={`p-4 ${tool.bgColor} ${tool.color} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                                <tool.icon className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy mb-3">{tool.title}</h2>
                            <p className="text-slate-500 mb-8 text-sm leading-relaxed">{tool.description}</p>

                            <div className="flex items-center text-brand-irish-green font-bold text-sm">
                                <span>{t("tool.open")}</span>
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Share Section */}
                <div className="mt-12 bg-brand-navy rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-colors" />

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-black mb-4">
                                Comparte immiGrow ☘️
                            </h2>
                            <p className="text-white/70 text-lg mb-6 leading-relaxed">
                                ¿Conoces a alguien nuevo en Dublín? Ayúdales a encontrar su camino. Muestra este código QR para que puedan descargar la guía al instante.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <button
                                    onClick={() => {
                                        if (navigator.share) {
                                            navigator.share({
                                                title: 'immiGrow',
                                                text: 'Dales un vistazo a esta guía para inmigrantes en Dublín.',
                                                url: window.location.origin
                                            });
                                        }
                                    }}
                                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all"
                                >
                                    Compartir Enlace
                                </button>
                            </div>
                        </div>

                        <div className="shrink-0">
                            <div className="w-48 h-48 bg-white p-4 rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 flex items-center justify-center overflow-hidden animate-[float_4s_ease-in-out_infinite]">
                                <img
                                    src="/qrcode_ready.png"
                                    alt="QR Code immiGrow"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        // If qrcode_ready doesn't exist, use a dynamic QR API for immigrow.ie
                                        if (target.src.includes('qrcode_ready.png')) {
                                            target.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent('https://immigrow.ie')}`;
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
