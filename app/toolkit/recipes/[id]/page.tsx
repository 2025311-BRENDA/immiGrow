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
import { useSubmissions, Submission } from "@/context/SubmissionContext";

const RECIPE_DATA: Record<string, any> = {
    "1": {
        title: "Arepas de Maíz",
        country: "Venezuela / Colombia",
        prepTime: "25 min",
        servings: "4",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop",
        descriptionEn: "A traditional dish from Venezuela and Colombia, made of ground maize dough.",
        descriptionEs: "Un plato tradicional de Venezuela y Colombia, hecho de masa de maíz molido.",
        ingredientsEn: ["2 cups pre-cooked cornmeal", "2 cups warm water", "1 tsp salt", "1 tbsp oil", "Fillings (cheese, butter, meat, beans)"],
        ingredientsEs: ["2 tazas de harina de maíz precocida", "2 tazas de agua tibia", "1 cdta de sal", "1 cda de aceite", "Rellenos (queso, mantequilla, carne, frijoles)"],
        stepsEn: ["In a large bowl, mix water, salt, and oil.", "Gradually add the cornmeal while mixing with your hands until smooth.", "Form balls and flatten them into discs.", "Cook on a griddle for 5-7 mins per side.", "Open and fill."],
        stepsEs: ["En un bol grande, mezcla el agua, la sal y el aceite.", "Agrega la harina poco a poco hasta que esté suave.", "Forma discos y cocina en un budare por 5-7 min por lado.", "Ábrelas y rellena."]
    },
    "2": {
        title: "Tacos al Pastor",
        country: "México",
        prepTime: "2h",
        servings: "6",
        difficulty: "Medium",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop",
        descriptionEn: "Iconic Mexican tacos with marinated pork and pineapple.",
        descriptionEs: "Tacos mexicanos icónicos con cerdo marinado y piña.",
        ingredientsEn: ["1kg pork shoulder", "Achiote paste", "Dried chillies", "Corn tortillas", "Fresh pineapple"],
        ingredientsEs: ["1kg de carne de cerdo", "Pasta de achiote", "Chiles secos", "Tortillas de maíz", "Piña fresca"],
        stepsEn: ["Marinate the meat for at least 4 hours.", "Grill the meat until crispy.", "Serve in tortillas with pineapple, onion, and cilantro."],
        stepsEs: ["Marina la carne por al menos 4 horas.", "Cocina la carne a la parrilla hasta que esté crocante.", "Sirve en tortillas con piña, cebolla y cilantro."]
    },
    "3": {
        title: "Empanadas Mendocinas",
        country: "Argentina",
        prepTime: "1.5h",
        servings: "12",
        difficulty: "Medium",
        image: "https://images.unsplash.com/photo-1633533448454-992bd8c32bb2?q=80&w=2070&auto=format&fit=crop",
        descriptionEn: "Traditional Argentine beef empanadas from Mendoza.",
        descriptionEs: "Tradicionales empanadas argentinas de carne de Mendoza.",
        ingredientsEn: ["Dough rounds", "Minced beef", "Onions", "Cumin", "Hard-boiled eggs"],
        ingredientsEs: ["Tapas de empanada", "Carne picada", "Cebollas", "Comino", "Huevos duros"],
        stepsEn: ["Sauté onions and beef with spices.", "Let the filling cool down.", "Fill the dough rounds, fold, and bake until golden."],
        stepsEs: ["Saltear cebolla y carne con especias.", "Dejar enfriar el relleno.", "Rellenar las tapas, hacer el repulgue y hornear hasta dorar."]
    },
    "4": {
        title: "Ceviche limeño",
        country: "Perú",
        prepTime: "30 min",
        servings: "2",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?q=80&w=2070&auto=format&fit=crop",
        descriptionEn: "Fresh fish marinated in lime juice, a Peruvian classic.",
        descriptionEs: "Pescado fresco marinado en jugo de limón, un clásico peruano.",
        ingredientsEn: ["Fresh white fish", "Limes", "Red onion", "Cilantro", "Sweet potato"],
        ingredientsEs: ["Pescado blanco fresco", "Limones", "Cebolla roja", "Cilantro", "Camote"],
        stepsEn: ["Cut the fish into cubes.", "Marinate in lime juice with onion and salt for 5-10 mins.", "Serve immediately with sweet potato and corn."],
        stepsEs: ["Cortar el pescado en cubos.", "Marinar en jugo de limón con cebolla y sal por 5-10 min.", "Servir inmediatamente con camote y choclo."]
    }
};

export default function RecipeDetail() {
    const { id } = useParams();
    const { language } = useLanguage();
    const { submissions } = useSubmissions();

    // First check static data
    let recipe = RECIPE_DATA[id as string];

    // If not found in static, check in submissions (from Supabase)
    if (!recipe) {
        const submission = (submissions as Submission[]).find(s => s.id === id);
        if (submission) {
            recipe = {
                ...submission.data,
                // Map dynamic data to match the expected structure
                ingredientsEn: submission.data.ingredients,
                ingredientsEs: submission.data.ingredients,
                stepsEn: submission.data.steps,
                stepsEs: submission.data.steps,
                descriptionEn: submission.data.title,
                descriptionEs: submission.data.title
            };
        }
    }

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
            <div className="relative h-[55vh] w-full">
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
