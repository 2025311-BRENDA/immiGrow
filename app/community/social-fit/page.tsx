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
    Clock,
    Sparkles
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
    const baseKm = 924;
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
        alert(t("comm.socialFit.postSuccess"));
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
        alert(t("comm.socialFit.contribSuccess"));
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
                            {t("comm.socialFit.subtitle")}
                        </p>
                    </div>
                    <Users className="w-12 h-12 text-brand-navy/20" />
                </div>
            </div>

            <main className="container mx-auto px-4 max-w-5xl space-y-12">
                <SafetyGuidelines />
                {/* Collective Challenge */}
                <section className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-brand-pink/10 relative overflow-hidden group">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-brand-pink/10 transition-colors duration-700" />

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-brand-pink/10 rounded-2xl">
                                <TrendingUp className="w-8 h-8 text-brand-pink" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-heading font-black text-brand-navy tracking-tight">{t("lbl.collectiveGoal")}</h2>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                                    {t("comm.socialFit.milestone")}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowContributeForm(!showContributeForm)}
                            className="w-full md:w-auto bg-brand-pink text-white px-8 py-4 rounded-2xl font-black shadow-[0_8px_20px_rgba(255,107,157,0.3)] hover:shadow-none hover:translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 group/btn"
                        >
                            <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform" />
                            {t("comm.socialFit.contribute")}
                        </button>
                    </div>

                    {showContributeForm && (
                        <div className="mb-10 p-8 bg-brand-pink/5 rounded-[2.5rem] border-2 border-brand-pink/10 animate-in fade-in zoom-in duration-500 relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-black text-brand-navy uppercase tracking-widest text-xs">{t("comm.socialFit.addDistance")}</h3>
                                <button onClick={() => setShowContributeForm(false)} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400"><X className="w-5 h-5" /></button>
                            </div>
                            <form onSubmit={handleContribute} className="flex flex-wrap gap-4">
                                <div className="flex-1 min-w-[200px]">
                                    <input
                                        required
                                        type="number"
                                        value={kmValue}
                                        onChange={(e) => setKmValue(e.target.value)}
                                        placeholder="KM (ej: 5.4)"
                                        className="w-full bg-white border-2 border-transparent focus:border-brand-pink outline-none rounded-2xl px-6 py-4 text-xs font-bold focus:ring-4 focus:ring-brand-pink/10 shadow-sm transition-all"
                                    />
                                </div>
                                <div className="flex-1 min-w-[200px]">
                                    <input
                                        required
                                        value={contribActivity}
                                        onChange={(e) => setContribActivity(e.target.value)}
                                        placeholder={t("comm.socialFit.activityPlaceholder")}
                                        className="w-full bg-white border-2 border-transparent focus:border-brand-pink outline-none rounded-2xl px-6 py-4 text-xs font-bold focus:ring-4 focus:ring-brand-pink/10 shadow-sm transition-all"
                                    />
                                </div>
                                <button type="submit" className="w-full md:w-auto bg-brand-navy text-white px-10 py-4 rounded-2xl font-black shadow-lg hover:bg-brand-navy/90 transition-all">
                                    {t("lbl.submit")}
                                </button>
                            </form>
                        </div>
                    )}

                    <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-black text-brand-pink tracking-tighter drop-shadow-sm">{totalKm}</span>
                                    <span className="text-brand-navy/30 text-xl font-bold italic">km</span>
                                </div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-2">
                                    {t("comm.socialFit.progressTo")}
                                </p>
                            </div>
                            <div className="text-right">
                                <span className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${progressPercent >= 100 ? 'text-brand-teal' : 'text-brand-pink'}`}>
                                    {progressPercent >= 100
                                        ? t("comm.socialFit.completed")
                                        : t("comm.socialFit.inProgress")}
                                </span>
                                <div className={`text-3xl font-black tabular-nums ${progressPercent >= 100 ? 'text-brand-teal' : 'text-brand-pink'}`}>
                                    {progressPercent}%
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100/50 h-10 rounded-full overflow-hidden p-2 shadow-inner border border-slate-200/50">
                            <div
                                className="bg-gradient-to-r from-brand-pink to-[#ff8cb3] h-full rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(255,107,157,0.4)] flex items-center justify-end px-3"
                                style={{ width: `${progressPercent}%` }}
                            >
                                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-sm shadow-white"></div>
                            </div>
                        </div>
                    </div>

                    {approvedContributions.length > 0 && (
                        <div className="mt-12 border-t border-slate-100 pt-8 relative z-10">
                            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                <Sparkles className="w-3 h-3 text-brand-pink" />
                                {t("comm.socialFit.wall")}
                            </h4>
                            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                                {approvedContributions.slice(-6).reverse().map((c: any, i: number) => (
                                    <div key={i} className="flex-shrink-0 bg-white px-5 py-3 rounded-2xl flex items-center gap-3 border border-slate-100 shadow-sm snap-start hover:border-brand-pink/30 hover:shadow-md transition-all">
                                        <div className="w-8 h-8 bg-brand-pink/10 rounded-xl flex items-center justify-center font-black text-brand-pink text-[10px]">
                                            +{c.kilometers}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-brand-navy leading-none mb-1">{c.name}</p>
                                            <p className="text-[8px] text-slate-400 font-bold uppercase">{c.activity}</p>
                                        </div>
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
                            <span>{t("comm.socialFit.createPost")}</span>
                        </button>
                    </div>

                    {showPostForm && (
                        <div className="bg-white p-6 rounded-[2rem] shadow-lg border-2 border-brand-teal/20 mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-brand-navy">
                                    {t("comm.socialFit.newSession")}
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
                                    {t("comm.socialFit.submitApproval")}
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
                                                {t("lbl.mine")}
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
                                                    {t("comm.circles.join")}
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
