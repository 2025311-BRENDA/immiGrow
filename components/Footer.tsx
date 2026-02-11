"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Shield } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const { language, t } = useLanguage();

    return (
        <footer className="bg-white border-t border-slate-100 py-12 px-6 mt-12 mb-20 md:mb-0">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/iGrow-logo.jpg" alt="immiGrow" className="w-6 h-6 rounded-md object-cover" />
                            <span className="font-heading font-black text-xl text-brand-navy">immiGrow</span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            {language === "en"
                                ? "The wellness guide for migrants in Dublin. Health, activity, and community."
                                : "La guía de bienestar para migrantes en Dublín. Salud, actividad y comunidad."}
                        </p>
                    </div>

                    <div className="flex-1 max-w-lg">
                        <div className="flex items-center gap-2 text-brand-sun mb-3">
                            <Shield className="w-4 h-4" />
                            <h4 className="text-xs font-black uppercase tracking-widest">
                                {language === "en" ? "Legal Disclaimer" : "Aviso Legal"}
                            </h4>
                        </div>
                        <p className="text-[10px] text-slate-400 leading-relaxed italic">
                            {language === "en"
                                ? "immiGrow is a purely informative platform. We do not provide legal or medical advice. The responsibility for any interaction, agreement, or meeting resulting from the use of this application rests exclusively with the user. immiGrow is not liable for any incidents, damages, or losses arising from such interactions."
                                : "immiGrow es una plataforma puramente informativa. No proporcionamos asesoría legal ni médica. La responsabilidad de cualquier interacción, acuerdo o encuentro resultante del uso de esta aplicación recae exclusivamente en el usuario. immiGrow no se hace responsable de incidentes, daños o pérdidas derivados de dichas interacciones."}
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    <span>&copy; {new Date().getFullYear()} immiGrow Dublin</span>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-brand-teal transition-colors">Privacy</Link>
                        <a href="#" className="hover:text-brand-teal transition-colors">Terms</a>
                        <Link href="/contact" className="hover:text-brand-teal transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
