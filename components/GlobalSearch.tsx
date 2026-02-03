"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Tag, X, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
    parks, swimming, cycling, tourism, procedures, popularKeywords
} from "@/lib/data";
import {
    parksEs, swimmingEs, cyclingEs, tourismEs, proceduresEs, popularKeywordsEs
} from "@/lib/data_es";
import { cn } from "@/lib/utils";

export function GlobalSearch() {
    const { language, t } = useLanguage();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const keywords = language === "en" ? popularKeywords : popularKeywordsEs;
    const allContent = language === "en"
        ? [
            ...parks.map(p => ({ ...p, type: "exercise/parks" })),
            ...swimming.map(s => ({ ...s, type: "exercise/swimming" })),
            ...cycling.map(c => ({ ...c, type: "exercise/cycling" })),
            ...tourism.map(t => ({ ...t, type: "tourism" })),
            ...procedures.map(p => ({ ...p, type: "procedures" }))
        ]
        : [
            ...parksEs.map(p => ({ ...p, type: "exercise/parks" })),
            ...swimmingEs.map(s => ({ ...s, type: "exercise/swimming" })),
            ...cyclingEs.map(c => ({ ...c, type: "exercise/cycling" })),
            ...tourismEs.map(t => ({ ...t, type: "tourism" })),
            ...proceduresEs.map(p => ({ ...p, type: "procedures" }))
        ];

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchResults([]);
            return;
        }
        const filtered = allContent.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.content && item.content.toLowerCase().includes(searchQuery.toLowerCase()))
        ).slice(0, 6);
        setSearchResults(filtered);
    }, [searchQuery, language]);

    // Handle clicking outside to collapse
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleKeywordClick = (query: string) => {
        setSearchQuery(query);
        setIsExpanded(true);
    };

    return (
        <section className="relative z-30" ref={searchRef}>
            <div className={cn(
                "bg-white rounded-full shadow-2xl border border-slate-100 transition-all duration-300 overflow-hidden",
                isExpanded ? "ring-8 ring-brand-turquoise/10" : "hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            )}>
                {/* Search Input Area */}
                <div className="p-4 flex items-center gap-4">
                    <div className={cn(
                        "p-3 rounded-full transition-colors",
                        isExpanded ? "bg-brand-turquoise text-white" : "bg-slate-50 text-slate-400"
                    )}>
                        <Search className="w-6 h-6" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onFocus={() => setIsExpanded(true)}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search Dublin resources..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-lg font-bold text-brand-navy placeholder:text-slate-300"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSearchResults([]);
                            }}
                            className="p-2 text-slate-400 hover:text-brand-navy transition-colors mr-2"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* Popular Keywords / Results Area */}
                <div className={cn(
                    "transition-all duration-300 ease-in-out px-4 overflow-hidden",
                    isExpanded ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
                )}>
                    {/* Tags Section */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3 px-1">
                            <Tag className="w-3 h-3 text-brand-turquoise" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                {t("search.popular")}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {keywords.map((kw) => (
                                <button
                                    key={kw.query}
                                    onClick={() => handleKeywordClick(kw.query)}
                                    className={cn(
                                        "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
                                        searchQuery.toLowerCase() === kw.query.toLowerCase()
                                            ? "bg-brand-turquoise text-white border-brand-turquoise shadow-md scale-105"
                                            : "bg-slate-50 text-slate-600 border-slate-100 hover:border-brand-turquoise/30 hover:bg-white"
                                    )}
                                >
                                    {kw.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Section */}
                    {searchResults.length > 0 ? (
                        <div className="space-y-2 pt-4 border-t border-slate-50">
                            <div className="flex items-center justify-between px-1 mb-3">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    {t("search.results")}
                                </span>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                {searchResults.map((result) => (
                                    <Link
                                        key={result.slug}
                                        href={`/${result.type}/${result.slug}`}
                                        className="flex items-center justify-between p-4 rounded-3xl bg-slate-50 hover:bg-brand-irish-green/5 group transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white rounded-2xl shadow-sm text-brand-turquoise group-hover:scale-110 transition-transform">
                                                <result.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h5 className="text-sm font-black text-brand-navy leading-none mb-1 group-hover:text-brand-turquoise transition-colors">
                                                    {result.title}
                                                </h5>
                                                <p className="text-[10px] text-slate-400 font-medium line-clamp-1">
                                                    {result.description}
                                                </p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-irish-green group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : searchQuery && (
                        <div className="text-center py-8">
                            <p className="text-sm font-bold text-slate-400">
                                {t("search.noResults")}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
