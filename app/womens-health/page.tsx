"use client";

import { RouteCard } from "@/components/RouteCard";
import { womensHealth } from "@/lib/data";
import { womensHealthEs } from "@/lib/data_es";
import { useLanguage } from "@/context/LanguageContext";

export default function WomensHealthPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? womensHealth : womensHealthEs;

    return (
        <div className="container mx-auto px-4 py-8 pb-32">
            <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">
                {t("nav.women")}
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
                {language === "en"
                    ? "Specific resources and care guides for women's health in Ireland."
                    : "Recursos específicos y guías de atención para la salud de la mujer en Irlanda."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <RouteCard
                        key={item.slug}
                        {...item}
                        href={`/womens-health/${item.slug}`}
                    />
                ))}
            </div>
        </div>
    );
}
