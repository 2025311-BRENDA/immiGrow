'use client';

import { useState } from 'react';
import { User, MapPin, Globe, BookOpen, Edit2, Save } from 'lucide-react';

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "Ana García",
        origin: "Colombia",
        yearsInCountry: "2 años",
        languages: ["Español", "Inglés Básico"],
        interests: ["Caminatas", "Arte", "Cocina"],
        story: "Llegué hace dos años buscando nuevas oportunidades. Me encanta conocer gente y compartir mi cultura a través de la comida. Busco amigas para salir a caminar los fines de semana.",
    });

    const handleSave = () => {
        setIsEditing(false);
        // In a real app, save to backend here
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header / Cover */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-40 relative">
                <div className="absolute -bottom-12 left-6">
                    <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">
                        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                            <User className="w-12 h-12" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-14 px-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
                        <p className="text-gray-500 flex items-center mt-1">
                            <MapPin className="w-4 h-4 mr-1" /> {profile.origin} • {profile.yearsInCountry}
                        </p>
                    </div>

                    <button
                        onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                        className={`p-2 rounded-full ${isEditing ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'} hover:bg-opacity-80 transition-colors`}
                    >
                        {isEditing ? <Save className="w-5 h-5" /> : <Edit2 className="w-5 h-5" />}
                    </button>
                </div>

                {/* Story Section */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-purple-500" />
                        Mi Historia Migrante
                    </h3>
                    {isEditing ? (
                        <textarea
                            className="w-full border-gray-200 rounded-lg text-sm text-gray-600 focus:ring-purple-500 focus:border-purple-500"
                            rows={4}
                            value={profile.story}
                            onChange={(e) => setProfile({ ...profile, story: e.target.value })}
                        />
                    ) : (
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {profile.story}
                        </p>
                    )}
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 gap-4">
                    {/* Languages */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <h3 className="text-md font-semibold text-gray-800 mb-3 flex items-center">
                            <Globe className="w-5 h-5 mr-2 text-blue-500" />
                            Idiomas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {profile.languages.map((lang, idx) => (
                                <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Interests */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <h3 className="text-md font-semibold text-gray-800 mb-3 flex items-center">
                            <Heart className="w-5 h-5 mr-2 text-pink-500" />
                            Intereses
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {profile.interests.map((interest, idx) => (
                                <span key={idx} className="bg-pink-50 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function Heart(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    );
}
