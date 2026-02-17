"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { MessageCircle, Mail, MapPin, Calendar, Clock } from "lucide-react";

export default function ContactPage() {
    const { language, t } = useLanguage();

    const methods = [
        {
            icon: MessageCircle,
            title: "WhatsApp",
            value: "083 332 0940",
            href: "https://wa.me/353833320940",
            color: "bg-green-50 text-green-600"
        },
        {
            icon: Mail,
            title: "Email",
            value: "immigrow@outlook.com",
            href: "mailto:immigrow@outlook.com",
            color: "bg-blue-50 text-blue-600"
        }
    ];

    return (
        <div className="min-h-screen bg-brand-sand/50 pb-20">
            <header className="bg-brand-teal text-white py-16 px-6 rounded-b-[3.5rem] shadow-lg mb-12">
                <div className="container mx-auto max-w-4xl">
                    <BackButton />
                    <h1 className="text-4xl font-heading font-black mb-4">
                        {language === 'en' ? 'Get in Touch' : 'Contáctanos'}
                    </h1>
                    <p className="text-brand-sand/80 text-lg font-medium leading-relaxed max-w-lg">
                        {language === 'en'
                            ? "We're here to help your journey in Dublin. Reach out with questions or feedback!"
                            : "Estamos aquí para ayudarte en tu camino en Dublín. ¡Escríbenos con dudas o sugerencias!"}
                    </p>
                </div>
            </header>

            <main className="container mx-auto max-w-4xl px-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {methods.map((method, index) => (
                        <a
                            key={index}
                            href={method.href}
                            className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-xl hover:-translate-y-1 transition-all group"
                        >
                            <div className={`p-5 rounded-2xl ${method.color} group-hover:scale-110 transition-transform`}>
                                <method.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-black text-brand-navy uppercase text-[10px] tracking-widest mb-1 opacity-40">
                                    {method.title}
                                </h3>
                                <p className="text-xl font-bold text-brand-navy">{method.value}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-brand-navy mb-8 flex items-center gap-3">
                        <Clock className="w-6 h-6 text-brand-sun" />
                        {language === 'en' ? 'Response Time' : 'Tiempo de Respuesta'}
                    </h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-1.5 h-12 bg-brand-sun rounded-full" />
                            <div>
                                <p className="text-sm font-bold text-brand-navy mb-1 uppercase tracking-wider">
                                    {language === 'en' ? 'Support Hours' : 'Horario de Apoyo'}
                                </p>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {language === 'en'
                                        ? "Monday - Friday: 9:00 AM - 6:00 PM (Irish Time)"
                                        : "Lunes - Viernes: 9:00 AM - 6:00 PM (Hora de Irlanda)"}
                                </p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 font-medium italic">
                            {language === 'en'
                                ? "* We usually reply within 24 hours."
                                : "* Normalmente respondemos en menos de 24 horas."}
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
