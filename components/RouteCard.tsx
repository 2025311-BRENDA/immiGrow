"use client";

import React, { useState, useEffect } from "react";
import { LucideIcon, Map, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface RouteCardProps {
    title: string;
    description: string;
    distance?: string;
    difficulty?: "Easy" | "Medium" | "Hard";
    icon: LucideIcon;
    href: string;
    slug?: string;
    mapUrl?: string;
    image?: string;
    colorClass?: string;
}

export function RouteCard({
    title,
    description,
    distance,
    difficulty,
    icon: Icon,
    href,
    slug,
    mapUrl,
    image,
    colorClass = "bg-white"
}: RouteCardProps) {
    const { t } = useLanguage();
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (!slug) return;
        const saved = localStorage.getItem("migrawell_completed");
        if (saved) {
            const completed = JSON.parse(saved);
            if (completed.includes(slug)) {
                setIsCompleted(true);
            }
        }
    }, [slug]);

    const toggleComplete = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!slug) return;

        const saved = localStorage.getItem("migrawell_completed");
        let completed = saved ? JSON.parse(saved) : [];

        if (isCompleted) {
            completed = completed.filter((s: string) => s !== slug);
        } else {
            completed.push(slug);
        }

        localStorage.setItem("migrawell_completed", JSON.stringify(completed));
        setIsCompleted(!isCompleted);
    };

    return (
        <div className="flex flex-col h-full group relative">
            <Link
                href={href}
                className={`relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 flex-1 flex flex-col ${colorClass}`}
            >
                {image ? (
                    <div className="h-40 w-full relative overflow-hidden">
                        <img src={image} alt={title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                        <div className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                            <Icon className="w-4 h-4 text-brand-turquoise" />
                        </div>
                    </div>
                ) : (
                    <div className="flex items-start justify-between mb-4 p-6 pb-0">
                        <div className="p-3 bg-brand-sand/50 rounded-lg group-hover:bg-brand-sand transition-colors">
                            <Icon className="w-6 h-6 text-brand-turquoise" />
                        </div>
                    </div>
                )}

                <div className="p-6 pt-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl font-heading font-bold text-brand-navy group-hover:text-brand-turquoise transition-colors leading-tight">
                            {title}
                        </h3>
                        <div className="flex shrink-0 gap-2">
                            {slug && (
                                <button
                                    onClick={toggleComplete}
                                    className={`p-1.5 rounded-lg transition-colors z-20 ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-slate-50 text-slate-300 hover:text-green-500'}`}
                                    title={isCompleted ? t("lbl.completed") : t("lbl.completeRoute")}
                                >
                                    <CheckCircle2 className="w-4 h-4" />
                                </button>
                            )}
                            {difficulty && (
                                <span className={`text-[10px] h-fit font-bold uppercase tracking-wider px-2 py-1 rounded-md ${difficulty === "Easy" ? "bg-green-100 text-green-700" :
                                    difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                                        "bg-red-100 text-red-700"
                                    }`}>
                                    {t(`diff.${difficulty.toLowerCase()}`)}
                                </span>
                            )}
                        </div>
                    </div>
                    <p className="text-slate-600 mb-4 text-sm line-clamp-2">
                        {description}
                    </p>

                    {distance && (
                        <div className="flex items-center text-sm text-slate-500 font-medium mt-auto">
                            <span>{distance}</span>
                        </div>
                    )}
                </div>
            </Link>

            {mapUrl && (
                <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 p-3 bg-white border border-slate-100 rounded-xl text-brand-turquoise text-sm font-bold shadow-sm hover:bg-brand-sand transition-all active:scale-95"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Map className="w-4 h-4" />
                    Navegar / Mapa
                </a>
            )}
        </div>
    );
}
