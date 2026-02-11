"use client";

import React from "react";
import Link from "next/link";
import { Heart, Brain, Activity, ChevronRight } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";

export default function HealthHubPage() {
    const { language, t } = useLanguage();

    const sections = [
        {
            id: "womens-health",
            title: t("nav.women"),
            description: language === "en"
                ? "Maternity, screenings, and specialized care."
                : "Maternidad, chequeos y cuidado especializado.",
            icon: Heart,
            href: "/womens-health",
            color: "text-brand-pink",
            bgColor: "bg-brand-pink/10"
        },
        {
            id: "mental-health",
            title: t("nav.mental"),
            description: language === "en"
                ? "Support networks, psychologists, and well-being."
                : "Redes de apoyo, psicólogos y bienestar.",
            icon: Brain,
            href: "/mental-health",
            color: "text-brand-purple",
            bgColor: "bg-brand-purple/10"
        },
        {
            id: "physiotherapy",
            title: t("nav.physiotherapy"),
            description: language === "en"
                ? "Recovery, community clinics, and specialists."
                : "Recuperación, clínicas comunitarias y especialistas.",
            icon: Activity,
            href: "/exercise/physiotherapy",
            color: "text-brand-turquoise",
            bgColor: "bg-brand-turquoise/10"
        }
    ];

    return (
        <div className="container mx-auto px-6 py-12 pb-32">
            <BackButton />
            <header className="mb-12">
                <h1 className="text-4xl font-heading font-black text-brand-navy mb-4">
                    {t("nav.health")}
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
                    {language === "en"
                        ? "Comprehensive care for your physical and mental well-being in Dublin."
                        : "Cuidado integral para tu bienestar físico y mental en Dublín."}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section) => (
                    <Link
                        key={section.id}
                        href={section.href}
                        className="group bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden"
                    >
                        <div className={`p-4 ${section.bgColor} ${section.color} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                            <section.icon className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-brand-navy mb-3">{section.title}</h2>
                        <p className="text-slate-500 mb-8 leading-relaxed">{section.description}</p>

                        <div className="flex items-center text-brand-irish-green font-bold text-sm">
                            <span>{language === "en" ? "Explore" : "Explorar"}</span>
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
