"use client";

import { RouteCard } from "@/components/RouteCard";
import { BackButton } from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";
import { Map, Users, TreeDeciduous, Footprints, Waves, Bike, Dumbbell, Stethoscope, Mountain } from "lucide-react";

export default function ExercisePage() {
    const { language, t } = useLanguage();

    const categories = [
        {
            title: t("exercise.cat.parks.title"),
            description: t("exercise.cat.parks.desc"),
            distance: t("cat.extras"), // Using existing key for 'Directory' if available or cat label
            difficulty: "Easy" as const,
            icon: TreeDeciduous,
            href: "/exercise/parks",
        },
        {
            title: t("nav.tourism"),
            description: t("tourism.subtitle"),
            distance: t("cat.extras"),
            difficulty: "Medium" as const,
            icon: Mountain,
            href: "/tourism",
        },
        {
            title: t("exercise.cat.swimming.title"),
            description: t("exercise.cat.swimming.desc"),
            distance: t("cat.extras"),
            difficulty: "Medium" as const,
            icon: Waves,
            href: "/exercise/swimming",
        },
        {
            title: t("exercise.cat.cycling.title"),
            description: t("exercise.cat.cycling.desc"),
            distance: t("cat.extras"),
            difficulty: "Medium" as const,
            icon: Bike,
            href: "/exercise/cycling",
        },
        {
            title: t("exercise.cat.gyms.title"),
            description: t("exercise.cat.gyms.desc"),
            distance: t("cat.extras"),
            difficulty: "Easy" as const,
            icon: Dumbbell,
            href: "/exercise/gyms",
        },
        {
            title: t("exercise.cat.run.title"),
            description: t("exercise.cat.run.desc"),
            distance: "5 km",
            difficulty: "Medium" as const,
            icon: Map,
            href: "/exercise/coastal-run",
        },
        {
            title: t("exercise.cat.walk.title"),
            description: t("exercise.cat.walk.desc"),
            distance: "2 km",
            difficulty: "Easy" as const,
            icon: Footprints,
            href: "/exercise/liffey-river-walk",
        },
        {
            title: t("exercise.cat.teams.title"),
            description: t("exercise.cat.teams.desc"),
            distance: t("cat.social"),
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
                    <BackButton />
                    <h1 className="text-4xl font-heading font-bold mb-4">
                        {t("nav.physical_activity")}
                    </h1>
                    <p className="text-brand-sand/90 text-lg max-w-2xl">
                        {t("exercise.subtitle")}
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
