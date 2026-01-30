import { procedures } from "@/lib/data";
import { LanguageAwareDetailView } from "@/components/LanguageAwareDetailView";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProcedureDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const exists = procedures.some((p) => p.slug === slug);
    if (!exists) {
        notFound();
    }

    return <LanguageAwareDetailView slug={slug} category="procedures" />;
}

export function generateStaticParams() {
    return procedures.map((guide) => ({
        slug: guide.slug,
    }));
}
