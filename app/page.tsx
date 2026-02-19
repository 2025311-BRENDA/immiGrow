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
  Stethoscope,
  Sparkles
} from "lucide-react";

import { Roadmap } from "@/components/Roadmap";
import { WeatherWidget } from "@/components/WeatherWidget";
import { Forum } from "@/components/Forum";
import { EventCalendar } from "@/components/EventCalendar";
import { parks, swimming, cycling, tourism, procedures, roadmapData } from "@/lib/data";
import { parksEs, swimmingEs, cyclingEs, tourismEs, proceduresEs, roadmapDataEs } from "@/lib/data_es";
import { parksPt, swimmingPt, cyclingPt, tourismPt, proceduresPt, roadmapPt } from "@/lib/data_pt";
import { GlobalSearch } from "@/components/GlobalSearch";
import { InstallPWA } from "@/components/InstallPWA";

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
    <main className="min-h-screen bg-brand-sand pb-16">
      {/* Redesigned Hero Header Section to match screenshot */}
      <section className="bg-gradient-to-br from-[#009B48] via-[#009B48] to-[#2EBCC9] pt-6 pb-12 px-6 rounded-b-[3.5rem] relative overflow-hidden shadow-xl">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-turquoise/10 rounded-full -ml-16 -mb-16 blur-2xl" />

        <div className="container mx-auto relative z-10">
          {/* Header Row: Notifications Only (Logo is now in sticky Navbar) */}
          <div className="flex justify-end items-center mb-4">
            <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 relative hover:bg-white/20 transition-all shadow-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-brand-sun rounded-full ring-4 ring-[#009B48]"></span>
            </button>
          </div>

          {/* Location Tag */}
          <div className="flex items-center gap-2 text-white/90 mb-6">
            <MapPin className="w-4 h-4 text-brand-sun fill-brand-sun" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Dublin, Ireland</span>
          </div>

          <div className="flex items-center justify-between gap-8 mb-6">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                {t("hero.greeting")}<br />
                <span className="text-white/95">{t("hero.subtitle")}</span>
              </h2>
            </div>

            {/* Profile Component with Badge */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/30 p-1 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-turquoise/20 to-transparent pointer-events-none" />
                <img
                  src="https://api.dicebear.com/9.x/avataaars/svg?seed=Santiago&avatarStyle=transparent&skinColor=ffdbac&hairColor=2c1b18&mouth=smile"
                  alt="Profile"
                  className="w-full h-full rounded-[1.8rem] bg-brand-sand"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white text-brand-irish-green p-1.5 rounded-xl shadow-lg border border-slate-100 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Weather Widget */}
          <WeatherWidget />
        </div>
      </section>

      <div className="container mx-auto px-6 space-y-6">
        {/* Categories Grid - STREAMLINED to 4 items */}
        <section className="relative z-20 -mt-8">
          <div className="grid grid-cols-2 gap-4">
            {/* Category: Activity (Exercise + Tourism combined) */}
            <Link href="/exercise" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-turquoise/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-turquoise/10 transition-colors" />
              <div className="p-3 bg-brand-turquoise text-white rounded-2xl w-fit mb-4 shadow-md group-hover:scale-110 transition-all">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-brand-turquoise/60 text-[10px] font-black uppercase tracking-widest">{t("cat.body")}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{t("nav.physical_activity")}</h4>
            </Link>

            {/* Category: Health Hub */}
            <Link href="/health" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-irish-green/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-irish-green/10 transition-colors" />
              <div className="p-3 bg-brand-irish-green/10 text-brand-irish-green rounded-2xl w-fit mb-4 group-hover:bg-brand-irish-green group-hover:text-white transition-all shadow-sm">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-brand-irish-green/60 text-[10px] font-black uppercase tracking-widest">{t("cat.wellness")}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{t("nav.health")}</h4>
            </Link>

            {/* Category: Procedures */}
            <Link href="/procedures" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sunset/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-sunset/10 transition-colors" />
              <div className="p-3 bg-brand-sunset/10 text-brand-sunset rounded-2xl w-fit mb-4 group-hover:bg-brand-sunset group-hover:text-white transition-all shadow-sm">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-brand-sunset/60 text-[10px] font-black uppercase tracking-widest">{t("cat.admin")}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">{t("nav.procedures")}</h4>
            </Link>

            {/* Category: Toolkit (The new central hub) */}
            <Link href="/toolkit" className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-purple/10 transition-colors" />
              <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-2xl w-fit mb-4 group-hover:bg-brand-purple group-hover:text-white transition-all shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-brand-purple/60 text-[10px] font-black uppercase tracking-widest">{t("cat.extras")}</span>
              <h4 className="font-bold text-brand-navy mt-1 text-lg">
                {t("nav.toolkit")}
                <span className="block text-[10px] text-slate-400 font-normal mt-1">+ {t("nav.community")} & {t("nav.more")}</span>
              </h4>
            </Link>
          </div>
        </section>

        {/* Global Search - Clean and accessible */}
        <section>
          <GlobalSearch />
        </section>

        {/* Community Forum & Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <Forum />
          </section>
          <section className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <EventCalendar />
          </section>
        </div>

        <Roadmap />

        <InstallPWA />
      </div>
    </main>
  );
}
