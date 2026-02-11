"use client";

import React, { useState, useEffect } from "react";
import { Download, X, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function InstallPWA() {
    const { language } = useLanguage();
    const [show, setShow] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        // Check if the app is already installed
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        if (isStandalone) return;

        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShow(true);
        };

        window.addEventListener("beforeinstallprompt", handler);

        // Manual check for iOS (which doesn't support beforeinstallprompt)
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        if (isIOS && !isStandalone) {
            // For iOS, we just show a hint since we can't trigger the system prompt
            const timer = setTimeout(() => setShow(true), 3000);
            return () => clearTimeout(timer);
        }

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) {
            // Hint for iOS or browsers without beforeinstallprompt
            alert(language === 'en'
                ? "To install: Tap the 'Share' icon and then 'Add to Home Screen'!"
                : "Para instalar: ¡Toca el icono de 'Compartir' y luego 'Añadir a la pantalla de inicio'!");
            setShow(false);
            return;
        }

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setShow(false);
        }
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-24 left-6 right-6 z-50 animate-in slide-in-from-bottom-8 duration-500">
            <div className="bg-brand-navy text-white p-5 rounded-[2.5rem] shadow-2xl border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-teal rounded-2xl">
                        <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm">
                            {language === 'en' ? 'Install immiGrow' : 'Instalar immiGrow'}
                        </h4>
                        <p className="text-[10px] text-white/60 font-medium">
                            {language === 'en'
                                ? 'Access faster and offline'
                                : 'Accede más rápido y sin conexión'}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleInstall}
                        className="bg-white text-brand-navy px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-brand-sun transition-all active:scale-95"
                    >
                        {language === 'en' ? 'Add' : 'Añadir'}
                    </button>
                    <button
                        onClick={() => setShow(false)}
                        className="p-2 text-white/40 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
