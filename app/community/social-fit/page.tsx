"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
    ChevronLeft,
    Users,
    TrendingUp,
    Calendar,
    MessageCircle,
    MapPin,
    Smile,
    Camera,
    CheckCircle2
} from "lucide-react";

interface BuddyProfile {
    id: string;
    name: string;
    activity: string;
    description: string;
    location: string;
    availability: string;
}

const BUDDIES: BuddyProfile[] = [
    {
        id: "1",
        name: "Maria G.",
        activity: "Running",
        description: "Looking for a buddy for morning runs in Phoenix Park. Beginners welcome!",
        location: "Dublin 7",
        availability: "Mon, Wed, Fri mornings"
    },
    {
        id: "2",
        name: "Sarah O.",
        activity: "Hiking",
        description: "Planning to do the Bray to Greystones walk this Sunday. Join me!",
        location: "Dublin 2 / South Side",
        availability: "Weekends"
    },
    {
        id: "3",
        name: "Elena R.",
        activity: "Yoga",
        description: "Anyone interested in free outdoor yoga in Herbert Park?",
        location: "Dublin 4",
        availability: "Tuesdays 6pm"
    }
];

export default function SocialFitHub() {
    const { language, t } = useLanguage();
    const [communityKm] = useState(842); // Mocked global count
    const [challengeCompleted, setChallengeCompleted] = useState(false);

    return (
        <div className="min-h-screen bg-brand-sand/30 pb-20">
            {/* Header */}
            <div className="bg-brand-pink text-brand-navy p-8 rounded-b-[3rem] shadow-sm mb-8">
                <Link href="/community" className="inline-flex items-center text-brand-navy/60 mb-4 hover:text-brand-navy transition-colors">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    {t("nav.community")}
                </Link>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-heading font-bold">{t("nav.socialFit")}</h1>
                        <p className="text-brand-navy/70 mt-2 font-medium max-w-md text-sm">
                            {language === "en"
                                ? "Connect with others, share your steps, and grow together."
                                : "Conecta con otras, comparte tus pasos y creced juntas."}
                        </p>
                    </div>
                    <Users className="w-12 h-12 text-brand-navy/20" />
                </div>
            </div>

            <main className="container mx-auto px-4 max-w-5xl space-y-12">

                {/* Collective Challenge */}
                <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-brand-pink/20">
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="w-6 h-6 text-brand-pink" />
                        <h2 className="text-2xl font-heading font-bold text-brand-navy">{t("lbl.collectiveGoal")}</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <span className="text-4xl font-bold text-brand-pink">{communityKm}</span>
                                <span className="text-slate-400 font-bold ml-1">km / 1000km</span>
                            </div>
                            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">{t("lbl.completed")} 84%</span>
                        </div>
                        <div className="bg-slate-100 h-6 rounded-full overflow-hidden p-1 shadow-inner">
                            <div
                                className="bg-brand-pink h-full rounded-full transition-all duration-1000 shadow-sm"
                                style={{ width: '84%' }}
                            ></div>
                        </div>
                        <p className="text-slate-500 text-sm italic">
                            {language === 'en'
                                ? "Collective Goal: 'Active Migrants: 1000 km together this month'"
                                : "Meta Colectiva: 'Migrantes activos: 1000 km juntos este mes'"}
                        </p>
                    </div>
                </section>

                {/* Weekly Challenges */}
                <section>
                    <h2 className="text-2xl font-heading font-bold text-brand-navy mb-6 px-2">Retos Semanales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-brand-teal text-white p-6 rounded-[2rem] shadow-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                                <Camera className="w-20 h-20" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">“Camina bajo la lluvia”</h3>
                            <p className="text-white/80 text-sm mb-6 max-w-[200px]">
                                {language === 'en'
                                    ? "Upload a photo of your walk even if it's typical Irish weather!"
                                    : "¡Sube una foto de tu caminata aunque haga el típico clima irlandés!"}
                            </p>
                            <button
                                onClick={() => setChallengeCompleted(true)}
                                className={`px-6 py-2 rounded-xl font-bold text-sm transition-all ${challengeCompleted ? 'bg-white text-brand-teal' : 'bg-brand-sand text-brand-navy'}`}
                            >
                                {challengeCompleted ? (
                                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> ¡Subido!</span>
                                ) : (
                                    language === 'en' ? 'Upload Photo' : 'Subir Foto'
                                )}
                            </button>
                        </div>

                        <div className="bg-brand-navy text-white p-6 rounded-[2rem] shadow-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                                <MapPin className="w-20 h-20" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">“Descubre un parque nuevo”</h3>
                            <p className="text-white/80 text-sm mb-6 max-w-[200px]">
                                {language === 'en'
                                    ? "Visit a park you haven't been to before."
                                    : "Visita un parque en el que no hayas estado antes."}
                            </p>
                            <Link href="/exercise/parks" className="inline-block px-6 py-2 bg-brand-sand text-brand-navy rounded-xl font-bold text-sm">
                                {language === 'en' ? 'Find Parks' : 'Buscar Parques'}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Buddy System */}
                <section className="pb-12">
                    <div className="flex items-center justify-between mb-6 px-2">
                        <h2 className="text-2xl font-heading font-bold text-brand-navy">{t("lbl.trainWithMe")}</h2>
                        <button className="text-brand-teal font-bold text-sm hover:underline">
                            {language === 'en' ? 'Create a post' : 'Publicar anuncio'}
                        </button>
                    </div>

                    <div className="space-y-4">
                        {BUDDIES.map((buddy) => (
                            <div key={buddy.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:items-center">
                                <div className="p-4 bg-brand-sand/50 rounded-2xl flex-shrink-0 flex items-center justify-center">
                                    <Smile className="w-10 h-10 text-brand-teal" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold text-brand-navy text-lg">{buddy.name}</h4>
                                        <span className="bg-brand-teal/10 text-brand-teal text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                                            {buddy.activity}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-3">{buddy.description}</p>
                                    <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-medium">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" /> {buddy.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {buddy.availability}
                                        </div>
                                    </div>
                                </div>
                                <button className="p-4 bg-brand-teal/5 text-brand-teal rounded-2xl hover:bg-brand-teal hover:text-white transition-all flex items-center justify-center gap-2 font-bold">
                                    <MessageCircle className="w-5 h-5" />
                                    {language === 'en' ? 'Chat' : 'Mensaje'}
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
