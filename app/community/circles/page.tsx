'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import CommunityCard from '@/components/CommunityCard';
import { useLanguage } from '@/context/LanguageContext';

export default function CirclesPage() {
    const { t } = useLanguage();
    const [joinedCircles, setJoinedCircles] = useState<number[]>([]);

    const circles = [
        {
            id: 0,
            title: 'Entre Mujeres',
            description: 'Un espacio seguro para compartir experiencias, retos y logros entre mujeres migrantes.',
            tag: 'Mujeres',
            color: 'bg-pink-200',
        },
        {
            id: 1,
            title: 'Latinos en Irlanda',
            description: 'Conecta con tus raíces. Compartimos datos, eventos y la mejor comida.',
            tag: 'Comunidad',
            color: 'bg-yellow-200',
        },
        {
            id: 2,
            title: 'Nuevos en la Isla',
            description: '¿Acabas de llegar? Aquí te ayudamos con los primeros pasos (PPSN, cuenta bancaria, etc).',
            tag: 'Apoyo',
            color: 'bg-green-200',
        },
        {
            id: 3,
            title: 'Estudiantes Internacionales',
            description: 'Tips de estudio, trabajo part-time y vida social universitaria.',
            tag: 'Estudio',
            color: 'bg-blue-200',
        },
        {
            id: 4,
            title: 'Mamás Migrantes',
            description: 'Playdates, consejos de crianza bilingüe y apoyo mutuo.',
            tag: 'Familia',
            color: 'bg-purple-200',
        },
    ];

    const toggleCircle = (id: number) => {
        setJoinedCircles(prev =>
            prev.includes(id)
                ? prev.filter(cId => cId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white shadow-sm p-6 mb-6 rounded-b-[2rem]">
                <Link href="/community" className="inline-flex items-center text-slate-400 mb-4 hover:text-brand-teal transition-colors">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    {t("lbl.backTo")} {t("nav.community")}
                </Link>
                <h1 className="text-2xl font-bold text-gray-800 mb-1">Círculos</h1>
                <p className="text-gray-500 text-sm">
                    Encuentra tu tribu. Grupos basados en intereses y experiencias compartidas.
                </p>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {circles.map((circle) => {
                    const isJoined = joinedCircles.includes(circle.id);
                    return (
                        <CommunityCard
                            key={circle.id}
                            title={circle.title}
                            description={circle.description}
                            tag={circle.tag}
                            color={circle.color}
                            actionLabel={isJoined ? "Salir del Grupo" : "Unirme"}
                            onAction={() => toggleCircle(circle.id)}
                        />
                    );
                })}
            </div>
        </div>
    );
}
