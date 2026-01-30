import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface DetailViewProps {
    title: string;
    description: string;
    distance?: string;
    difficulty?: string;
    icon: LucideIcon;
    content?: string;
    parentHref: string;
    parentLabel: string;
    image?: string;
    externalLink?: string;
    accentColor?: string;
}

export function DetailView({
    title,
    description,
    distance,
    difficulty,
    icon: Icon,
    content,
    parentHref,
    parentLabel,
    image,
    externalLink,
    accentColor = "brand-teal",
}: DetailViewProps) {
    const { language } = useLanguage();
    return (
        <div className={cn("min-h-screen pb-20 relative overflow-hidden", `bg-${accentColor}/5`)}>
            {/* Background Decorative Blobs */}
            <div className={cn("absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 pointer-events-none", `bg-${accentColor}`)} />
            <div className={cn("absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] rounded-full blur-[100px] opacity-10 pointer-events-none", `bg-${accentColor}`)} />

            {/* Header */}
            <header className="bg-white/60 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200/50">
                <div className="container mx-auto max-w-4xl px-4 py-4">
                    <Link
                        href={parentHref}
                        className={cn("inline-flex items-center font-bold text-slate-600 hover:text-brand-navy transition-colors", `hover:text-${accentColor}`)}
                    >
                        <ArrowLeft className={cn("w-4 h-4 mr-2", `text-${accentColor}`)} />
                        {language === "en" ? "Back to" : "Volver a"} {parentLabel}
                    </Link>
                </div>
            </header>

            <main className="container mx-auto max-w-4xl px-4 py-8">
                {image && (
                    <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={image}
                            alt={title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}

                <div className="bg-white rounded-[2.5rem] shadow-sm p-8 border border-slate-100">
                    <div className="flex items-start justify-between mb-6">
                        <div className={cn("p-4 rounded-2xl shadow-sm", `bg-${accentColor}/10`)}>
                            <Icon className={cn("w-12 h-12", `text-${accentColor}`)} />
                        </div>
                        <div className="flex gap-2">
                            {difficulty && (
                                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${difficulty === "Easy" ? "bg-green-100 text-green-700" :
                                    difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                                        "bg-red-100 text-red-700"
                                    }`}>
                                    {difficulty}
                                </span>
                            )}
                        </div>
                    </div>

                    <h1 className="text-4xl font-heading font-black text-brand-navy mb-4">
                        {title}
                    </h1>

                    {distance && (
                        <div className="flex items-center text-slate-500 font-medium mb-6">
                            <MapPin className="w-5 h-5 mr-2" />
                            <span>{distance}</span>
                        </div>
                    )}

                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        {description}
                    </p>

                    {externalLink && (
                        <div className="mb-0">
                            <a
                                href={externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn("inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-lg font-bold text-white rounded-2xl transition-all shadow-md hover:-translate-y-0.5", `bg-${accentColor}`)}
                            >
                                Visit Official Website
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    )}

                    <hr className="border-slate-100 my-8" />

                    <div className="max-w-none text-slate-700 leading-relaxed">
                        {content ? (
                            <div className="space-y-6">
                                {content.split("\n").map((line, index) => {
                                    const trimmed = line.trim();
                                    if (!trimmed) return <div key={index} className="h-4" />;

                                    // Helper to parse inline markdown (Bold and Links)
                                    const parseInline = (text: string) => {
                                        return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).map((part, i) => {
                                            if (part.startsWith("[") && part.includes("](")) {
                                                const label = part.match(/\[([^\]]+)\]/)?.[1];
                                                const url = part.match(/\(([^)]+)\)/)?.[1];
                                                return <a key={i} href={url} target="_blank" rel="noopener noreferrer" className={cn("font-bold underline hover:text-brand-navy transition-colors", `text-${accentColor}`)}>{label}</a>;
                                            }
                                            if (part.startsWith("**") && part.endsWith("**")) {
                                                return <strong key={i} className="font-bold text-brand-navy">{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        });
                                    };

                                    // H1 Rendering
                                    if (trimmed.startsWith("# ")) {
                                        return (
                                            <h2 key={index} className="text-3xl font-heading font-black text-brand-navy pt-6 pb-2 border-b-4 border-brand-sand w-max max-w-full">
                                                {parseInline(trimmed.replace("# ", ""))}
                                            </h2>
                                        );
                                    }

                                    // H2 Rendering
                                    if (trimmed.startsWith("## ")) {
                                        return (
                                            <h3 key={index} className={cn("text-xl font-black pt-8 mb-3 flex items-center gap-3", `text-${accentColor}`)}>
                                                <div className={cn("w-2 h-8 rounded-full", `bg-${accentColor}`)}></div>
                                                {parseInline(trimmed.replace("## ", ""))}
                                            </h3>
                                        );
                                    }

                                    // Numbered List Rendering
                                    if (/^\d+\./.test(trimmed)) {
                                        const number = trimmed.match(/^\d+/)?.[0];
                                        const text = trimmed.replace(/^\d+\.\s*/, "");
                                        return (
                                            <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-sand transition-colors">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm">
                                                    {number}
                                                </div>
                                                <div className="flex-1 text-slate-700 font-medium">
                                                    {parseInline(text)}
                                                </div>
                                            </div>
                                        );
                                    }

                                    // List Item Rendering (Beautiful Cards)
                                    if (trimmed.startsWith("- ")) {
                                        const cleanLine = trimmed.replace("- ", "");
                                        const isKeyVal = cleanLine.includes("**: ");

                                        if (isKeyVal) {
                                            const [keyPart, ...valParts] = cleanLine.split("**: ");
                                            const key = keyPart.replace(/\*\*/g, "");
                                            const val = valParts.join("**: ");
                                            return (
                                                <div key={index} className="flex gap-4 p-5 bg-brand-sand/10 rounded-[1.5rem] border border-brand-sand/20 hover:bg-white hover:shadow-md transition-all group">
                                                    <div className="mt-1">
                                                        <div className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-brand-navy block text-lg">
                                                            {key}
                                                        </span>
                                                        <div className="text-slate-600 leading-relaxed">
                                                            {parseInline(val)}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div key={index} className="flex gap-4 items-center text-slate-700 py-2 pl-4 border-l-2 border-brand-sand/50 ml-2">
                                                <div className="w-2 h-2 bg-brand-teal rounded-full shrink-0" />
                                                <div className="flex-1">{parseInline(cleanLine)}</div>
                                            </div>
                                        );
                                    }

                                    // Regular Paragraph
                                    return (
                                        <p key={index} className="text-lg text-slate-600 leading-relaxed mb-4">
                                            {parseInline(trimmed)}
                                        </p>
                                    );
                                })}
                            </div>
                        ) : (
                            <p className="text-slate-400 italic">No additional details available for this item yet.</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
