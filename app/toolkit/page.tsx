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
    Globe
} from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";

export default function ToolkitPage() {
    const { language, t } = useLanguage();

    const tools = [
        {
            id: "vault",
            title: t("nav.vault"),
            description: language === "en"
                ? "Private storage for your immigration deadlines and documents."
                : language === "es"
                    ? "Almacenamiento privado para tus trámites y fechas límite."
                    : "Armazenamento privado para seus prazos e documentos.",
            icon: Shield,
            href: "/vault",
            color: "text-brand-pink",
            bgColor: "bg-brand-pink/10"
        },
        {
            id: "calculator",
            title: t("nav.budgeter"),
            description: language === "en"
                ? "Plan your finances with real local averages for Dublin."
                : language === "es"
                    ? "Planifica tus finanzas con promedios locales reales."
                    : "Planeje suas finanças com médias locais de Dublin.",
            icon: Calculator,
            href: "/calculator",
            color: "text-brand-sun",
            bgColor: "bg-brand-sun/10"
        },
        {
            id: "jobs",
            title: t("nav.career"),
            description: language === "en"
                ? "Guides for finding work, CV tips, and recruitment in Ireland."
                : language === "es"
                    ? "Guías para encontrar trabajo y consejos para tu CV."
                    : "Guias para encontrar trabalho e dicas de currículo.",
            icon: Briefcase,
            href: "/jobs",
            color: "text-brand-turquoise",
            bgColor: "bg-brand-turquoise/10"
        },
        {
            id: "slang",
            title: t("nav.slang"),
            description: language === "en"
                ? "Learn essential Irish slang to sound like a native."
                : language === "es"
                    ? "Aprende el slang irlandés esencial para sonar como un local."
                    : "Aprenda gírias essenciais para soar como um local.",
            icon: MessageSquare,
            href: "/toolkit/slang",
            color: "text-brand-purple",
            bgColor: "bg-brand-purple/10"
        },
        {
            id: "achievements",
            title: t("nav.achievements"),
            description: language === "en"
                ? "Track your progress and earn badges as you explore."
                : language === "es"
                    ? "Sigue tu progreso y gana medallas mientras exploras."
                    : "Acompanhe seu progresso e ganhe medalhas.",
            icon: Award,
            href: "/achievements",
            color: "text-brand-teal",
            bgColor: "bg-brand-teal/10"
        },
        {
            id: "community",
            title: t("nav.community"),
            description: language === "en"
                ? "Connect with other migrants, join forums, and find events."
                : language === "es"
                    ? "Conecta con otros migrantes, únete a foros y busca eventos."
                    : "Conecte-se com outros migrantes, participe de fóruns e eventos.",
            icon: Globe,
            href: "/community",
            color: "text-brand-irish-green",
            bgColor: "bg-brand-irish-green/10"
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
                                <span>{language === "en" ? "Open Tool" : "Abrir"}</span>
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
