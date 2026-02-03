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
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 text-white flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-sun/20 rounded-xl">
                    <Icon className="w-5 h-5 text-brand-sun" />
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

            <div className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors ${weather.isGoodForWalk ? "bg-white/20 text-white" : "bg-brand-sun/20 text-brand-sun"
                }`}>
                {weather.isGoodForWalk ? t("weather.good") : t("weather.bad")}
            </div>
        </div>
    );
}
