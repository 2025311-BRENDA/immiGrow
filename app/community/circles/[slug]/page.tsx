'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    ChevronLeft,
    Send,
    Users,
    MessageCircle,
    Info,
    Sparkles,
    Heart,
    ThumbsUp,
    MoreVertical,
    Smile,
    Shield
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Message {
    id: number;
    user: string;
    content: string;
    timestamp: string;
    isSystem?: boolean;
    avatar?: string;
    reactions?: { emoji: string; count: number }[];
}

const CIRCLE_DATA: Record<string, { title: string; color: string; description: string; members: number }> = {
    'entre-mujeres': {
        title: 'Entre Mujeres',
        color: 'pink',
        description: 'Espacio seguro y confidencial para mujeres migrantes en Irlanda.',
        members: 124,
    },
    'latinos-en-irlanda': {
        title: 'Latinos en Irlanda',
        color: 'yellow',
        description: 'Nuestra casa lejos de casa. Comunidad, cultura y apoyo latino.',
        members: 452,
    },
    'nuevos-en-la-isla': {
        title: 'Nuevos en la Isla',
        color: 'green',
        description: 'Tus primeros pasos guiados por quienes ya pasaron por lo mismo.',
        members: 89,
    },
    'estudiantes-internacionales': {
        title: 'Estudiantes Internacionales',
        color: 'blue',
        description: 'Comunidad académica y social para estudiantes de todo el mundo.',
        members: 215,
    },
    'mamas-migrantes': {
        title: 'Mamás Migrantes',
        color: 'purple',
        description: 'Crianza, educación y apoyo mutuo para madres en Dublín.',
        members: 78,
    },
    'comunidad-lgbtq': {
        title: 'Comunidad LGBTQ+',
        color: 'indigo',
        description: 'Espacio de orgullo, seguridad y apoyo para la comunidad migrante LGBTQ+.',
        members: 56,
    }
};

const INITIAL_MESSAGES: Record<string, Message[]> = {
    'entre-mujeres': [
        { id: 1, user: 'Maria G.', content: '¡Hola! ¿Alguien sabe de alguna clase de yoga para principiantes cerca de Smithfield?', timestamp: '10:15 AM', reactions: [{ emoji: '🧘‍♀️', count: 2 }] },
        { id: 2, user: 'Elena P.', content: '¡Bienvenida Maria! Te recomiendo Look Yoga, tienen un ambiente muy acogedor.', timestamp: '10:30 AM' },
        { id: 3, user: 'Admin', content: 'Recuerden que mañana tenemos nuestro cafecito virtual a las 6pm. ✨', timestamp: '11:00 AM', isSystem: true },
    ],
    'latinos-en-irlanda': [
        { id: 1, user: 'Carlos R.', content: '¡Muchachos! ¿Dónde se consigue la mejor harina PAN hoy? 😂', timestamp: '09:00 AM', reactions: [{ emoji: '🫓', count: 5 }] },
        { id: 2, user: 'Luisa F.', content: 'En el Moore St Mall siempre hay, acabo de pasar por ahí.', timestamp: '09:20 AM' },
        { id: 3, user: 'Jorge V.', content: '¿Alguien para ver el partido el sábado en el Temple Bar?', timestamp: '11:15 AM' },
    ],
};

