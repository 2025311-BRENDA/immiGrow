'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Heart, Share2, Calendar, TrendingUp, UserCircle, Edit2, Check, ChevronLeft, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SafetyGuidelines } from '@/components/SafetyGuidelines';
import { BackButton } from '@/components/BackButton';

export default function CommunityPage() {
    const { t, userName, setUserName, language } = useLanguage();
    const [tempName, setTempName] = useState(userName);
    const [isEditing, setIsEditing] = useState(!userName);

    const handleSaveName = () => {
        if (tempName.trim()) {
            setUserName(tempName);
            setIsEditing(false);
        }
    };

    const sections = [
        {
            title: t('comm.myStory'),
            description: t('comm.myStory.desc'),
            icon: <Users className="w-8 h-8 text-blue-500" />,
            href: '/community/profile',
            color: 'bg-blue-50',
        },
        {
            title: t('comm.circles'),
            description: t('comm.circles.desc'),
            icon: <Heart className="w-8 h-8 text-pink-500" />,
            href: '/community/circles',
            color: 'bg-pink-50',
        },
        {
            title: t('comm.lgbtq.title'),
            description: t('comm.lgbtq.desc'),
            icon: <Sparkles className="w-8 h-8 text-indigo-500" />,
            href: '/community/lgbtq',
            color: 'bg-indigo-50',
        },
        {
            title: t('comm.mentors'),
            description: t('comm.mentors.desc'),
            icon: <Share2 className="w-8 h-8 text-purple-500" />,
            href: '/community/mentors',
            color: 'bg-purple-50',
        },
        {
            title: t('comm.events'),
            description: t('comm.events.desc'),
            icon: <Calendar className="w-8 h-8 text-orange-500" />,
            href: '/community/events',
            color: 'bg-orange-50',
        },
        {
            title: t('comm.socialFit'),
            description: t('comm.socialFit.desc'),
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            href: '/community/social-fit',
            color: 'bg-green-50',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-16">
            {/* Header & Profile */}
            <div className="bg-white shadow-sm p-6 mb-4 rounded-b-[2rem]">
                <BackButton />
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('comm.title')}</h1>
                        <p className="text-gray-600 text-sm">
                            {t('comm.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Identity Box */}
                <div className={`mt-4 p-4 rounded-2xl border-2 transition-all ${isEditing ? 'border-brand-teal bg-brand-teal/5' : 'border-gray-100 bg-gray-50'}`}>
                    <div className="flex items-center gap-3">
                        <UserCircle className={`w-10 h-10 ${isEditing ? 'text-brand-teal' : 'text-gray-400'}`} />
                        <div className="flex-1">
                            {isEditing ? (
                                <div className="flex gap-2">
                                    <input
                                        value={tempName}
                                        onChange={(e) => setTempName(e.target.value)}
                                        placeholder={t('comm.namePlaceholder')}
                                        className="flex-1 bg-white border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-teal"
                                    />
                                    <button
                                        onClick={handleSaveName}
                                        className="bg-brand-teal text-white p-2 rounded-xl"
                                    >
                                        <Check className="w-5 h-5" />
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">{t('comm.identity')}</p>
                                        <p className="text-lg font-bold text-gray-800">{userName}</p>
                                    </div>
                                    <button onClick={() => setIsEditing(true)} className="text-gray-400 hover:text-brand-teal">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 gap-4">
                <SafetyGuidelines />
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

                <Link
                    href="/community/admin"
                    className="mt-8 flex items-center justify-center gap-2 p-4 text-slate-400 hover:text-brand-teal transition-colors text-xs font-bold uppercase tracking-widest"
                >
                    <Check className="w-4 h-4" />
                    {t('nav.admin')}
                </Link>
            </div>
        </div>
    );
}
