'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Plus, X, Calendar as CalendarIcon, MapPin, Users as UsersIcon } from 'lucide-react';
import CommunityCard from '@/components/CommunityCard';
import { useLanguage } from '@/context/LanguageContext';

const INITIAL_EVENTS = [
    {
        id: 0,
        title: 'Caminata en Howth',
        date: 'Sábado 15 Mayo, 10:00 AM',
        location: 'Howth Dart Station',
        description: 'Ruta suave por los acantilados. Trae agua y zapatos cómodos. Ideal para charlar.',
        color: 'bg-green-100',
        baseAttendees: 15,
        author: 'immiGrow'
    },
    {
        id: 1,
        title: 'Café de Intercambio',
        date: 'Jueves 20 Mayo, 6:00 PM',
        location: 'Starbucks O\'Connell St',
        description: 'Practica inglés y español en un ambiente relajado. Todos los niveles bienvenidos.',
        color: 'bg-amber-100',
        baseAttendees: 8,
        author: 'immiGrow'
    },
    {
        id: 2,
        title: 'Taller de CV',
        date: 'Martes 25 Mayo, 7:00 PM',
        location: 'WeWork Charlemont (y Online)',
        description: 'Mejora tu CV al estilo irlandés. Tips de reclutadores expertos.',
        color: 'bg-blue-100',
        baseAttendees: 24,
        author: 'immiGrow'
    },
    {
        id: 3,
        title: 'Picnic Latino',
        date: 'Domingo 30 Mayo, 1:00 PM',
        location: 'Phoenix Park',
        description: 'Trae tu plato favorito para compartir. Música, juegos y buena compañía.',
        color: 'bg-red-100',
        baseAttendees: 42,
        author: 'immiGrow'
    },
];

export default function EventsPage() {
    const { t, userName } = useLanguage();
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
            date,
            location,
            description: desc,
            color: 'bg-purple-100',
            baseAttendees: 0,
            author: userName || "Me"
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
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white shadow-sm p-6 mb-6 rounded-b-[2rem]">
                <div className="flex justify-between items-start">
                    <div>
                        <Link href="/community" className="inline-flex items-center text-slate-400 mb-4 hover:text-brand-teal transition-colors">
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            {t("lbl.backTo")} {t("nav.community")}
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-800 mb-1">Eventos</h1>
                        <p className="text-gray-500 text-sm">
                            Sal de la rutina. Actividades presenciales para conocer gente.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className={`p-4 rounded-2xl transition-all ${showForm ? 'bg-slate-100 text-slate-400 rotate-45' : 'bg-brand-teal text-white shadow-md hover:scale-105'}`}
                    >
                        <Plus className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {showForm && (
                    <div className="bg-white p-6 rounded-[2rem] shadow-lg border-2 border-brand-teal/20 mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-gray-800">Crear Nuevo Evento</h3>
                            <button onClick={() => setShowForm(false)} className="text-slate-400"><X className="w-5 h-5" /></button>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {events.map((event) => {
                        const isGoing = rsvps.includes(event.id);
                        const isOwner = event.author === (userName || "Me");
                        return (
                            <div key={event.id} className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow relative">
                                <div className={`h-24 ${event.color} relative`}>
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase px-2 py-1 rounded-full text-gray-700 shadow-sm flex items-center gap-1">
                                        <CalendarIcon className="w-3 h-3" /> {event.date}
                                    </span>
                                    {isOwner && (
                                        <span className="absolute top-4 right-4 bg-brand-navy text-white text-[10px] font-black uppercase px-2 py-1 rounded-full shadow-sm">
                                            {t("lbl.mine") || "Mío"}
                                        </span>
                                    )}
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4 flex-1">{event.description}</p>

                                    <div className="flex flex-col gap-2 mb-4">
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <MapPin className="w-3 h-3" /> {event.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <UsersIcon className="w-3 h-3" /> {event.baseAttendees + (isGoing ? 1 : 0)} personas interesadas
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => toggleRSVP(event.id)}
                                        className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${isGoing ? 'bg-brand-teal text-white' : 'bg-brand-teal/5 text-brand-teal hover:bg-brand-teal hover:text-white'}`}
                                    >
                                        {isGoing ? '¡Me he apuntado!' : '¡Asistiré!'}
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
