"use client";

import { parks } from "@/lib/data";
import { parksEs } from "@/lib/data_es";
import { useLanguage } from "@/context/LanguageContext";
import { RouteCard } from "@/components/RouteCard";

export default function ParksPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? parks : parksEs;

    return (
        <div className="container mx-auto px-4 py-8 pb-32">
            <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">
                {t("nav.parks")}
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
                {language === "en"
                    ? "Explore Dublin's green spaces. A directory of the best parks for walking, running, and relaxing."
                    : "Explora los espacios verdes de Dublín. Un directorio de los mejores parques para caminar, correr y relajarse."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <RouteCard
                        key={item.slug}
                        {...item}
                        href={`/exercise/parks/${item.slug}`}
                    />
                ))}
            </div>
        </div>
    );
}
