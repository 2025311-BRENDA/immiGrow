"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Circle, Briefcase, ExternalLink, FileText, Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { jobSteps } from "@/lib/data";
import { jobStepsEs } from "@/lib/data_es";
import { jobStepsPt } from "@/lib/data_pt";

export function JobGuide() {
    const { language, t } = useLanguage();
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);

    const data = language === "en" ? jobSteps : language === "es" ? jobStepsEs : jobStepsPt;

    useEffect(() => {
        const saved = localStorage.getItem("migrawell_jobs");
        if (saved) {
            try {
                setCompletedSteps(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load job progress");
            }
        }
    }, []);

    const toggleStep = (id: string) => {
        const newCompleted = completedSteps.includes(id)
            ? completedSteps.filter(i => i !== id)
            : [...completedSteps, id];
        setCompletedSteps(newCompleted);
        localStorage.setItem("migrawell_jobs", JSON.stringify(newCompleted));
    };

    const progress = Math.round((completedSteps.length / data.length) * 100);

    const jobPortals = [
        { name: "Indeed Ireland", url: "https://ie.indeed.com/" },
        { name: "LinkedIn Ireland", url: "https://www.linkedin.com/jobs/" },
        { name: "Jobs.ie", url: "https://www.jobs.ie/" },
        { name: "IrishJobs.ie", url: "https://www.irishjobs.ie/" },
        { name: "PublicJobs.ie", url: "https://www.publicjobs.ie/" },
    ];

    return (
        <div className="space-y-8">
            {/* Prep Section */}
            <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-turquoise/5 rounded-full -mr-12 -mt-12" />

                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-2xl font-black text-brand-navy">
                            {t("jobs.checklist.title")}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">
                            {t("jobs.checklist.subtitle")}
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-black text-brand-turquoise">{progress}%</span>
                    </div>
                </div>

                <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
                    <div
                        className="bg-brand-turquoise h-full transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.map((step) => (
                        <div
                            key={step.id}
                            onClick={() => toggleStep(step.id)}
                            className={`flex items-start gap-4 p-4 rounded-3xl cursor-pointer transition-all border ${completedSteps.includes(step.id)
                                ? "bg-brand-turquoise/5 border-brand-turquoise/20"
                                : "bg-slate-50 border-transparent hover:bg-slate-100"
                                }`}
                        >
                            <div className={`p-3 rounded-2xl shrink-0 ${completedSteps.includes(step.id) ? "bg-brand-turquoise text-white" : "bg-white text-slate-400 shadow-sm"
                                }`}>
                                <step.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className={`font-bold text-sm ${completedSteps.includes(step.id) ? "text-brand-navy" : "text-slate-700"}`}>
                                    {step.title}
                                </h4>
                                <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">{step.description}</p>
                            </div>
                            {completedSteps.includes(step.id) ? (
                                <CheckCircle2 className="w-5 h-5 text-brand-turquoise shrink-0 mt-1" />
                            ) : (
                                <Circle className="w-5 h-5 text-slate-200 shrink-0 mt-1" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Portals Section */}
            <section className="bg-brand-navy rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 blur-3xl opacity-20" />

                <h3 className="text-xl font-black text-brand-sand mb-6 relative z-10 flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    {t("jobs.portals.title")}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 relative z-10">
                    {jobPortals.map((portal) => (
                        <a
                            key={portal.name}
                            href={portal.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all border border-white/10 group"
                        >
                            <span className="text-sm font-bold text-white/90">{portal.name}</span>
                            <ExternalLink className="w-4 h-4 text-brand-sand/50 group-hover:text-brand-sand transition-colors" />
                        </a>
                    ))}
                </div>
            </section>

            {/* Tip Section */}
            <section className="bg-brand-sand/30 border border-brand-sand p-6 rounded-[2.5rem]">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-sun/20 rounded-2xl text-brand-navy">
                        <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-black text-brand-navy">
                            {t("jobs.tip.title")}
                        </h4>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                            {t("jobs.tip.desc")}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
