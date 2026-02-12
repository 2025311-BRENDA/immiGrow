"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es" | "pt";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (key: string) => string;
    userName: string;
    setUserName: (name: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const dictionaries = {
    en: {
        "nav.home": "Home",
        "nav.tourism": "Active Tourism",
        "nav.parks": "Parks",
        "nav.swimming": "Swimming",
        "nav.cycling": "Cycling",
        "nav.mental": "Mental Health",
        "nav.women": "Women's Health",
        "nav.procedures": "Procedures",
        "nav.community": "Community",
        "nav.vault": "My Vault",
        "nav.achievements": "Achievements",
        "nav.socialFit": "Social Fitness",
        "nav.more": "More",
        "nav.physical_activity": "Physical",
        "nav.health": "Health",
        "nav.admin": "Resources",
        "nav.physiotherapy": "Physio",
        "nav.calculator": "Calculator",
        "nav.jobs": "Jobs & Careers",
        "nav.slang": "Speak like a Local",
        "nav.active": "Active Tourism",
        "btn.visit": "Visit Official Website",
        "lbl.backTo": "Back to",
        "lbl.gettingThere": "Getting There",
        "lbl.highlights": "Highlights",
        "lbl.offices": "Office Locations",
        "lbl.expiry": "Expiry Date",
        "lbl.reminder": "Renewal Reminder",
        "lbl.completeRoute": "Mark as Completed",
        "lbl.completed": "Completed!",
        "lbl.badges": "Badges",
        "lbl.trainWithMe": "Train With Me",
        "lbl.collectiveGoal": "Collective Goal",
        "hero.greeting": "G'day,",
        "hero.subtitle": "Ready to explore?",
        "challenge.title": "Daily Challenge",
        "challenge.name": "Nature Walk & Reflection",
        "challenge.desc": "Find a quiet spot in St. Stephen's Green and spend 10 minutes observing the locals.",
        "btn.startNow": "Start Now",
        "common.viewAll": "View all",
        "cat.body": "Body",
        "cat.explore": "Explore",
        "cat.wellness": "Wellness",
        "cat.social": "Social",
        "cat.admin": "Admin",
        "cat.extras": "Extras",
        "home.quickAccess": "Quick Access",
        "nav.lang": "Language",
        "nav.lang_name": "English",
        "nav.lang_toggle": "Português",
        "event.title": "Upcoming Events",
        "event.subtitle": "Free and community-focused meetups.",
        "event.free": "Free Entry",
        "event.viewFull": "View Full Calendar",
        "forum.title": "Community Forum",
        "forum.subtitle": "Ask questions, share tips.",
        "forum.likes": "Likes",
        "forum.replies": "Replies",
        "forum.placeholder": "Ask something...",
        "weather.good": "Perfect for a walk",
        "weather.bad": "Indoor Activity Recommended",
        "weather.clear": "Clear",
        "weather.cloudy": "Partly Cloudy",
        "weather.rain": "Raining",
        "weather.storm": "Thunderstorm",
        "weather.fog": "Foggy",
        "roadmap.title": "Newcomer Roadmap",
        "roadmap.subtitle": "Essential steps for your first weeks",
        "search.placeholder": "Search Dublin resources...",
        "search.popular": "Popular Keywords",
        "search.results": "Results",
        "search.noResults": "No results found...",
        "exercise.title": "Universal Fitness",
        "exercise.subtitle": "Adaptive routes and activities for everyone. Choose a category to start exploring.",
        "exercise.cat.parks.title": "Park Walking Circuits",
        "exercise.cat.parks.desc": "Directory of walking routes in Dublin's best parks (Phoenix, St. Anne's, Fairview, etc.).",
        "exercise.cat.swimming.title": "Open Water Swimming",
        "exercise.cat.swimming.desc": "Directory of sea swimming spots (Seapoint, Forty Foot, Vico, etc.).",
        "exercise.cat.cycling.title": "Cycling Routes",
        "exercise.cat.cycling.desc": "Safe cycle lanes and greenways (Clontarf, Phoenix Park, Canals).",
        "exercise.cat.gyms.title": "Public Gyms & Pools",
        "exercise.cat.gyms.desc": "Affordable, high-quality leisure centers run by Dublin City Council.",
        "exercise.cat.physio.title": "Physiotherapy & Recovery",
        "exercise.cat.physio.desc": "Find community physiotherapists and clinics.",
        "exercise.cat.run.title": "Dublin Bay Coastal Run",
        "exercise.cat.run.desc": "5km scenic route along the coast. Enjoy the sea breeze and flat terrain.",
        "exercise.cat.walk.title": "Liffey River Walk",
        "exercise.cat.walk.desc": "A gentle 2km loop along the River Liffey. Perfect for beginners or rehabilitation.",
        "exercise.cat.teams.title": "Community Sports Teams",
        "exercise.cat.teams.desc": "Join free amateur teams for Football, Rugby, or GAA (Gaelic games) in parks like Fairview Park.",
        "jobs.title": "Dublin Ready",
        "jobs.subtitle": "Your guide to finding work and building a career in Ireland.",
        "jobs.training": "Training & Education",
        "jobs.sb.desc": "Free and heavily subsidized higher education courses.",
        "jobs.solas.desc": "Further Education and Training authority in Ireland.",
        "mental.subtitle": "Support, community, and professional resources for your mental well-being.",
        "mental.professionals": "Recommended Professionals",
        "procedures.subtitle": "Essential guides for life in Ireland. PPSN, Housing, Visa, and more.",
        "tourism.subtitle": "Explore Dublin and its surroundings. Hikes, walks, and scenic spots.",
        "diff.easy": "Easy",
        "diff.medium": "Medium",
        "diff.hard": "Hard",
    },
    es: {
        "nav.home": "Inicio",
        "nav.tourism": "Turismo Activo",
        "nav.parks": "Parques",
        "nav.swimming": "Natación",
        "nav.cycling": "Ciclismo",
        "nav.mental": "Salud Mental",
        "nav.women": "Salud de la Mujer",
        "nav.procedures": "Trámites",
        "nav.community": "Comunidad",
        "nav.vault": "Mi Bóveda",
        "nav.achievements": "Logros",
        "nav.socialFit": "Fitness Social",
        "nav.more": "Más",
        "nav.physical_activity": "Actividad",
        "nav.health": "Bienestar",
        "nav.admin": "Recursos",
        "nav.physiotherapy": "Fisioterapia",
        "nav.calculator": "Calculadora",
        "nav.jobs": "Trabajos",
        "nav.slang": "Habla como Local",
        "nav.active": "Rutas Activas",
        "btn.visit": "Visitar Sitio Oficial",
        "lbl.backTo": "Volver a",
        "lbl.gettingThere": "Cómo llegar",
        "lbl.highlights": "Destacados",
        "lbl.offices": "Ubicación de Oficinas",
        "lbl.expiry": "Fecha de Vencimiento",
        "lbl.reminder": "Recordatorio de Renovación",
        "lbl.completeRoute": "Marcar como Completada",
        "lbl.completed": "¡Completada!",
        "lbl.badges": "Medallas",
        "lbl.trainWithMe": "Entrena Conmigo",
        "lbl.collectiveGoal": "Meta Colectiva",
        "hero.greeting": "Hola,",
        "hero.subtitle": "¿Listo para explorar?",
        "challenge.title": "Reto del Día",
        "challenge.name": "Paseo y Reflexión",
        "challenge.desc": "Encuentra un lugar tranquilo en St. Stephen's Green y dedica 10 minutos a observar tu entorno.",
        "btn.startNow": "Empezar Ahora",
        "common.viewAll": "Ver todos",
        "cat.body": "Cuerpo",
        "cat.explore": "Explorar",
        "cat.wellness": "Bienestar",
        "cat.social": "Social",
        "cat.admin": "Trámites",
        "cat.extras": "Extras",
        "home.quickAccess": "Acceso Rápido",
        "nav.lang": "Idioma",
        "nav.lang_name": "Español",
        "nav.lang_toggle": "English",
        "event.title": "Próximos Eventos",
        "event.subtitle": "Encuentros gratuitos y comunitarios.",
        "event.free": "Entrada Gratis",
        "event.viewFull": "Ver Calendario Completo",
        "forum.title": "Foro de la Comunidad",
        "forum.subtitle": "Haz preguntas, comparte consejos.",
        "forum.likes": "Me gusta",
        "forum.replies": "Respuestas",
        "forum.placeholder": "Pregunta algo...",
        "weather.good": "Perfecto para un paseo",
        "weather.bad": "Actividad en Interior Recomendada",
        "weather.clear": "Despejada",
        "weather.cloudy": "Parcialmente Nublado",
        "weather.rain": "Lloviendo",
        "weather.storm": "Tormenta",
        "weather.fog": "Niebla",
        "roadmap.title": "Hoja de Ruta",
        "roadmap.subtitle": "Pasos esenciales para tus primeras semanas",
        "search.placeholder": "Buscar recursos en Dublín...",
        "search.popular": "Palabras Clave",
        "search.results": "Resultados",
        "search.noResults": "No se encontraron resultados...",
        "exercise.title": "Fitness Universal",
        "exercise.subtitle": "Rutas y actividades adaptativas para todos. Elige una categoría para empezar a explorar.",
        "exercise.cat.parks.title": "Circuitos de Caminata en Parques",
        "exercise.cat.parks.desc": "Directorio de rutas de caminata en los mejores parques de Dublín (Phoenix, St. Anne's, Fairview, etc.).",
        "exercise.cat.swimming.title": "Natación en Aguas Abiertas",
        "exercise.cat.swimming.desc": "Directorio de lugares para nadar en el mar (Seapoint, Forty Foot, Vico, etc.).",
        "exercise.cat.cycling.title": "Rutas de Ciclismo",
        "exercise.cat.cycling.desc": "Ciclovías seguras y vías verdes (Clontarf, Phoenix Park, Canales).",
        "exercise.cat.gyms.title": "Gimnasios Públicos y Piscinas",
        "exercise.cat.gyms.desc": "Centros de ocio asequibles y de alta calidad gestionados por el Ayuntamiento de Dublín.",
        "exercise.cat.physio.title": "Fisioterapia y Recuperación",
        "exercise.cat.physio.desc": "Encuentra fisioterapeutas comunitarios y clínicas.",
        "exercise.cat.run.title": "Carrera Costera de Dublín",
        "exercise.cat.run.desc": "Ruta escénica de 5km por la costa. Disfruta la brisa marina y terreno plano.",
        "exercise.cat.walk.title": "Paseo del Río Liffey",
        "exercise.cat.walk.desc": "Un bucle suave de 2km a lo largo del Río Liffey. Perfecto para principiantes o rehabilitación.",
        "exercise.cat.teams.title": "Equipos Deportivos Comunitarios",
        "exercise.cat.teams.desc": "Únete a equipos amateur gratuitos de fútbol, rugby o GAA en parques como Fairview.",
        "jobs.title": "Listo para Dublín",
        "jobs.subtitle": "Tu guía para encontrar trabajo y forjar una carrera en Irlanda.",
        "jobs.training": "Formación y Educación",
        "jobs.sb.desc": "Cursos de educación superior gratuitos y altamente subvencionados.",
        "jobs.solas.desc": "Autoridad de Educación y Formación Continua en Irlanda.",
        "mental.subtitle": "Apoyo, comunidad y recursos profesionales para tu bienestar mental.",
        "mental.professionals": "Profesionales Recomendados",
        "procedures.subtitle": "Guías esenciales para la vida en Irlanda. PPSN, Vivienda, Visa y más.",
        "tourism.subtitle": "Explora Dublín y sus alrededores. Caminatas y lugares escénicos.",
        "diff.easy": "Fácil",
        "diff.medium": "Medio",
        "diff.hard": "Difícil",
    },
    pt: {
        "nav.home": "Início",
        "nav.tourism": "Turismo Ativo",
        "nav.parks": "Parques",
        "nav.swimming": "Natação",
        "nav.cycling": "Ciclismo",
        "nav.mental": "Saúde Mental",
        "nav.women": "Saúde da Mulher",
        "nav.procedures": "Processos",
        "nav.community": "Comunidade",
        "nav.vault": "Meu Cofre",
        "nav.achievements": "Conquistas",
        "nav.socialFit": "Social Fit",
        "nav.more": "Mais",
        "nav.physical_activity": "Atividade",
        "nav.health": "Saúde",
        "nav.admin": "Recursos",
        "nav.physiotherapy": "Fisio",
        "nav.calculator": "Calculadora",
        "nav.active": "Rotas Ativas",
        "btn.visit": "Visitar Site Oficial",
        "lbl.backTo": "Voltar para",
        "lbl.gettingThere": "Como chegar",
        "lbl.highlights": "Destaques",
        "lbl.offices": "Localização",
        "lbl.expiry": "Data de Expiração",
        "lbl.reminder": "Lembrete de Renovação",
        "lbl.completeRoute": "Marcar como Concluída",
        "lbl.completed": "Concluído!",
        "lbl.badges": "Medalhas",
        "lbl.trainWithMe": "Treine Comigo",
        "lbl.collectiveGoal": "Meta Coletiva",
        "hero.greeting": "Olá,",
        "hero.subtitle": "Pronto para explorar?",
        "challenge.title": "Desafio do Dia",
        "challenge.name": "Passeio e Reflexão",
        "challenge.desc": "Encontre um lugar calmo no St. Stephen's Green e tire 10 minutos para observar seu redor.",
        "btn.startNow": "Começar Agora",
        "common.viewAll": "Ver todos",
        "cat.body": "Corpo",
        "cat.explore": "Explorar",
        "cat.wellness": "Bem-estar",
        "cat.social": "Social",
        "cat.admin": "Processos",
        "cat.extras": "Extras",
        "home.quickAccess": "Acesso Rápido",
        "nav.lang": "Idioma",
        "nav.lang_name": "Português",
        "nav.lang_toggle": "Español",
        "event.title": "Próximos Eventos",
        "event.subtitle": "Encontros gratuitos e comunitários.",
        "event.free": "Entrada Grátis",
        "event.viewFull": "Ver Calendário Completo",
        "forum.title": "Fórum da Comunidade",
        "forum.subtitle": "Tire dúvidas, compartilhe dicas.",
        "forum.likes": "Curtidas",
        "forum.replies": "Respostas",
        "forum.placeholder": "Pergunte algo...",
        "weather.good": "Perfeito para um passeio",
        "weather.bad": "Atividade Interna Recomendada",
        "weather.clear": "Céu Limpo",
        "weather.cloudy": "Parcialmente Nublado",
        "weather.rain": "Chovendo",
        "weather.storm": "Tempestade",
        "weather.fog": "Neblina",
        "roadmap.title": "Guia do Recém-Chegado",
        "roadmap.subtitle": "Passos essenciais para suas primeiras semanas",
        "search.placeholder": "Buscar recursos em Dublin...",
        "search.popular": "Palavras-chave",
        "search.results": "Resultados",
        "search.noResults": "Nenhum resultado encontrado...",
        "exercise.title": "Fitness Universal",
        "exercise.subtitle": "Rotas e atividades adaptáveis para todos. Escolha uma categoria para começar.",
        "exercise.cat.parks.title": "Circuitos em Parques",
        "exercise.cat.parks.desc": "Diretório de rotas nos melhores parques de Dublin (Phoenix, St. Anne's, Fairview, etc.).",
        "exercise.cat.swimming.title": "Natação em Mar Aberto",
        "exercise.cat.swimming.desc": "Diretório de pontos de natação no mar (Seapoint, Forty Foot, Vico, etc.).",
        "exercise.cat.cycling.title": "Rotas de Ciclismo",
        "exercise.cat.cycling.desc": "Ciclovias seguras e vias verdes (Clontarf, Phoenix Park, Canais).",
        "exercise.cat.gyms.title": "Gimnasios Públicos e Piscinas",
        "exercise.cat.gyms.desc": "Centros de lazer acessíveis e de alta qualidade geridos pela Prefeitura.",
        "exercise.cat.physio.title": "Fisioterapia e Recuperação",
        "exercise.cat.physio.desc": "Encontre fisioterapeutas comunitários e clínicas.",
        "exercise.cat.run.title": "Corrida Costeira de Dublin",
        "exercise.cat.run.desc": "Rota cênica de 5km pela costa. Aproveite a brisa do mar e terreno plano.",
        "exercise.cat.walk.title": "Passeio pelo Rio Liffey",
        "exercise.cat.walk.desc": "Um circuito suave de 2km ao longo do Rio Liffey. Perfeito para iniciantes.",
        "exercise.cat.teams.title": "Times Esportivos Comunitários",
        "exercise.cat.teams.desc": "Participe de times amadores gratuitos de Futebol, Rugby ou GAA em parques locais.",
        "jobs.title": "Pronto para Dublin",
        "jobs.subtitle": "Seu guia para encontrar trabalho e construir carreira na Irlanda.",
        "jobs.training": "Treinamento e Educação",
        "jobs.sb.desc": "Cursos de ensino superior gratuitos ou altamente subsidiados.",
        "jobs.solas.desc": "Autoridade de Educação e Treinamento Profissional na Irlanda.",
        "mental.subtitle": "Apoio, comunidade e recursos profissionais para seu bem-estar mental.",
        "mental.professionals": "Profissionais Recomendados",
        "procedures.subtitle": "Guias essenciais para a vida na Irlanda. PPSN, Aluguel, Visto e mais.",
        "tourism.subtitle": "Explore Dublin e arredores. Trilhas, caminhadas e pontos turísticos.",
        "diff.easy": "Fácil",
        "diff.medium": "Médio",
        "diff.hard": "Difícil",
    }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");
    const [userName, setUserNameState] = useState<string>("");

    useEffect(() => {
        const savedLang = localStorage.getItem('iGrow_lang') as Language;
        if (savedLang) setLanguage(savedLang);

        const savedName = localStorage.getItem('iGrow_user');
        if (savedName) setUserNameState(savedName || "");
    }, []);

    const setUserName = (name: string) => {
        setUserNameState(name);
        localStorage.setItem('iGrow_user', name);
    };

    const changeLanguage = (newLang: Language) => {
        setLanguage(newLang);
        localStorage.setItem('iGrow_lang', newLang);
    };

    const toggleLanguage = () => {
        setLanguage((prev) => {
            let newLang: Language;
            if (prev === "en") newLang = "pt";
            else if (prev === "pt") newLang = "es";
            else newLang = "en";

            localStorage.setItem('iGrow_lang', newLang);
            return newLang;
        });
    };

    const t = (key: string) => {
        const dict = dictionaries[language] as Record<string, string>;
        return dict[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, toggleLanguage, t, userName, setUserName }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
