"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Shield } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const { language, t } = useLanguage();

    return (
        <footer className="bg-white border-t border-slate-100 py-16 px-6 mt-12 mb-20 md:mb-0">
            <div className="container mx-auto max-w-4xl text-center">
                {/* Simplified Disclaimer Area */}
                <div className="mb-12">
                    <div className="flex items-center justify-center gap-2 text-brand-sun mb-4">
                        <Shield className="w-4 h-4" />
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em]">
                            {t("legal.title")}
                        </h4>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-relaxed italic max-w-2xl mx-auto">
                        {t("legal.disclaimer")}
                    </p>
                </div>

                <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    <span>&copy; {new Date().getFullYear()} immiGrow Dublin</span>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-brand-teal transition-colors">{t("legal.privacy")}</Link>
                        <Link href="/privacy#terms" className="hover:text-brand-teal transition-colors">{t("legal.terms")}</Link>
                        <Link href="/contact" className="hover:text-brand-teal transition-colors">{t("legal.contact")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
