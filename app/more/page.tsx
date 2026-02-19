"use client";

import { RouteCard } from "@/components/RouteCard";
import { BackButton } from "@/components/BackButton";
import { FileText, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SlangDictionary } from "@/components/SlangDictionary";
import { Smartphone, Download } from "lucide-react";

export default function MorePage() {
    const { language, t } = useLanguage();

    const modules = [
        {
            title: t("nav.jobs"),
            description: t("jobs.subtitle"),
            distance: "Career",
            difficulty: "Easy" as const,
            icon: Sparkles,
            href: "/jobs",
        },
        {
            title: t("nav.calculator"),
            description: t("tool.budgeter.desc"),
            distance: "Finanzas",
            difficulty: "Easy" as const,
            icon: FileText,
            href: "/calculator",
        },
        {
            title: t("nav.community"),
            description: t("tool.community.desc"),
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
                    <BackButton />
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-5 h-5 text-brand-purple" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-purple/60">
                            {t("more.badge.premium")}
                        </span>
                    </div>
                    <h1 className="text-4xl font-heading font-black mb-4">
                        {t("more.title")}
                    </h1>
                    <p className="text-brand-navy/80 text-lg max-w-2xl font-medium leading-relaxed">
                        {t("more.subtitle")}
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

                <section className="bg-brand-navy text-white p-8 rounded-[3rem] shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sun/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="p-6 bg-white/10 rounded-[2rem] border border-white/20">
                            <Smartphone className="w-12 h-12 text-brand-sun" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-bold mb-2">
                                {t("more.install.title")}
                            </h2>
                            <p className="text-white/60 text-sm max-w-md">
                                {t("more.install.desc")}
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                // Trigger same logic as the banner
                                window.dispatchEvent(new Event('beforeinstallprompt'));
                                // If iOS, it shows the manual hint
                                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
                                if (isIOS) {
                                    alert(t("more.install.ios"));
                                }
                            }}
                            className="bg-brand-sun text-brand-navy px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t("more.install.button")}
                        </button>
                    </div>
                </section>

                <SlangDictionary />
            </main>
        </div>
    );
}
