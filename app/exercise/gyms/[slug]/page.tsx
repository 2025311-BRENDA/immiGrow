import { gyms } from "@/lib/data";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function GymDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const exists = gyms.some((p) => p.slug === slug);
    if (!exists) {
        notFound();
    }

    return <LanguageAwareDetailView slug={slug} category="gyms" />;
}

export function generateStaticParams() {
    return gyms.map((item) => ({
        slug: item.slug,
    }));
}
