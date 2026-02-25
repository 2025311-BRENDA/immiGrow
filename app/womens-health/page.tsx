"use client";

import { RouteCard } from "@/components/RouteCard";
import { womensHealth } from "@/lib/data";
import { womensHealthEs } from "@/lib/data_es";
import { womensHealthPt } from "@/lib/data_pt";
import { useLanguage } from "@/context/LanguageContext";
import { BackButton } from "@/components/BackButton";

export default function WomensHealthPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? womensHealth : language === "es" ? womensHealthEs : womensHealthPt;

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <header className="bg-brand-pink text-white py-12 px-6 rounded-b-[3.5rem] shadow-lg mb-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <BackButton href="/health" />
                    <h1 className="text-4xl font-heading font-black mb-2">{t("nav.women")}</h1>
                    <p className="text-white/80 max-w-xl">{t("women.subtitle")}</p>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item) => (
                        <RouteCard
                            key={item.slug}
                            {...item}
                            href={`/womens-health/${item.slug}`}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
