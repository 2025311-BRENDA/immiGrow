"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BackButtonProps {
    href?: string;
    label?: string;
}

export function BackButton({ href = "/", label }: BackButtonProps) {
    const { t } = useLanguage();
    return (
        <Link
            href={href}
            className="inline-flex items-center text-slate-400 mb-6 hover:text-brand-teal transition-colors font-bold text-xs uppercase tracking-widest group"
        >
            <div className="p-1 bg-white rounded-lg shadow-sm border border-slate-100 mr-2 group-hover:border-brand-teal/30 transition-all">
                <ChevronLeft className="w-4 h-4" />
            </div>
            {label || t("lbl.backTo") + " Home"}
        </Link>
    );
}
