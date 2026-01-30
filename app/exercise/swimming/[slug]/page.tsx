import { swimming } from "@/lib/data";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function SwimmingDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const exists = swimming.some((p) => p.slug === slug);
    if (!exists) {
        notFound();
    }

    return <LanguageAwareDetailView slug={slug} category="swimming" />;
}

export function generateStaticParams() {
    return swimming.map((item) => ({
        slug: item.slug,
    }));
}
