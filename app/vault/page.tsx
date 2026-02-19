"use client";

import {
    ChevronLeft,
    Plus,
    Trash2,
    Calendar,
    AlertCircle,
    CheckCircle2,
    Shield,
    Lock,
    CreditCard,
    Home as HomeIcon,
    Stethoscope,
    Briefcase,
    Copy,
    Check,
    X,
    Folder
} from "lucide-react";
import { BackButton } from "@/components/BackButton";

interface UserDocument {
    id: string;
    title: string;
    expiryDate: string;
    remindMe: boolean;
    category: "Identity" | "Housing" | "Health" | "Work";
}

interface SecureNote {
    id: string;
    label: string;
    content: string;
}

const CATEGORIES = [
    { id: "Identity", icon: CreditCard, labelEn: "Identity", labelEs: "Identidad", color: "bg-blue-500" },
    { id: "Housing", icon: HomeIcon, labelEn: "Housing", labelEs: "Vivienda", color: "bg-orange-500" },
    { id: "Health", icon: Stethoscope, labelEn: "Health", labelEs: "Salud", color: "bg-green-500" },
    { id: "Work", icon: Briefcase, labelEn: "Work", labelEs: "Trabajo", color: "bg-purple-500" },
];

export default function VaultPage() {
    const { language, t } = useLanguage();
    const [documents, setDocuments] = useState<UserDocument[]>([]);
    const [notes, setNotes] = useState<SecureNote[]>([]);
    const [isAddMode, setIsAddMode] = useState(false);
    const [isAddNoteMode, setIsAddNoteMode] = useState(false);
    const [newDoc, setNewDoc] = useState<{ title: string; expiryDate: string; remindMe: boolean; category: "Identity" | "Housing" | "Health" | "Work" }>({
        title: "",
        expiryDate: "",
        remindMe: true,
        category: "Identity"
    });
    const [newNote, setNewNote] = useState({ label: "", content: "" });
    const [copiedId, setCopiedId] = useState<string | null>(null);

    useEffect(() => {
        const savedDocs = localStorage.getItem("migrawell_vault_docs");
        const savedNotes = localStorage.getItem("migrawell_vault_notes");
        if (savedDocs) setDocuments(JSON.parse(savedDocs));
        if (savedNotes) setNotes(JSON.parse(savedNotes));
    }, []);

    const saveDocs = (updated: UserDocument[]) => {
        setDocuments(updated);
        localStorage.setItem("migrawell_vault_docs", JSON.stringify(updated));
    };

    const saveNotes = (updated: SecureNote[]) => {
        setNotes(updated);
        localStorage.setItem("migrawell_vault_notes", JSON.stringify(updated));
    };

    const handleAddDoc = () => {
        if (!newDoc.title || !newDoc.expiryDate) return;
        const doc: UserDocument = { ...newDoc, id: Date.now().toString() };
        saveDocs([...documents, doc]);
        setNewDoc({ title: "", expiryDate: "", remindMe: true, category: "Identity" });
        setIsAddMode(false);
    };

    const handleAddNote = () => {
        if (!newNote.label || !newNote.content) return;
        const note: SecureNote = { ...newNote, id: Date.now().toString() };
        saveNotes([...notes, note]);
        setNewNote({ label: "", content: "" });
        setIsAddNoteMode(false);
    };

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32">
            {/* Premium Header */}
            <div className="bg-brand-navy text-white pt-10 pb-20 px-8 rounded-b-[4rem] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/5 rounded-full -ml-32 -mb-32 blur-3xl" />

                <div className="container mx-auto relative z-10">
                    <BackButton />
                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Lock className="w-4 h-4 text-brand-pink" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-pink">Secure Storage</span>
                            </div>
                            <h1 className="text-4xl font-heading font-black tracking-tight">{t("nav.vault")}</h1>
                            <p className="text-white/60 text-sm mt-2 max-w-sm leading-relaxed">
                                {language === "en"
                                    ? "Your personal immigration hub. Categories, notes, and reminders for your life in Ireland."
                                    : "Tu centro personal de inmigración. Categorías, notas y recordatorios para tu vida en Irlanda."}
                            </p>
                        </div>
                        <div className="bg-white/10 p-5 rounded-[2.5rem] backdrop-blur-xl border border-white/20 shadow-inner">
                            <Shield className="w-12 h-12 text-white/40" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-12 space-y-10 relative z-20">
                {/* Secure Notes Section */}
                <section>
                    <div className="flex items-center justify-between mb-6 px-2">
                        <h2 className="text-xs font-black text-brand-navy uppercase tracking-widest flex items-center gap-2">
                            <Copy className="w-4 h-4 text-brand-teal" />
                            {language === 'en' ? 'Quick Copy Notes' : 'Notas de Copia Rápida'}
                        </h2>
                        <button
                            onClick={() => setIsAddNoteMode(!isAddNoteMode)}
                            className="text-[10px] font-black text-brand-teal uppercase tracking-widest hover:underline"
                        >
                            {isAddNoteMode ? (language === 'en' ? 'Cancel' : 'Cancelar') : (language === 'en' ? '+ Add Note' : '+ Nueva Nota')}
                        </button>
                    </div>

                    {isAddNoteMode && (
                        <div className="bg-white p-6 rounded-[2rem] shadow-xl border-2 border-brand-teal/20 mb-6 animate-in zoom-in duration-300">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    placeholder={language === 'en' ? "Label (e.g. PPSN)" : "Etiqueta (ej: PPSN)"}
                                    value={newNote.label}
                                    onChange={e => setNewNote({ ...newNote, label: e.target.value })}
                                    className="p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-brand-teal text-sm font-bold"
                                />
                                <input
                                    placeholder={language === 'en' ? "Content" : "Contenido"}
                                    value={newNote.content}
                                    onChange={e => setNewNote({ ...newNote, content: e.target.value })}
                                    className="p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-brand-teal text-sm font-bold"
                                />
                            </div>
                            <button
                                onClick={handleAddNote}
                                className="w-full mt-4 bg-brand-teal text-white py-4 rounded-2xl font-black shadow-lg shadow-brand-teal/20"
                            >
                                {language === 'en' ? 'Save Note' : 'Guardar Nota'}
                            </button>
                        </div>
                    )}

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {notes.map(note => (
                            <div key={note.id} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-brand-teal hover:shadow-md transition-all">
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1">{note.label}</p>
                                    <p className="text-xs font-bold text-brand-navy truncate">{note.content}</p>
                                </div>
                                <div className="flex justify-end mt-3 gap-2">
                                    <button
                                        onClick={() => copyToClipboard(note.content, note.id)}
                                        className={`p-2 rounded-xl transition-all ${copiedId === note.id ? 'bg-green-500 text-white' : 'bg-slate-50 text-slate-400 hover:text-brand-teal'}`}
                                    >
                                        {copiedId === note.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                    </button>
                                    <button
                                        onClick={() => saveNotes(notes.filter(n => n.id !== note.id))}
                                        className="p-2 bg-slate-50 text-slate-300 hover:text-red-400 rounded-xl"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Documents Section */}
                <section>
                    <div className="flex items-center justify-between mb-6 px-2">
                        <h2 className="text-xs font-black text-brand-navy uppercase tracking-widest flex items-center gap-2">
                            <Folder className="w-4 h-4 text-brand-pink" />
                            {language === 'en' ? 'My Documents' : 'Mis Documentos'}
                        </h2>
                        <button
                            onClick={() => setIsAddMode(!isAddMode)}
                            className="bg-brand-pink text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-pink/30 hover:scale-105 active:scale-95 transition-all"
                        >
                            {isAddMode ? (language === 'en' ? 'Close' : 'Cerrar') : (language === 'en' ? '+ New Doc' : '+ Nuevo Doc')}
                        </button>
                    </div>

                    {isAddMode && (
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-2 border-brand-pink/20 mb-8 animate-in slide-in-from-top-10 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[10px] uppercase font-black text-slate-400 mb-2 block">{language === 'en' ? 'Document Name' : 'Nombre del Documento'}</label>
                                    <input
                                        value={newDoc.title}
                                        onChange={e => setNewDoc({ ...newDoc, title: e.target.value })}
                                        placeholder="e.g. Passport, IRP, GNIB"
                                        className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-brand-pink text-sm font-bold"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase font-black text-slate-400 mb-2 block">{t("lbl.expiry")}</label>
                                    <input
                                        type="date"
                                        value={newDoc.expiryDate}
                                        onChange={e => setNewDoc({ ...newDoc, expiryDate: e.target.value })}
                                        className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-brand-pink text-sm font-bold"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase font-black text-slate-400 mb-2 block">{language === 'en' ? 'Category' : 'Categoría'}</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {CATEGORIES.map(cat => (
                                            <button
                                                key={cat.id}
                                                type="button"
                                                onClick={() => setNewDoc({ ...newDoc, category: cat.id as any })}
                                                className={`p-4 rounded-2xl flex items-center gap-3 border-2 transition-all ${newDoc.category === cat.id ? 'border-brand-pink bg-brand-pink/5 text-brand-navy' : 'border-slate-50 bg-slate-50 text-slate-400 hover:border-slate-100'}`}
                                            >
                                                <cat.icon className={`w-4 h-4 ${newDoc.category === cat.id ? 'text-brand-pink' : 'text-slate-300'}`} />
                                                <span className="text-xs font-bold">{language === 'en' ? cat.labelEn : cat.labelEs}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-brand-pink" />
                                            <div>
                                                <p className="text-xs font-bold text-brand-navy">{language === 'en' ? 'Exp. Reminder' : 'Recordatorio'}</p>
                                                <p className="text-[10px] text-slate-400 font-medium">30 days before</p>
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={newDoc.remindMe}
                                            onChange={e => setNewDoc({ ...newDoc, remindMe: e.target.checked })}
                                            className="w-5 h-5 accent-brand-pink rounded-lg"
                                        />
                                    </div>
                                    <button
                                        onClick={handleAddDoc}
                                        className="w-full mt-4 bg-brand-navy text-white py-4 rounded-2xl font-black shadow-xl"
                                    >
                                        {language === 'en' ? 'Create Record' : 'Crear Registro'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {documents.map(doc => {
                            const cat = CATEGORIES.find(c => c.id === doc.category) || CATEGORIES[0];
                            const expiry = new Date(doc.expiryDate);
                            const diffDays = Math.ceil((expiry.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                            const isExpired = diffDays <= 0;
                            const isWarning = diffDays > 0 && diffDays < 30;

                            return (
                                <div key={doc.id} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-xl transition-all relative overflow-hidden">
                                    {/* Expiry Badge */}
                                    <div className={`absolute top-0 right-0 px-4 py-2 rounded-bl-2xl text-[9px] font-black uppercase tracking-widest ${isExpired ? 'bg-red-500 text-white' : isWarning ? 'bg-brand-sun text-brand-navy' : 'bg-brand-teal text-white'}`}>
                                        {isExpired ? 'Expired' : isWarning ? `30d Warning` : 'Valid'}
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className={`p-4 rounded-3xl ${cat.color} text-white shadow-lg shadow-inner`}>
                                            <cat.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{language === 'en' ? cat.labelEn : cat.labelEs}</p>
                                            <h3 className="text-xl font-heading font-black text-brand-navy mb-1">{doc.title}</h3>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3.5 h-3.5 text-slate-300" />
                                                <span className={`text-[11px] font-bold ${isExpired ? 'text-red-500' : isWarning ? 'text-brand-sun' : 'text-slate-500'}`}>
                                                    {expiry.toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {doc.remindMe && <CheckCircle2 className="w-4 h-4 text-brand-teal" />}
                                            <span className="text-[10px] font-bold text-slate-400">
                                                {doc.remindMe ? (language === 'en' ? 'Reminder ON' : 'Aviso Activado') : ''}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => saveDocs(documents.filter(d => d.id !== doc.id))}
                                            className="text-[10px] font-black text-slate-300 hover:text-red-500 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-xl transition-colors"
                                        >
                                            {language === 'en' ? 'Remove' : 'Borrar'}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}
