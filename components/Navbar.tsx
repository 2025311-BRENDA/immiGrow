"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Globe,
    Mountain,
    Waves,
    Bike,
    FileText,
    Heart,
    Brain,
    TreeDeciduous,
    ChevronDown,
    Activity,
    ShieldCheck,
    Award,
    Briefcase,
    Calculator,
    Sparkles
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Navbar() {
    const { language, setLanguage, toggleLanguage, t } = useLanguage();
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    type NavCategory =
        | { id: string; label: string; icon: any; items: { name: string; href: string; icon: any }[] }
        | { id: string; label: string; icon: any; href: string };

    const categories: NavCategory[] = [
        {
            id: "activity",
            label: t("nav.physical_activity"),
            icon: Activity,
            items: [
                { name: t("nav.parks"), href: "/exercise/parks", icon: TreeDeciduous },
                { name: t("nav.swimming"), href: "/exercise/swimming", icon: Waves },
                { name: t("nav.cycling"), href: "/exercise/cycling", icon: Bike },
                { name: t("nav.tourism"), href: "/tourism", icon: Mountain },
            ]
        },
        {
            id: "health",
            label: t("nav.health"),
            icon: Heart,
            items: [
                { name: t("nav.health"), href: "/health", icon: Activity },
                { name: t("nav.mental"), href: "/mental-health", icon: Brain },
                { name: t("nav.women"), href: "/womens-health", icon: Heart },
                { name: t("nav.physiotherapy"), href: "/exercise/physiotherapy", icon: Heart },
            ]
        },
        {
            id: "admin",
            label: t("nav.procedures"),
            href: "/procedures",
            icon: FileText
        },
        {
            id: "toolkit",
            label: t("nav.toolkit"),
            icon: Sparkles,
            items: [
                { name: t("nav.toolkit"), href: "/toolkit", icon: Sparkles },
                { name: t("nav.community"), href: "/community", icon: Globe },
                { name: t("nav.jobs"), href: "/jobs", icon: Briefcase },
                { name: t("nav.calculator"), href: "/calculator", icon: Calculator },
                { name: t("nav.vault"), href: "/vault", icon: ShieldCheck },
                { name: t("nav.achievements"), href: "/achievements", icon: Award },
            ]
        }
    ];

    const mobileNavItems = [
        { name: "Home", href: "/", icon: Home, labelKey: "nav.home" },
        { name: "Activity", href: "/exercise", icon: Activity, labelKey: "nav.physical_activity", includes: ["tourism"] },
        { name: "Health", href: "/health", icon: Heart, labelKey: "nav.health", includes: ["mental", "women", "physio"] },
        { name: "Procedures", href: "/procedures", icon: FileText, labelKey: "nav.procedures" },
        { name: "Toolkit", href: "/toolkit", icon: Sparkles, labelKey: "nav.toolkit", includes: ["jobs", "calculator", "community", "vault", "achievements"] },
    ];

    return (
        <>
            <div className="sticky top-0 z-50">
                {/* TOP BAR: Dedicated Language Selection for Maximum Visibility */}
                <div className="bg-white border-b border-slate-100 py-2 shadow-sm">
                    <div className="container mx-auto px-6 flex items-center justify-center sm:justify-end gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <span className="hidden sm:inline mr-2">{t("nav.lang")}:</span>
                        <div className="flex items-center bg-slate-50 shadow-inner ring-1 ring-slate-200 p-0.5 rounded-lg">
                            {[
                                { code: "en", label: "English" },
                                { code: "pt", label: "Português" },
                                { code: "es", label: "Español" }
                            ].map((l) => (
                                <button
                                    key={l.code}
                                    onClick={() => setLanguage(l.code as any)}
                                    className={cn(
                                        "px-3 py-1 rounded-md transition-all duration-300",
                                        language === l.code
                                            ? "bg-brand-irish-green text-white shadow-md scale-105"
                                            : "text-slate-500 hover:text-brand-navy hover:bg-white"
                                    )}
                                >
                                    {l.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MAIN NAVBAR */}
                <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200">
                    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-12">
                            {/* Desktop Brand */}
                            <Link href="/" className="flex items-center space-x-2 shrink-0">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shadow-sm border border-slate-100">
                                    <img src="/logo.png" alt="immiGrow" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xl sm:text-2xl font-heading font-black text-brand-irish-green tracking-tight">
                                    immiGrow
                                </span>
                            </Link>

                            {/* DESKTOP NAV LINKS (Organized) */}
                            <div className="hidden lg:flex items-center gap-8">
                                <Link href="/" className={cn(
                                    "text-sm font-bold transition-colors",
                                    pathname === "/" ? "text-brand-irish-green" : "text-slate-500 hover:text-brand-navy"
                                )}>
                                    {t("nav.home")}
                                </Link>

                                {categories.map((cat) => {
                                    // If it's a direct link (no items)
                                    if (!("items" in cat)) {
                                        return (
                                            <Link
                                                key={cat.id}
                                                href={cat.href}
                                                className={cn(
                                                    "flex items-center gap-1.5 text-sm font-bold transition-colors h-16",
                                                    pathname.startsWith(cat.href) ? "text-brand-irish-green" : "text-slate-500 hover:text-brand-navy"
                                                )}
                                            >
                                                <cat.icon className="w-4 h-4" />
                                                {cat.label}
                                            </Link>
                                        );
                                    }

                                    // Fallback for dropdowns
                                    return (
                                        <div
                                            key={cat.id}
                                            className="relative group"
                                            onMouseEnter={() => setOpenDropdown(cat.id)}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                            <button className={cn(
                                                "flex items-center gap-1.5 text-sm font-bold transition-colors h-16",
                                                cat.items.some(i => pathname.startsWith(i.href)) ? "text-brand-irish-green" : "text-slate-500 hover:text-brand-navy"
                                            )}>
                                                <cat.icon className="w-4 h-4" />
                                                {cat.label}
                                                <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", openDropdown === cat.id && "rotate-180")} />
                                            </button>

                                            {/* Dropdown Menu */}
                                            <div className={cn(
                                                "absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 transition-all duration-200 origin-top z-50",
                                                openDropdown === cat.id ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                            )}>
                                                {cat.items.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className={cn(
                                                            "flex items-center gap-3 p-3 rounded-xl transition-all",
                                                            pathname === item.href ? "bg-brand-sand/30 text-brand-irish-green" : "hover:bg-slate-50 text-slate-600 hover:text-brand-navy"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "p-2 rounded-lg",
                                                            pathname === item.href ? "bg-white shadow-sm" : "bg-slate-100/30"
                                                        )}>
                                                            <item.icon className="w-4 h-4" />
                                                        </div>
                                                        <span className="font-semibold text-xs whitespace-nowrap">{item.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* BOTTOM BAR (Mobile Only) */}
            <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-slate-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] lg:hidden safe-area-bottom">
                <div className="flex items-center justify-around h-20 px-1">
                    {mobileNavItems.map((item) => {
                        const isActive = pathname === item.href || (item.includes?.some(inc => pathname.includes(inc)));
                        const isSubRouteActive = item.href !== "/" && pathname.startsWith(item.href);
                        const finalActive = isActive || isSubRouteActive;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex flex-col items-center justify-center w-full h-full transition-all duration-300 relative",
                                    finalActive ? "text-brand-irish-green" : "text-slate-400 hover:text-brand-navy"
                                )}
                            >
                                <div className={cn(
                                    "p-2 rounded-2xl transition-all duration-300 mb-1",
                                    finalActive ? "bg-brand-irish-green/10 scale-110" : "bg-transparent hover:bg-slate-50"
                                )}>
                                    <item.icon className={cn("w-5 h-5", finalActive ? "stroke-[2.5px]" : "stroke-[2px]")} />
                                </div>
                                <span className={cn(
                                    "text-[8px] font-bold uppercase tracking-tight text-center transition-all duration-300 px-0.5",
                                    finalActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                                )}>
                                    {t(item.labelKey).split(' ')[0]}
                                </span>
                                {finalActive && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-brand-irish-green rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
