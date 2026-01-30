"use client";

import React, { useState } from "react";
import { MapPin, Search, ExternalLink, Shield, Stethoscope, Coffee, Bus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { resourceLocations } from "@/lib/data";
import { resourceLocationsEs } from "@/lib/data_es";

export function ResourceMap() {
    const { language } = useLanguage();
    const [filter, setFilter] = useState<string>("All");

    const data = language === "en" ? resourceLocations : resourceLocationsEs;

    const categories = ["All", "Admin", "Health", "Leisure", "Transport"];

    const filteredData = filter === "All"
        ? data
        : data.filter(item => item.category === filter);

    const getIcon = (category: string) => {
        switch (category) {
            case "Admin": return <Shield className="w-5 h-5" />;
            case "Health": return <Stethoscope className="w-5 h-5" />;
            case "Leisure": return <Coffee className="w-5 h-5" />;
            case "Transport": return <Bus className="w-5 h-5" />;
            default: return <MapPin className="w-5 h-5" />;
        }
    };

    return (
        <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 min-h-[500px]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h3 className="text-2xl font-black text-brand-navy">
                        {language === "en" ? "Dublin Resource Map" : "Mapa de Recursos de Dublín"}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                        {language === "en" ? "Vital spots for your first weeks." : "Puntos vitales para tus primeras semanas."}
                    </p>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${filter === cat
                                    ? "bg-brand-navy text-white shadow-lg"
                                    : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredData.map((item) => (
                    <div key={item.id} className="group bg-slate-50 rounded-3xl p-6 border border-transparent hover:border-brand-turquoise/20 hover:bg-white hover:shadow-xl transition-all">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-2xl ${item.category === 'Admin' ? 'bg-blue-100 text-blue-600' :
                                    item.category === 'Health' ? 'bg-red-100 text-red-600' :
                                        item.category === 'Transport' ? 'bg-green-100 text-green-600' :
                                            'bg-brand-sun/20 text-brand-navy'
                                }`}>
                                {getIcon(item.category)}
                            </div>
                            <a
                                href={item.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-xl text-slate-400 hover:text-brand-turquoise hover:shadow-md transition-all"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>

                        <h4 className="font-bold text-brand-navy group-hover:text-brand-turquoise transition-colors">{item.name}</h4>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                            {item.description}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            <MapPin className="w-3 h-3" />
                            {item.address}
                        </div>
                    </div>
                ))}
            </div>

            {filteredData.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-slate-300">
                    <Search className="w-12 h-12 mb-4 opacity-20" />
                    <p className="font-bold">{language === "en" ? "No locations found in this category." : "No se encontraron ubicaciones en esta categoría."}</p>
                </div>
            )}
        </section>
    );
}
