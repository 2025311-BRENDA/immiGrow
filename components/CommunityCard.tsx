import { ArrowRight } from 'lucide-react';

interface CommunityCardProps {
    title: string;
    description: string;
    image?: string;
    tag?: string;
    actionLabel?: string;
    onAction?: () => void;
    color?: string; // e.g., 'bg-pink-100'
}

export default function CommunityCard({
    title,
    description,
    tag,
    actionLabel = 'Ver más',
    onAction,
    color = 'bg-gray-100',
}: CommunityCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
            <div className={`h-24 ${color} relative`}>
                {tag && (
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-gray-700 shadow-sm">
                        {tag}
                    </span>
                )}
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">{description}</p>

                <button
                    onClick={onAction}
                    className="mt-auto flex items-center justify-between w-full text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                    {actionLabel}
                    <ArrowRight className="w-4 h-4 ml-1" />
                </button>
            </div>
        </div>
    );
}
