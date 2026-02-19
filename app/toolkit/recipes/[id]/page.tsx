"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
    Clock,
    Users,
    ArrowLeft,
    ChevronRight,
    Share2,
    Bookmark,
    Flame,
    Utensils,
    CheckCircle2
} from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";

const RECIPE_DATA: Record<string, any> = {
    "1": {
        title: "Arepas de Maíz",
        country: "Venezuela / Colombia",
        prepTime: "25 min",
        servings: "4",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=2070&auto=format&fit=crop",
        descriptionEn: "A traditional dish from Venezuela and Colombia, made of ground maize dough.",
        descriptionEs: "Un plato tradicional de Venezuela y Colombia, hecho de masa de maíz molido.",
        ingredientsEn: [
            "2 cups pre-cooked cornmeal",
            "2 cups warm water",
            "1 tsp salt",
            "1 tbsp oil",
            "Fillings (cheese, butter, meat, beans)"
        ],
        ingredientsEs: [
            "2 tazas de harina de maíz precocida",
            "2 tazas de agua tibia",
            "1 cdta de sal",
            "1 cda de aceite",
            "Rellenos (queso, mantequilla, carne, frijoles)"
        ],
        stepsEn: [
            "In a large bowl, mix water, salt, and oil.",
            "Gradually add the cornmeal while mixing with your hands until smooth.",
            "Form balls and flatten them into discs (about 1 inch thick).",
            "Cook on a griddle or non-stick pan over medium heat for 5-7 mins per side.",
            "Open with a knife and fill with your favorite ingredients."
        ],
        stepsEs: [
            "En un bol grande, mezcla el agua, la sal y el aceite.",
            "Agrega la harina poco a poco mientras mezclas con las manos hasta que esté suave.",
            "Forma bolas y aplastalas en discos (aproximadamente 2 cm de grosor).",
            "Cocina en un budare o sartén a fuego medio por 5-7 min por cada lado.",
            "Ábrelas con un cuchillo y rellena con tus ingredientes favoritos."
        ]
    }
};

export default function RecipeDetail() {
    const { id } = useParams();
    const { language } = useLanguage();
    const recipe = RECIPE_DATA[id as string];

    if (!recipe) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
                <Utensils className="w-16 h-16 text-slate-100 mb-4" />
                <h1 className="text-xl font-bold text-brand-navy">Receta no encontrada</h1>
                <BackButton />
            </div>
        );
    }

    const ingredients = language === 'es' ? recipe.ingredientsEs : recipe.ingredientsEn;
    const steps = language === 'es' ? recipe.stepsEs : recipe.stepsEn;
    const description = language === 'es' ? recipe.descriptionEs : recipe.descriptionEn;

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Hero Image */}
            <div className="relative h-[45vh] w-full">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

                <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
                    <BackButton className="bg-white/20 backdrop-blur-md border-white/30 text-white" />
                    <div className="flex gap-2">
                        <button className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white border border-white/30 hover:bg-white/40 transition-all">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white border border-white/30 hover:bg-white/40 transition-all">
                            <Bookmark className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-10 left-6 right-6">
                    <div className="px-3 py-1 bg-brand-sun rounded-full w-fit mb-3">
                        <span className="text-[10px] font-black text-brand-navy uppercase tracking-widest">{recipe.country}</span>
                    </div>
                    <h1 className="text-4xl font-black text-white leading-none mb-4">{recipe.title}</h1>

                    <div className="flex gap-6">
                        <div className="flex items-center gap-2 text-white/90">
                            <Clock className="w-4 h-4 text-brand-turquoise" />
                            <span className="text-xs font-bold">{recipe.prepTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                            <Users className="w-4 h-4 text-brand-turquoise" />
                            <span className="text-xs font-bold">{recipe.servings} people</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                            <Flame className="w-4 h-4 text-brand-sun" />
                            <span className="text-xs font-bold">{recipe.difficulty}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="bg-white -mt-8 rounded-t-[3.5rem] relative z-10 px-6 pt-10">
                <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">
                    "{description}"
                </p>

                {/* Ingredients */}
                <section className="mb-10">
                    <h2 className="text-xl font-black text-brand-navy mb-6 flex items-center gap-3">
                        <div className="p-2 bg-brand-turquoise/10 rounded-xl">
                            <Utensils className="w-5 h-5 text-brand-turquoise" />
                        </div>
                        {language === 'es' ? 'Ingredientes' : 'Ingredients'}
                    </h2>
                    <div className="space-y-3">
                        {ingredients.map((item: string, i: number) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:border-brand-turquoise transition-all group">
                                <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-[10px] font-black text-brand-turquoise border border-slate-100 group-hover:bg-brand-turquoise group-hover:text-white transition-all">
                                    {i + 1}
                                </div>
                                <span className="text-sm font-bold text-brand-navy">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Steps */}
                <section className="mb-12">
                    <h2 className="text-xl font-black text-brand-navy mb-6 flex items-center gap-3">
                        <div className="p-2 bg-brand-sun/10 rounded-xl">
                            <Flame className="w-5 h-5 text-brand-sun" />
                        </div>
                        {language === 'es' ? 'Preparación' : 'Preparation'}
                    </h2>
                    <div className="space-y-8">
                        {steps.map((step: string, i: number) => (
                            <div key={i} className="relative pl-10 border-l-2 border-slate-100 pb-2 last:pb-0">
                                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-2 border-brand-sun flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-brand-sun" />
                                </div>
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Step {i + 1}</h4>
                                <p className="text-sm font-medium text-brand-navy leading-loose">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <button className="w-full py-5 bg-brand-navy text-white rounded-[2rem] font-black flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                    <CheckCircle2 className="w-6 h-6 text-brand-turquoise" />
                    {language === 'es' ? '¡Hecho! Marcar como Cocinado' : 'Done! Mark as Cooked'}
                </button>
            </div>
        </div>
    );
}
