"use client";

import { use } from "react";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function WomensHealthDetailPage({ params }: PageProps) {
    const { slug } = use(params);

    return <LanguageAwareDetailView slug={slug} category="womens-health" />;
}
