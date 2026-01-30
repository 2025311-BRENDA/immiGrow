import { parks } from "@/lib/data";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ParkDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const exists = parks.some((p) => p.slug === slug);
    if (!exists) {
        notFound();
    }

    return <LanguageAwareDetailView slug={slug} category="parks" />;
}

export function generateStaticParams() {
    return parks.map((item) => ({
        slug: item.slug,
    }));
}
