"use client";

import React, { useState, useEffect } from "react";
import { X, Smartphone, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function InstallPWA() {
    const { language } = useLanguage();
    const [show, setShow] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        // Check if the app is already installed
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        if (isStandalone) return;

        // Check if user dismissed it in this session or recently
        const dismissed = localStorage.getItem("immigrow_install_dismissed");
        if (dismissed) {
            // If dismissed more than 24h ago, we can show again
            const dismissedDate = new Date(parseInt(dismissed));
            const now = new Date();
            const hoursSinceDismissal = Math.abs(now.getTime() - dismissedDate.getTime()) / 36e5;
            if (hoursSinceDismissal < 24) return;
        }

        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShow(true);
        };

        window.addEventListener("beforeinstallprompt", handler);

        // Manual check for iOS
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        if (isIOS && !isStandalone) {
            const timer = setTimeout(() => setShow(true), 2000);
            return () => clearTimeout(timer);
        }

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) {
            alert(language === 'en'
                ? "To install: Tap the 'Share' icon and then 'Add to Home Screen'!"
                : "Para instalar: ¡Toca el icono de 'Compartir' y luego 'Añadir a la pantalla de inicio'!");
            return;
        }

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setShow(false);
        }
    };

    const handleDismiss = () => {
        localStorage.setItem("immigrow_install_dismissed", Date.now().toString());
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-[90px] left-4 right-4 z-[60] animate-in slide-in-from-bottom-10 duration-700 ease-out flex justify-center">
            <div className="bg-brand-navy text-white p-5 rounded-[2rem] shadow-2xl border border-white/10 flex items-center justify-between gap-4 backdrop-blur-lg bg-opacity-95 w-full max-w-lg">
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-brand-teal rounded-xl shadow-inner">
                        <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[11px] leading-tight">
                            {language === 'en' ? 'Get the App' : 'Descargar App'}
                        </h4>
                        <p className="text-[9px] text-white/50">
                            {language === 'en' ? 'Faster access' : 'Acceso rápido'}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleInstall}
                        className="bg-brand-sun text-brand-navy px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:scale-105 transition-all active:scale-95 shadow-lg shadow-brand-sun/20"
                    >
                        {language === 'en' ? 'Install' : 'Instalar'}
                    </button>
                    <button
                        onClick={handleDismiss}
                        className="p-2 text-white/30 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
