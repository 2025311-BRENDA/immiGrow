"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ChevronLeft,
    Plus,
    Search,
    Clock,
    Users,
    ChevronRight,
    UtensilsCrossed,
    Heart,
    Flame
} from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";
import { useSubmissions } from "@/context/SubmissionContext";

interface Recipe {
    id: string;
    title: string;
    country: string;
    prepTime: string;
    servings: string;
    difficulty: "Easy" | "Medium" | "Hard" | "Fácil" | "Medio" | "Difícil";
    category: string;
    image: string;
}

const STATIC_RECIPES: Recipe[] = [
    {
        id: "1",
        title: "Arepas de Maíz",
        country: "Venezuela / Colombia",
        prepTime: "25 min",
        servings: "4",
        difficulty: "Easy",
        category: "Bread",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "Tacos al Pastor",
        country: "México",
        prepTime: "2h",
        servings: "6",
        difficulty: "Medium",
        category: "Main",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "Empanadas Mendocinas",
        country: "Argentina",
        prepTime: "1.5h",
        servings: "12 units",
        difficulty: "Medium",
        category: "Snack",
        image: "https://images.unsplash.com/photo-1633533448454-992bd8c32bb2?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "4",
        title: "Ceviche limeño",
        country: "Perú",
        prepTime: "30 min",
        servings: "2",
        difficulty: "Easy",
        category: "Starter",
        image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function RecipesPage() {
    const { t, language } = useLanguage();
    const { getApprovedByType } = useSubmissions();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("All");

    const dynamicRecipes = getApprovedByType("recipe") as Recipe[];
    const allRecipes = [...STATIC_RECIPES, ...dynamicRecipes];

    const countries = ["All", ...Array.from(new Set(allRecipes.map(r => r.country)))];

    const filteredRecipes = allRecipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.country.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCountry = selectedCountry === "All" || recipe.country === selectedCountry;
        return matchesSearch && matchesCountry;
    });

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <header className="bg-white px-6 pt-12 pb-6 border-b border-slate-100 sticky top-0 z-30">
                <div className="flex items-center gap-4 mb-6">
                    <BackButton />
                    <div>
                        <h1 className="text-2xl font-black text-brand-navy lowercase">
                            {language === 'es' ? 'sabores de casa' : 'flavors of home'}
                        </h1>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {language === 'es' ? 'recetario comunitario' : 'community recipe book'}
                        </p>
                    </div>
                </div>

                {/* Search & Filter */}
                <div className="space-y-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder={language === 'es' ? "Buscar receta o país..." : "Search recipe or country..."}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-xs focus:ring-2 focus:ring-brand-turquoise transition-all"
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {countries.map(country => (
                            <button
                                key={country}
                                onClick={() => setSelectedCountry(country)}
                                className={`px-4 py-2 rounded-xl text-[10px] font-bold whitespace-nowrap transition-all ${selectedCountry === country
                                    ? 'bg-brand-navy text-white shadow-md'
                                    : 'bg-white text-slate-500 border border-slate-100 hover:border-brand-turquoise'
                                    }`}
                            >
                                {country === "All" ? (language === 'es' ? "Todos" : "All") : country}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-brand-navy">
                        {language === 'es' ? 'Recetas para tí' : 'Recipes for you'}
                    </h2>
                    <Link
                        href="/toolkit/recipes/add"
                        className="flex items-center gap-2 px-4 py-2 bg-brand-turquoise text-white rounded-xl text-[10px] font-bold hover:scale-105 active:scale-95 transition-all shadow-lg"
                    >
                        <Plus className="w-3 h-3" />
                        {language === 'es' ? 'Aportar Receta' : 'Add Recipe'}
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredRecipes.map(recipe => (
                        <Link
                            key={recipe.id}
                            href={`/toolkit/recipes/${recipe.id}`}
                            className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full">
                                    <span className="text-[10px] font-black text-brand-navy uppercase tracking-tighter">
                                        {recipe.country}
                                    </span>
                                </div>
                                <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-red-500 transition-all">
                                    <Heart className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-black text-brand-navy leading-none">{recipe.title}</h3>
                                    <div className="flex items-center gap-1 text-orange-500">
                                        <Flame className="w-4 h-4 fill-orange-500" />
                                    </div>
                                </div>

                                <div className="flex gap-4 mb-4">
                                    <div className="flex items-center gap-1.5 text-slate-400">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold">{recipe.prepTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-400">
                                        <Users className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold">{recipe.servings} p.</span>
                                    </div>
                                    <div className={`px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-widest ${recipe.difficulty === 'Easy' || recipe.difficulty === 'Fácil'
                                        ? 'bg-green-50 text-green-600'
                                        : 'bg-orange-50 text-orange-600'
                                        }`}>
                                        {recipe.difficulty}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-50 flex justify-between items-center group/btn">
                                    <span className="text-[10px] font-black text-brand-turquoise uppercase tracking-widest">Ver Receta</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-brand-turquoise group-hover/btn:text-white transition-all">
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredRecipes.length === 0 && (
                    <div className="text-center py-20">
                        <UtensilsCrossed className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                        <p className="text-slate-400 text-sm font-medium">No encontramos esa receta aún...</p>
                        <p className="text-slate-300 text-xs mt-1">¡Sé el primero en compartirla!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
