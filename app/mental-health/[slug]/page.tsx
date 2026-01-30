import { mentalHealth } from "@/lib/data";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function MentalHealthDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const exists = mentalHealth.some((p) => p.slug === slug);
    if (!exists) {
        notFound();
    }

    return <LanguageAwareDetailView slug={slug} category="mental-health" />;
}

export function generateStaticParams() {
    return mentalHealth.map((item) => ({
        slug: item.slug,
    }));
}
