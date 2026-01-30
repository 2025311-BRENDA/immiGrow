"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const dictionaries = {
    en: {
        "nav.home": "Home",
        "nav.tourism": "Active Tourism",
        "nav.parks": "Parks",
        "nav.swimming": "Swimming",
        "nav.cycling": "Cycling",
        "nav.mental": "Mental Health",
        "nav.women": "Women's Health",
        "nav.procedures": "Procedures",
        "nav.community": "Community",
        "nav.vault": "My Vault",
        "nav.achievements": "Achievements",
        "nav.socialFit": "Social Fitness",
        "nav.more": "More",
        "nav.physical_activity": "Physical",
        "nav.health": "Health",
        "nav.admin": "Resources",
        "btn.visit": "Visit Official Website",
        "lbl.backTo": "Back to",
        "lbl.gettingThere": "Getting There",
        "lbl.highlights": "Highlights",
        "lbl.offices": "Office Locations",
        "lbl.expiry": "Expiry Date",
        "lbl.reminder": "Renewal Reminder",
        "lbl.completeRoute": "Mark as Completed",
        "lbl.completed": "Completed!",
        "lbl.badges": "Badges",
        "lbl.trainWithMe": "Train With Me",
        "lbl.collectiveGoal": "Collective Goal",
    },
    es: {
        "nav.home": "Inicio",
        "nav.tourism": "Turismo Activo",
        "nav.parks": "Parques",
        "nav.swimming": "Natación",
        "nav.cycling": "Ciclismo",
        "nav.mental": "Salud Mental",
        "nav.women": "Salud de la Mujer",
        "nav.procedures": "Trámites",
        "nav.community": "Comunidad",
        "nav.vault": "Mi Bóveda",
        "nav.achievements": "Logros",
        "nav.socialFit": "Fitness Social",
        "nav.more": "Más",
        "nav.physical_activity": "Actividad",
        "nav.health": "Bienestar",
        "nav.admin": "Recursos",
        "btn.visit": "Visitar Sitio Oficial",
        "lbl.backTo": "Volver a",
        "lbl.gettingThere": "Cómo llegar",
        "lbl.highlights": "Destacados",
        "lbl.offices": "Ubicación de Oficinas",
        "lbl.expiry": "Fecha de Vencimiento",
        "lbl.reminder": "Recordatorio de Renovación",
        "lbl.completeRoute": "Marcar como Completada",
        "lbl.completed": "¡Completada!",
        "lbl.badges": "Medallas",
        "lbl.trainWithMe": "Entrena Conmigo",
        "lbl.collectiveGoal": "Meta Colectiva",
    }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "es" : "en"));
    };

    const t = (key: string) => {
        const dict = dictionaries[language] as Record<string, string>;
        return dict[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
