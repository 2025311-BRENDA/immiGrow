"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { JobGuide } from "@/components/JobGuide";

export default function JobsPage() {
    const { language, t } = useLanguage();

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-brand-turquoise text-white p-8 rounded-b-[3rem] shadow-lg mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>

                <Link href="/" className="inline-flex items-center text-white/80 mb-4 hover:text-white transition-colors relative z-10">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    {t("nav.home")}
                </Link>

                <div className="flex items-center justify-between relative z-10">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight font-heading">
                            {t("jobs.title")}
                        </h1>
                        <p className="text-white/80 mt-2 font-medium">
                            {t("jobs.subtitle")}
                        </p>
                    </div>
                    <Briefcase className="w-16 h-16 text-white/30" />
                </div>
            </div>

            <main className="container mx-auto px-6 max-w-4xl">
                <JobGuide />

                {/* Additional Resources */}
                <section className="mt-12 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                    <h3 className="text-xl font-black text-brand-navy mb-6 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-brand-turquoise" />
                        {t("jobs.training")}
                    </h3>

                    <div className="space-y-4">
                        <div className="p-4 bg-slate-50 rounded-2xl">
                            <h4 className="font-bold text-brand-navy text-sm">Springboard+</h4>
                            <p className="text-xs text-slate-500 mt-1">
                                {t("jobs.sb.desc")}
                            </p>
                            <a
                                href="https://springboardcourses.ie/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-xs font-bold text-brand-turquoise hover:underline"
                            >
                                springboardcourses.ie
                            </a>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-2xl">
                            <h4 className="font-bold text-brand-navy text-sm">SOLAS</h4>
                            <p className="text-xs text-slate-500 mt-1">
                                {t("jobs.solas.desc")}
                            </p>
                            <a
                                href="https://www.solas.ie/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-xs font-bold text-brand-turquoise hover:underline"
                            >
                                solas.ie
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
