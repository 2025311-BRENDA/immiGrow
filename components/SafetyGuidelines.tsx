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
        <div className="bg-brand-navy/5 border-2 border-brand-teal/20 rounded-[2rem] p-6 mb-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-brand-teal text-white rounded-xl">
                    <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">
                    {language === "en" ? "Safety & Trust" : "Seguridad y Confianza"}
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guidelines.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white/50 rounded-2xl border border-white">
                        <div className="shrink-0 p-2 bg-brand-teal/10 text-brand-teal rounded-lg w-fit h-fit">
                            <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-brand-navy mb-1">{item.title}</h4>
                            <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-start gap-2 p-3 bg-brand-sun/10 rounded-xl border border-brand-sun/20">
                <Info className="w-4 h-4 text-brand-sun shrink-0 mt-0.5" />
                <p className="text-[10px] text-brand-navy/70 leading-relaxed italic">
                    {language === "en"
                        ? "immiGrow is an information platform. Personal interactions are the responsibility of each user."
                        : language === "es"
                            ? "immiGrow es una plataforma informativa. Las interacciones personales son responsabilidad de cada usuario."
                            : "immiGrow é uma plataforma de informação. As interações pessoais são de responsabilidade de cada usuário."}
                </p>
            </div>
        </div>
    );
}
