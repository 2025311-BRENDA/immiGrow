"use client";

import React from "react";
import { BackButton } from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Heart, Users, Shield, ExternalLink, Phone } from "lucide-react";

export default function LGBTQPage() {
    const { t } = useLanguage();

    const resources = [
        {
            title: "LGBT Ireland",
            desc: "National organization providing support, information and advocacy. Facilitates Peer Support Groups for migrants.",
            link: "https://lgbt.ie/",
            contact: "1800 929 539",
            icon: Heart,
        },
        {
            title: "Belong To",
            desc: "Supporting LGBTI+ young people (14-23) in Ireland. Offers youth groups and specialized support.",
            link: "https://www.belongto.org/",
            contact: "info@belongto.org",
            icon: Sparkles,
        },
        {
            title: "Outhouse",
            desc: "LGBTQ+ Community Centre in Dublin. A safe space for everyone since 1997.",
            link: "https://www.outhouse.ie/",
            contact: "(01) 873 4999",
            icon: Users,
        },
        {
            title: "Rainbow Project",
            desc: "Promoting the health and wellbeing of LGBTQ+ people and their families.",
            link: "https://www.rainbow-project.org/",
            contact: "info@rainbow-project.org",
            icon: Shield,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <header className="bg-indigo-600 text-white py-12 px-6 rounded-b-[3.5rem] shadow-lg mb-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="container mx-auto max-w-4xl relative z-10">
                    <BackButton />
                    <h1 className="text-4xl font-heading font-black mb-2">{t("comm.lgbtq.title")}</h1>
                    <p className="text-white/80 max-w-xl">{t("comm.lgbtq.desc")}</p>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-4xl">
                <section className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 font-heading">
                        {t("comm.lgbtq.support_title") || "Support & Resources"}
                    </h2>
                    <p className="text-slate-600 mb-8">
                        {t("comm.lgbtq.intro") || "Ireland is a welcoming place for the LGBTQ+ community. Here are some key organizations that can help you find your space, support, and resources."}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {resources.map((res) => (
                            <div key={res.title} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600">
                                        <res.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-800 text-lg">{res.title}</h3>
                                </div>
                                <p className="text-sm text-slate-600 mb-6 flex-1">{res.desc}</p>
                                <div className="space-y-3 mt-auto">
                                    {res.contact && (
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Phone className="w-3 h-3" />
                                            <span>{res.contact}</span>
                                        </div>
                                    )}
                                    <a
                                        href={res.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-indigo-600 text-sm font-bold hover:underline"
                                    >
                                        {t("btn.visit") || "Visit Website"}
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-indigo-50 border border-indigo-100 rounded-[2.5rem] p-8 text-center">
                    <h3 className="text-xl font-bold text-indigo-900 mb-3">
                        {t("comm.lgbtq.rights_title") || "Safety & Rights"}
                    </h3>
                    <p className="text-indigo-800/70 text-sm max-w-2xl mx-auto mb-6">
                        {t("comm.lgbtq.rights_desc") || "In Ireland, discrimination based on sexual orientation is illegal. If you feel unsafe or experience harassment, every police station (An Garda Síochána) has an LGBT Liaison Officer."}
                    </p>
                </div>
            </main>
        </div>
    );
}
