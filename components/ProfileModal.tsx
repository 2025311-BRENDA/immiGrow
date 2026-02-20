"use client";

import React, { useState, useRef } from "react";
import { X, Camera, User, Check, Upload } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AVATAR_OPTIONS = [
    { id: "male", name: "Hombre", seed: "Jack", params: "&top=shortHairTheCaesar&eyes=default&mouth=smile&accessoriesProbability=0" },
    { id: "female", name: "Mujer", seed: "Sophia", params: "&top=longHairCurvy&eyes=default&mouth=smile&accessoriesProbability=0" },
    { id: "lgbtq", name: "LGBTQ+", seed: "Eden", params: "&top=shortHairShortWaved&eyes=default&mouth=smile&accessoriesProbability=0" },
];

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
    const { t, userName, setUserName, userPhoto, setUserPhoto } = useLanguage();
    const [tempName, setTempName] = useState(userName);
    const [tempPhoto, setTempPhoto] = useState(userPhoto);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!isOpen) return null;

    const handleAvatarSelect = (seed: string, params: string) => {
        const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}${params}&avatarStyle=transparent&skinColor=ffdbac`;
        setTempPhoto(avatarUrl);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempPhoto(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setUserName(tempName);
        setUserPhoto(tempPhoto);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-[2.5rem] w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-black text-brand-navy tracking-tight">
                            Personalizar Perfil
                        </h3>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        {/* Avatar Preview */}
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-[2.5rem] bg-slate-100 border-4 border-brand-sand overflow-hidden shadow-inner relative">
                                {tempPhoto ? (
                                    <img
                                        src={tempPhoto}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                        <User className="w-12 h-12" />
                                    </div>
                                )}
                                <div
                                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <Camera className="text-white w-8 h-8" />
                                </div>
                            </div>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute -bottom-2 -right-2 bg-brand-irish-green text-white p-2.5 rounded-2xl shadow-lg border-4 border-white hover:scale-110 transition-transform"
                            >
                                <Upload className="w-4 h-4" />
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileUpload}
                            />
                        </div>

                        {/* Name Input */}
                        <div className="w-full">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block px-2">
                                Tu Nombre
                            </label>
                            <input
                                type="text"
                                value={tempName}
                                onChange={(e) => setTempName(e.target.value)}
                                placeholder="Escribe tu nombre..."
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold text-brand-navy focus:outline-none focus:border-brand-irish-green/30 transition-all shadow-sm"
                            />
                        </div>

                        {/* Avatar Presets */}
                        <div className="w-full">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block px-2 text-center">
                                O elige un avatar
                            </label>
                            <div className="flex justify-center gap-4">
                                {AVATAR_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleAvatarSelect(opt.seed, opt.params)}
                                        className={cn(
                                            "w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all hover:scale-105",
                                            tempPhoto?.includes(opt.seed)
                                                ? "border-brand-irish-green bg-brand-irish-green/5 shadow-md"
                                                : "border-transparent bg-slate-50 opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                                        )}
                                    >
                                        <img
                                            src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${opt.seed}${opt.params}&avatarStyle=transparent&skinColor=ffdbac`}
                                            alt={opt.name}
                                            className="w-full h-full"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-10 flex gap-4">
                        <button
                            onClick={onClose}
                            className="flex-1 py-4 font-bold text-slate-500 hover:bg-slate-50 rounded-2xl transition-all"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex-[2] bg-brand-irish-green text-white py-4 rounded-2xl font-black shadow-lg shadow-brand-irish-green/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        >
                            <Check className="w-5 h-5" />
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
