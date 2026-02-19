"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, Check, X, Shield, Clock } from "lucide-react";
import { useSubmissions } from "@/context/SubmissionContext";
import { BackButton } from "@/components/BackButton";

export default function AdminPage() {
    const { submissions, approveSubmission, rejectSubmission } = useSubmissions();

    const pending = submissions.filter(s => s.status === "pending");

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <div className="bg-brand-navy text-white p-8 rounded-b-[3rem] shadow-lg mb-8">
                <BackButton href="/community" label="Comunidad" />
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl">
                        <Shield className="w-8 h-8 text-brand-teal" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-heading font-bold">Administración</h1>
                        <p className="text-white/60">Gestiona las autorizaciones de la comunidad.</p>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-xl font-black text-brand-navy mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-pink" />
                    Pendientes de Aprobación ({pending.length})
                </h2>

                {pending.length === 0 ? (
                    <div className="bg-white p-12 rounded-[2.5rem] border-2 border-dashed border-slate-200 text-center">
                        <p className="text-slate-400 font-medium">No hay solicitudes pendientes en este momento.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {pending.map((s) => (
                            <div key={s.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="bg-brand-teal/10 text-brand-teal text-[10px] font-black uppercase px-3 py-1 rounded-full mb-2 inline-block">
                                            {s.type}
                                        </span>
                                        <h3 className="font-bold text-lg text-brand-navy">
                                            {s.data.title || s.data.name || s.data.activity || "Sin título"}
                                        </h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => approveSubmission(s.id)}
                                            className="p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all"
                                            title="Aprobar"
                                        >
                                            <Check className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => rejectSubmission(s.id)}
                                            className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all"
                                            title="Rechazar"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600 space-y-2">
                                    {Object.entries(s.data).map(([key, value]: [string, any]) => (
                                        <div key={key} className="flex gap-2">
                                            <span className="font-bold uppercase text-[9px] text-slate-400 w-20 shrink-0">{key}:</span>
                                            <span>{typeof value === 'string' ? value : JSON.stringify(value)}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-slate-300 mt-4 italic">
                                    Enviado el: {new Date(s.createdAt).toLocaleString()}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
