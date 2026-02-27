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

                <div className="pt-8 mb-8 flex items-center justify-center">
                    <a
                        href="https://wa.me/353833320940"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-teal text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-brand-teal/20 hover:scale-105 transition-transform flex items-center gap-3"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.442.159-.171.347-.214.462-.214.116 0 .231.002.332.006.106.004.25-.039.391.299.144.348.491 1.2.535 1.288.043.089.072.191.014.305-.058.114-.087.19-.173.29-.087.1-.181.222-.26.302-.087.087-.179.182-.077.357.101.174.451.745.966 1.204.663.591 1.22.776 1.393.864.174.088.275.073.376-.044.101-.117.433-.505.549-.679.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.413-.1.819z" />
                        </svg>
                        WhatsApp
                    </a>
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
