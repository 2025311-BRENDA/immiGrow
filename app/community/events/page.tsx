'use client';

import React, { useState } from 'react';
import CommunityCard from '@/components/CommunityCard';

export default function EventsPage() {
    const [rsvps, setRsvps] = useState<number[]>([]);

    const events = [
        {
            id: 0,
            title: 'Caminata en Howth',
            date: 'Sábado 15 Mayo, 10:00 AM',
            location: 'Howth Dart Station',
            description: 'Ruta suave por los acantilados. Trae agua y zapatos cómodos. Ideal para charlar.',
            color: 'bg-green-100',
            baseAttendees: 15
        },
        {
            id: 1,
            title: 'Café de Intercambio',
            date: 'Jueves 20 Mayo, 6:00 PM',
            location: 'Starbucks O\'Connell St',
            description: 'Practica inglés y español en un ambiente relajado. Todos los niveles bienvenidos.',
            color: 'bg-amber-100',
            baseAttendees: 8
        },
        {
            id: 2,
            title: 'Taller de CV',
            date: 'Martes 25 Mayo, 7:00 PM',
            location: 'WeWork Charlemont (y Online)',
            description: 'Mejora tu CV al estilo irlandés. Tips de reclutadores expertos.',
            color: 'bg-blue-100',
            baseAttendees: 24
        },
        {
            id: 3,
            title: 'Picnic Latino',
            date: 'Domingo 30 Mayo, 1:00 PM',
            location: 'Phoenix Park',
            description: 'Trae tu plato favorito para compartir. Música, juegos y buena compañía.',
            color: 'bg-red-100',
            baseAttendees: 42
        },
    ];

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
                <h1 className="text-2xl font-bold text-gray-800 mb-1">Eventos</h1>
                <p className="text-gray-500 text-sm">
                    Sal de la rutina. Actividades presenciales para conocer gente y explorar la ciudad.
                </p>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {events.map((event) => {
                    const isGoing = rsvps.includes(event.id);
                    return (
                        <CommunityCard
                            key={event.id}
                            title={event.title}
                            tag={`${event.date} • ${event.baseAttendees + (isGoing ? 1 : 0)} yendo`}
                            description={`${event.location}. ${event.description}`}
                            color={event.color}
                            actionLabel={isGoing ? "Ya no iré" : "¡Asistiré!"}
                            onAction={() => toggleRSVP(event.id)}
                        />
                    );
                })}
            </div>
        </div>
    );
}
