import { womensHealth } from "@/lib/data";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function WomensHealthDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const exists = womensHealth.some((p) => p.slug === slug);
    if (!exists) {
        notFound();
    }

    return <LanguageAwareDetailView slug={slug} category="womens-health" />;
}

export function generateStaticParams() {
    return womensHealth.map((item) => ({
        slug: item.slug,
    }));
}
