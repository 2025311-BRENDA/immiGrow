"use client";

import React, { useState } from "react";
import { MessageSquare, Send, User, ThumbsUp, Reply } from "lucide-react";
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
                { id: 101, author: "James", content: "Yes, very easy! Look for the machines outside T1.", time: "1h ago" }
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
                    : "Bem-vindos à comunidade immiGrow! Sinta-se à vontade para perguntar qualquer coisa sobre a vida em Dublin. ☘️",
            likes: 100,
            replies: []
        }
    ]);

    const [newPost, setNewPost] = useState("");
    const [replyingTo, setReplyingTo] = useState<number | null>(null);
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

    const handleReply = (postId: number) => {
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
        setReplyingTo(null);
    };

    return (
        <section className="bg-brand-navy rounded-[2rem] p-6 text-white shadow-xl overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mb-24 blur-3xl" />

            <div className="flex justify-between items-center mb-6 relative z-10">
                <div>
                    <h3 className="text-xl font-black text-brand-sand">
                        {t("forum.title")}
                    </h3>
                    <p className="text-white/60 text-[10px] mt-0.5">
                        {t("forum.subtitle")}
                    </p>
                </div>
                <div className="p-2 bg-white/10 rounded-xl">
                    <MessageSquare className="w-5 h-5 text-brand-sand" />
                </div>
            </div>

            <div className="space-y-4 mb-6 relative z-10 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {posts.map(post => (
                    <div key={post.id} className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-brand-sand/20 flex items-center justify-center">
                                <User className="w-3 h-3 text-brand-sand" />
                            </div>
                            <div>
                                <h5 className="text-[10px] font-bold text-brand-sand leading-none">{post.author}</h5>
                                <span className="text-[8px] opacity-40">{post.time}</span>
                            </div>
                        </div>
                        <p className="text-xs leading-relaxed mb-3 text-white/90">{post.content}</p>

                        {/* Replies */}
                        {post.replies.length > 0 && (
                            <div className="ml-4 pl-4 border-l border-white/10 space-y-3 mb-3">
                                {post.replies.map(reply => (
                                    <div key={reply.id}>
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="text-[8px] font-bold text-brand-sand">{reply.author}</span>
                                            <span className="text-[7px] opacity-30">{reply.time}</span>
                                        </div>
                                        <p className="text-[10px] text-white/70">{reply.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex gap-4">
                            <button className="flex items-center gap-1.5 text-[8px] font-bold text-brand-sand/60 hover:text-brand-sand transition-colors">
                                <ThumbsUp className="w-2.5 h-2.5" />
                                {post.likes} {t("forum.likes")}
                            </button>
                            <button
                                onClick={() => setReplyingTo(replyingTo === post.id ? null : post.id)}
                                className="flex items-center gap-1.5 text-[8px] font-bold text-brand-sand/60 hover:text-brand-sand transition-colors"
                            >
                                <Reply className="w-2.5 h-2.5" />
                                {t("forum.replies")}
                            </button>
                        </div>

                        {replyingTo === post.id && (
                            <div className="mt-3 flex gap-2">
                                <input
                                    type="text"
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    placeholder="Write a reply..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-[10px] focus:ring-1 focus:ring-brand-sand outline-none"
                                />
                                <button
                                    onClick={() => handleReply(post.id)}
                                    className="p-1.5 bg-brand-sand text-brand-navy rounded-lg"
                                >
                                    <Send className="w-3 h-3" />
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex gap-2">
                <input
                    type="text"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder={t("forum.placeholder")}
                    className="flex-1 bg-white/10 border-white/20 rounded-xl px-4 py-2 text-xs focus:ring-brand-sand focus:border-brand-sand placeholder:text-white/20"
                />
                <button
                    onClick={handleSend}
                    className="p-3 bg-brand-sand text-brand-navy rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                    <Send className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
}
