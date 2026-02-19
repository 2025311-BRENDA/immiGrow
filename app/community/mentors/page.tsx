"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import CommunityCard from '@/components/CommunityCard';
import { useLanguage } from '@/context/LanguageContext';
import { useSubmissions } from '@/context/SubmissionContext';
import { SafetyGuidelines } from '@/components/SafetyGuidelines';
import { MentorRegistrationModal } from '@/components/MentorRegistrationModal';
import { BackButton } from '@/components/BackButton';

const INITIAL_MENTORS = [
    {
        name: 'Carlos Ruiz',
        role: 'Ingeniero de Software',
        experience: '5 años en Irlanda',
        description: 'Puedo ayudarte con el proceso de visa crítica y búsqueda de empleo en tech.',
        color: 'bg-indigo-100',
    },
    {
        name: 'Sarah O\'Connor',
        role: 'Enfermera',
        experience: '8 años en Irlanda',
        description: 'Experta en el sistema de salud irlandés (HSE) y validación de títulos.',
        color: 'bg-teal-100',
    },
    {
        name: 'Miguel Ángel',
        role: 'Chef',
        experience: '3 años en Irlanda',
        description: 'Te ayudo a emprender en el sector gastronómico y proveedores locales.',
        color: 'bg-orange-100',
    },
    {
        name: 'Elena Volkov',
        role: 'Estudiante PhD',
        experience: '4 años en Irlanda',
        description: 'Guía sobre becas, alojamiento estudiantil y vida en el campus.',
        color: 'bg-rose-100',
    },
];

export default function MentorsPage() {
    const { language, t } = useLanguage();
    const { getApprovedByType } = useSubmissions();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const approvedMentorsRaw = getApprovedByType("mentor");
    const approvedMentors = approvedMentorsRaw.map((m: any) => ({
        name: m.name,
        role: m.occupation,
        experience: `${m.years} ${language === 'en' ? 'in Ireland' : 'en Irlanda'}`,
        description: m.bio,
        color: 'bg-emerald-100', // Different color for community mentors
    }));

    const allMentors = [...approvedMentors, ...INITIAL_MENTORS];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white shadow-sm p-6 mb-6 rounded-b-[2rem]">
                <BackButton href="/community" label={t("nav.community")} />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-1">
                            {language === 'en' ? 'Mentors' : 'Mentores'}
                        </h1>
                        <p className="text-gray-500 text-sm">
                            {language === 'en'
                                ? 'Learn from those who have already walked the path. Connect and get practical advice.'
                                : 'Aprende de quienes ya recorrieron el camino. Conecta y recibe consejos prácticos.'}
                        </p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-brand-irish-green text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg hover:scale-105 transition-all active:scale-95 whitespace-nowrap"
                    >
                        {language === 'en' ? 'Become a Mentor' : 'Quiero ser mentor'}
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <SafetyGuidelines />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {allMentors.map((mentor, index) => (
                        <CommunityCard
                            key={index}
                            title={mentor.name}
                            tag={mentor.experience}
                            description={`${mentor.role}. ${mentor.description}`}
                            color={mentor.color}
                            actionLabel={language === 'en' ? 'Contact' : 'Contactar'}
                            onAction={() => alert(`${language === 'en' ? 'Request sent to' : 'Solicitud enviada a'} ${mentor.name}`)}
                        />
                    ))}
                </div>
            </div>

            <MentorRegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
