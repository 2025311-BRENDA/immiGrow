"use client";

import { RouteCard } from "@/components/RouteCard";
import { mentalHealth, professionals, Professional } from "@/lib/data";
import { mentalHealthEs, professionalsEs } from "@/lib/data_es";
import { mentalHealthPt, professionalsPt } from "@/lib/data_pt";
import { useLanguage } from "@/context/LanguageContext";
import ProfessionalCard from "@/components/ProfessionalCard";
import JoinNetworkCTA from "@/components/JoinNetworkCTA";

export default function MentalHealthPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? mentalHealth : language === "es" ? mentalHealthEs : mentalHealthPt;
    const psychologists = (language === "en" ? professionals : language === "es" ? professionalsEs : professionalsPt).filter((p: Professional) => p.role.includes("Psychologist") || p.role.includes("Psicól"));

    return (
        <div className="container mx-auto px-4 py-8 pb-32">
            <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">
                {t("nav.mental")}
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
                {t("mental.subtitle")}
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
                    {t("mental.professionals")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {psychologists.map((prof: Professional) => (
                        <ProfessionalCard key={prof.id} professional={prof} />
                    ))}
                </div>
                <JoinNetworkCTA />
            </div>
        </div>
    );
}
