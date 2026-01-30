"use client";

import React, { useState } from "react";
import { AlertCircle, Phone, X, LifeBuoy, MapPin, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SOSButton() {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const emergencyNumbers = [
        { label: language === "en" ? "Emergency Services" : "Servicios de Emergencia", number: "999 / 112" },
        { label: language === "en" ? "Gardai (Police)" : "Gardaí (Policía)", number: "999" },
        { label: language === "en" ? "Medical Emergency" : "Emergencia Médica", number: "999" },
    ];

    const phrases = [
        { en: "I need help", es: "Necesito ayuda" },
        { en: "Where is the nearest hospital?", es: "¿Dónde está el hospital más cercano?" },
        { en: "I have an emergency", es: "Tengo una emergencia" },
        { en: "Call an ambulance", es: "Llame a una ambulancia" },
    ];

    return (
        <>
            {/* Floating SOS Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-6 z-[100] w-16 h-16 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-red-700 transition-all active:scale-95 animate-bounce group"
            >
                <AlertCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-2 -right-2 bg-white text-red-600 px-2 py-0.5 rounded-full text-[10px] font-black border border-red-100 shadow-sm uppercase">SOS</span>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
                    <div
                        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="bg-white w-full max-w-md rounded-[3rem] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="bg-red-600 p-8 text-white relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/20 rounded-2xl">
                                    <LifeBuoy className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black">{language === "en" ? "Emergency Help" : "Ayuda de Emergencia"}</h3>
                                    <p className="text-white/80 text-sm">{language === "en" ? "Get help instantly." : "Obtén ayuda al instante."}</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-8">
                            {/* Numbers */}
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                                    {language === "en" ? "Numbers to Call" : "Números para Llamar"}
                                </h4>
                                <div className="space-y-3">
                                    {emergencyNumbers.map((num) => (
                                        <a
                                            key={num.label}
                                            href={`tel:${num.number}`}
                                            className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100 group hover:bg-red-100 transition-colors"
                                        >
                                            <div>
                                                <p className="text-[10px] font-bold text-red-400 uppercase">{num.label}</p>
                                                <p className="text-xl font-black text-red-600">{num.number}</p>
                                            </div>
                                            <div className="p-3 bg-white rounded-xl text-red-600 shadow-sm group-hover:scale-110 transition-transform">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Key Phrases */}
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                                    {language === "en" ? "Key Phrases (Translator)" : "Frases Clave (Traductor)"}
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    {phrases.map((phrase) => (
                                        <div key={phrase.en} className="p-3 bg-slate-50 rounded-xl flex justify-between items-center group">
                                            <span className="text-sm font-bold text-brand-navy">{language === "en" ? phrase.es : phrase.en}</span>
                                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-turquoise transition-colors" />
                                            <span className="text-sm font-black text-brand-turquoise">{language === "en" ? phrase.en : phrase.es}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 bg-slate-100 text-slate-500 font-black rounded-2xl hover:bg-slate-200 transition-colors uppercase text-xs tracking-widest"
                            >
                                {language === "en" ? "Close" : "Cerrar"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function ChevronRight(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
