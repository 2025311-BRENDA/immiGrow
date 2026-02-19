import React, { useState, useEffect } from "react";
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
import { supabase } from "@/lib/supabase";

interface Post {
    id: string;
    author: string;
    content: string;
    likes: number;
    replies: any[];
    created_at: string;
}

export function Forum() {
    const { language, t, userName } = useLanguage();
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewPost] = useState("");
    const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
    const [replyText, setReplyText] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error("Error fetching posts:", error);
        } else if (data) {
            setPosts(data as Post[]);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts();

        // Optional: Real-time subscription
        const channel = supabase
            .channel('public:posts')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, () => {
                fetchPosts();
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const handleSend = async () => {
        if (!newPost.trim()) return;

        const { error } = await supabase
            .from('posts')
            .insert([{
                author: userName || "Visitante",
                content: newPost,
                likes: 0,
                replies: []
            }]);

        if (error) {
            console.error("Error adding post:", error);
        } else {
            setNewPost("");
            fetchPosts();
        }
    };

    const handleAddReply = async (postId: string) => {
        if (!replyText.trim()) return;

        const postToUpdate = posts.find(p => p.id === postId);
        if (!postToUpdate) return;

        const newReply = {
            id: Date.now().toString(),
            author: userName || "Visitante",
            content: replyText,
            time: "Just now"
        };

        const { error } = await supabase
            .from('posts')
            .update({ replies: [...postToUpdate.replies, newReply] })
            .eq('id', postId);

        if (error) {
            console.error("Error adding reply:", error);
        } else {
            setReplyText("");
            fetchPosts();
        }
    };

    const handleLike = async (postId: string, currentLikes: number) => {
        const { error } = await supabase
            .from('posts')
            .update({ likes: currentLikes + 1 })
            .eq('id', postId);

        if (error) console.error("Error liking post:", error);
        else fetchPosts();
    };

    const selectedPost = posts.find(p => p.id === selectedPostId);

    return (
        <section className="bg-brand-navy rounded-[2rem] p-6 text-white shadow-xl overflow-hidden relative min-h-[400px]">
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
                {loading && posts.length === 0 ? (
                    <div className="flex items-center justify-center w-full py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-sand"></div>
                    </div>
                ) : posts.length === 0 ? (
                    <div className="text-center w-full py-10 opacity-40">
                        <p className="text-xs">{language === 'es' ? 'No hay hilos aún. ¡Inicia uno!' : 'No threads yet. Start one!'}</p>
                    </div>
                ) : (
                    posts.map(post => (
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
                                    <span className="text-[8px] opacity-40">{new Date(post.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <p className="text-xs leading-relaxed mb-3 text-white/90 line-clamp-3 h-[48px]">{post.content}</p>

                            <div className="flex gap-4">
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleLike(post.id, post.likes); }}
                                    className="flex items-center gap-1.5 text-[8px] font-bold text-brand-sand/60 hover:text-brand-sand transition-colors"
                                >
                                    <ThumbsUp className="w-2.5 h-2.5" />
                                    {post.likes} {t("forum.likes")}
                                </button>
                                <button className="flex items-center gap-1.5 text-[8px] font-bold text-brand-sand/60 hover:text-brand-sand transition-colors">
                                    <Reply className="w-2.5 h-2.5" />
                                    {post.replies?.length || 0} {t("forum.replies")}
                                </button>
                            </div>
                        </div>
                    ))
                )}
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
                                    <span className="text-[10px] text-white/40">{new Date(selectedPost.created_at).toLocaleString()}</span>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-white/90 mb-4">{selectedPost.content}</p>
                            <div className="flex gap-4 pt-4 border-t border-white/5">
                                <button
                                    onClick={() => handleLike(selectedPost.id, selectedPost.likes)}
                                    className="flex items-center gap-2 text-[10px] font-bold text-brand-sand/60 hover:text-brand-sand"
                                >
                                    <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                                    {selectedPost.likes} {t("forum.likes")}
                                </button>
                            </div>
                        </div>

                        {/* Replies */}
                        <div className="space-y-4">
                            {selectedPost.replies?.map((reply, i) => (
                                <div key={i} className="flex gap-4">
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
