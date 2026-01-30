import { cycling } from "@/lib/data";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function CyclingDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const exists = cycling.some((p) => p.slug === slug);
    if (!exists) {
        notFound();
    }

    return <LanguageAwareDetailView slug={slug} category="cycling" />;
}

export function generateStaticParams() {
    return cycling.map((item) => ({
        slug: item.slug,
    }));
}
