"use client";

import { procedures } from "@/lib/data";
import { proceduresEs } from "@/lib/data_es";
import { proceduresPt } from "@/lib/data_pt";
import { useLanguage } from "@/context/LanguageContext";
import { RouteCard } from "@/components/RouteCard";
import { BackButton } from "@/components/BackButton";

export default function ProceduresPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? procedures : language === "es" ? proceduresEs : proceduresPt;

    return (
        <div className="container mx-auto px-4 py-8 pb-32">
            <BackButton />
            <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">
                {t("nav.procedures")}
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
                {t("procedures.subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <RouteCard
                        key={item.slug}
                        {...item}
                        href={`/procedures/${item.slug}`}
                    />
                ))}
            </div>
        </div>
    );
}
