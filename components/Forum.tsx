import React, { useState } from "react";
import Link from "next/link";
import {
    MessageSquare,
    Send,
    User,
    ThumbsUp,
    Reply,
    ChevronRight,
    X,
    Clock,
    Heart
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Forum() {
    const { language, t, userName } = useLanguage();
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: "Maria L.",
            time: "2h ago",
            content: language === "en"
                ? "Is it easy to get a Leap Card at the airport?"
                : "¿Es fácil conseguir una tarjeta Leap en el aeropuerto?",
            likes: 5,
            replies: [
                { id: 101, author: "James", content: "Yes, very easy! Look for the machines outside T1.", time: "1h ago" },
                { id: 102, author: "Sofia", content: "Also you can buy it at the Spar inside the airport.", time: "45m ago" }
            ]
        },
        {
            id: 2,
            author: "Juan P.",
            time: "5h ago",
            content: language === "en"
                ? "Highly recommend Phoenix Park for a morning run. The deer are amazing!"
                : "Recomiendo mucho Phoenix Park para correr por la mañana. ¡Los ciervos son increíbles!",
            likes: 12,
            replies: []
        },
        {
            id: 3,
            author: "immiGrow Team",
            time: "Just now",
            content: language === "en"
                ? "Welcome to the immiGrow community! Feel free to ask anything about life in Dublin. ☘️"
                : language === "es"
                    ? "¡Bienvenidos a la comunidad de immiGrow! Siéntete libre de preguntar lo que sea sobre la vida en Dublín. ☘️"
                    : "Bem-vindos à comunidade immiGrow! Sinta-se à vontade para perguntar qualquer cosa sobre a vida em Dublin. ☘️",
            likes: 100,
            replies: []
        }
    ]);

    const [newPost, setNewPost] = useState("");
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
    const [replyText, setReplyText] = useState("");

    const handleSend = () => {
        if (!newPost.trim()) return;
        const post = {
            id: Date.now(),
            author: userName || "Me",
            time: "Just now",
            content: newPost,
            likes: 0,
            replies: []
        };
        setPosts([post, ...posts]);
        setNewPost("");
    };

    const handleAddReply = (postId: number) => {
        if (!replyText.trim()) return;
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    replies: [...post.replies, {
                        id: Date.now(),
                        author: userName || "Me",
                        content: replyText,
                        time: "Just now"
                    }]
                };
            }
            return post;
        }));
        setReplyText("");
    };

    const selectedPost = posts.find(p => p.id === selectedPostId);

    return (
        <section className="bg-brand-navy rounded-[2rem] p-6 text-white shadow-xl overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mb-24 blur-3xl" />

            <div className="flex justify-between items-center mb-6 relative z-10">
                <div>
                    <h3 className="text-xl font-black text-brand-sand">
                        {t("forum.title")}
                    </h3>
                    <p className="text-white/60 text-[10px] mt-0.5 lowercase">
                        {language === 'es' ? 'hilos de conversación activos' : 'active conversation threads'}
                    </p>
                </div>
                <Link href="/community" className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-brand-sand text-[10px] font-bold flex items-center gap-1">
                    {t("nav.community")}
                    <ChevronRight className="w-3 h-3" />
                </Link>
            </div>

            {/* Horizontal Feed */}
            <div className="flex gap-4 mb-6 relative z-10 overflow-x-auto pb-4 custom-scrollbar snap-x">
                {posts.map(post => (
                    <div
                        key={post.id}
                        onClick={() => setSelectedPostId(post.id)}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 min-w-[280px] max-w-[280px] snap-center cursor-pointer hover:bg-white/10 transition-all group"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-brand-sand/20 flex items-center justify-center">
                                <User className="w-3 h-3 text-brand-sand" />
                            </div>
                            <div>
                                <h5 className="text-[10px] font-bold text-brand-sand leading-none">{post.author}</h5>
                                <span className="text-[8px] opacity-40">{post.time}</span>
                            </div>
                        </div>
                        <p className="text-xs leading-relaxed mb-3 text-white/90 line-clamp-3 h-[48px]">{post.content}</p>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-1.5 text-[8px] font-bold text-brand-sand/60 hover:text-brand-sand transition-colors">
                                <ThumbsUp className="w-2.5 h-2.5" />
                                {post.likes} {t("forum.likes")}
                            </button>
                            <button className="flex items-center gap-1.5 text-[8px] font-bold text-brand-sand/60 hover:text-brand-sand transition-colors">
                                <Reply className="w-2.5 h-2.5" />
                                {post.replies.length} {t("forum.replies")}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick post bar */}
            {!selectedPostId && (
                <div className="relative z-10 flex gap-2">
                    <input
                        type="text"
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder={t("forum.placeholder")}
                        className="flex-1 bg-white/10 border-white/20 rounded-xl px-4 py-3 text-xs focus:ring-brand-sand focus:border-brand-sand placeholder:text-white/20 transition-all"
                    />
                    <button
                        onClick={handleSend}
                        className="p-3 bg-brand-sand text-brand-navy rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            )}

            {/* Thread Modal / Overlay */}
            {selectedPost && (
                <div className="absolute inset-0 z-50 bg-brand-navy flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-brand-sand" />
                            <span className="text-xs font-black text-brand-sand uppercase tracking-widest">{t("forum.replies")}</span>
                        </div>
                        <button
                            onClick={() => setSelectedPostId(null)}
                            className="p-2 hover:bg-white/10 rounded-xl transition-all"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Original Post */}
                        <div className="bg-white/5 rounded-3xl p-5 border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-2xl bg-brand-sand/20 flex items-center justify-center">
                                    <User className="w-5 h-5 text-brand-sand" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-brand-sand leading-none">{selectedPost.author}</h4>
                                    <span className="text-[10px] text-white/40">{selectedPost.time}</span>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-white/90 mb-4">{selectedPost.content}</p>
                            <div className="flex gap-4 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-2 text-[10px] font-bold text-brand-sand/60">
                                    <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                                    {selectedPost.likes} {t("forum.likes")}
                                </div>
                            </div>
                        </div>

                        {/* Replies */}
                        <div className="space-y-4">
                            {selectedPost.replies.map(reply => (
                                <div key={reply.id} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-xl bg-white/10 flex-shrink-0 flex items-center justify-center self-start mt-1">
                                        <User className="w-4 h-4 text-white/40" />
                                    </div>
                                    <div className="flex-1 bg-white/5 rounded-2xl p-4 border border-white/5">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[10px] font-black text-brand-sand">{reply.author}</span>
                                            <span className="text-[8px] opacity-30">{reply.time}</span>
                                        </div>
                                        <p className="text-xs text-white/80 leading-relaxed">{reply.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reply Input */}
                    <div className="p-6 bg-brand-navy border-t border-white/10 flex gap-2">
                        <input
                            type="text"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder={language === 'es' ? "Escribe una respuesta..." : "Write a reply..."}
                            className="flex-1 bg-white/10 border-white/20 rounded-xl px-4 py-3 text-xs focus:ring-brand-sand focus:border-brand-sand placeholder:text-white/20"
                        />
                        <button
                            onClick={() => handleAddReply(selectedPost.id)}
                            className="p-3 bg-brand-sand text-brand-navy rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
