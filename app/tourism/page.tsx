"use client";

import { tourism } from "@/lib/data";
import { tourismEs } from "@/lib/data_es";
import { useLanguage } from "@/context/LanguageContext";
import { RouteCard } from "@/components/RouteCard";

export default function TourismPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? tourism : tourismEs;

    return (
        <div className="container mx-auto px-4 py-8 pb-32">
            <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">
                {t("nav.tourism")}
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
                {t("tourism.subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <RouteCard
                        key={item.slug}
                        {...item}
                        href={`/tourism/${item.slug}`}
                    />
                ))}
            </div>
        </div>
    );
}
