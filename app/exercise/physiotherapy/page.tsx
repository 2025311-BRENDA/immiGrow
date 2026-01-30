"use client";

import { physiotherapy, professionals } from "@/lib/data";
import { physiotherapyEs } from "@/lib/data_es";
import { useLanguage } from "@/context/LanguageContext";
import { RouteCard } from "@/components/RouteCard";
import ProfessionalCard from "@/components/ProfessionalCard";
import JoinNetworkCTA from "@/components/JoinNetworkCTA";

export default function PhysiotherapyPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? physiotherapy : physiotherapyEs;
    const physios = professionals.filter(p => p.role === "Physiotherapist");

    return (
        <div className="container mx-auto px-4 py-8 pb-32">
            <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">
                {language === "en" ? "Physiotherapy & Recovery" : "Fisioterapia y Recuperación"}
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
                {language === "en"
                    ? "Find trusted physiotherapists, including community networks and specialized clinics."
                    : "Encuentra fisioterapeutas de confianza, incluyendo redes comunitarias y clínicas especializadas."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <RouteCard
                        key={item.slug}
                        {...item}
                        href={`/exercise/physiotherapy/${item.slug}`}
                    />
                ))}
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">
                    {language === "en" ? "Recommended Professionals" : "Profesionales Recomendados"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {physios.map((prof) => (
                        <ProfessionalCard key={prof.id} professional={prof} />
                    ))}
                </div>
                <JoinNetworkCTA />
            </div>
        </div>
    );
}
