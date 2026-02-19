"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type SubmissionType = "social-fit" | "event" | "mentor" | "sport-team" | "fitness-contribution" | "recipe";

export interface Submission {
    id: string;
    type: SubmissionType;
    status: "pending" | "approved" | "rejected";
    data: any;
    createdAt: number;
}

interface SubmissionContextType {
    submissions: Submission[];
    addSubmission: (type: SubmissionType, data: any) => void;
    approveSubmission: (id: string) => void;
    rejectSubmission: (id: string) => void;
    getApprovedByType: (type: SubmissionType) => any[];
}

const SubmissionContext = createContext<SubmissionContextType | undefined>(undefined);

export function SubmissionProvider({ children }: { children: React.ReactNode }) {
    const [submissions, setSubmissions] = useState<Submission[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("immiGrow_submissions");
        if (saved) {
            setSubmissions(JSON.parse(saved));
        }
    }, []);

    const save = (newSubmissions: Submission[]) => {
        setSubmissions(newSubmissions);
        localStorage.setItem("immiGrow_submissions", JSON.stringify(newSubmissions));
    };

    const addSubmission = (type: SubmissionType, data: any) => {
        const newSubmission: Submission = {
            id: Date.now().toString(),
            type,
            status: "pending",
            data,
            createdAt: Date.now(),
        };
        save([...submissions, newSubmission]);
    };

    const approveSubmission = (id: string) => {
        save(submissions.map(s => s.id === id ? { ...s, status: "approved" } : s));
    };

    const rejectSubmission = (id: string) => {
        save(submissions.filter(s => s.id !== id));
    };

    const getApprovedByType = (type: SubmissionType) => {
        return submissions
            .filter(s => s.type === type && s.status === "approved")
            .map(s => ({ ...s.data, id: s.id }));
    };

    return (
        <SubmissionContext.Provider value={{ submissions, addSubmission, approveSubmission, rejectSubmission, getApprovedByType }}>
            {children}
        </SubmissionContext.Provider>
    );
}

export function useSubmissions() {
    const context = useContext(SubmissionContext);
    if (context === undefined) {
        throw new Error("useSubmissions must be used within a SubmissionProvider");
    }
    return context;
}
