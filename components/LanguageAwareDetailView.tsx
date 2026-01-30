"use client";

import { useLanguage } from "@/context/LanguageContext";
import { DetailView } from "@/components/DetailView";
import { RouteItem } from "@/lib/data";
import {
    tourism, parks, swimming, cycling, procedures, mentalHealth, womensHealth, gyms, physiotherapy
} from "@/lib/data";
import {
    tourismEs, parksEs, swimmingEs, cyclingEs, proceduresEs, mentalHealthEs, womensHealthEs, gymsEs, physiotherapyEs
} from "@/lib/data_es";

type Category = "tourism" | "parks" | "swimming" | "cycling" | "procedures" | "mental-health" | "womens-health" | "gyms" | "physiotherapy";

interface LanguageAwareDetailViewProps {
    slug: string;
    category: Category;
}

export function LanguageAwareDetailView({ slug, category }: LanguageAwareDetailViewProps) {
    const { language, t } = useLanguage();

    // Select the correct data source based on language and category
    let data: RouteItem[] = [];

    if (language === "en") {
        switch (category) {
            case "tourism": data = tourism; break;
            case "parks": data = parks; break;
            case "swimming": data = swimming; break;
            case "cycling": data = cycling; break;
            case "procedures": data = procedures; break;
            case "mental-health": data = mentalHealth; break;
            case "womens-health": data = womensHealth; break;
            case "gyms": data = gyms; break;
            case "physiotherapy": data = physiotherapy; break;
        }
    } else {
        switch (category) {
            case "tourism": data = tourismEs; break;
            case "parks": data = parksEs; break;
            case "swimming": data = swimmingEs; break;
            case "cycling": data = cyclingEs; break;
            case "procedures": data = proceduresEs; break;
            case "mental-health": data = mentalHealthEs; break;
            case "womens-health": data = womensHealthEs; break;
            case "gyms": data = gymsEs; break;
            case "physiotherapy": data = physiotherapyEs; break;
        }
    }

    const item = data.find((i) => i.slug === slug);

    if (!item) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                    Item not found (Slug: {slug})
                </div>
            </div>
        );
    }

    const accentColor =
        category === "tourism" ? "brand-sun" :
            category === "mental-health" ? "brand-purple" :
                category === "womens-health" ? "brand-pink" :
                    category === "procedures" ? "brand-sunset" :
                        category === "physiotherapy" ? "brand-teal" :
                            "brand-teal";

    return (
        <DetailView
            title={item.title}
            description={item.description}
            distance={item.distance}
            difficulty={item.difficulty}
            icon={item.icon}
            content={item.content}
            parentHref={
                category === "tourism" ? "/tourism" :
                    category === "procedures" ? "/procedures" :
                        `/exercise/${category}`
            }
            parentLabel={t(`nav.${category}`)}
            image={item.image}
            externalLink={item.externalLink}
            accentColor={accentColor}
        />
    );
}
