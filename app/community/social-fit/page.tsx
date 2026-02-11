"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SafetyGuidelines } from "@/components/SafetyGuidelines";
import { BackButton } from "@/components/BackButton";
import {
    ChevronLeft,
    Users,
    TrendingUp,
    Calendar,
    MessageCircle,
    MapPin,
    Smile,
    Camera,
    CheckCircle2,
    Plus,
    X,
    Edit2
} from "lucide-react";

interface BuddyProfile {
    id: string;
    name: string;
    activity: string;
    description: string;
    location: string;
    availability: string;
    joined?: boolean;
}

const INITIAL_BUDDIES: BuddyProfile[] = [
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
    const { language, t, userName } = useLanguage();
    const [communityKm] = useState(842);
    const [challengeCompleted, setChallengeCompleted] = useState(false);
    const [showPostForm, setShowPostForm] = useState(false);
    const [buddies, setBuddies] = useState(INITIAL_BUDDIES);
    const [editingId, setEditingId] = useState<string | null>(null);

    // Form state
    const [newActivity, setNewActivity] = useState("");
    const [newDesc, setNewDesc] = useState("");

    const handlePostSession = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingId) {
            // Update existing session
            setBuddies(buddies.map(b =>
                b.id === editingId
                    ? { ...b, activity: newActivity, description: newDesc }
                    : b
            ));
            setEditingId(null);
        } else {
            // Create new session
            const newBuddy: BuddyProfile = {
                id: Date.now().toString(),
                name: userName || "Me",
                activity: newActivity,
                description: newDesc,
                location: "My Area",
                availability: "Anytime"
            };
            setBuddies([newBuddy, ...buddies]);
        }

        setShowPostForm(false);
        setNewActivity("");
        setNewDesc("");
    };

    const startEditing = (buddy: BuddyProfile) => {
        setEditingId(buddy.id);
        setNewActivity(buddy.activity);
        setNewDesc(buddy.description);
        setShowPostForm(true);
    };

    const deleteSession = (id: string) => {
        if (confirm(language === 'en' ? 'Delete this session?' : '¿Eliminar esta sesión?')) {
            setBuddies(buddies.filter(b => b.id !== id));
        }
    };

    const toggleJoin = (id: string) => {
        setBuddies(buddies.map(b =>
            b.id === id ? { ...b, joined: !b.joined } : b
        ));
    };

    return (
        <div className="min-h-screen bg-brand-sand/30 pb-20">
            {/* Header */}
            <div className="bg-brand-pink text-brand-navy p-8 rounded-b-[3rem] shadow-sm mb-8">
                <BackButton href="/community" label={t("nav.community")} />
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
                <SafetyGuidelines />
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
                    </div>
                </section>

                {/* Training Buddy System */}
                <section className="pb-12">
                    <div className="flex items-center justify-between mb-6 px-2">
                        <h2 className="text-2xl font-heading font-bold text-brand-navy">{t("lbl.trainWithMe")}</h2>
                        <button
                            onClick={() => setShowPostForm(true)}
                            className="bg-brand-teal text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-md hover:scale-105 flex items-center gap-3"
                        >
                            <Plus className="w-6 h-6" />
                            <span>{language === 'en' ? 'Create post' : 'Publicar anuncio'}</span>
                        </button>
                    </div>

                    {showPostForm && (
                        <div className="bg-white p-6 rounded-[2rem] shadow-lg border-2 border-brand-teal/20 mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-brand-navy">
                                    {editingId ? (language === 'en' ? 'Edit Session' : 'Editar Sesión') : (language === 'en' ? 'New Session' : 'Nueva Sesión')}
                                </h3>
                                <button onClick={() => { setShowPostForm(false); setEditingId(null); setNewActivity(""); setNewDesc(""); }} className="text-slate-400 hover:text-brand-navy">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <form onSubmit={handlePostSession} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Actividad</label>
                                    <input
                                        required
                                        value={newActivity}
                                        onChange={(e) => setNewActivity(e.target.value)}
                                        placeholder="Ej: Caminata, Running, Yoga..."
                                        className="w-full bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-teal"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Descripción</label>
                                    <textarea
                                        required
                                        value={newDesc}
                                        onChange={(e) => setNewDesc(e.target.value)}
                                        placeholder="¿Cuándo y dónde? ¿Qué nivel buscas?"
                                        className="w-full bg-slate-50 border-none rounded-xl px-4 py-2 text-sm h-24 focus:ring-2 focus:ring-brand-teal"
                                    />
                                </div>
                                <button type="submit" className="w-full py-3 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-navy/90 transition-all">
                                    {editingId ? (language === 'en' ? 'Save Changes' : 'Guardar Cambios') : (language === 'en' ? 'Post Session' : 'Publicar Sesión')}
                                </button>
                            </form>
                        </div>
                    )}

                    <div className="space-y-4">
                        {buddies.map((buddy) => {
                            const isOwner = buddy.name === (userName || "Me");
                            return (
                                <div key={buddy.id} className={`bg-white p-6 rounded-[2rem] shadow-sm border ${buddy.joined ? 'border-brand-teal/50 bg-brand-teal/5' : 'border-slate-100'} flex flex-col md:flex-row gap-6 md:items-center transition-all`}>
                                    <div className="p-4 bg-brand-sand/50 rounded-2xl flex-shrink-0 flex items-center justify-center relative">
                                        <Smile className="w-10 h-10 text-brand-teal" />
                                        {isOwner && (
                                            <div className="absolute -top-2 -right-2 bg-brand-navy text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full ring-2 ring-white">
                                                {language === 'en' ? 'Mine' : 'Mío'}
                                            </div>
                                        )}
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
                                    <div className="flex gap-2">
                                        {isOwner ? (
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => startEditing(buddy)}
                                                    className="px-4 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-brand-teal hover:text-white transition-all flex items-center gap-2"
                                                >
                                                    <Edit2 className="w-5 h-5" />
                                                    {language === 'en' ? 'Edit' : 'Editar'}
                                                </button>
                                                <button
                                                    onClick={() => deleteSession(buddy.id)}
                                                    className="p-4 bg-red-50 text-red-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => toggleJoin(buddy.id)}
                                                    className={`px-6 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${buddy.joined ? 'bg-brand-teal text-white shadow-md' : 'bg-brand-teal/5 text-brand-teal hover:bg-brand-teal hover:text-white'}`}
                                                >
                                                    {buddy.joined ? (
                                                        <><CheckCircle2 className="w-5 h-5" /> ¡Me uniré!</>
                                                    ) : (
                                                        language === 'en' ? 'Join' : 'Unirme'
                                                    )}
                                                </button>
                                                <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-brand-navy hover:text-white transition-all">
                                                    <MessageCircle className="w-5 h-5" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}
