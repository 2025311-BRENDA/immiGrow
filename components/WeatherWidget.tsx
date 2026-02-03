"use client";

import React, { useState, useEffect } from "react";
import { CloudRain, Sun, Wind, Thermometer, Cloud, CloudLightning } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function WeatherWidget() {
    const { language, t } = useLanguage();
    const [weather, setWeather] = useState<{
        temp: number;
        condition: string;
        wind: number;
        rain: number;
        isGoodForWalk: boolean;
        icon: React.ElementType;
    } | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Coordinates for Dublin
                const response = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=53.3498&longitude=-6.2603&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&hourly=precipitation_probability&timezone=auto&forecast_days=1"
                );
                const data = await response.json();

                const current = data.current;
                const rainProb = data.hourly.precipitation_probability[0]; // Current hour prob

                // Basic WMO Weather Code mapping
                const code = current.weather_code;
                let conditionKey = "weather.clear";
                let WeatherIcon = Sun;

                if (code >= 1 && code <= 3) {
                    conditionKey = "weather.cloudy";
                    WeatherIcon = Cloud;
                } else if (code >= 51 && code <= 67) {
                    conditionKey = "weather.rain";
                    WeatherIcon = CloudRain;
                } else if (code >= 95) {
                    conditionKey = "weather.storm";
                    WeatherIcon = CloudLightning;
                } else if (code >= 45 && code <= 48) {
                    conditionKey = "weather.fog";
                    WeatherIcon = Cloud;
                }

                const isGood = current.precipitation === 0 && current.wind_speed_10m < 25;

                setWeather({
                    temp: Math.round(current.temperature_2m),
                    condition: t(conditionKey),
                    wind: Math.round(current.wind_speed_10m),
                    rain: rainProb,
                    isGoodForWalk: isGood,
                    icon: WeatherIcon
                });
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        };

        fetchWeather();
        // Refresh every 30 minutes
        const interval = setInterval(fetchWeather, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, [language]);

    if (!weather) return (
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/10 animate-pulse h-[72px]" />
    );

    const Icon = weather.icon;

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-4 border border-white/20 text-white flex flex-wrap items-center justify-between gap-4 shadow-xl">
            {/* Left section: Main info */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shadow-inner">
                    <Icon className="w-6 h-6 text-brand-sun fill-brand-sun/20" />
                </div>
                <div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black tracking-tight">{weather.temp}°C</span>
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Dublin</span>
                    </div>
                    <p className="text-xs font-bold opacity-80 -mt-1">{weather.condition}</p>
                </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block h-10 w-px bg-white/20 mx-2" />

            {/* Middle section: Technical details */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 opacity-60" />
                    <span className="text-xs font-black">{weather.wind} km/h</span>
                </div>
                <div className="flex items-center gap-2">
                    <CloudRain className="w-4 h-4 opacity-60" />
                    <span className="text-xs font-black">{weather.rain}%</span>
                </div>
            </div>

            {/* Right section: Recommendation Badge */}
            <div className={cn(
                "px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg border-2",
                weather.isGoodForWalk
                    ? "bg-brand-sun text-brand-navy border-brand-sun/20"
                    : "bg-white/20 text-white border-white/10"
            )}>
                {weather.isGoodForWalk ? t("weather.good") : t("weather.bad")}
            </div>
        </div>
    );
}
