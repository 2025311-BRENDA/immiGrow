"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, Calculator, Euro } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CostCalculator } from "@/components/CostCalculator";

export default function CalculatorPage() {
    const { language, t } = useLanguage();

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-brand-sun text-brand-navy p-8 rounded-b-[3rem] shadow-lg mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>

                <Link href="/" className="inline-flex items-center text-brand-navy/60 mb-4 hover:text-brand-navy transition-colors relative z-10">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    {t("nav.home")}
                </Link>

                <div className="flex items-center justify-between relative z-10">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight font-heading">
                            {language === "en" ? "Dublin Budgeter" : "Calculadora de Dublín"}
                        </h1>
                        <p className="text-brand-navy/60 mt-2 font-medium">
                            {language === "en"
                                ? "Plan your finances with real local averages."
                                : "Planifica tus finanzas con promedios locales reales."}
                        </p>
                    </div>
                    <Calculator className="w-16 h-16 text-brand-navy/20" />
                </div>
            </div>

            <main className="container mx-auto px-6 max-w-4xl">
                <CostCalculator />

                <div className="mt-8 p-6 bg-brand-navy rounded-[2.5rem] text-white">
                    <h4 className="font-bold flex items-center gap-2 mb-4 text-brand-sun">
                        <Euro className="w-5 h-5" />
                        {language === "en" ? "Budgeting Tips" : "Consejos de Presupuesto"}
                    </h4>
                    <ul className="space-y-3 text-sm text-white/80">
                        <li className="flex items-start gap-2">
                            <span className="text-brand-sun">•</span>
                            {language === "en" ? "Use the Leap Card 'Weekly Cap' to save on transport." : "Usa el 'Weekly Cap' de la tarjeta Leap para ahorrar en transporte."}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-sun">•</span>
                            {language === "en" ? "Shop at Lidl or Aldi for the best grocery prices." : "Compra en Lidl o Aldi para obtener los mejores precios en comida."}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-sun">•</span>
                            {language === "en" ? "Keep an eye out for 'Student Deals' if you are enrolled in a course." : "Busca 'Student Deals' si estás matriculado en algún curso."}
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
