'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Plus, X, Calendar as CalendarIcon, MapPin, Users as UsersIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const INITIAL_EVENTS = [
    {
        id: 4,
        title: 'English/Spanish Exchange',
        date: '19:00',
        frequency: 'Every THURSDAY',
        location: 'The Mezz, Temple Bar',
        description: 'Practice your English and help others with Spanish in a friendly pub environment.',
        color: 'bg-blue-50',
        baseAttendees: 15,
        author: 'immiGrow',
        category: 'SOCIAL'
    },
    {
        id: 5,
        title: 'Free Museum Tour',
        date: '11:00',
        frequency: 'First SUNDAY OF MONTH',
        location: 'National Museum of Ireland',
        description: 'Explore Irish history with a professional guide for free.',
        color: 'bg-orange-50',
        baseAttendees: 42,
        author: 'immiGrow',
        category: 'CULTURE'
    },
    {
        id: 0,
        title: 'Caminata en Howth',
        date: '10:00 AM',
        frequency: 'Sábado 15 Mayo',
        location: 'Howth Dart Station',
        description: 'Ruta suave por los acantilados. Trae agua y zapatos cómodos. Ideal para charlar.',
        color: 'bg-green-50',
        baseAttendees: 15,
        author: 'immiGrow',
        category: 'ACTIVE'
    }
];

export default function EventsPage() {
    const { t, userName, language } = useLanguage();
    const [events, setEvents] = useState(INITIAL_EVENTS);
    const [rsvps, setRsvps] = useState<number[]>([]);
    const [showForm, setShowForm] = useState(false);

    // Form state
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [desc, setDesc] = useState("");

    const handleCreateEvent = (e: React.FormEvent) => {
        e.preventDefault();
        const newEvent = {
            id: Date.now(),
            title,
            date: "12:00",
            frequency: date,
            location,
            description: desc,
            color: 'bg-purple-50',
            baseAttendees: 0,
            author: userName || "Me",
            category: 'COMMUNITY'
        };
        setEvents([newEvent, ...events]);
        setShowForm(false);
        setTitle("");
        setDate("");
        setLocation("");
        setDesc("");
    };

    const toggleRSVP = (id: number) => {
        setRsvps(prev =>
            prev.includes(id)
                ? prev.filter(eId => eId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-slate-50/50 pb-20">
            <div className="bg-white shadow-sm p-8 mb-8 rounded-b-[3rem]">
                <div className="flex justify-between items-start">
                    <div>
                        <Link href="/community" className="inline-flex items-center text-slate-400 mb-4 hover:text-brand-teal transition-colors">
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            {t("lbl.backTo")} {t("nav.community")}
                        </Link>
                        <h1 className="text-4xl font-heading font-bold text-brand-navy">Upcoming Events</h1>
                        <p className="text-slate-500 mt-2 font-medium">
                            Free and community-focused meetups.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className={`px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 ${showForm ? 'bg-slate-100 text-slate-400' : 'bg-brand-teal text-white shadow-lg hover:scale-105'}`}
                    >
                        <Plus className={`w-6 h-6 transition-transform ${showForm ? 'rotate-45' : ''}`} />
                        {!showForm && <span>{language === 'en' ? 'Create Event' : 'Crear evento'}</span>}
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                {showForm && (
                    <div className="bg-white p-6 rounded-[2rem] shadow-lg border-2 border-brand-teal/20 mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-gray-800">Crear Nuevo Evento</h3>
                            <button onClick={() => setShowForm(false)} className="text-slate-400 font-bold">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleCreateEvent} className="space-y-4">
                            <input
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Título del evento (ej: Picnic en St Stephens)"
                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-teal"
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    required
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    placeholder="Fecha y Hora"
                                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-teal"
                                />
                                <input
                                    required
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Lugar"
                                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>
                            <textarea
                                required
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                placeholder="Descripción: ¿Qué haremos? ¿Qué hay que llevar?"
                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm h-24 focus:ring-2 focus:ring-brand-teal"
                            />
                            <button type="submit" className="w-full py-4 bg-brand-teal text-white rounded-xl font-bold shadow-sm hover:bg-brand-teal/90 transition-all">
                                Publicar Evento
                            </button>
                        </form>
                    </div>
                )}

                <div className="space-y-6">
                    {events.map((event: any) => {
                        const isGoing = rsvps.includes(event.id);
                        const isOwner = event.author === (userName || "Me");

                        const freqParts = (event.frequency || "").split(' ');
                        const bigText = freqParts[0] || "";
                        const smallText = freqParts.slice(1).join(' ');

                        return (
                            <div key={event.id} className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all group">
                                <div className="w-full md:w-32 h-32 bg-slate-50 rounded-[2rem] flex flex-col items-center justify-center p-4 text-center group-hover:bg-brand-sand/30 transition-colors">
                                    <span className="text-brand-pink font-black text-xl leading-tight uppercase tracking-tighter">
                                        {bigText}
                                    </span>
                                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">
                                        {smallText}
                                    </span>
                                </div>

                                <div className="flex-1 py-2">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        {event.category && (
                                            <span className="bg-blue-50 text-blue-500 text-[10px] font-black uppercase px-3 py-1 rounded-full">
                                                {event.category}
                                            </span>
                                        )}
                                        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                                            <CalendarIcon className="w-3.5 h-3.5 text-brand-pink/40" />
                                            {event.date}
                                        </div>
                                        {isOwner && (
                                            <span className="bg-brand-navy text-white text-[10px] font-black uppercase px-2 py-1 rounded-full shadow-sm">
                                                {t("lbl.mine") || "Mío"}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-extrabold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mb-4 line-clamp-2 font-medium">
                                        {event.description}
                                    </p>

                                    <div className="flex flex-wrap gap-4 items-center">
                                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold">
                                            <MapPin className="w-4 h-4 text-brand-teal/40" /> {event.location}
                                        </div>
                                        <div className="text-[10px] font-black text-brand-teal uppercase tracking-widest flex items-center gap-1.5 bg-brand-teal/5 px-2 py-1 rounded-lg">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            FREE ENTRY
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end md:px-4">
                                    <button
                                        onClick={() => toggleRSVP(event.id)}
                                        className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center transition-all ${isGoing ? 'bg-brand-pink text-white shadow-lg' : 'bg-brand-navy text-white hover:bg-brand-teal hover:scale-105'}`}
                                    >
                                        <HeartIcon className={`w-6 h-6 ${isGoing ? 'fill-current' : ''}`} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function HeartIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    );
}
