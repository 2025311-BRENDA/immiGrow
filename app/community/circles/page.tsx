'use client';

import CommunityCard from '@/components/CommunityCard';

export default function CirclesPage() {
    const circles = [
        {
            title: 'Entre Mujeres',
            description: 'Un espacio seguro para compartir experiencias, retos y logros entre mujeres migrantes.',
            tag: 'Mujeres',
            color: 'bg-pink-200',
        },
        {
            title: 'Latinos en Irlanda',
            description: 'Conecta con tus raíces. Compartimos datos, eventos y la mejor comida.',
            tag: 'Musical',
            color: 'bg-yellow-200',
        },
        {
            title: 'Nuevos en la Isla',
            description: '¿Acabas de llegar? Aquí te ayudamos con los primeros pasos (PPSN, cuenta bancaria, etc).',
            tag: 'Apoyo',
            color: 'bg-green-200',
        },
        {
            title: 'Estudiantes Internacionales',
            description: 'Tips de estudio, trabajo part-time y vida social universitaria.',
            tag: 'Estudio',
            color: 'bg-blue-200',
        },
        {
            title: 'Mamás Migrantes',
            description: 'Playdates, consejos de crianza bilingüe y apoyo mutuo.',
            tag: 'Familia',
            color: 'bg-purple-200',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white shadow-sm p-6 mb-6 rounded-b-[2rem]">
                <h1 className="text-2xl font-bold text-gray-800 mb-1">Círculos</h1>
                <p className="text-gray-500 text-sm">
                    Encuentra tu tribu. Grupos basados en intereses y experiencias compartidas.
                </p>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {circles.map((circle, index) => (
                    <CommunityCard
                        key={index}
                        title={circle.title}
                        description={circle.description}
                        tag={circle.tag}
                        color={circle.color}
                        actionLabel="Unirme"
                        onAction={() => alert(`Te has unido a ${circle.title}`)}
                    />
                ))}
            </div>
        </div>
    );
}
