import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export type SubmissionType = "social-fit" | "event" | "mentor" | "sport-team" | "fitness-contribution" | "recipe";

export interface Submission {
    id: string;
    type: SubmissionType;
    status: "pending" | "approved" | "rejected";
    data: any;
    createdAt: string;
}

interface SubmissionContextType {
    submissions: Submission[];
    addSubmission: (type: SubmissionType, data: any) => Promise<void>;
    approveSubmission: (id: string) => Promise<void>;
    rejectSubmission: (id: string) => Promise<void>;
    getApprovedByType: (type: SubmissionType) => any[];
    refreshSubmissions: () => Promise<void>;
}

const SubmissionContext = createContext<SubmissionContextType | undefined>(undefined);

export function SubmissionProvider({ children }: { children: React.ReactNode }) {
    const [submissions, setSubmissions] = useState<Submission[]>([]);

    const refreshSubmissions = async () => {
        const { data, error } = await supabase
            .from('submissions')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error("Error fetching submissions:", error);
            return;
        }

        if (data) {
            const formatted: Submission[] = data.map(item => ({
                id: item.id,
                type: item.type as SubmissionType,
                status: item.status as any,
                data: item.data,
                createdAt: item.created_at
            }));
            setSubmissions(formatted);
        }
    };

    useEffect(() => {
        refreshSubmissions();
    }, []);

    const addSubmission = async (type: SubmissionType, data: any) => {
        const { error } = await supabase
            .from('submissions')
            .insert([{ type, data, status: 'pending' }]);

        if (error) {
            console.error("Error adding submission:", error);
        } else {
            await refreshSubmissions();
        }
    };

    const approveSubmission = async (id: string) => {
        const { error } = await supabase
            .from('submissions')
            .update({ status: 'approved' })
            .eq('id', id);

        if (error) {
            console.error("Error approving submission:", error);
        } else {
            await refreshSubmissions();
        }
    };

    const rejectSubmission = async (id: string) => {
        const { error } = await supabase
            .from('submissions')
            .delete()
            .eq('id', id);

        if (error) {
            console.error("Error rejecting submission:", error);
        } else {
            await refreshSubmissions();
        }
    };

    const getApprovedByType = (type: SubmissionType) => {
        return submissions
            .filter(s => s.type === type && s.status === "approved")
            .map(s => ({ ...s.data, id: s.id }));
    };

    return (
        <SubmissionContext.Provider value={{ submissions, addSubmission, approveSubmission, rejectSubmission, getApprovedByType, refreshSubmissions }}>
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
