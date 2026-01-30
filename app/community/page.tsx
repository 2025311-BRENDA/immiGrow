import Link from 'next/link';
import { Users, Heart, Share2, Calendar, TrendingUp } from 'lucide-react';

export default function CommunityPage() {
    const sections = [
        {
            title: 'Mi Historia',
            description: 'Personaliza tu perfil, cuenta tu historia y conecta con otros.',
            icon: <Users className="w-8 h-8 text-blue-500" />,
            href: '/community/profile',
            color: 'bg-blue-50',
        },
        {
            title: 'Círculos',
            description: 'Grupos de apoyo para mujeres, latinos, nuevos migrantes y más.',
            icon: <Heart className="w-8 h-8 text-pink-500" />,
            href: '/community/circles',
            color: 'bg-pink-50',
        },
        {
            title: 'Mentores',
            description: 'Conecta con migrantes experimentados que pueden guiarte.',
            icon: <Share2 className="w-8 h-8 text-purple-500" />,
            href: '/community/mentors',
            color: 'bg-purple-50',
        },
        {
            title: 'Eventos',
            description: 'Encuentros presenciales, caminatas y cafés para socializar.',
            icon: <Calendar className="w-8 h-8 text-orange-500" />,
            href: '/community/events',
            color: 'bg-orange-50',
        },
        {
            title: 'Fitness Social',
            description: 'Entrena con otras, únete a retos y comparte tus logros.',
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            href: '/community/social-fit',
            color: 'bg-green-50',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white shadow-sm p-6 mb-6 rounded-b-[2rem]">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Comunidad</h1>
                <p className="text-gray-600">
                    El corazón de MigraWell. Conecta, comparte y crece con personas que te entienden.
                </p>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 gap-4">
                {sections.map((section) => (
                    <Link
                        key={section.title}
                        href={section.href}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4 border border-gray-100"
                    >
                        <div className={`p-4 rounded-xl ${section.color}`}>
                            {section.icon}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {section.title}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 lines-clamp-2">
                                {section.description}
                            </p>
                        </div>
                        <div className="text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
