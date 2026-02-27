import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CommunityCardProps {
    title: string;
    description: string;
    image?: string;
    tag?: string;
    actionLabel?: string;
    onAction?: () => void;
    color?: string; // e.g., 'bg-pink-100'
    style?: React.CSSProperties;
    isJoined?: boolean;
}

export default function CommunityCard({
    title,
    description,
    tag,
    actionLabel = 'Ver más',
    onAction,
    color = 'bg-gray-100',
    style,
    isJoined = false,
}: CommunityCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
            <div className={`h-24 ${color} relative`} style={style}>
                {tag && (
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-gray-700 shadow-sm">
                        {tag}
                    </span>
                )}
                {isJoined && (
                    <div className="absolute inset-0 flex items-center justify-center bg-green-500/10 backdrop-blur-[1px]">
                        <div className="bg-white rounded-full p-2 shadow-lg animate-in zoom-in duration-300">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                    </div>
                )}
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">{description}</p>

                <button
                    onClick={onAction}
                    className={`mt-auto flex items-center justify-between w-full text-sm font-semibold transition-colors ${isJoined ? 'text-green-600 hover:text-green-700' : 'text-blue-600 hover:text-blue-700'}`}
                >
                    {actionLabel}
                    <ArrowRight className="w-4 h-4 ml-1" />
                </button>
            </div>
        </div>
    );
}
