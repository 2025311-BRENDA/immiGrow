"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Bell,
  Search,
  Activity,
  Brain,
  Users,
  FileText,
  Heart,
  Award,
  Shield,
  ChevronRight,
  MapPin,
  Calendar,
  MapPinned,
  Home as HomeIcon,
  Briefcase,
  Calculator,
  Stethoscope
} from "lucide-react";

import { Roadmap } from "@/components/Roadmap";
import { WeatherWidget } from "@/components/WeatherWidget";
import { Forum } from "@/components/Forum";
import { SOSButton } from "@/components/SOSButton";
import { EventCalendar } from "@/components/EventCalendar";
import { parks, swimming, cycling, tourism, procedures, roadmapData } from "@/lib/data";
import { parksEs, swimmingEs, cyclingEs, tourismEs, proceduresEs, roadmapDataEs } from "@/lib/data_es";
import { GlobalSearch } from "@/components/GlobalSearch";

export default function Home() {
  const { t, language } = useLanguage();
  const [completedCount, setCompletedCount] = useState(0);

  const updateCount = () => {
    const saved = localStorage.getItem("migrawell_completed");
    if (saved) {
      setCompletedCount(JSON.parse(saved).length);
    }
  };

  useEffect(() => {
    updateCount();
    window.addEventListener("roadmapUpdated", updateCount);
    return () => window.removeEventListener("roadmapUpdated", updateCount);
  }, []);

  const progressPercentage = Math.min((completedCount / 10) * 100, 100);

  return (
    <main className="min-h-screen bg-brand-sand pb-24">
      {/* Vibrant Hero Header Section */}
      <section className="bg-gradient-to-br from-brand-irish-green to-brand-turquoise pt-12 pb-16 px-6 rounded-b-[3.5rem] relative overflow-hidden shadow-inner border-b border-white/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-sun/10 rounded-full -ml-16 -mb-16 blur-2xl" />

        <div className="container mx-auto relative z-10">
          <div className="flex justify-between items-start mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                  <HomeIcon className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-white font-heading text-lg font-black tracking-tight tracking-widest">ImmiGrow</h1>
              </div>
              <div className="flex items-center gap-2 text-brand-sand/60">
                <MapPin className="w-3 h-3 text-brand-sun" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Dublin, Ireland</span>
              </div>
            </div>
            <button className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 relative hover:bg-white/20 transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-sun rounded-full ring-2 ring-brand-irish-green"></span>
            </button>
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                {language === "en" ? "G'day," : "Hola,"} <br />
                <span className="text-brand-sun">{language === "en" ? "Ready to explore?" : "¿Lista para explorar?"}</span>
              </h2>
            </div>

            <div className="relative shrink-0">
              <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 p-1 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-sun/20 to-transparent pointer-events-none" />
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Clara&backgroundColor=c0aede"
                  alt="Profile"
                  className="w-full h-full rounded-2xl bg-brand-sand/20"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white text-brand-irish-green p-1.5 rounded-xl shadow-lg border border-slate-100">
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Weather Widget for Dublin */}
          <div className="mt-8">
            <WeatherWidget />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-8 space-y-10">
        {/* Keyword Search Section */}
        <section className="relative z-20 -mt-14">
          <GlobalSearch />
        </section>

        {/* Daily Challenge Card */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-heading font-bold text-lg text-brand-navy">
              {language === "en" ? "Daily Challenge" : "Reto del Día"}
            </h3>
            <Link href="/community/social-fit" className="text-brand-teal text-xs font-bold hover:underline">
              {language === "en" ? "View all" : "Ver todos"}
            </Link>
          </div>
          <div className="bg-brand-sand/50 rounded-[2rem] overflow-hidden border border-brand-sand shadow-sm group">
            <div className="flex flex-col md:flex-row">
              <div className="h-48 md:w-1/3 bg-cover bg-center transition-transform group-hover:scale-105 duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000')" }}></div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-brand-navy mb-2">Nature Walk & Reflection</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {language === "en"
                    ? "Find a quiet spot in St. Stephen's Green and spend 10 minutes observing the locals."
                    : "Encuentra un lugar tranquilo en St. Stephen's Green y dedica 10 minutos a observar tu entorno."}
                </p>
                <Link
                  href="/exercise/parks/st-stephens-green"
                  className="bg-brand-navy text-white text-center py-3 rounded-2xl font-bold text-sm hover:bg-brand-navy/90 transition-all shadow-md active:scale-95"
                >
                  {language === "en" ? "Start Now" : "Empezar Ahora"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Roadmap />

        <Forum />

        {/* Categories Grid - Vibrant & Organized */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Category: Exercise */}
            <Link href="/exercise" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-turquoise/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-turquoise/10 transition-colors" />
              <div className="p-3 bg-brand-turquoise/10 text-brand-turquoise rounded-2xl w-fit mb-4 group-hover:bg-brand-turquoise group-hover:text-white transition-all shadow-sm">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-brand-turquoise/60 text-[10px] font-black uppercase tracking-widest">{language === "en" ? "Body" : "Cuerpo"}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{language === "en" ? "Exercise" : "Ejercicio"}</h4>
            </Link>

            {/* Category: Tourism */}
            <Link href="/tourism" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sun/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-sun/10 transition-colors" />
              <div className="p-3 bg-brand-sun/10 text-brand-sun rounded-2xl w-fit mb-4 group-hover:bg-brand-sun group-hover:text-brand-navy transition-all shadow-sm">
                <MapPinned className="w-6 h-6" />
              </div>
              <span className="text-brand-sun/60 text-[10px] font-black uppercase tracking-widest">{language === "en" ? "Explore" : "Explorar"}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{t("nav.tourism")}</h4>
            </Link>

            {/* Category: Mental Health */}
            <Link href="/mental-health" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-purple/10 transition-colors" />
              <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-2xl w-fit mb-4 group-hover:bg-brand-purple group-hover:text-white transition-all shadow-sm">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-brand-purple/60 text-[10px] font-black uppercase tracking-widest">{language === "en" ? "Mind" : "Mente"}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{t("nav.mental")}</h4>
            </Link>

            {/* Category: Women's Health */}
            <Link href="/womens-health" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/10 rounded-full -mr-8 -mt-8 group-hover:bg-brand-pink/20 transition-colors" />
              <div className="p-3 bg-brand-pink/20 text-brand-pink rounded-2xl w-fit mb-4 group-hover:bg-brand-pink group-hover:text-brand-navy transition-all shadow-sm">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-brand-pink/60 text-[10px] font-black uppercase tracking-widest">{language === "en" ? "Care" : "Cuidado"}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{t("nav.women")}</h4>
            </Link>

            {/* Category: Physiotherapy */}
            <Link href="/exercise/physiotherapy" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-teal/10 transition-colors" />
              <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-2xl w-fit mb-4 group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                <Stethoscope className="w-6 h-6" />
              </div>
              <span className="text-brand-teal/60 text-[10px] font-black uppercase tracking-widest">{language === "en" ? "Recovery" : "Recuperación"}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{language === "en" ? "Physio" : "Fisioterapia"}</h4>
            </Link>

            {/* Category: Community */}
            <Link href="/community" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sage/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-sage/10 transition-colors" />
              <div className="p-3 bg-brand-sage/10 text-brand-sage rounded-2xl w-fit mb-4 group-hover:bg-brand-sage group-hover:text-white transition-all shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-brand-sage/60 text-[10px] font-black uppercase tracking-widest">{language === "en" ? "Social" : "Social"}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{t("nav.community")}</h4>
            </Link>

            {/* Category: Procedures */}
            <Link href="/procedures" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sunset/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-sunset/10 transition-colors" />
              <div className="p-3 bg-brand-sunset/10 text-brand-sunset rounded-2xl w-fit mb-4 group-hover:bg-brand-sunset group-hover:text-white transition-all shadow-sm">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-brand-sunset/60 text-[10px] font-black uppercase tracking-widest">Visa & Housing</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{t("nav.procedures")}</h4>
            </Link>

            {/* Category: Jobs */}
            <Link href="/jobs" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-turquoise/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-turquoise/10 transition-colors" />
              <div className="p-3 bg-brand-turquoise/10 text-brand-turquoise rounded-2xl w-fit mb-4 group-hover:bg-brand-turquoise group-hover:text-white transition-all shadow-sm">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-brand-turquoise/60 text-[10px] font-black uppercase tracking-widest">{language === "en" ? "Work" : "Trabajo"}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{language === "en" ? "Jobs" : "Empleo"}</h4>
            </Link>

            {/* Category: Calculator */}
            <Link href="/calculator" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sun/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-sun/10 transition-colors" />
              <div className="p-3 bg-brand-sun/10 text-brand-sun rounded-2xl w-fit mb-4 group-hover:bg-brand-sun group-hover:text-brand-navy transition-all shadow-sm">
                <Calculator className="w-6 h-6" />
              </div>
              <span className="text-brand-sun/60 text-[10px] font-black uppercase tracking-widest">{language === "en" ? "Budget" : "Presupuesto"}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{language === "en" ? "Calculator" : "Calculadora"}</h4>
            </Link>
          </div>
        </section>

        <EventCalendar />

        {/* Shortcuts / Quick Actions */}
        <section className="pb-8 space-y-4">
          <h3 className="font-heading font-bold text-lg text-brand-navy px-1">
            {language === "en" ? "Quick Access" : "Acceso Rápido"}
          </h3>
          <div className="space-y-3">
            <Link href="/vault" className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-brand-navy" />
                <span className="font-bold text-sm text-brand-navy">{t("nav.vault")}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
            <Link href="/achievements" className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-brand-teal" />
                <span className="font-bold text-sm text-brand-navy">{t("nav.achievements")}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>
        </section>
      </div>
      <SOSButton />
    </main>
  );
}
