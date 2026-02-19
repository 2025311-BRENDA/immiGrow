"use client";

import React, { useState } from "react";
import {
    ChevronLeft,
    UtensilsCrossed,
    Camera,
    Plus,
    Clock,
    Users,
    Globe,
    ChefHat,
    Send,
    CheckCircle2
} from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";
import { useSubmissions } from "@/context/SubmissionContext";

export default function AddRecipePage() {
    const { t, language } = useLanguage();
    const { addSubmission } = useSubmissions();
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        country: "",
        prepTime: "",
        servings: "",
        ingredients: "",
        steps: "",
        difficulty: "Easy"
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addSubmission("recipe", {
            ...formData,
            ingredients: formData.ingredients.split("\n").filter(i => i.trim()),
            steps: formData.steps.split("\n").filter(s => s.trim()),
            image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1926&auto=format&fit=crop"
        });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 bg-green-50 rounded-[2.5rem] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-3xl font-black text-brand-navy lowercase mb-2">¡receta enviada!</h2>
                <p className="text-sm text-slate-500 mb-8 max-w-[280px]">
                    {language === 'es'
                        ? "Tu receta está siendo revisada por nuestra comunidad. ¡Pronto aparecerá en el recetario!"
                        : "Your recipe is being reviewed by our community. It will appear on the recipe book soon!"
                    }
                </p>
                <div className="flex flex-col w-full gap-3">
                    <button
                        onClick={() => window.location.href = "/toolkit/recipes"}
                        className="w-full py-4 bg-brand-navy text-white rounded-2xl font-black shadow-lg"
                    >
                        Volver al Recetario
                    </button>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="w-full py-4 bg-slate-50 text-slate-400 rounded-2xl font-black"
                    >
                        Enviar otra
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <header className="bg-white px-6 pt-12 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-2">
                    <BackButton />
                    <h1 className="text-2xl font-black text-brand-navy lowercase">compartir sabor</h1>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-10">
                    {language === 'es' ? 'ayuda a tu comunidad a comer mejor' : 'help your community eat better'}
                </p>
            </header>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3 group hover:border-brand-turquoise transition-all cursor-pointer">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-brand-turquoise/10 transition-all">
                        <Camera className="w-8 h-8 text-slate-300 group-hover:text-brand-turquoise" />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-brand-turquoise">subir foto del plato</span>
                </div>

                <div className="space-y-4">
                    <div className="relative">
                        <ChefHat className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input
                            required
                            placeholder="Nombre del plato (ej: Tacos)"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full pl-11 pr-4 py-4 bg-white border-none rounded-2xl text-xs font-bold shadow-sm"
                        />
                    </div>

                    <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input
                            required
                            placeholder="País de origen"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full pl-11 pr-4 py-4 bg-white border-none rounded-2xl text-xs font-bold shadow-sm"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                            <input
                                required
                                placeholder="Tiempo (20 min)"
                                value={formData.prepTime}
                                onChange={(e) => setFormData({ ...formData, prepTime: e.target.value })}
                                className="w-full pl-11 pr-4 py-4 bg-white border-none rounded-2xl text-xs font-bold shadow-sm"
                            />
                        </div>
                        <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                            <input
                                required
                                placeholder="Porciones (4)"
                                value={formData.servings}
                                onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
                                className="w-full pl-11 pr-4 py-4 bg-white border-none rounded-2xl text-xs font-bold shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">ingredientes (uno por línea)</label>
                    <textarea
                        required
                        rows={4}
                        placeholder="- Harina de maíz\n- Agua\n- Sal"
                        value={formData.ingredients}
                        onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                        className="w-full p-6 bg-white border-none rounded-[2.5rem] text-xs font-medium shadow-sm active:ring-brand-turquoise"
                    />
                </div>

                <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">pasos de preparación (uno por línea)</label>
                    <textarea
                        required
                        rows={6}
                        placeholder="1. Mezclar ingredientes...\n2. Amasar bien..."
                        value={formData.steps}
                        onChange={(e) => setFormData({ ...formData, steps: e.target.value })}
                        className="w-full p-6 bg-white border-none rounded-[2.5rem] text-xs font-medium shadow-sm active:ring-brand-turquoise"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-6 bg-brand-navy text-white rounded-[2.5rem] font-black flex items-center justify-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all mt-4"
                >
                    <Send className="w-5 h-5 text-brand-turquoise" />
                    Enviar para Aprobación
                </button>
            </form>
        </div>
    );
}
