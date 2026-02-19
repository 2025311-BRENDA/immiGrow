"use client";

import React from "react";
import { ShieldAlert, MapPin, Users, Share2, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SafetyGuidelines() {
    const { language, t } = useLanguage();

    const guidelines = [
        {
            icon: MapPin,
            title: t("safe.public"),
            desc: t("safe.public.desc")
        },
        {
            icon: Users,
            title: t("safe.inform"),
            desc: t("safe.inform.desc")
        },
        {
            icon: ShieldAlert,
            title: t("safe.privacy"),
            desc: t("safe.privacy.desc")
        },
        {
            icon: Share2,
            title: t("safe.instinct"),
            desc: t("safe.instinct.desc")
        }
    ];

    return (
        <div className="bg-white/40 backdrop-blur-sm border-2 border-brand-teal/10 rounded-[2rem] p-4 mb-6 relative overflow-hidden shadow-sm">
            <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-brand-teal" />
                    <h3 className="text-[11px] font-black text-brand-navy uppercase tracking-widest">
                        {t("safe.title")}
                    </h3>
                </div>
                <div className="text-[9px] text-brand-navy/40 font-bold max-w-[200px] leading-tight text-right italic">
                    {t("safe.disclaimer")}
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {guidelines.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 p-3 bg-white/60 rounded-xl border border-white hover:bg-white transition-all group">
                        <div className="flex items-center gap-2">
                            <item.icon className="w-3.5 h-3.5 text-brand-teal group-hover:scale-110 transition-transform" />
                            <h4 className="text-[9px] font-black text-brand-navy uppercase tracking-tighter">{item.title}</h4>
                        </div>
                        <p className="text-[9px] text-slate-500 leading-tight line-clamp-2">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
