"use client";

import { use } from "react";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function MentalHealthDetailPage({ params }: PageProps) {
    const { slug } = use(params);

    return <LanguageAwareDetailView slug={slug} category="mental-health" />;
}
