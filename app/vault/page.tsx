"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
    ChevronLeft,
    Plus,
    Trash2,
    Calendar,
    AlertCircle,
    CheckCircle2,
    Shield
} from "lucide-react";

interface UserDocument {
    id: string;
    title: string;
    expiryDate: string;
    remindMe: boolean;
}

export default function VaultPage() {
    const { language, t } = useLanguage();
    const [documents, setDocuments] = useState<UserDocument[]>([]);
    const [isAddMode, setIsAddMode] = useState(false);
    const [newDoc, setNewDoc] = useState({ title: "", expiryDate: "", remindMe: true });

    // Load data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("migrawell_vault");
        if (saved) {
            try {
                setDocuments(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse vault data");
            }
        }
    }, []);

    // Save data to localStorage
    const saveDocs = (updated: UserDocument[]) => {
        setDocuments(updated);
        localStorage.setItem("migrawell_vault", JSON.stringify(updated));
    };

    const handleAdd = () => {
        if (!newDoc.title || !newDoc.expiryDate) return;

        const doc: UserDocument = {
            id: Date.now().toString(),
            title: newDoc.title,
            expiryDate: newDoc.expiryDate,
            remindMe: newDoc.remindMe
        };

        saveDocs([...documents, doc]);
        setNewDoc({ title: "", expiryDate: "", remindMe: true });
        setIsAddMode(false);
    };

    const handleDelete = (id: string) => {
        saveDocs(documents.filter(d => d.id !== id));
    };

    const isExpiringSoon = (dateStr: string) => {
        const expiry = new Date(dateStr);
        const today = new Date();
        const diffDays = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return diffDays > 0 && diffDays < 30;
    };

    const isExpired = (dateStr: string) => {
        const expiry = new Date(dateStr);
        const today = new Date();
        return expiry < today;
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-brand-navy text-white p-6 rounded-b-[2rem] shadow-lg mb-8">
                <Link href="/" className="inline-flex items-center text-brand-sand mb-4 opacity-80 hover:opacity-100 transition-opacity">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    {t("nav.home")}
                </Link>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-heading font-bold">{t("nav.vault")}</h1>
                        <p className="text-brand-sand/70 text-sm mt-1">
                            {language === "en"
                                ? "Private storage for your immigration deadlines."
                                : "Almacenamiento privado para tus trámites de inmigración."}
                        </p>
                    </div>
                    <Shield className="w-10 h-10 text-brand-pink opacity-50" />
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-2xl">
                {/* Privacy Notice */}
                <div className="bg-brand-sand/30 border border-brand-sand p-4 rounded-2xl mb-8 flex gap-3 text-sm text-brand-navy/60">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-brand-teal" />
                    <p>
                        {language === "en"
                            ? "All data is stored locally on your device. We never sync or see your private documents."
                            : "Todos los datos se guardan localmente en tu dispositivo. Nunca sincronizamos ni vemos tus documentos."}
                    </p>
                </div>

                {/* Add Section */}
                {!isAddMode ? (
                    <button
                        onClick={() => setIsAddMode(true)}
                        className="w-full p-4 bg-white border-2 border-dashed border-slate-200 rounded-2xl text-slate-500 font-bold hover:border-brand-teal hover:text-brand-teal transition-all flex items-center justify-center gap-2 mb-8 group"
                    >
                        <Plus className="w-5 h-5 group-hover:scale-125 transition-transform" />
                        {language === "en" ? "Add Document" : "Agregar Documento"}
                    </button>
                ) : (
                    <div className="bg-white p-6 rounded-3xl shadow-md mb-8 border border-slate-100 animate-in fade-in slide-in-from-top-4">
                        <h3 className="text-lg font-bold text-brand-navy mb-4">
                            {language === "en" ? "New Record" : "Nuevo Registro"}
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">{language === "en" ? "Title" : "Título"}</label>
                                <input
                                    type="text"
                                    value={newDoc.title}
                                    onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
                                    placeholder="e.g. Passport, IRP, PPSN"
                                    className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">{t("lbl.expiry")}</label>
                                <input
                                    type="date"
                                    value={newDoc.expiryDate}
                                    onChange={(e) => setNewDoc({ ...newDoc, expiryDate: e.target.value })}
                                    className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                <input
                                    type="checkbox"
                                    id="remind"
                                    checked={newDoc.remindMe}
                                    onChange={(e) => setNewDoc({ ...newDoc, remindMe: e.target.checked })}
                                    className="rounded text-brand-teal focus:ring-brand-teal"
                                />
                                <label htmlFor="remind" className="text-sm font-medium text-slate-600 cursor-pointer">
                                    {t("lbl.reminder")}
                                </label>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={() => setIsAddMode(false)}
                                    className="flex-1 p-3 text-slate-400 font-bold hover:text-slate-600"
                                >
                                    {language === "en" ? "Cancel" : "Cancelar"}
                                </button>
                                <button
                                    onClick={handleAdd}
                                    disabled={!newDoc.title || !newDoc.expiryDate}
                                    className="flex-1 p-3 bg-brand-teal text-white font-bold rounded-xl shadow-md hover:bg-brand-teal/90 disabled:opacity-50 disabled:grayscale transition-all"
                                >
                                    {language === "en" ? "Save" : "Guardar"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* List Section */}
                <div className="space-y-4">
                    {documents.length === 0 ? (
                        <div className="text-center py-12 opacity-30">
                            <Shield className="w-12 h-12 mx-auto mb-2" />
                            <p className="font-medium">{language === "en" ? "No records yet" : "Sin registros aún"}</p>
                        </div>
                    ) : (
                        documents.sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()).map((doc) => {
                            const warning = isExpiringSoon(doc.expiryDate);
                            const expired = isExpired(doc.expiryDate);

                            return (
                                <div key={doc.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-2xl ${expired ? 'bg-red-50 text-red-500' : warning ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-500'}`}>
                                            {expired ? <AlertCircle className="w-6 h-6" /> : warning ? <Calendar className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-navy">{doc.title}</h4>
                                            <div className="flex items-center gap-2 text-xs font-medium mt-1">
                                                <span className="text-slate-400 capitalize">{t("lbl.expiry")}:</span>
                                                <span className={`${expired ? 'text-red-500 font-bold' : warning ? 'text-yellow-600 font-bold' : 'text-slate-600'}`}>
                                                    {new Date(doc.expiryDate).toLocaleDateString(language === 'en' ? 'en-IE' : 'es-ES')}
                                                </span>
                                            </div>
                                            {warning && !expired && (
                                                <div className="mt-2 text-[10px] font-bold text-yellow-600 uppercase tracking-wider flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" />
                                                    {language === "en" ? "Renovate soon!" : "¡Renovar pronto!"}
                                                </div>
                                            )}
                                            {expired && (
                                                <div className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-wider flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" />
                                                    {language === "en" ? "Expired" : "Vencido"}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(doc.id)}
                                        className="p-3 text-slate-200 hover:text-red-400 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
