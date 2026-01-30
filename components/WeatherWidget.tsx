"use client";

import React from "react";
import { CloudRain, Sun, Wind, Thermometer } from "lucide-react";

export function WeatherWidget() {
    // Mock weather data
    const weather = {
        temp: 12,
        condition: "Partly Cloudy",
        wind: 15,
        rain: 20,
        isGoodForWalk: true
    };

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 text-white flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-sun/20 rounded-xl">
                    <Sun className="w-5 h-5 text-brand-sun" />
                </div>
                <div>
                    <div className="flex items-center gap-1">
                        <span className="text-xl font-black">{weather.temp}°C</span>
                        <span className="text-[10px] uppercase font-bold opacity-60">Dublin</span>
                    </div>
                    <p className="text-[10px] font-medium opacity-80">{weather.condition}</p>
                </div>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div className="flex gap-4">
                <div className="flex flex-col items-center">
                    <Wind className="w-3 h-3 opacity-60 mb-1" />
                    <span className="text-[10px] font-bold">{weather.wind} km/h</span>
                </div>
                <div className="flex flex-col items-center">
                    <CloudRain className="w-3 h-3 opacity-60 mb-1" />
                    <span className="text-[10px] font-bold">{weather.rain}%</span>
                </div>
            </div>

            <div className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${weather.isGoodForWalk ? "bg-white/20 text-white" : "bg-red-500/20 text-red-100"
                }`}>
                {weather.isGoodForWalk ? "Perfect for a walk" : "Better stay inside"}
            </div>
        </div>
    );
}
