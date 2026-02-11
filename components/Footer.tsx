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
                            {language === "en" ? "Legal & Responsibility" : language === "es" ? "Legal y Responsabilidad" : "Legal e Responsabilidade"}
                        </h4>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-relaxed italic max-w-2xl mx-auto">
                        {language === "en"
                            ? "immiGrow is a purely informative platform. We do not provide legal or medical advice. The responsibility for any interaction, agreement, or meeting resulting from the use of this application rests exclusively with the user."
                            : language === "es"
                                ? "immiGrow es una plataforma puramente informativa. No proporcionamos asesoría legal ni médica. La responsabilidad de cualquier interacción, acuerdo o encuentro resultante del uso de esta aplicación recae exclusivamente en el usuario."
                                : "O immiGrow é uma plataforma puramente informativa. Não fornecemos aconselhamento jurídico ou médico. A responsabilidade por qualquer interação, acordo ou encontro decorrente do uso deste aplicativo cabe exclusivamente ao usuário."}
                    </p>
                </div>

                <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    <span>&copy; {new Date().getFullYear()} immiGrow Dublin</span>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-brand-teal transition-colors">{language === "en" ? "Privacy" : language === "es" ? "Privacidad" : "Privacidade"}</Link>
                        <Link href="/privacy#terms" className="hover:text-brand-teal transition-colors">{language === "en" ? "Terms" : language === "es" ? "Términos" : "Termos"}</Link>
                        <Link href="/contact" className="hover:text-brand-teal transition-colors">{language === "en" ? "Contact" : language === "es" ? "Contacto" : "Contato"}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
