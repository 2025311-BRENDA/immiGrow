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
                : language === "es"
                    ? "Maternidad, chequeos y cuidado especializado."
                    : "Maternidade, exames e cuidados especializados.",
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
                : language === "es"
                    ? "Redes de apoyo, psicólogos y bienestar."
                    : "Redes de apoio, psicólogos e bem-estar.",
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
                : language === "es"
                    ? "Recuperación, clínicas comunitarias y especialistas."
                    : "Recuperação, clínicas comunitárias e especialistas.",
            icon: Activity,
            href: "/exercise/physiotherapy",
            color: "text-brand-turquoise",
            bgColor: "bg-brand-turquoise/10"
        }
    ];

    const emergencyContacts = [
        { name: "HSE Live", number: "1800 700 700", desc: language === "en" ? "General health info" : "Info de salud general" },
        { name: "Samaritans", number: "116 123", desc: language === "en" ? "24/7 Mental support" : "Apoyo mental 24/7" },
        { name: "Emergency", number: "999 / 112", desc: language === "en" ? "Immediate danger" : "Peligro inmediato" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* Header */}
            <header className="bg-brand-irish-green text-white py-12 px-6 rounded-b-[3rem] shadow-lg mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <BackButton />
                    <h1 className="text-4xl font-heading font-black mb-2">{t("nav.health")}</h1>
                    <p className="text-white/80 max-w-xl">{language === "en" ? "Immediate access to vetted health resources for migrants." : "Acceso inmediato a recursos de salud verificados para migrantes."}</p>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-5xl">
                {/* Emergency Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {emergencyContacts.map((contact) => (
                        <div key={contact.name} className="bg-white p-4 rounded-2xl border border-red-100 flex items-center justify-between shadow-sm">
                            <div>
                                <h3 className="font-bold text-slate-800 text-sm">{contact.name}</h3>
                                <p className="text-[10px] text-slate-400 uppercase tracking-wider">{contact.desc}</p>
                            </div>
                            <a href={`tel:${contact.number.replace(/\s/g, '')}`} className="bg-red-50 text-red-600 px-4 py-2 rounded-xl font-black text-sm hover:bg-red-600 hover:text-white transition-colors">
                                {contact.number}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Main Hub Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sections.map((section) => (
                        <Link
                            key={section.id}
                            href={section.href}
                            className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative"
                        >
                            <div className={`p-4 ${section.bgColor} ${section.color} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                                <section.icon className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy mb-2">{section.title}</h2>
                            <p className="text-slate-500 mb-6 text-sm leading-relaxed">{section.description}</p>
                            <div className="flex items-center text-brand-irish-green font-bold text-sm">
                                <span>{language === "en" ? "Enter Section" : "Entrar"}</span>
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Direct Action: Finding a GP */}
                <section className="mt-12 bg-white rounded-[2.5rem] p-8 border border-brand-turquoise/20 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-turquoise/5 rounded-full -mr-16 -mt-16"></div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                        <div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">
                                {language === "en" ? "Register with a local GP" : "Regístrate con un GP local"}
                            </h3>
                            <p className="text-slate-500 max-w-lg">
                                {language === "en"
                                    ? "Finding a doctor is the first step to accessing healthcare in Ireland. Use the official HSE finder."
                                    : "Encontrar un médico es el primer paso para acceder a la salud en Irlanda. Usa el buscador oficial de la HSE."}
                            </p>
                        </div>
                        <a
                            href="https://www.hse.ie/eng/services/list/2/gp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-turquoise text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-brand-turquoise/20 hover:scale-105 transition-transform whitespace-nowrap"
                        >
                            {language === "en" ? "Find GP Near Me" : "Buscar GP cercano"}
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
