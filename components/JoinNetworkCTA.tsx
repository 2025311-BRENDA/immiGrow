import React from 'react';
import { Mail, UserPlus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const JoinNetworkCTA: React.FC = () => {
    const { language } = useLanguage();

    const title = language === "en" ? "Are you a professional?" : "¿Eres un profesional?";
    const description = language === "en"
        ? "Join our network of trusted professionals and help the migrant community in Dublin."
        : "Únete a nuestra red de profesionales de confianza y ayuda a la comunidad migrante en Dublín.";
    const buttonText = language === "en" ? "Apply to Join" : "Solicitar Unirse";

    const emailSubject = language === "en"
        ? "Professional Network Application - ImmiGrow"
        : "Solicitud Red de Profesionales - ImmiGrow";

    const emailBody = language === "en"
        ? "Hello,\n\nI am interested in joining the ImmiGrow professional network.\n\nName:\nRole:\nSpecialty:\nLocation:\n\nThank you."
        : "Hola,\n\nEstoy interesado en unirme a la red de profesionales de ImmiGrow.\n\nNombre:\nRol:\nEspecialidad:\nUbicación:\n\nGracias.";

    const mailtoLink = `mailto:join@immigrow.ie?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    return (
        <div className="mt-8 bg-brand-navy/5 border border-brand-navy/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center text-brand-navy shrink-0">
                    <UserPlus className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-brand-navy text-lg">{title}</h3>
                    <p className="text-slate-600 text-sm max-w-md">{description}</p>
                </div>
            </div>
            <a
                href={mailtoLink}
                className="whitespace-nowrap px-6 py-3 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-navy/90 transition-colors flex items-center gap-2"
            >
                <Mail className="w-4 h-4" />
                {buttonText}
            </a>
        </div>
    );
};

export default JoinNetworkCTA;
