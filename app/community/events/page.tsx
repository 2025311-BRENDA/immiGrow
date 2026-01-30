'use client';

import CommunityCard from '@/components/CommunityCard';

export default function EventsPage() {
    const events = [
        {
            title: 'Caminata en Howth',
            date: 'Sábado 15 Mayo, 10:00 AM',
            location: 'Howth Dart Station',
            description: 'Ruta suave por los acantilados. Trae agua y zapatos cómodos. Ideal para charlar.',
            color: 'bg-green-100',
        },
        {
            title: 'Café de Intercambio',
            date: 'Jueves 20 Mayo, 6:00 PM',
            location: 'Starbucks O\'Connell St',
            description: 'Practica inglés y español en un ambiente relajado. Todos los niveles bienvenidos.',
            color: 'bg-amber-100',
        },
        {
            title: 'Taller de CV',
            date: 'Martes 25 Mayo, 7:00 PM',
            location: 'WeWork Charlemont (y Online)',
            description: 'Mejora tu CV al estilo irlandés. Tips de reclutadores expertos.',
            color: 'bg-blue-100',
        },
        {
            title: 'Picnic Latino',
            date: 'Domingo 30 Mayo, 1:00 PM',
            location: 'Phoenix Park',
            description: 'Trae tu plato favorito para compartir. Música, juegos y buena compañía.',
            color: 'bg-red-100',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white shadow-sm p-6 mb-6 rounded-b-[2rem]">
                <h1 className="text-2xl font-bold text-gray-800 mb-1">Eventos</h1>
                <p className="text-gray-500 text-sm">
                    Sal de la rutina. Actividades presenciales para conocer gente y explorar la ciudad.
                </p>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {events.map((event, index) => (
                    <CommunityCard
                        key={index}
                        title={event.title}
                        tag={event.date}
                        description={`${event.location}. ${event.description}`}
                        color={event.color}
                        actionLabel="Asistiré"
                        onAction={() => alert(`Te has inscrito a ${event.title}`)}
                    />
                ))}
            </div>
        </div>
    );
}
