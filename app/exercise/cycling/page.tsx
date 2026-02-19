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
                {t("exercise.cycling.subtitle")}
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
