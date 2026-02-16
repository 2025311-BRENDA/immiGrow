"use client";

import { physiotherapy, professionals, Professional } from "@/lib/data";
import { physiotherapyEs, professionalsEs } from "@/lib/data_es";
import { physiotherapyPt, professionalsPt } from "@/lib/data_pt";
import { useLanguage } from "@/context/LanguageContext";
import ProfessionalCard from "@/components/ProfessionalCard";
import { BackButton } from "@/components/BackButton";
import { ChevronRight, Stethoscope } from "lucide-react";
import Link from "next/link";

export default function PhysiotherapyPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? physiotherapy : language === "es" ? physiotherapyEs : physiotherapyPt;
    const physios = (language === "en" ? professionals : language === "es" ? professionalsEs : professionalsPt).filter((p: Professional) => p.role.includes("Physiotherapist") || p.role.includes("Fisiotera"));

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <header className="bg-brand-turquoise text-white py-12 px-6 rounded-b-[3rem] shadow-lg mb-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <BackButton />
                    <h1 className="text-4xl font-heading font-black mb-2">
                        {language === "en" ? "Recovery & Physio" : "Fisioterapia y Recuperación"}
                    </h1>
                    <p className="text-white/80 max-w-xl">
                        {language === "en"
                            ? "Vetted professionals and recovery resources for the migrant community."
                            : "Profesionales verificados y recursos de recuperación para la comunidad migrante."}
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-5xl">
                {/* Highlighted Professionals - MOST IMPORTANT */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-brand-navy">
                            {language === "en" ? "Recommended for You" : "Recomendados para ti"}
                        </h2>
                        <span className="bg-brand-turquoise/10 text-brand-turquoise text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                            Spanish / Portuguese / English
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {physios.map((prof: Professional) => (
                            <ProfessionalCard key={prof.id} professional={prof} />
                        ))}
                    </div>
                </section>

                {/* Quick Resources Grid - Consolidated */}
                <section className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-navy mb-6">
                        {language === "en" ? "Quick Links & Directories" : "Enlaces y Directorios Rápidos"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/exercise/physiotherapy/${item.slug}`}
                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group"
                            >
                                <div className="p-3 bg-brand-turquoise/10 text-brand-turquoise rounded-xl group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                                    <p className="text-xs text-slate-500 line-clamp-1">{item.description}</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ))}
                        {/* Official Finder */}
                        <a
                            href="https://www.iscp.ie/find-a-physio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-2xl bg-brand-navy text-white hover:opacity-90 transition-all shadow-md group"
                        >
                            <div className="p-3 bg-white/10 rounded-xl">
                                <Stethoscope className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-sm">ISCP Official Finder</h4>
                                <p className="text-xs text-white/60">Find Chartered Physiotherapists in Ireland</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
