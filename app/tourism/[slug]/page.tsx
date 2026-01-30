import { tourism } from "@/lib/data";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function TourismDetailPage({ params }: PageProps) {
    const { slug } = await params;

    // Check existence in the primary language data. 
    // The client component handles switching to Spanish variant.
    const exists = tourism.some((t) => t.slug === slug);
    if (!exists) {
        notFound();
    }

    return <LanguageAwareDetailView slug={slug} category="tourism" />;
}

export function generateStaticParams() {
    return tourism.map((spot) => ({
        slug: spot.slug,
    }));
}
