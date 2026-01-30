"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
    ChevronLeft,
    Trophy,
    Lock,
    CheckCircle2,
    Star,
    Compass,
    Map as MapIcon,
    Wind,
    Award
} from "lucide-react";

interface Achievement {
    id: string;
    titleEn: string;
    titleEs: string;
    descriptionEn: string;
    descriptionEs: string;
    icon: any;
    condition: (completedSlugs: string[]) => boolean;
}

const ALL_ACHIEVEMENTS: Achievement[] = [
    {
        id: "first_one",
        titleEn: "Getting Started",
        titleEs: "Empezando",
        descriptionEn: "Complete your first route in Dublin.",
        descriptionEs: "Completa tu primera ruta en Dublín.",
        icon: Star,
        condition: (slugs) => slugs.length >= 1
    },
    {
        id: "five_routes",
        titleEn: "Active Explorer",
        titleEs: "Explorador Activo",
        descriptionEn: "Complete 5 different routes.",
        descriptionEs: "Completa 5 rutas diferentes.",
        icon: Trophy,
        condition: (slugs) => slugs.length >= 5
    },
    {
        id: "hiker",
        titleEn: "First Hike",
        titleEs: "Primer Hike",
        descriptionEn: "Complete a route in the mountains or cliffs.",
        descriptionEs: "Completa una ruta en las montañas o acantilados.",
        icon: Compass,
        condition: (slugs) => slugs.includes("bray-greystones") || slugs.includes("howth-cliff-walk")
    },
    {
        id: "urban",
        titleEn: "Urban Explorer",
        titleEs: "Explorador Urbano",
        descriptionEn: "Complete 3 city-center walks.",
        descriptionEs: "Completa 3 caminatas por el centro de la ciudad.",
        icon: MapIcon,
        condition: (slugs) => {
            const urbanSlugs = ["dublin-castle-walk", "liffey-river-walk", "phoenix-park"];
            return slugs.filter(s => urbanSlugs.includes(s)).length >= 2;
        }
    },
    {
        id: "coastal",
        titleEn: "Sea Breeze",
        titleEs: "Brisa Marina",
        descriptionEn: "Complete a coastal walk or run.",
        descriptionEs: "Completa una caminata o carrera en la costa.",
        icon: Wind,
        condition: (slugs) => slugs.includes("coastal-run") || slugs.includes("clontarf-promenade")
    }
];

export default function AchievementsPage() {
    const { language, t } = useLanguage();
    const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("migrawell_completed");
        if (saved) {
            setCompletedSlugs(JSON.parse(saved));
        }
    }, []);

    const earnedCount = ALL_ACHIEVEMENTS.filter(a => a.condition(completedSlugs)).length;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-brand-irish-green text-white p-8 rounded-b-[3rem] shadow-lg mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <Link href="/" className="inline-flex items-center text-brand-sand mb-4 opacity-80 hover:opacity-100 transition-opacity relative z-10">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    {t("nav.home")}
                </Link>
                <div className="flex items-center justify-between relative z-10">
                    <div>
                        <h1 className="text-4xl font-heading font-bold">{t("nav.achievements")}</h1>
                        <p className="text-brand-sand/80 mt-2 font-medium">
                            {language === "en"
                                ? `You've earned ${earnedCount} of ${ALL_ACHIEVEMENTS.length} badges!`
                                : `¡Has ganado ${earnedCount} de ${ALL_ACHIEVEMENTS.length} medallas!`}
                        </p>
                    </div>
                    <Award className="w-16 h-16 text-brand-sand opacity-50" />
                </div>

                {/* Progress Bar */}
                <div className="mt-8 bg-black/10 h-3 rounded-full overflow-hidden">
                    <div
                        className="bg-brand-sand h-full transition-all duration-1000 ease-out"
                        style={{ width: `${(earnedCount / ALL_ACHIEVEMENTS.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            <main className="container mx-auto px-4 max-w-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {ALL_ACHIEVEMENTS.map((achievement) => {
                        const isEarned = achievement.condition(completedSlugs);
                        const Icon = achievement.icon;

                        return (
                            <div
                                key={achievement.id}
                                className={`p-6 rounded-[2rem] border-2 transition-all relative overflow-hidden ${isEarned
                                    ? 'bg-white border-brand-irish-green/20 shadow-md'
                                    : 'bg-slate-100 border-transparent grayscale'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-4 rounded-2xl ${isEarned ? 'bg-brand-irish-green/10 text-brand-irish-green' : 'bg-slate-200 text-slate-400'}`}>
                                        {isEarned ? <Icon className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold ${isEarned ? 'text-brand-navy' : 'text-slate-400'}`}>
                                            {language === 'en' ? achievement.titleEn : achievement.titleEs}
                                        </h3>
                                        <p className="text-sm text-slate-500 mt-1">
                                            {language === 'en' ? achievement.descriptionEn : achievement.descriptionEs}
                                        </p>
                                    </div>
                                </div>

                                {isEarned && (
                                    <div className="absolute top-4 right-4 animate-in zoom-in duration-500">
                                        <CheckCircle2 className="w-6 h-6 text-brand-irish-green" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 p-8 bg-white rounded-[2rem] border border-slate-100 text-center shadow-sm">
                    <p className="text-slate-500 font-medium">
                        {t("lbl.unlockMore")}
                    </p>
                    <Link
                        href="/exercise"
                        className="inline-block mt-4 px-8 py-3 bg-brand-irish-green text-white font-bold rounded-xl hover:bg-brand-irish-green/90 transition-all"
                    >
                        {language === 'en' ? 'Explore Routes' : 'Explorar Rutas'}
                    </Link>
                </div>
            </main>
        </div>
    );
}
