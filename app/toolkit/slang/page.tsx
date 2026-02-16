"use client";

import React from "react";
import { SlangDictionary } from "@/components/SlangDictionary";
import { BackButton } from "@/components/BackButton";
import { useLanguage } from "@/context/LanguageContext";

export default function SlangPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-slate-50 pb-24 px-6 md:px-12">
            <div className="container mx-auto max-w-5xl py-12">
                <BackButton />
                <div className="mt-8">
                    <SlangDictionary />
                </div>
            </div>
        </div>
    );
}
