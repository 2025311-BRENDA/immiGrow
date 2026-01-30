"use client";

import React, { useState, useEffect } from "react";
import { Calculator, TrendingUp, Info, Euro, Home, ShoppingCart, Coffee, Bus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { costOfLivingData } from "@/lib/data";
import { costOfLivingDataEs } from "@/lib/data_es";

export function CostCalculator() {
    const { language } = useLanguage();

    const data = language === "en" ? costOfLivingData : costOfLivingDataEs;

    const [rent, setRent] = useState<number>(1000);
    const [food, setFood] = useState<number>(300);
    const [transport, setTransport] = useState<number>(100);
    const [leisure, setLeisure] = useState<number>(150);

    const total = rent + food + transport + leisure;

    return (
        <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-sun/20 rounded-2xl text-brand-navy">
                    <Calculator className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-brand-navy">
                        {language === "en" ? "Dublin Budgeter" : "Calculadora de Gastos"}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                        {language === "en" ? "Estimate your monthly living costs." : "Estima tus gastos mensuales en Dublín."}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Inputs */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-bold text-brand-navy flex items-center gap-2">
                                <Home className="w-4 h-4 text-brand-turquoise" />
                                {language === "en" ? "Rent & Utilities" : "Alquiler y Facturas"}
                            </label>
                            <span className="text-lg font-black text-brand-turquoise">€{rent}</span>
                        </div>
                        <input
                            type="range"
                            min="500"
                            max="3000"
                            step="50"
                            value={rent}
                            onChange={(e) => setRent(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-turquoise"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-bold text-brand-navy flex items-center gap-2">
                                <ShoppingCart className="w-4 h-4 text-brand-irish-green" />
                                {language === "en" ? "Groceries" : "Alimentación"}
                            </label>
                            <span className="text-lg font-black text-brand-irish-green">€{food}</span>
                        </div>
                        <input
                            type="range"
                            min="100"
                            max="800"
                            step="20"
                            value={food}
                            onChange={(e) => setFood(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-irish-green"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-bold text-brand-navy flex items-center gap-2">
                                <Bus className="w-4 h-4 text-brand-sun" />
                                {language === "en" ? "Transport" : "Transporte"}
                            </label>
                            <span className="text-lg font-black text-brand-sun">€{transport}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="300"
                            step="10"
                            value={transport}
                            onChange={(e) => setTransport(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-sun"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-bold text-brand-navy flex items-center gap-2">
                                <Coffee className="w-4 h-4 text-brand-purple" />
                                {language === "en" ? "Leisure & Social" : "Ocio y Social"}
                            </label>
                            <span className="text-lg font-black text-brand-purple">€{leisure}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="600"
                            step="25"
                            value={leisure}
                            onChange={(e) => setLeisure(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                        />
                    </div>
                </div>

                {/* Summary Card */}
                <div className="bg-brand-navy rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />

                    <h4 className="text-brand-sun text-xs font-black uppercase tracking-widest mb-2 relative z-10">
                        {language === "en" ? "Total Estimated" : "Total Estimado"}
                    </h4>
                    <div className="flex items-baseline gap-2 mb-8 relative z-10">
                        <span className="text-5xl font-black">€{total}</span>
                        <span className="text-white/40 font-bold">/ {language === "en" ? "month" : "mes"}</span>
                    </div>

                    <div className="space-y-4 relative z-10">
                        <div className="p-4 bg-white/10 rounded-2xl flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-brand-irish-green" />
                            <p className="text-[10px] font-medium leading-relaxed opacity-80">
                                {language === "en"
                                    ? "Average monthly salary in Ireland is approx. €3,000 net, but this varies wildly by sector."
                                    : "El salario promedio mensual neto es de aprox. €3,000, pero varía mucho según el sector."}
                            </p>
                        </div>
                        <div className="p-4 bg-white/10 rounded-2xl flex items-center gap-3">
                            <Info className="w-5 h-5 text-brand-sun" />
                            <p className="text-[10px] font-medium leading-relaxed opacity-80">
                                {language === "en"
                                    ? "Dublin has the highest rent in Ireland. Consider shared living to save costs."
                                    : "Dublín tiene los alquileres más altos de Irlanda. Considera compartir casa para ahorrar."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Supermarket Comparison */}
            <div className="mt-12">
                <h4 className="text-brand-navy font-bold mb-6 flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-brand-irish-green" />
                    {language === "en" ? "Supermarket Savings Guide" : "Guía de Ahorro: Supermercados"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.supermarkets?.map((shop) => (
                        <div key={shop.name} className="p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-2">
                                <h5 className="font-black text-brand-navy">{shop.name}</h5>
                                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-brand-sun/20 text-brand-navy rounded-lg">
                                    {shop.rank}
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {shop.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Market Averages Table */}
            <div className="mt-12">
                <h4 className="text-brand-navy font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    {language === "en" ? "Dublin Market Averages" : "Promedios de Mercado en Dublín"}
                </h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Item</th>
                                <th className="py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Avg. Cost</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {data.averages.map((avg) => (
                                <tr key={avg.label} className="group hover:bg-slate-50 transition-colors">
                                    <td className="py-4 text-sm font-bold text-brand-navy">{avg.label}</td>
                                    <td className="py-4 text-sm font-black text-brand-turquoise text-right">€{avg.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
