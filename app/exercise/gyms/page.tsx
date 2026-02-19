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
                {t("exercise.gyms.title")}
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
                {t("exercise.gyms.subtitle")}
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
