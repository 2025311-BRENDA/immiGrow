"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { roadmapData } from "@/lib/data";
import { roadmapDataEs } from "@/lib/data_es";

export function Roadmap() {
    const { language } = useLanguage();
    const [completed, setCompleted] = useState<string[]>([]);

    const data = language === "en" ? roadmapData : roadmapDataEs;

    useEffect(() => {
        const saved = localStorage.getItem("migrawell_completed");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Validate IDs against current data to prevent "ghost" progress
                // This fixes the issue where progress shows > 0% but no items are checked due to old IDs
                const validIds = data.map(i => i.id);
                const validCompleted = parsed.filter((id: string) => validIds.includes(id));

                setCompleted(validCompleted);

                // Update storage if we found invalid items to clean up state
                if (validCompleted.length !== parsed.length) {
                    localStorage.setItem("migrawell_completed", JSON.stringify(validCompleted));
                    window.dispatchEvent(new Event("roadmapUpdated"));
                }
            } catch (e) {
                console.error("Failed to load roadmap progress");
            }
        }
    }, [data]);

    const toggleItem = (id: string) => {
        const newCompleted = completed.includes(id)
            ? completed.filter(i => i !== id)
            : [...completed, id];
        setCompleted(newCompleted);
        localStorage.setItem("migrawell_completed", JSON.stringify(newCompleted));

        // Dispatch custom event to notify other components (like the hero progress)
        window.dispatchEvent(new Event("roadmapUpdated"));
    };

    const progress = Math.round((completed.length / data.length) * 100);

    return (
        <section className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 overflow-hidden relative group/roadmap">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-irish-green/5 rounded-full -mr-8 -mt-8 group-hover/roadmap:bg-brand-irish-green/10 transition-colors" />

            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-xl font-black text-brand-navy">
                        {language === "en" ? "Newcomer Roadmap" : "Hoja de Ruta"}
                    </h3>
                    <p className="text-slate-500 text-[10px] mt-0.5 font-bold uppercase tracking-widest">
                        {language === "en" ? "Essential steps for your first weeks" : "Pasos esenciales para tus primeras semanas"}
                    </p>
                </div>
                <div className="text-right">
                    <span className="text-xl font-black text-brand-irish-green">{progress}%</span>
                </div>
            </div>

            <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden p-0.5 shadow-inner">
                <div
                    className="bg-brand-irish-green h-full rounded-full transition-all duration-700 ease-out shadow-sm"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.map((item) => {
                    const isDone = completed.includes(item.id);
                    return (
                        <div
                            key={item.id}
                            onClick={() => toggleItem(item.id)}
                            className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all border ${isDone
                                ? "bg-brand-irish-green/5 border-brand-irish-green/20"
                                : "bg-slate-50 border-transparent hover:bg-slate-100 hover:scale-[1.02]"
                                }`}
                        >
                            <div className={`p-2 rounded-xl shrink-0 transition-all ${isDone ? "bg-brand-irish-green text-white scale-110" : "bg-white text-slate-400 shadow-sm"
                                }`}>
                                <item.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`font-bold text-xs truncate transition-all ${isDone ? "text-slate-400 line-through decoration-brand-irish-green decoration-2" : "text-brand-navy"}`}>
                                    {item.title}
                                </h4>
                            </div>
                            <div className="shrink-0">
                                {isDone ? (
                                    <CheckCircle2 className="w-5 h-5 text-brand-irish-green animate-in zoom-in duration-300" />
                                ) : (
                                    <Circle className="w-5 h-5 text-slate-200 group-hover:text-slate-300 transition-colors" />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
