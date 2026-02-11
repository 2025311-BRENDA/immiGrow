"use client";

import { gyms } from "@/lib/data";
import { gymsEs } from "@/lib/data_es";
import { gymsPt } from "@/lib/data_pt";
import { useLanguage } from "@/context/LanguageContext";
import { RouteCard } from "@/components/RouteCard";

export default function GymsPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? gyms : language === "es" ? gymsEs : gymsPt;

    return (
        <div className="container mx-auto px-4 py-8 pb-32">
            <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">
                {language === "en" ? "Public Gyms & Pools" : language === "es" ? "Gimnasios Públicos y Piscinas" : "Academias Públicas e Piscinas"}
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
                {language === "en"
                    ? "Affordable, high-quality leisure centers run by Dublin City Council. No long contracts, great facilities."
                    : language === "es"
                        ? "Centros de ocio asequibles y de alta calidad gestionados por el Ayuntamiento de Dublín. Sin contratos largos, excelentes instalaciones."
                        : "Centros de lazer acessíveis e de alta qualidade geridos pelo Conselho Municipal de Dublin. Sem contratos longos, ótimas instalações."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <RouteCard
                        key={item.slug}
                        {...item}
                        href={`/exercise/gyms/${item.slug}`}
                    />
                ))}
            </div>
        </div>
    );
}
