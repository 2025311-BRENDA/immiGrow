"use client";

import { RouteCard } from "@/components/RouteCard";
import { mentalHealth, professionals } from "@/lib/data";
import { mentalHealthEs } from "@/lib/data_es";
import { useLanguage } from "@/context/LanguageContext";
import ProfessionalCard from "@/components/ProfessionalCard";
import JoinNetworkCTA from "@/components/JoinNetworkCTA";

export default function MentalHealthPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? mentalHealth : mentalHealthEs;
    const psychologists = professionals.filter(p => p.role === "Psychologist");

    return (
        <div className="container mx-auto px-4 py-8 pb-32">
            <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">
                {t("nav.mental")}
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
                {language === "en"
                    ? "Support, community, and professional resources for your mental well-being."
                    : "Apoyo, comunidad y recursos profesionales para tu bienestar mental."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <RouteCard
                        key={item.slug}
                        {...item}
                        href={`/mental-health/${item.slug}`}
                    />
                ))}
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">
                    {language === "en" ? "Recommended Professionals" : "Profesionales Recomendados"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {psychologists.map((prof) => (
                        <ProfessionalCard key={prof.id} professional={prof} />
                    ))}
                </div>
                <JoinNetworkCTA />
            </div>
        </div>
    );
}
