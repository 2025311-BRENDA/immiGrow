"use client";

import { use } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { exerciseGeneral } from "@/lib/data";
import { exerciseGeneralEs } from "@/lib/data_es";
import { ChevronLeft, Map, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExerciseDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { language, t } = useLanguage();

    // Find the item in the data
    const data = language === "en" ? exerciseGeneral : exerciseGeneralEs;
    const item = data.find((i) => i.slug === slug);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-sand">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-brand-navy mb-4">404</h1>
                    <p className="text-slate-600 mb-8">Item not found.</p>
                    <Link href="/exercise" className="text-brand-teal font-bold hover:underline">
                        Go back to Exercise
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-sand pb-20">
            {/* Header / Nav */}
            <div className="bg-white border-b sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link
                        href="/exercise"
                        className="flex items-center text-brand-teal font-bold hover:text-brand-teal/80 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        {t("lbl.backTo")} Exercise
                    </Link>
                </div>
            </div>

            <main className="container mx-auto max-w-3xl px-4 py-8">
                {/* Hero / Cover Emoji or similar? Using Icon for now */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 mb-8 overflow-hidden relative">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-brand-sand/50 rounded-2xl">
                            <item.icon className="w-8 h-8 text-brand-teal" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-heading font-bold text-brand-navy">
                                {item.title}
                            </h1>
                            <div className="flex gap-2 mt-1">
                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${item.difficulty === "Easy" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                                    {item.difficulty}
                                </span>
                                {item.distance && (
                                    <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                                        {item.distance}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-slate-600 mb-8 italic">
                        "{item.description}"
                    </p>

                    <div className="max-w-none text-slate-700 leading-relaxed">
                        {item.content ? (
                            <div className="space-y-6">
                                {item.content.split("\n").map((line, index) => {
                                    const trimmed = line.trim();
                                    if (!trimmed) return <div key={index} className="h-4" />;

                                    // Helper to parse inline markdown (Bold and Links)
                                    const parseInline = (text: string) => {
                                        return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).map((part, i) => {
                                            if (part.startsWith("[") && part.includes("](")) {
                                                const label = part.match(/\[([^\]]+)\]/)?.[1];
                                                const url = part.match(/\(([^)]+)\)/)?.[1];
                                                return <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="font-bold underline text-brand-teal hover:text-brand-navy transition-colors">{label}</a>;
                                            }
                                            if (part.startsWith("**") && part.endsWith("**")) {
                                                return <strong key={i} className="font-bold text-brand-navy">{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        });
                                    };

                                    // H1 Rendering
                                    if (trimmed.startsWith("# ")) {
                                        return (
                                            <h2 key={index} className="text-2xl font-heading font-black text-brand-navy pt-6 pb-2 border-b-4 border-brand-sand w-max max-w-full">
                                                {parseInline(trimmed.replace("# ", ""))}
                                            </h2>
                                        );
                                    }

                                    // H2 Rendering
                                    if (trimmed.startsWith("## ")) {
                                        return (
                                            <h3 className="text-xl font-black pt-8 mb-3 flex items-center gap-3 text-brand-teal">
                                                <div className="w-2 h-8 rounded-full bg-brand-teal"></div>
                                                {parseInline(trimmed.replace("## ", ""))}
                                            </h3>
                                        );
                                    }

                                    // List Item Rendering (Beautiful Cards)
                                    if (trimmed.startsWith("- ")) {
                                        const cleanLine = trimmed.replace("- ", "");
                                        return (
                                            <div key={index} className="flex gap-4 p-5 bg-brand-sand/10 rounded-[1.5rem] border border-brand-sand/20 hover:bg-white hover:shadow-md transition-all group">
                                                <div className="mt-1">
                                                    <div className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    </div>
                                                </div>
                                                <div className="flex-1 text-slate-700">
                                                    {parseInline(cleanLine)}
                                                </div>
                                            </div>
                                        );
                                    }

                                    // Regular Paragraph
                                    return (
                                        <p key={index} className="text-lg text-slate-600 leading-relaxed">
                                            {parseInline(trimmed)}
                                        </p>
                                    );
                                })}
                            </div>
                        ) : (
                            <p className="text-slate-400 italic">No additional details available for this item yet.</p>
                        )}
                    </div>

                    {item.mapUrl && (
                        <div className="mt-12 p-6 bg-brand-teal/10 rounded-3xl border-2 border-brand-teal/5">
                            <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                                <Map className="w-6 h-6 text-brand-teal" />
                                {t("lbl.gettingThere")}
                            </h3>
                            <p className="text-slate-600 mb-6">
                                {language === "en"
                                    ? "Open this location in Google Maps to start your navigation."
                                    : "Abre esta ubicación en Google Maps para comenzar tu navegación."}
                            </p>
                            <a
                                href={item.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all w-full justify-center lg:w-auto"
                            >
                                <Map className="w-5 h-5" />
                                {language === "en" ? "Open Maps" : "Abrir Mapas"}
                            </a>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
