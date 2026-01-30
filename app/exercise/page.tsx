"use client";

import { RouteCard } from "@/components/RouteCard";
import { useLanguage } from "@/context/LanguageContext";
import { Map, Users, TreeDeciduous, Footprints, Waves, Bike, Dumbbell, Stethoscope } from "lucide-react";

export default function ExercisePage() {
    const { language, t } = useLanguage();

    const categories = [
        {
            title: language === "en" ? "Park Walking Circuits" : "Circuitos de Caminata en Parques",
            description: language === "en"
                ? "Directory of walking routes in Dublin's best parks (Phoenix, St. Anne's, Fairview, etc.)."
                : "Directorio de rutas de caminata en los mejores parques de Dublín (Phoenix, St. Anne's, Fairview, etc.).",
            distance: language === "en" ? "Directory" : "Directorio",
            difficulty: "Easy" as const,
            icon: TreeDeciduous,
            href: "/exercise/parks",
        },
        {
            title: language === "en" ? "Open Water Swimming" : "Natación en Aguas Abiertas",
            description: language === "en"
                ? "Directory of sea swimming spots (Seapoint, Forty Foot, Vico, etc.)."
                : "Directorio de lugares para nadar en el mar (Seapoint, Forty Foot, Vico, etc.).",
            distance: language === "en" ? "Directory" : "Directorio",
            difficulty: "Medium" as const,
            icon: Waves,
            href: "/exercise/swimming",
        },
        {
            title: language === "en" ? "Cycling Routes" : "Rutas de Ciclismo",
            description: language === "en"
                ? "Safe cycle lanes and greenways (Clontarf, Phoenix Park, Canals)."
                : "Ciclovías seguras y vías verdes (Clontarf, Phoenix Park, Canales).",
            distance: language === "en" ? "Directory" : "Directorio",
            difficulty: "Medium" as const,
            icon: Bike,
            href: "/exercise/cycling",
        },
        {
            title: language === "en" ? "Public Gyms & Pools" : "Gimnasios Públicos y Piscinas",
            description: language === "en"
                ? "Affordable, high-quality leisure centers run by Dublin City Council."
                : "Centros de ocio asequibles y de alta calidad gestionados por el Ayuntamiento de Dublín.",
            distance: language === "en" ? "Directory" : "Directorio",
            difficulty: "Easy" as const,
            icon: Dumbbell,
            href: "/exercise/gyms",
        },
        {
            title: language === "en" ? "Physiotherapy & Recovery" : "Fisioterapia y Recuperación",
            description: language === "en"
                ? "Find community physiotherapists and clinics."
                : "Encuentra fisioterapeutas comunitarios y clínicas.",
            distance: language === "en" ? "Directory" : "Directorio",
            difficulty: "Easy" as const,
            icon: Stethoscope,
            href: "/exercise/physiotherapy",
        },
        // Placeholders below - keeping them in English or simple translation for now as they are static
        {
            title: language === "en" ? "Dublin Bay Coastal Run" : "Carrera Costera de Dublín",
            description: language === "en"
                ? "5km scenic route along the coast. Enjoy the sea breeze and flat terrain."
                : "Ruta escénica de 5km por la costa. Disfruta la brisa marina y terreno plano.",
            distance: "5 km",
            difficulty: "Medium" as const,
            icon: Map,
            href: "/exercise/coastal-run",
        },
        {
            title: language === "en" ? "Liffey River Walk" : "Paseo del Río Liffey",
            description: language === "en"
                ? "A gentle 2km loop along the River Liffey. Perfect for beginners or rehabilitation."
                : "Un bucle suave de 2km a lo largo del Río Liffey. Perfecto para principiantes o rehabilitación.",
            distance: "2 km",
            difficulty: "Easy" as const,
            icon: Footprints,
            href: "/exercise/liffey-river-walk",
        },
        {
            title: language === "en" ? "Community Sports Teams" : "Equipos Deportivos Comunitarios",
            description: language === "en"
                ? "Join free amateur teams for Football, Rugby, or GAA (Gaelic games) in parks like Fairview Park."
                : "Únete a equipos amateur gratuitos de fútbol, rugby o GAA en parques como Fairview.",
            distance: language === "en" ? "Groups" : "Grupos",
            difficulty: "Medium" as const,
            icon: Users,
            href: "/exercise/community-sports",
        },
    ];

    return (
        <div className="min-h-screen bg-brand-sand">
            {/* Header */}
            <header className="bg-brand-teal text-white py-12 px-4 shadow-sm">
                <div className="container mx-auto max-w-5xl">
                    <h1 className="text-4xl font-heading font-bold mb-4">
                        {language === "en" ? "Universal Fitness" : "Fitness Universal"}
                    </h1>
                    <p className="text-brand-sand/90 text-lg max-w-2xl">
                        {language === "en"
                            ? "Adaptive routes and activities for everyone. Choose a category to start exploring."
                            : "Rutas y actividades adaptativas para todos. Elige una categoría para empezar a explorar."}
                    </p>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto max-w-5xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category, index) => (
                        <RouteCard key={index} {...category} />
                    ))}
                </div>
            </main>
        </div>
    );
}
