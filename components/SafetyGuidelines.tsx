"use client";

import React from "react";
import { ShieldAlert, MapPin, Users, Share2, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SafetyGuidelines() {
    const { language, t } = useLanguage();

    const guidelines = [
        {
            icon: MapPin,
            title: language === "en" ? "Public Places" : language === "es" ? "Lugares Públicos" : "Locais Públicos",
            desc: language === "en"
                ? "Always meet in busy, well-lit public areas like cafes or main parks."
                : language === "es"
                    ? "Queda siempre en lugares concurridos y bien iluminados, como cafés o parques principales."
                    : "Sempre se encontre em áreas públicas movimentadas e bem iluminadas, como cafés ou parques principais."
        },
        {
            icon: Users,
            title: language === "en" ? "Inform Someone" : language === "es" ? "Avisa a Terceros" : "Informe Alguém",
            desc: language === "en"
                ? "Let a friend or family member know where you are going and who you are meeting."
                : language === "es"
                    ? "Informa a un amigo o familiar sobre a dónde vas y con quién te vas a encontrar."
                    : "Avise um amigo ou familiar sobre para onde você está indo e com quem vai se encontrar."
        },
        {
            icon: ShieldAlert,
            title: language === "en" ? "Protect Privacy" : language === "es" ? "Cuida tu Privacidad" : "Proteja sua Privacidade",
            desc: language === "en"
                ? "Don't share sensitive details like your bank account or home address immediately."
                : language === "es"
                    ? "No compartas datos sensibles como tu cuenta bancaria o dirección exacta de inmediato."
                    : "Não compartilhe detalhes confidenciais, como sua conta bancária ou endereço residencial, imediatamente."
        },
        {
            icon: Share2,
            title: language === "en" ? "Trust Your Instinct" : language === "es" ? "Confía en tu Instinto" : "Confie no seu Instinto",
            desc: language === "en"
                ? "If something feels wrong, it's okay to leave or cancel. Your safety comes first."
                : language === "es"
                    ? "Si algo no se siente bien, está bien irse o cancelar. Tu seguridad es lo primero."
                    : "Se algo parecer errado, tudo bem ir embora ou cancelar. Sua segurança vem em primeiro lugar."
        }
    ];

    return (
        <div className="bg-white/40 backdrop-blur-sm border-2 border-brand-teal/10 rounded-[2rem] p-4 mb-6 relative overflow-hidden shadow-sm">
            <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-brand-teal" />
                    <h3 className="text-[11px] font-black text-brand-navy uppercase tracking-widest">
                        {language === "en" ? "Safety" : "Seguridad"}
                    </h3>
                </div>
                <div className="text-[9px] text-brand-navy/40 font-bold max-w-[200px] leading-tight text-right italic">
                    {language === "en"
                        ? "immiGrow is informative. Stay safe!"
                        : language === "es"
                            ? "immiGrow es informativo. ¡Cuídate!"
                            : "immiGrow é informativo. Cuide-se!"}
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {guidelines.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 p-3 bg-white/60 rounded-xl border border-white hover:bg-white transition-all group">
                        <div className="flex items-center gap-2">
                            <item.icon className="w-3.5 h-3.5 text-brand-teal group-hover:scale-110 transition-transform" />
                            <h4 className="text-[9px] font-black text-brand-navy uppercase tracking-tighter">{item.title}</h4>
                        </div>
                        <p className="text-[9px] text-slate-500 leading-tight line-clamp-2">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
