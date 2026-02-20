"use client";

import React, { useState } from "react";
import { Share2, Copy, Check, MessageCircle, Instagram, Facebook, ChevronLeft } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";

export default function OutreachKitPage() {
    const { t } = useLanguage();
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const shareMessages = [
        {
            lang: "Español 🇪🇸",
            title: "Mensaje para WhatsApp",
            content: `¡Hola a todos! 👋 ¿Eres nuevo en Dublín o quieres ayudar a alguien que acaba de llegar? He estado usando immiGrow ☘️ y es una maravilla para los inmigrantes. Tiene guías de salud, rutas de natación, foros y un espacio para tus documentos. Es gratuita y súper útil. Échale un ojo aquí: https://immigrow.ie`
        },
        {
            lang: "Português 🇧🇷",
            title: "Mensagem para WhatsApp",
            content: `Olá pessoal! 👋 Você é novo em Dublin ou conhece alguém que acabou de chegar? Comecei a usar o immiGrow ☘️ e é incrível para imigrantes. Tem guias de saúde, rotas de natação, fóruns e um espaço para seus documentos. É gratuito e muito prático. Confira aqui: https://immigrow.ie`
        },
        {
            lang: "English 🇬🇧",
            title: "WhatsApp Message",
            content: `Hi everyone! 👋 Are you new to Dublin or want to help someone who just arrived? I've been using immiGrow ☘️ and it's a game-changer for migrants. It includes health care guides, swimming routes, forums, and a vault for your documents. It's free and extremely helpful. Check it out: https://immigrow.ie`
        }
    ];

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="min-h-screen bg-brand-sand pb-32">
            <header className="bg-brand-navy text-white py-16 px-6 rounded-b-[3.5rem] relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="container mx-auto max-w-3xl relative z-10">
                    <BackButton />
                    <div className="flex items-center gap-3 mb-4">
                        <Share2 className="w-5 h-5 text-brand-sun" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                            Outreach Kit
                        </span>
                    </div>
                    <h1 className="text-4xl font-black mb-4">Ayúdanos a crecer ☘️</h1>
                    <p className="text-white/80 text-lg leading-relaxed">
                        Copia y pega estos mensajes en tus grupos de WhatsApp o redes sociales para ayudar a otros inmigrantes en Dublín.
                    </p>
                </div>
            </header>

            <main className="container mx-auto max-w-3xl px-6 -mt-8 relative z-20 space-y-6">
                {shareMessages.map((msg, index) => (
                    <div key={index} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-irish-green">{msg.lang}</span>
                                <h2 className="text-xl font-bold text-brand-navy">{msg.title}</h2>
                            </div>
                            <button
                                onClick={() => handleCopy(msg.content, index)}
                                className={`p-3 rounded-xl transition-all ${copiedIndex === index ? 'bg-brand-irish-green text-white' : 'bg-slate-50 text-slate-400 hover:bg-brand-sun hover:text-brand-navy'}`}
                            >
                                {copiedIndex === index ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </button>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-6 text-sm text-slate-600 italic leading-relaxed border border-slate-100">
                            "{msg.content}"
                        </div>
                    </div>
                ))}

                <div className="bg-brand-sun/10 border-2 border-brand-sun/20 rounded-[2.5rem] p-8">
                    <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <Instagram className="w-5 h-5" /> Redes Sociales
                    </h3>
                    <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                        "Mudarse a un nuevo país es un viaje, y no tienes que caminarlo solo. ☘️ immiGrow está aquí para ayudarte a navegar por Dublín con confianza. #immiGrow #NewToDublin"
                    </p>
                    <button
                        onClick={() => handleCopy("Mudarse a un nuevo país es un viaje, y no tienes que caminarlo solo. ☘️ immiGrow está aquí para ayudarte a navegar por Dublín con confianza. #immiGrow #NewToDublin", 99)}
                        className="flex items-center gap-2 text-brand-navy font-bold text-sm bg-brand-sun px-4 py-2 rounded-xl"
                    >
                        {copiedIndex === 99 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        Copiar Caption
                    </button>
                </div>
            </main>
        </div>
    );
}
