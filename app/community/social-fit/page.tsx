"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSubmissions } from "@/context/SubmissionContext";
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
    Edit2,
    Clock
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
    const { addSubmission, getApprovedByType } = useSubmissions();
    const [showPostForm, setShowPostForm] = useState(false);
    const [showContributeForm, setShowContributeForm] = useState(false);

    // Initial static buddies
    const [initialBuddies] = useState(INITIAL_BUDDIES);

    // Session Form state
    const [newActivity, setNewActivity] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newTime, setNewTime] = useState("");

    // Contribution Form state
    const [kmValue, setKmValue] = useState("");
    const [contribActivity, setContribActivity] = useState("");

    const approvedBuddies = getApprovedByType("social-fit");
    const allBuddies = [...approvedBuddies, ...initialBuddies];

    const approvedContributions = getApprovedByType("fitness-contribution");
    const baseKm = 842;
    const additionalKm = approvedContributions.reduce((sum: number, c: any) => sum + (Number(c.kilometers) || 0), 0);
    const totalKm = baseKm + additionalKm;
    const progressPercent = Math.min(100, Math.floor((totalKm / 1000) * 100));

    const handlePostSession = (e: React.FormEvent) => {
        e.preventDefault();
        const submissionData = {
            name: userName || (language === 'en' ? 'Me' : 'Yo'),
            activity: newActivity,
            description: newDesc,
            location: newLocation || "Dublin",
            availability: newTime || "Anytime"
        };
        addSubmission("social-fit", submissionData);
        setShowPostForm(false);
        setNewActivity("");
        setNewDesc("");
        setNewLocation("");
        setNewTime("");
        alert(language === 'en' ? "Post submitted for authorization!" : "¡Anuncio enviado para autorización!");
    };

    const handleContribute = (e: React.FormEvent) => {
        e.preventDefault();
        const submissionData = {
            name: userName || (language === 'en' ? 'Me' : 'Yo'),
            kilometers: Number(kmValue),
            activity: contribActivity,
            date: new Date().toLocaleDateString()
        };
        addSubmission("fitness-contribution", submissionData);
        setShowContributeForm(false);
        setKmValue("");
        setContribActivity("");
        alert(language === 'en'
            ? "Thank you! Your contribution will be added once authorized."
            : "¡Gracias! Tu contribución se añadirá una vez sea autorizada.");
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
                <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-brand-pink/20 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-brand-pink" />
                            <h2 className="text-2xl font-heading font-bold text-brand-navy">{t("lbl.collectiveGoal")}</h2>
                        </div>
                        <button
                            onClick={() => setShowContributeForm(!showContributeForm)}
                            className="bg-brand-pink text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            {language === 'en' ? 'I want to contribute km' : 'Quiero aportar km'}
                        </button>
                    </div>

                    {showContributeForm && (
                        <div className="mb-8 p-6 bg-brand-pink/5 rounded-3xl border-2 border-brand-pink/20 animate-in fade-in zoom-in duration-300">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-brand-navy">{language === 'en' ? 'Add your progress' : 'Suma tu avance'}</h3>
                                <button onClick={() => setShowContributeForm(false)} className="text-slate-400"><X className="w-5 h-5" /></button>
                            </div>
                            <form onSubmit={handleContribute} className="flex flex-wrap gap-4">
                                <div className="flex-1 min-w-[150px]">
                                    <input
                                        required
                                        type="number"
                                        value={kmValue}
                                        onChange={(e) => setKmValue(e.target.value)}
                                        placeholder="KM (ej: 5.4)"
                                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-pink shadow-sm"
                                    />
                                </div>
                                <div className="flex-1 min-w-[150px]">
                                    <input
                                        required
                                        value={contribActivity}
                                        onChange={(e) => setContribActivity(e.target.value)}
                                        placeholder={language === 'en' ? 'Activity (e.g. Run)' : 'Actividad (ej: Caminata)'}
                                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-pink shadow-sm"
                                    />
                                </div>
                                <button type="submit" className="bg-brand-navy text-white px-8 py-3 rounded-xl font-bold shadow-md hover:bg-brand-navy/90 transition-all">
                                    {language === 'en' ? 'Contribute' : 'Smar'}
                                </button>
                            </form>
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <span className="text-5xl font-black text-brand-pink tracking-tight">{totalKm}</span>
                                <span className="text-slate-400 font-bold ml-2">km / 1000km</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-xs font-black text-brand-teal uppercase tracking-widest">{t("lbl.completed")}</span>
                                <span className="text-2xl font-bold text-brand-teal">{progressPercent}%</span>
                            </div>
                        </div>
                        <div className="bg-slate-100 h-8 rounded-full overflow-hidden p-1.5 shadow-inner">
                            <div
                                className="bg-brand-pink h-full rounded-full transition-all duration-1000 shadow-sm flex items-center justify-end px-2"
                                style={{ width: `${progressPercent}%` }}
                            >
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {approvedContributions.length > 0 && (
                        <div className="mt-8 border-t border-slate-100 pt-6">
                            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-4">{language === 'en' ? 'Recent Contributions' : 'Contribuciones Recientes'}</p>
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                {approvedContributions.slice(-5).reverse().map((c: any, i: number) => (
                                    <div key={i} className="flex-shrink-0 bg-brand-sand/50 px-4 py-2 rounded-2xl flex items-center gap-2 border border-brand-sand">
                                        <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                                        <span className="text-xs font-bold text-brand-navy">+{c.kilometers}km</span>
                                        <span className="text-[10px] text-slate-500 font-medium">by {c.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
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
                                    {language === 'en' ? 'New Session' : 'Nueva Sesión'}
                                </h3>
                                <button onClick={() => { setShowPostForm(false); setNewActivity(""); setNewDesc(""); setNewLocation(""); setNewTime(""); }} className="text-slate-400 hover:text-brand-navy">
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
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Ubicación</label>
                                        <input
                                            required
                                            value={newLocation}
                                            onChange={(e) => setNewLocation(e.target.value)}
                                            placeholder="Ej: Phoenix Park, Dublin 7..."
                                            className="w-full bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-teal"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Hora / Frecuencia</label>
                                        <input
                                            required
                                            value={newTime}
                                            onChange={(e) => setNewTime(e.target.value)}
                                            placeholder="Ej: Sábados 10am"
                                            className="w-full bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-teal"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Descripción</label>
                                    <textarea
                                        required
                                        value={newDesc}
                                        onChange={(e) => setNewDesc(e.target.value)}
                                        placeholder="¿Qué nivel buscas? Algún detalle extra..."
                                        className="w-full bg-slate-50 border-none rounded-xl px-4 py-2 text-sm h-24 focus:ring-2 focus:ring-brand-teal"
                                    />
                                </div>
                                <button type="submit" className="w-full py-3 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-navy/90 transition-all">
                                    {language === 'en' ? 'Submit for approval' : 'Enviar para autorización'}
                                </button>
                            </form>
                        </div>
                    )}

                    <div className="space-y-4">
                        {allBuddies.map((buddy) => {
                            const isOwner = buddy.name === (userName || (language === 'en' ? 'Me' : 'Yo'));
                            return (
                                <div key={buddy.id} className={`bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:items-center transition-all`}>
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
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5 text-brand-teal" /> {buddy.location}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5 text-brand-pink" /> {buddy.availability}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        {!isOwner && (
                                            <>
                                                <button
                                                    className={`px-6 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 bg-brand-teal/5 text-brand-teal hover:bg-brand-teal hover:text-white`}
                                                >
                                                    {language === 'en' ? 'Join' : 'Unirme'}
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
