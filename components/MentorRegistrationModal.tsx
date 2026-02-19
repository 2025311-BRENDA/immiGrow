"use client";

import React, { useState } from "react";
import { X, Send, User, Mail, Globe, Briefcase, Calendar, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSubmissions } from "@/context/SubmissionContext";

interface MentorRegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MentorRegistrationModal({ isOpen, onClose }: MentorRegistrationModalProps) {
    const { t } = useLanguage();
    const { addSubmission } = useSubmissions();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        origin: "",
        occupation: "",
        years: "",
        bio: "",
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        addSubmission("mentor", formData);

        // Alert user
        alert(t("comm.mentorModal.success"));

        onClose();
        setFormData({
            name: "",
            email: "",
            origin: "",
            occupation: "",
            years: "",
            bio: "",
        });
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="bg-brand-teal p-6 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl font-bold mb-2">
                        {t("comm.mentorModal.title")}
                    </h2>
                    <p className="text-white/80 text-sm">
                        {t("comm.mentorModal.subtitle")}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-4 max-h-[70vh] overflow-y-auto">
                    <div className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                                {t("comm.mentorModal.fullName")}
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    required
                                    type="text"
                                    placeholder={t("comm.mentorModal.placeholder.name")}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all outline-none"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                                {t("comm.mentorModal.email")}
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    required
                                    type="email"
                                    placeholder={t("comm.mentorModal.placeholder.email")}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all outline-none"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Country */}
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                                    {t("comm.mentorModal.origin")}
                                </label>
                                <div className="relative">
                                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        required
                                        type="text"
                                        placeholder={t("comm.mentorModal.placeholder.origin")}
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all outline-none"
                                        value={formData.origin}
                                        onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Years */}
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                                    {t("comm.mentorModal.years")}
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        required
                                        type="text"
                                        placeholder={t("comm.mentorModal.placeholder.years")}
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all outline-none"
                                        value={formData.years}
                                        onChange={(e) => setFormData({ ...formData, years: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Occupation */}
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                                {t("comm.mentors.role")}
                            </label>
                            <div className="relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    required
                                    type="text"
                                    placeholder={t("comm.mentorModal.placeholder.occupation")}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all outline-none"
                                    value={formData.occupation}
                                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                                {t("comm.mentorModal.help")}
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                                <textarea
                                    required
                                    rows={3}
                                    placeholder={t("comm.mentorModal.placeholder.bio")}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all outline-none resize-none"
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand-teal text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-teal/20 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4"
                    >
                        <Send className="w-5 h-5" />
                        {t("comm.mentorModal.submit")}
                    </button>

                </form>
            </div>
        </div>
    );
}
