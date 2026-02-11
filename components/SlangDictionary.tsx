"use client";

import React from "react";
import { MessageSquare, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { dublinSlang } from "@/lib/data";
import { dublinSlangEs } from "@/lib/data_es";
import { dublinSlangPt } from "@/lib/data_pt";

export function SlangDictionary() {
    const { language } = useLanguage();
    const data = language === "en" ? dublinSlang : language === "es" ? dublinSlangEs : dublinSlangPt;

    return (
        <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-purple/20 rounded-2xl text-brand-purple">
                    <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-brand-navy">
                        {language === "en" ? "Speak like a Local" : language === "es" ? "Habla como un local" : "Fale como um Local"}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                        {language === "en" ? "Common Dublin phrases and what they actually mean." : language === "es" ? "Frases comunes de Dublín y lo que realmente significan." : "Frases comuns de Dublin e o que elas realmente significam."}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
                    >
                        <div className="mb-4 text-brand-purple opacity-40 group-hover:opacity-100 transition-opacity">
                            <Quote className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-black text-brand-navy mb-2 group-hover:text-brand-purple transition-colors">
                            {item.phrase}
                        </h4>
                        <p className="text-sm font-bold text-slate-700 mb-4 bg-white/50 px-3 py-1 rounded-lg w-fit">
                            {item.meaning}
                        </p>
                        <p className="text-xs text-slate-500 italic mt-auto border-l-2 border-brand-purple/20 pl-3">
                            "{item.usage}"
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-10 p-6 bg-brand-purple text-white rounded-[2rem] shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl" />
                <h5 className="font-bold mb-2 flex items-center gap-2">
                    <span className="text-xl">🍀</span>
                    {language === "en" ? "Pro Tip" : language === "es" ? "Consejo Pro" : "Dica Pro"}
                </h5>
                <p className="text-sm text-white/80 leading-relaxed font-medium">
                    {language === "en"
                        ? "Irish English is very rhythmic. Don't worry about being perfect; just aim for the vibe. Using 'Grand' for everything is a great start!"
                        : language === "es"
                            ? "El inglés de Irlanda es muy rítmico. No te preocupes por ser perfecta; intenta captar la vibra. ¡Usar 'Grand' para todo es un excelente comienzo!"
                            : "O inglês irlandês é muito rítmico. Não se preocupe em ser perfeito; apenas procure sentir a 'vibe'. Usar 'Grand' para tudo é um ótimo começo!"}
                </p>
            </div>
        </section>
    );
}
