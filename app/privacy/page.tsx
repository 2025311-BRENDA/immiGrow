"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { Shield, Lock, EyeOff, FileText } from "lucide-react";

export default function PrivacyPage() {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-brand-sand/30 pb-20">
            <header className="bg-brand-navy text-white py-16 px-6 rounded-b-[3.5rem] shadow-lg mb-12">
                <div className="container mx-auto max-w-4xl">
                    <BackButton />
                    <h1 className="text-4xl font-heading font-black mb-4 flex items-center gap-4">
                        <Shield className="w-10 h-10 text-brand-teal" />
                        {language === 'en' ? 'Privacy & Terms' : 'Privacidad y Términos'}
                    </h1>
                    <p className="text-brand-sand/80 text-lg font-medium leading-relaxed max-w-lg">
                        {language === 'en'
                            ? "Your trust is our priority. Learn how we handle your data."
                            : "Tu confianza es nuestra prioridad. Conoce cómo cuidamos tus datos."}
                    </p>
                </div>
            </header>

            <main className="container mx-auto max-w-4xl px-6 space-y-12">
                <section className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-2xl">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-brand-navy uppercase tracking-tight">
                            {language === 'en' ? 'Data Storage' : 'Almacenamiento'}
                        </h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        {language === 'en'
                            ? "immiGrow is designed with privacy in mind. Most of your personal data, such as your roadmap progress and documents in the Vault, are stored ONLY locally on your device's browser storage (LocalStorage)."
                            : "immiGrow está diseñada pensando en tu privacidad. La mayoría de tus datos personales, como el progreso de tu guía y los documentos del Vault, se guardan ÚNICAMENTE de forma local en el navegador de tu dispositivo (LocalStorage)."}
                    </p>
                    <div className="p-5 bg-brand-irish-green/5 border border-brand-irish-green/20 rounded-2xl flex gap-4 text-brand-irish-green text-sm font-medium italic">
                        <EyeOff className="w-5 h-5 shrink-0" />
                        <p>
                            {language === 'en'
                                ? "We do not have access to your private files or personal identifiers stored in the Vault."
                                : "Nosotros no tenemos acceso a tus archivos privados ni a los identificadores personales guardados en el Vault."}
                        </p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
                        <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-brand-sun" />
                            {language === 'en' ? 'Usage Statistics' : 'Estadísticas'}
                        </h3>
                        <p className="text-[13px] text-slate-500 leading-relaxed">
                            {language === 'en'
                                ? "We use anonymous analytics to understand how people use the guide and improve the content. This includes page views and button clicks, but never your identity."
                                : "Utilizamos analíticas anónimas para entender cómo se usa la guía y mejorar el contenido. Esto incluye vistas de página y clics, pero nunca tu identidad."}
                        </p>
                    </article>

                    <article className="bg-[#FAF9F6] p-8 rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col justify-center items-center text-center">
                        <p className="text-sm font-bold text-slate-400 mb-2">{language === 'en' ? 'Questions?' : '¿Dudas?'}</p>
                        <p className="text-[11px] text-slate-400 uppercase tracking-widest font-black">privacy@immigrow.ie</p>
                    </article>
                </section>

                <section id="terms" className="bg-brand-navy text-white p-10 rounded-[3rem] shadow-xl scroll-mt-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-brand-sun rounded-2xl text-brand-navy">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold uppercase tracking-tight">
                            {language === 'en' ? 'Terms of Use' : 'Términos de Uso'}
                        </h2>
                    </div>
                    <div className="space-y-6 text-brand-sand/70 leading-relaxed font-medium">
                        <p>1. {language === 'en' ? "immiGrow is an informational guide, not legal advice." : "immiGrow es una guía informativa, no asesoría legal."}</p>
                        <p>2. {language === 'en' ? "User interactions and community meets are at your own risk." : "Las interacciones y encuentros comunitarios son bajo su propio riesgo."}</p>
                        <p>3. {language === 'en' ? "Usage implies acceptance of these terms and safety guidelines." : "El uso implica la aceptación de estos términos y guías de seguridad."}</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
