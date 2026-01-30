"use client";

import React, { useState } from "react";
import { MessageSquare, Send, User, ThumbsUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Forum() {
    const { language } = useLanguage();
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: "Maria L.",
            time: "2h ago",
            content: language === "en"
                ? "Is it easy to get a Leap Card at the airport?"
                : "¿Es fácil conseguir una tarjeta Leap en el aeropuerto?",
            likes: 5,
            replies: 2
        },
        {
            id: 2,
            author: "Juan P.",
            time: "5h ago",
            content: language === "en"
                ? "Highly recommend Phoenix Park for a morning run. The deer are amazing!"
                : "Recomiendo mucho Phoenix Park para correr por la mañana. ¡Los ciervos son increíbles!",
            likes: 12,
            replies: 4
        }
    ]);

    const [newPost, setNewPost] = useState("");

    const handleSend = () => {
        if (!newPost.trim()) return;
        const post = {
            id: Date.now(),
            author: "Me",
            time: "Just now",
            content: newPost,
            likes: 0,
            replies: 0
        };
        setPosts([post, ...posts]);
        setNewPost("");
    };

    return (
        <section className="bg-brand-navy rounded-[2rem] p-6 text-white shadow-xl overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mb-24 blur-3xl" />

            <div className="flex justify-between items-center mb-6 relative z-10">
                <div>
                    <h3 className="text-xl font-black text-brand-sand">
                        {language === "en" ? "Community Forum" : "Foro de la Comunidad"}
                    </h3>
                    <p className="text-white/60 text-[10px] mt-0.5">
                        {language === "en" ? "Ask questions, share tips." : "Haz preguntas, comparte consejos."}
                    </p>
                </div>
                <div className="p-2 bg-white/10 rounded-xl">
                    <MessageSquare className="w-5 h-5 text-brand-sand" />
                </div>
            </div>

            <div className="space-y-4 mb-6 relative z-10">
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
                        <div className="flex gap-3">
                            <button className="flex items-center gap-1.5 text-[8px] font-bold text-brand-sand/60 hover:text-brand-sand transition-colors">
                                <ThumbsUp className="w-2.5 h-2.5" />
                                {post.likes} {language === "en" ? "Likes" : "Me gusta"}
                            </button>
                            <button className="flex items-center gap-1.5 text-[8px] font-bold text-brand-sand/60 hover:text-brand-sand transition-colors">
                                <MessageSquare className="w-2.5 h-2.5" />
                                {post.replies} {language === "en" ? "Replies" : "Respuestas"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex gap-2">
                <input
                    type="text"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder={language === "en" ? "Ask something..." : "Pregunta algo..."}
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