export default function CircleSpacePage() {
    const { slug } = useParams();
    const router = useRouter();
    const { t } = useLanguage();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [onlineCount, setOnlineCount] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const circle = CIRCLE_DATA[slug as string] || {
        title: 'Círculo de Comunidad',
        color: 'teal',
        description: 'Un espacio para conectar.',
        members: 0,
    };

    useEffect(() => {
        const initial = INITIAL_MESSAGES[slug as string] || [
            { id: 1, user: 'Guía Bot', content: 'Bienvenida a este nuevo espacio. ¡Dí algo para empezar!', timestamp: 'Ahora', isSystem: true }
        ];
        setMessages(initial);

        setOnlineCount(Math.floor(circle.members * 0.15) + (Math.floor(Math.random() * 5)));

        setTimeout(() => {
            if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }, 100);
    }, [slug, circle.members]);

    const handleSendMessage = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: Date.now(),
            user: 'Tú',
            content: inputValue,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages(prev => [...prev, newMessage]);
        setInputValue('');

        setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
                const reply: Message = {
                    id: Date.now() + 1,
                    user: circle.title === 'Entre Mujeres' ? 'Ana S.' : 'Mateo L.',
                    content: '¡Qué bueno que te unes! Cualquier duda que tengas aquí estamos para apoyarnos. ❤️',
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    reactions: [{ emoji: '👋', count: 1 }]
                };
                setMessages(prev => [...prev, reply]);
                setIsTyping(false);
            }, 2000);
        }, 1000);
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    return (
        <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
            <header className={`bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b-2 ${circle.color === 'pink' ? 'border-pink-100' :
                    circle.color === 'yellow' ? 'border-yellow-100' :
                        circle.color === 'green' ? 'border-green-100' :
                            circle.color === 'blue' ? 'border-blue-100' :
                                circle.color === 'purple' ? 'border-purple-100' :
                                    circle.color === 'indigo' ? 'border-indigo-100' :
                                        'border-teal-100'
                }`}>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push('/community/circles')}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            {circle.title}
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        </h1>
                        <p className="text-xs text-gray-400 font-medium">
                            <Users className="w-3 h-3 inline mr-1" />
                            {circle.members} miembros • {onlineCount} en línea
                        </p>
                    </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </header>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                <aside className="hidden md:flex flex-col w-72 bg-white border-r border-gray-100 p-6 overflow-y-auto font-sans">
                    <div className="mb-8">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">Sobre el grupo</label>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {circle.description}
                        </p>
                    </div>

                    <div className="mb-8">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">Reglas de convivencia</label>
                        <ul className="space-y-4">
                            {[
                                { icon: Heart, text: 'Respeto mutuo siempre.' },
                                { icon: Shield, text: 'Privacidad garantizada.' },
                                { icon: Info, text: 'Solo información verificada.' }
                            ].map((rule, i) => (
                                <li key={i} className="flex items-start gap-3 text-xs text-gray-500 font-medium">
                                    <rule.icon className={`w-4 h-4 text-brand-teal mt-0.5`} />
                                    {rule.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto p-4 bg-brand-sun/10 rounded-2xl border border-brand-sun/20">
                        <div className="flex items-center gap-2 text-brand-navy font-bold text-sm mb-1">
                            <Sparkles className="w-4 h-4 text-brand-sun" />
                            Espacio Seguro
                        </div>
                        <p className="text-[10px] text-brand-navy/60">Este grupo es moderado activamente para tu seguridad.</p>
                    </div>
                </aside>

                <main className="flex-1 flex flex-col bg-white relative">
                    <div
                        ref={scrollRef}
                        className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth"
                    >
                        <div className="py-10 text-center space-y-4">
                            <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mx-auto ${circle.color === 'pink' ? 'bg-pink-100' :
                                    circle.color === 'yellow' ? 'bg-yellow-100' :
                                        circle.color === 'green' ? 'bg-green-100' :
                                            circle.color === 'blue' ? 'bg-blue-100' :
                                                circle.color === 'purple' ? 'bg-purple-100' :
                                                    circle.color === 'indigo' ? 'bg-indigo-100' :
                                                        'bg-teal-50'
                                }`}>
                                <MessageCircle className={`w-8 h-8 ${circle.color === 'pink' ? 'text-pink-600' :
                                        circle.color === 'yellow' ? 'text-yellow-600' :
                                            circle.color === 'green' ? 'text-green-600' :
                                                circle.color === 'blue' ? 'text-blue-600' :
                                                    circle.color === 'purple' ? 'text-purple-600' :
                                                        circle.color === 'indigo' ? 'text-indigo-600' :
                                                            'text-brand-teal'
                                    }`} />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-gray-800">¡Bienvenid@ a {circle.title}!</h3>
                                <p className="text-sm text-gray-400 max-w-xs mx-auto">Este es el comienzo de una gran conexión. Saluda a tus compañer@s.</p>
                            </div>
                        </div>

                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.user === 'Tú' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] ${msg.isSystem ? 'w-full text-center' : ''}`}>
                                    {msg.isSystem ? (
                                        <div className="bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-400 py-2 px-4 rounded-full inline-block mx-auto border border-gray-100">
                                            {msg.content}
                                        </div>
                                    ) : (
                                        <div className="space-y-1">
                                            <div className="flex items-baseline gap-2 px-1">
                                                <span className={`text-xs font-black ${msg.user === 'Tú' ? 'text-brand-teal' : 'text-gray-700'}`}>
                                                    {msg.user}
                                                </span>
                                                <span className="text-[10px] text-gray-300 font-medium">{msg.timestamp}</span>
                                            </div>
                                            <div className={`p-4 rounded-2xl shadow-sm relative group ${msg.user === 'Tú'
                                                    ? 'bg-brand-teal text-white rounded-tr-none'
                                                    : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none'
                                                }`}>
                                                <p className="text-sm font-medium leading-relaxed">{msg.content}</p>

                                                {msg.reactions && (
                                                    <div className="absolute -bottom-2 right-2 flex gap-1">
                                                        {msg.reactions.map((r, i) => (
                                                            <span key={i} className="bg-white border border-gray-100 shadow-sm rounded-full px-1.5 py-0.5 text-xs">
                                                                {r.emoji} {r.count}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity md:flex hidden">
                                                    <ThumbsUp className="w-4 h-4 text-gray-300 hover:text-brand-sun cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-50 p-4 rounded-2xl rounded-tl-none border border-gray-100 flex gap-1 items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-6 border-t border-gray-100 bg-white">
                        <form
                            onSubmit={handleSendMessage}
                            className="flex items-center gap-3 bg-gray-50 p-2 pl-5 rounded-[2rem] border border-gray-200 focus-within:border-brand-teal transition-colors"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Escribe un mensaje aquí..."
                                className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium text-gray-600 py-3"
                            />
                            <div className="flex items-center gap-1 pr-1">
                                <button type="button" className="p-2 text-gray-400 hover:text-brand-sun transition-colors">
                                    <Smile className="w-5 h-5" />
                                </button>
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className={`p-3 rounded-full shadow-lg transition-all ${inputValue.trim()
                                            ? 'bg-brand-teal text-white scale-100 hover:scale-105 active:scale-95'
                                            : 'bg-gray-200 text-gray-400 scale-90'
                                        }`}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </form>

                        <div className="flex gap-2 mt-4 overflow-x-auto pb-1 no-scrollbar">
                            <button
                                onClick={() => setInputValue('¡Hola a tod@s! Me acabo de unir. 👋')}
                                className="whitespace-nowrap px-4 py-1.5 rounded-full border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-wider hover:bg-gray-50 transition-colors"
                            >
                                👋 Saludar
                            </button>
                            <button
                                onClick={() => setInputValue('¿Me pueden ayudar con una duda sobre el PPS?')}
                                className="whitespace-nowrap px-4 py-1.5 rounded-full border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-wider hover:bg-gray-50 transition-colors"
                            >
                                ❓ Hacer una pregunta
                            </button>
                            <button
                                onClick={() => setInputValue('¡Qué buena iniciativa esta app! ✨')}
                                className="whitespace-nowrap px-4 py-1.5 rounded-full border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-wider hover:bg-gray-50 transition-colors"
                            >
                                ✨ Agradecer
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
