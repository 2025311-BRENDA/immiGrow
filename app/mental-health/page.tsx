"use client";

import { mentalHealth, professionals, Professional } from "@/lib/data";
import { mentalHealthEs, professionalsEs } from "@/lib/data_es";
import { mentalHealthPt, professionalsPt } from "@/lib/data_pt";
import { useLanguage } from "@/context/LanguageContext";
import ProfessionalCard from "@/components/ProfessionalCard";
import { ChevronRight, Brain as BrainIcon, Search } from "lucide-react";
import Link from "next/link";
import { BackButton } from "@/components/BackButton";

export default function MentalHealthPage() {
    const { language, t } = useLanguage();
    const data = language === "en" ? mentalHealth : language === "es" ? mentalHealthEs : mentalHealthPt;
    const psychologists = (language === "en" ? professionals : language === "es" ? professionalsEs : professionalsPt).filter((p: Professional) => p.role.includes("Psychologist") || p.role.includes("Psicól"));

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <header className="bg-brand-purple text-white py-12 px-6 rounded-b-[3.5rem] shadow-lg mb-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <BackButton />
                    <h1 className="text-4xl font-heading font-black mb-2">{t("nav.mental")}</h1>
                    <p className="text-white/80 max-w-xl">{t("mental.subtitle")}</p>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-5xl">
                {/* Emergency / Crisis Support - PRIORITY */}
                <div className="mb-12 bg-red-50 p-6 rounded-3xl border border-red-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
                            <BrainIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-red-900 leading-tight">
                                {language === "en" ? "Need help right now?" : "¿Necesitas ayuda ahora?"}
                            </h3>
                            <p className="text-red-700/70 text-sm">
                                {language === "en" ? "Confidential 24/7 support is just a text or call away." : "Apoyo confidencial 24/7 a un texto o llamada de distancia."}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <a href="tel:116123" className="bg-red-600 text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                            Call 116 123
                        </a>
                    </div>
                </div>

                {/* Professional Directory */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-brand-navy">{t("mental.professionals")}</h2>
                        <span className="bg-brand-purple/10 text-brand-purple text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                            Support in your language
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {psychologists.map((prof: Professional) => (
                            <ProfessionalCard key={prof.id} professional={prof} />
                        ))}
                    </div>
                </section>

                {/* Quick Guides Grid */}
                <section className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-navy mb-6">
                        {language === "en" ? "Guides & Resources" : "Guías y Recursos"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/mental-health/${item.slug}`}
                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group"
                            >
                                <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-xl group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                                    <p className="text-xs text-slate-500 line-clamp-1">{item.description}</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ))}
                        {/* Find Official Finder */}
                        <a
                            href="https://www.psychologicalsociety.ie/find-a-psychologist"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-2xl bg-brand-navy text-white hover:opacity-90 transition-all shadow-md group"
                        >
                            <div className="p-3 bg-white/10 rounded-xl">
                                <Search className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-sm">PSI Official Finder</h4>
                                <p className="text-xs text-white/60">Find Registered Psychologists</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
