import { physiotherapy } from "@/lib/data";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function PhysiotherapyDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const exists = physiotherapy.some((p) => p.slug === slug);
    if (!exists) {
        notFound();
    }

    return <LanguageAwareDetailView slug={slug} category="physiotherapy" />;
}

export function generateStaticParams() {
    return physiotherapy.map((item) => ({
        slug: item.slug,
    }));
}
