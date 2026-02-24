'use client';

import React from 'react';
import { Shield, Heart, Plane, Users, Link as LinkIcon, Download, Printer, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function OutreachPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header section for the app view */}
            <div className="bg-emerald-600 text-white py-12 px-6 rounded-b-[3.5rem] shadow-lg mb-10 print:hidden">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-3xl font-heading font-black mb-2 text-center">Material de Difusión</h1>
                    <p className="text-emerald-50 text-center">Ayúdanos a llegar a más migrantes compartiendo este flyer.</p>
                </div>
            </div>

            <main className="container mx-auto px-6 max-w-4xl">
                <div className="flex justify-end mb-6 space-x-4 print:hidden">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-emerald-100 text-emerald-700 font-bold hover:bg-emerald-50 transition-colors"
                    >
                        <Printer size={18} />
                        <span>Imprimir Flyer</span>
                    </button>
                </div>

                {/* Printable Flyer starts here */}
                <div className="bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-slate-100 aspect-[1/1.414] max-w-2xl mx-auto print:shadow-none print:border-none print:m-0 relative">
                    {/* The Full Background Gradient */}
                    <div className="absolute inset-0"
                        style={{ background: 'linear-gradient(180deg, #059669 0%, #10b981 40%, #06b6d4 100%)' }}></div>

                    <div className="relative h-full flex flex-col items-center justify-between p-12 text-center text-white">
                        {/* Original Suitcase Logo */}
                        <div className="mt-4 mb-4">
                            <div className="bg-white/20 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/30 shadow-xl">
                                <img
                                    src="/logo_final.png"
                                    alt="immiGrow Logo"
                                    className="w-24 h-24 object-contain drop-shadow-lg"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 drop-shadow-md tracking-tight leading-tight">
                                immiGrow: Your Dublin Journey Starts Here
                            </h2>
                            <div className="h-1.5 w-32 bg-white/40 rounded-full mb-8"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-8 w-full px-8 mb-8">
                            <div className="flex flex-col items-center">
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-2 border border-white/20">
                                    <Heart className="text-white" size={24} />
                                </div>
                                <span className="text-sm font-black uppercase tracking-wider">Health</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-2 border border-white/20">
                                    <Users className="text-white" size={24} />
                                </div>
                                <span className="text-sm font-black uppercase tracking-wider">Activity</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-2 border border-white/20">
                                    <MessageSquare className="text-white" size={24} />
                                </div>
                                <span className="text-sm font-black uppercase tracking-wider">Community</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="p-6 bg-white rounded-3xl shadow-2xl border-4 border-white">
                                <img
                                    src="/qrcode_ready.png"
                                    alt="QR Code immiGrow"
                                    className="w-40 h-40"
                                />
                            </div>
                            <p className="mt-4 text-xs font-black tracking-widest uppercase opacity-80 decoration-white">Scan to Download</p>
                        </div>

                        <div className="w-full mt-4 py-8 border-t border-white/20">
                            <p className="text-xl font-black italic tracking-wide">Hecho por migrantes, para migrantes</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-slate-400 text-sm print:hidden">
                    <p>Consejo: Imprime esto en papel grueso o cartulina para colocarlo en locales o centros comunitarios.</p>
                </div>
            </main>
        </div>
    );
}
