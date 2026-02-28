'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, CheckCircle2, X, Sparkles, PartyPopper, LogOut } from 'lucide-react';
import CommunityCard from '@/components/CommunityCard';
import { useLanguage } from '@/context/LanguageContext';
import { SafetyGuidelines } from '@/components/SafetyGuidelines';

export default function CirclesPage() {
    const { t } = useLanguage();
    const router = useRouter();
    const [joinedCircles, setJoinedCircles] = useState<number[]>([]);
    const [recentJoined, setRecentJoined] = useState<string | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);

    const circles = [
        {
            id: 0,
            title: 'Entre Mujeres',
            slug: 'entre-mujeres',
            description: 'Un espacio seguro para compartir experiencias, retos y logros entre mujeres migrantes.',
            tag: 'Mujeres',
            color: 'bg-pink-200',
        },
        {
            id: 1,
            title: 'Latinos en Irlanda',
            slug: 'latinos-en-irlanda',
            description: 'Conecta con tus raíces. Compartimos datos, eventos y la mejor comida.',
            tag: 'Comunidad',
            color: 'bg-yellow-200',
        },
        {
            id: 2,
            title: 'Nuevos en la Isla',
            slug: 'nuevos-en-la-isla',
            description: '¿Acabas de llegar? Aquí te ayudamos con los primeros pasos (PPSN, cuenta bancaria, etc).',
            tag: 'Apoyo',
            color: 'bg-green-200',
        },
        {
            id: 3,
            title: 'Estudiantes Internacionales',
            slug: 'estudiantes-internacionales',
            description: 'Tips de estudio, trabajo part-time y vida social universitaria.',
            tag: 'Estudio',
            color: 'bg-blue-200',
        },
        {
            id: 4,
            title: 'Mamás Migrantes',
            slug: 'mamas-migrantes',
            description: 'Playdates, consejos de crianza bilingüe y apoyo mutuo.',
            tag: 'Familia',
            color: 'bg-purple-200',
        },
        {
            id: 5,
            title: t("comm.circles.lgbtq.title"),
            slug: 'comunidad-lgbtq',
            description: t("comm.circles.lgbtq.desc"),
            tag: t("comm.circles.lgbtq.tag"),
            style: { background: 'linear-gradient(90deg, #E40303 0%, #FF8C00 20%, #FFED00 40%, #008026 60%, #24408E 80%, #732982 100%)', opacity: 0.3 },
        },
    ];

    const toggleCircle = (id: number) => {
        const isJoined = joinedCircles.includes(id);
        const circle = circles.find(c => c.id === id);

        if (isJoined && circle) {
            router.push(`/community/circles/${circle.slug}`);
            return;
        }

        if (!isJoined && circle) {
            setJoinedCircles(prev => [...prev, id]);
            setRecentJoined(circle.title);
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000);
        }
    };

    const leaveCircle = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        setJoinedCircles(prev => prev.filter(cId => cId !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white shadow-sm p-6 mb-6 rounded-b-[2rem]">
                <Link href="/community" className="inline-flex items-center text-slate-400 mb-4 hover:text-brand-teal transition-colors">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    {t("lbl.backTo")} {t("nav.community")}
                </Link>
                <h1 className="text-2xl font-bold text-gray-800 mb-1">{t("comm.circles.title")}</h1>
                <p className="text-gray-500 text-sm">
                    {t("comm.circles.subtitle")}
                </p>
            </div>

            <div className="container mx-auto px-4">
                <SafetyGuidelines />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {circles.map((circle) => {
                        const isJoined = joinedCircles.includes(circle.id);
                        return (
                            <div key={circle.id} className="relative group">
                                <CommunityCard
                                    title={circle.title}
                                    description={circle.description}
                                    tag={circle.tag}
                                    color={circle.color}
                                    isJoined={isJoined}
                                    actionLabel={isJoined ? 'Entrar a la Comunidad' : t("comm.circles.join")}
                                    onAction={() => toggleCircle(circle.id)}
                                />
                                {isJoined && (
                                    <button
                                        onClick={(e) => leaveCircle(e, circle.id)}
                                        className="absolute top-2 left-2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 text-gray-800"
                                        title="Salir del grupo"
                                    >
                                        <LogOut className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Success Feedback Overlay */}
            {recentJoined && showConfetti && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-[3rem] shadow-2xl border border-brand-sand animate-in fade-in zoom-in duration-300 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-brand-sun/20 rounded-full flex items-center justify-center mb-4 animate-bounce">
                            <PartyPopper className="w-10 h-10 text-brand-sun" />
                        </div>
                        <h2 className="text-2xl font-black text-brand-navy mb-2">¡Bienvenida al grupo!</h2>
                        <p className="text-slate-600 font-medium max-w-[200px]">
                            Ya eres parte de <span className="text-brand-turquoise font-bold">{recentJoined}</span>
                        </p>
                        <div className="mt-4 flex gap-1">
                            {[1, 2, 3].map(i => (
                                <Sparkles key={i} className={`w-4 h-4 text-brand-sun animate-pulse delay-${i * 100}`} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
