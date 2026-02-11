"use client";

import { cycling } from "@/lib/data";
import { cyclingEs } from "@/lib/data_es";
import { cyclingPt } from "@/lib/data_pt";
import { useLanguage } from "@/context/LanguageContext";
import { RouteCard } from "@/components/RouteCard";

export default function CyclingPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? cycling : language === "es" ? cyclingEs : cyclingPt;

    return (
        <div className="container mx-auto px-4 py-8 pb-32">
            <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">
                {t("nav.cycling")}
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
                {language === "en"
                    ? "Cycling routes for all levels, from coastal paths to park loops."
                    : language === "es"
                        ? "Rutas de ciclismo para todos los niveles, desde caminos costeros hasta bucles en parques."
                        : "Rotas de ciclismo para todos os níveis, desde caminhos costeiros a circuitos em parques."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <RouteCard
                        key={item.slug}
                        {...item}
                        href={`/exercise/cycling/${item.slug}`}
                    />
                ))}
            </div>
        </div>
    );
}
