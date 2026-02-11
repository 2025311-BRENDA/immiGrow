"use client";

import React from "react";
import { Calendar, Clock, MapPin, Users, Ticket, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { events } from "@/lib/data";
import { eventsEs } from "@/lib/data_es";

export function EventCalendar() {
    const { language, t } = useLanguage();

    const data = language === "en" ? events : eventsEs;

    // Add a welcome event at the top
    const welcomeEvent = {
        id: 'welcome',
        title: language === 'en' ? "Welcome to immiGrow!" : "¡Bienvenidos a immiGrow!",
        date: "14 Feb",
        time: "10:00 AM",
        location: "Phoenix Park / Global",
        description: language === 'en'
            ? "Thank you for joining our community. We are excited to help you grow in Dublin!"
            : "Gracias por unirte a nuestra comunidad. ¡Estaros emocionados de ayudarte a crecer en Dublín!",
        category: "Social",
        free: true
    };

    const displayData = [welcomeEvent, ...data];

    return (
        <section className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-brand-pink/5 rounded-full -ml-8 -mt-8" />

            <div className="flex justify-between items-center mb-6 relative z-10">
                <div>
                    <h3 className="text-xl font-black text-brand-navy">
                        {t("event.title")}
                    </h3>
                    <p className="text-slate-500 text-[10px] mt-0.5">
                        {t("event.subtitle")}
                    </p>
                </div>
                <div className="p-2 bg-brand-pink/10 rounded-xl">
                    <Calendar className="w-5 h-5 text-brand-pink" />
                </div>
            </div>

            <div className="space-y-3 relative z-10">
                {displayData.map((event) => (
                    <div
                        key={event.id}
                        className="group flex flex-col md:flex-row gap-4 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-brand-pink/20 hover:bg-white hover:shadow-lg transition-all"
                    >
                        {/* Date Tag */}
                        <div className="shrink-0 flex md:flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 min-w-[80px]">
                            <span className="text-brand-pink font-black text-lg leading-tight">{event.date.split(' ')[0]}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{event.date.split(' ').slice(1).join(' ')}</span>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider ${event.category === 'Social' ? 'bg-blue-100 text-blue-600' :
                                    event.category === 'Culture' ? 'bg-orange-100 text-orange-600' :
                                        'bg-purple-100 text-purple-600'
                                    }`}>
                                    {event.category}
                                </span>
                                <div className="flex items-center gap-1 text-[8px] text-slate-400 font-bold">
                                    <Clock className="w-2.5 h-2.5" />
                                    {event.time}
                                </div>
                            </div>

                            <h4 className="font-bold text-sm text-brand-navy group-hover:text-brand-pink transition-colors leading-tight">{event.title}</h4>
                            <p className="text-[10px] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                                {event.description}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-3">
                                <div className="flex items-center gap-1.5 text-[8px] font-bold text-slate-400">
                                    <MapPin className="w-2.5 h-2.5 text-brand-pink" />
                                    {event.location}
                                </div>
                                <div className="flex items-center gap-1.5 text-[8px] font-bold text-brand-turquoise uppercase tracking-widest">
                                    <Ticket className="w-2.5 h-2.5" />
                                    {t("event.free")}
                                </div>
                            </div>
                        </div>

                        <button className="self-center p-3 bg-brand-navy text-white rounded-xl hover:bg-brand-pink transition-colors shadow-md group-hover:scale-105 transition-all">
                            <Heart className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-center">
                <button className="text-[10px] font-black text-slate-400 hover:text-brand-navy transition-colors uppercase tracking-[0.2em]">
                    {t("event.viewFull")}
                </button>
            </div>
        </section>
    );
}
