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
    Award,
    TrendingUp,
    Zap,
    MapPinned,
    Sparkles,
    ChevronRight
} from "lucide-react";
import { BackButton } from "@/components/BackButton";

interface AchievementTier {
    id: string;
    level: "Bronze" | "Silver" | "Gold";
    titleEn: string;
    titleEs: string;
    titlePt: string;
    descriptionEn: string;
    descriptionEs: string;
    descriptionPt: string;
    target: number;
}

interface AchievementGroup {
    id: string;
    icon: any;
    color: string;
    gradient: string;
    titleEn: string;
    titleEs: string;
    titlePt: string;
    tiers: AchievementTier[];
    metric: (completedSlugs: string[]) => number;
}

const ACHIEVEMENT_GROUPS: AchievementGroup[] = [
    {
        id: "explorer",
        icon: MapPinned,
        color: "text-brand-turquoise",
        gradient: "from-brand-turquoise/20",
        titleEn: "Dublin Explorer",
        titleEs: "Exploradora de Dublín",
        titlePt: "Exploradora de Dublin",
        metric: (slugs) => slugs.length,
        tiers: [
            { id: "e1", level: "Bronze", titleEn: "Getting Started", titleEs: "Empezando", titlePt: "Começando", descriptionEn: "Complete 1 route", descriptionEs: "Completa 1 ruta", descriptionPt: "Complete 1 rota", target: 1 },
            { id: "e2", level: "Silver", titleEn: "Active Traveller", titleEs: "Viajera Activa", titlePt: "Viajante Ativa", descriptionEn: "Complete 5 routes", descriptionEs: "Completa 5 rutas", descriptionPt: "Complete 5 rotas", target: 5 },
            { id: "e3", level: "Gold", titleEn: "Master Explorer", titleEs: "Maestra Exploradora", titlePt: "Mestre Exploradora", descriptionEn: "Complete 10 routes", descriptionEs: "Completa 10 rutas", descriptionPt: "Complete 10 rotas", target: 10 },
        ]
    },
    {
        id: "nature",
        icon: Wind,
        color: "text-brand-irish-green",
        gradient: "from-brand-irish-green/20",
        titleEn: "Nature Lover",
        titleEs: "Amante de la Naturaleza",
        titlePt: "Amante da Natureza",
        metric: (slugs) => slugs.filter(s => ["howth-cliff-walk", "bray-greystones", "phoenix-park", "glendalough"].includes(s)).length,
        tiers: [
            { id: "n1", level: "Bronze", titleEn: "Fresh Air", titleEs: "Aire Fresco", titlePt: "Ar Puro", descriptionEn: "1 nature route", descriptionEs: "1 ruta de naturaleza", descriptionPt: "1 rota de natureza", target: 1 },
            { id: "n2", level: "Silver", titleEn: "Trail Blazer", titleEs: "Pionera de Senderos", titlePt: "Pioneira de Trilhas", descriptionEn: "3 nature routes", descriptionEs: "3 rutas de naturaleza", descriptionPt: "3 rotas de natureza", target: 3 },
            { id: "n3", level: "Gold", titleEn: "Mountain Guide", titleEs: "Guía de Montaña", titlePt: "Guia de Montanha", descriptionEn: "5 nature routes", descriptionEs: "5 rutas de naturaleza", descriptionPt: "5 rotas de natureza", target: 5 },
        ]
    },
    {
        id: "social",
        icon: TrendingUp,
        color: "text-brand-pink",
        gradient: "from-brand-pink/20",
        titleEn: "Community Star",
        titleEs: "Estrella de la Comunidad",
        titlePt: "Estrela da Comunidade",
        metric: () => {
            // Simulating km contributions for now
            return 1;
        },
        tiers: [
            { id: "s1", level: "Bronze", titleEn: "Team Player", titleEs: "Jugadora de Equipo", titlePt: "Jogadora de Equipe", descriptionEn: "First km contribution", descriptionEs: "Primera contribución de km", descriptionPt: "Primeira contribuição de km", target: 1 },
            { id: "s2", level: "Silver", titleEn: "Supportive", titleEs: "Solidaria", titlePt: "Solidária", descriptionEn: "Add 10km total", descriptionEs: "Suma 10km en total", descriptionPt: "Some 10km no total", target: 10 },
            { id: "s3", level: "Gold", titleEn: "Legendary", titleEs: "Legendaria", titlePt: "Lendária", descriptionEn: "Add 50km total", descriptionEs: "Suma 50km en total", descriptionPt: "Some 50km no total", target: 50 },
        ]
    }
];

