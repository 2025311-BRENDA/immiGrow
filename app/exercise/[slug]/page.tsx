"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSubmissions } from "@/context/SubmissionContext";
import { exerciseGeneral } from "@/lib/data";
import { exerciseGeneralEs } from "@/lib/data_es";
import { ChevronLeft, Map, CheckCircle2, Plus, X, Users, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { BackButton } from "@/components/BackButton";

export default function ExerciseDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { language, t } = useLanguage();
    const { addSubmission, getApprovedByType } = useSubmissions();
    const [showTeamForm, setShowTeamForm] = useState(false);

    // Form state
    const [teamName, setTeamName] = useState("");
    const [sport, setSport] = useState("");
    const [location, setLocation] = useState("");
    const [teamDesc, setTeamDesc] = useState("");

    // Find the item in the data
    const data = language === "en" ? exerciseGeneral : exerciseGeneralEs;
    const item = data.find((i) => i.slug === slug);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-sand">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-brand-navy mb-4">404</h1>
                    <p className="text-slate-600 mb-8">Item not found.</p>
                    <Link href="/exercise" className="text-brand-teal font-bold hover:underline">
                        Go back to Exercise
                    </Link>
                </div>
            </div>
        );
    }

    const approvedTeams = getApprovedByType("sport-team");

    const handleCreateTeam = (e: React.FormEvent) => {
        e.preventDefault();
        const submissionData = {
            title: teamName,
            sport,
            location,
            description: teamDesc
        };
        addSubmission("sport-team", submissionData);
        setShowTeamForm(false);
        setTeamName("");
        setSport("");
        setLocation("");
        setTeamDesc("");
        alert(language === 'en'
            ? "Team submitted for authorization! It will appear once approved."
            : "¡Equipo enviado para autorización! Aparecerá una vez sea aprobado.");
    };

    return (
        <div className="min-h-screen bg-brand-sand pb-20">
            {/* Header / Nav */}
            <div className="bg-white border-b sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <BackButton href="/exercise" label="Exercise" />
                    {slug === "community-sports" && (
                        <button
                            onClick={() => setShowTeamForm(true)}
                            className="bg-brand-teal text-white px-4 py-2 rounded-xl font-bold text-sm shadow-sm hover:scale-105 transition-all"
                        >
                            {language === 'en' ? 'Create Team' : 'Crear Equipo'}
                        </button>
                    )}
                </div>
            </div>

            <main className="container mx-auto max-w-3xl px-4 py-8">
                {/* Team Creation Form Modal-ish */}
                {showTeamForm && (
                    <div className="bg-white p-6 rounded-[2rem] shadow-lg border-2 border-brand-teal/20 mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-brand-navy">
                                {language === 'en' ? 'Register New Team' : 'Registrar Nuevo Equipo'}
                            </h3>
                            <button onClick={() => setShowTeamForm(false)} className="text-slate-400">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleCreateTeam} className="space-y-4">
                            <input
                                required
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                                placeholder={language === 'en' ? "Team Name" : "Nombre del Equipo"}
                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-teal"
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    required
                                    value={sport}
                                    onChange={(e) => setSport(e.target.value)}
                                    placeholder={language === 'en' ? "Sport (e.g. Football)" : "Deporte (ej: Fútbol)"}
                                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-teal"
                                />
                                <input
                                    required
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder={language === 'en' ? "Location" : "Ubicación"}
                                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>
                            <textarea
                                required
                                value={teamDesc}
                                onChange={(e) => setTeamDesc(e.target.value)}
                                placeholder={language === 'en' ? "Short description / level / contact info" : "Descripción corta / nivel / contacto"}
                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-2 text-sm h-24 focus:ring-2 focus:ring-brand-teal"
                            />
                            <button type="submit" className="w-full py-3 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-navy/90 transition-all">
                                {language === 'en' ? 'Submit for Authorization' : 'Enviar para Autorización'}
                            </button>
                        </form>
                    </div>
                )}

                {/* Hero / Content */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 mb-8 overflow-hidden relative">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-brand-sand/50 rounded-2xl">
                            <item.icon className="w-8 h-8 text-brand-teal" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-heading font-bold text-brand-navy">
                                {item.title}
                            </h1>
                            <div className="flex gap-2 mt-1">
                                <span className={cn(
                                    "text-xs font-semibold px-2 py-1 rounded-full",
                                    item.difficulty === "Easy" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                                )}>
                                    {item.difficulty}
                                </span>
                                {item.distance && (
                                    <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                                        {item.distance}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-slate-600 mb-8 italic">
                        "{item.description}"
                    </p>

                    <div className="max-w-none text-slate-700 leading-relaxed">
                        {item.content ? (
                            <div className="space-y-6">
                                {item.content.split("\n").map((line, index) => {
                                    const trimmed = line.trim();
                                    if (!trimmed) return <div key={index} className="h-4" />;

                                    // Helper to parse inline markdown
                                    const parseInline = (text: string) => {
                                        return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).map((part, i) => {
                                            if (part.startsWith("[") && part.includes("](")) {
                                                const label = part.match(/\[([^\]]+)\]/)?.[1];
                                                const url = part.match(/\(([^)]+)\)/)?.[1];
                                                return <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="font-bold underline text-brand-teal hover:text-brand-navy transition-colors">{label}</a>;
                                            }
                                            if (part.startsWith("**") && part.endsWith("**")) {
                                                return <strong key={i} className="font-bold text-brand-navy">{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        });
                                    };

                                    if (trimmed.startsWith("# ")) {
                                        return (
                                            <h2 key={index} className="text-2xl font-heading font-black text-brand-navy pt-6 pb-2 border-b-4 border-brand-sand w-max max-w-full">
                                                {parseInline(trimmed.replace("# ", ""))}
                                            </h2>
                                        );
                                    }

                                    if (trimmed.startsWith("## ")) {
                                        return (
                                            <h3 key={index} className="text-xl font-black pt-8 mb-3 flex items-center gap-3 text-brand-teal">
                                                <div className="w-2 h-8 rounded-full bg-brand-teal"></div>
                                                {parseInline(trimmed.replace("## ", ""))}
                                            </h3>
                                        );
                                    }

                                    if (trimmed.startsWith("- ")) {
                                        const cleanLine = trimmed.replace("- ", "");
                                        return (
                                            <div key={index} className="flex gap-4 p-5 bg-brand-sand/10 rounded-[1.5rem] border border-brand-sand/20 hover:bg-white hover:shadow-md transition-all group">
                                                <div className="mt-1">
                                                    <div className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    </div>
                                                </div>
                                                <div className="flex-1 text-slate-700">
                                                    {parseInline(cleanLine)}
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <p key={index} className="text-lg text-slate-600 leading-relaxed">
                                            {parseInline(trimmed)}
                                        </p>
                                    );
                                })}

                                {/* Approved Teams specifically for this section */}
                                {slug === "community-sports" && approvedTeams.length > 0 && (
                                    <div className="mt-12 space-y-6">
                                        <h3 className="text-xl font-black pt-8 mb-3 flex items-center gap-3 text-brand-pink">
                                            <div className="w-2 h-8 rounded-full bg-brand-pink"></div>
                                            {language === 'en' ? 'Community Teams' : 'Equipos de la Comunidad'}
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {approvedTeams.map((team: any, idx: number) => (
                                                <div key={idx} className="bg-white p-6 rounded-[2rem] border-2 border-brand-teal/5 shadow-sm hover:border-brand-teal/20 transition-all flex flex-col md:flex-row gap-4 items-center">
                                                    <div className="w-16 h-16 bg-brand-pink/10 rounded-2xl flex items-center justify-center shrink-0">
                                                        <Trophy className="w-8 h-8 text-brand-pink" />
                                                    </div>
                                                    <div className="flex-1 text-center md:text-left">
                                                        <h4 className="font-bold text-brand-navy text-lg">{team.title}</h4>
                                                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-1">
                                                            <span className="bg-brand-teal/10 text-brand-teal text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                                                                {team.sport}
                                                            </span>
                                                            <span className="bg-slate-100 text-slate-500 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                                                                {team.location}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-slate-500 mt-2">{team.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <p className="text-slate-400 italic">No additional details available for this item yet.</p>
                        )}
                    </div>

                    {item.mapUrl && (
                        <div className="mt-12 p-6 bg-brand-teal/10 rounded-3xl border-2 border-brand-teal/5">
                            <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                                <Map className="w-6 h-6 text-brand-teal" />
                                {t("lbl.gettingThere")}
                            </h3>
                            <p className="text-slate-600 mb-6">
                                {language === "en"
                                    ? "Open this location in Google Maps to start your navigation."
                                    : "Abre esta ubicación en Google Maps para comenzar tu navegación."}
                            </p>
                            <a
                                href={item.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all w-full justify-center lg:w-auto"
                            >
                                <Map className="w-5 h-5" />
                                {language === "en" ? "Open Maps" : "Abrir Mapas"}
                            </a>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