export default function AchievementsPage() {
    const { language, t } = useLanguage();
    const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("migrawell_completed");
        if (saved) setCompletedSlugs(JSON.parse(saved));
    }, []);

    const getTotalEarned = () => {
        let count = 0;
        ACHIEVEMENT_GROUPS.forEach(group => {
            const m = group.metric(completedSlugs);
            group.tiers.forEach(t => { if (m >= t.target) count++; });
        });
        return count;
    };

    const totalBadges = ACHIEVEMENT_GROUPS.reduce((acc, g) => acc + g.tiers.length, 0);
    const earnedCount = getTotalEarned();

    return (
        <div className="min-h-screen bg-[#FDFCFB] pb-32">
            {/* Ultra Premium Header */}
            <div className="bg-gradient-to-br from-brand-turquoise via-brand-turquoise to-brand-teal pt-12 pb-24 px-8 rounded-b-[4.5rem] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-sun/20 rounded-full -ml-32 -mb-32 blur-3xl" />

                <div className="container mx-auto relative z-10">
                    <BackButton />
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-6">
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                                <Sparkles className="w-5 h-5 text-brand-sun fill-brand-sun" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">{t("achievements.legacy")}</span>
                            </div>
                            <h1 className="text-5xl font-heading font-black text-white tracking-tighter leading-none">{t("nav.achievements")}</h1>
                            <p className="text-white/80 mt-4 font-bold text-lg">
                                {t("achievements.mastered").replace("{count}", earnedCount.toString()).replace("{total}", totalBadges.toString())}
                            </p>
                        </div>
                        <div className="relative">
                            <div className="w-32 h-32 bg-white/20 backdrop-blur-2xl rounded-[3rem] border border-white/40 flex items-center justify-center shadow-2xl overflow-hidden group">
                                <Trophy className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent flex items-end justify-center pb-2">
                                    <span className="text-[8px] font-black uppercase text-white tracking-widest">{t("achievements.hall")}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Overall Progress Hub */}
                    <div className="mt-12 bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-6 border border-white/20">
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">{t("achievements.journey")}</span>
                            <span className="text-2xl font-black text-white tabular-nums">{Math.floor((earnedCount / totalBadges) * 100)}%</span>
                        </div>
                        <div className="bg-white/10 h-6 rounded-full overflow-hidden p-1.5 shadow-inner">
                            <div
                                className="bg-white h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
                                style={{ width: `${(earnedCount / totalBadges) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-6 -mt-16 relative z-20 space-y-12">
                {ACHIEVEMENT_GROUPS.map((group) => {
                    const currentMetric = group.metric(completedSlugs);

                    return (
                        <section key={group.id} className="bg-white p-8 rounded-[3.5rem] shadow-xl border border-slate-100 overflow-hidden relative group/section">
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${group.gradient} to-transparent rounded-full -mr-32 -mt-32 blur-3xl group-hover/section:scale-110 transition-transform duration-1000`} />

                            <div className="flex items-center gap-6 mb-10 relative z-10">
                                <div className={`p-4 rounded-3xl bg-slate-50 ${group.color} shadow-inner`}>
                                    <group.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-heading font-black text-brand-navy tracking-tight">{t(`achievements.${group.id}.title`)}</h2>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className={`w-3 h-3 rounded-full border-2 border-white ${currentMetric >= (group.tiers[i - 1]?.target || 0) ? 'bg-brand-sun' : 'bg-slate-200'}`} />
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-400 ml-2">
                                            {currentMetric} {t("achievements.points")} / {group.tiers[2].target} max
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                                {group.tiers.map((tier) => {
                                    const isEarned = currentMetric >= tier.target;

                                    return (
                                        <div
                                            key={tier.id}
                                            className={`p-6 rounded-[2.5rem] border-2 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center ${isEarned
                                                ? 'bg-neutral-50/50 border-brand-sun/20 shadow-lg scale-100'
                                                : 'bg-white border-slate-50 grayscale opacity-40 scale-95'}`}
                                        >
                                            <div className="absolute top-4 right-4">
                                                {isEarned ? <CheckCircle2 className="w-5 h-5 text-brand-sun" /> : <Lock className="w-5 h-5 text-slate-200" />}
                                            </div>

                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-700 ${isEarned ? 'bg-white shadow-xl' : 'bg-slate-50'}`}>
                                                <Award className={`w-8 h-8 ${isEarned ? (tier.level === 'Gold' ? 'text-brand-sun' : tier.level === 'Silver' ? 'text-slate-400' : 'text-amber-700') : 'text-slate-200'}`} />
                                            </div>

                                            <h4 className={`font-black uppercase text-[10px] tracking-widest mb-1 ${isEarned ? 'text-brand-navy' : 'text-slate-300'}`}>
                                                {tier.level}
                                            </h4>
                                            <h3 className={`font-bold text-sm mb-2 ${isEarned ? 'text-brand-navy' : 'text-slate-300'}`}>{t(`achievements.${group.id}.${tier.id}.title`)}</h3>
                                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{t(`achievements.${group.id}.${tier.id}.desc`)}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    );
                })}

                <section className="bg-brand-navy p-10 rounded-[4rem] text-center relative overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-turquoise/5 to-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <Zap className="w-12 h-12 text-brand-sun mx-auto mb-6 animate-bounce" />
                    <h2 className="text-3xl font-heading font-black text-white mb-4 tracking-tight">{t("achievements.nextLevel")}</h2>
                    <p className="text-white/60 text-sm max-w-md mx-auto mb-8 font-medium">
                        {t("achievements.nextLevelDesc")}
                    </p>
                    <Link
                        href="/exercise"
                        className="inline-flex items-center gap-3 bg-brand-sun text-brand-navy px-10 py-5 rounded-[2rem] font-black shadow-xl hover:translate-y-[-4px] active:scale-95 transition-all"
                    >
                        {t("nav.physical_activity")}
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </section>
            </main>
        </div>
    );
}
