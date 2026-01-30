import React from 'react';
import { Professional } from '@/lib/data';
import { Star, MapPin, Phone, CheckCircle, Languages } from 'lucide-react';

interface ProfessionalCardProps {
    professional: Professional;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xl">
                            {professional.image ? (
                                <img src={professional.image} alt={professional.name} className="w-full h-full rounded-full object-cover" />
                            ) : (
                                professional.name.charAt(0)
                            )}
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 flex items-center gap-1">
                                {professional.name}
                                {professional.verified && (
                                    <CheckCircle className="w-4 h-4 text-blue-500" />
                                )}
                            </h3>
                            <p className="text-sm text-slate-500">{professional.role}</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-amber-50 px-2 py-1 rounded text-amber-700 text-xs font-bold">
                        <Star className="w-3 h-3 mr-1 fill-amber-500 text-amber-500" />
                        {professional.rating} <span className="font-normal text-amber-600 ml-1">({professional.reviews})</span>
                    </div>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-sm text-slate-600">
                        <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <span>{professional.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                        {professional.specialty.map((spec, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                                {spec}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Languages className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="truncate">{professional.languages.join(", ")}</span>
                    </div>
                </div>

                <button className="w-full py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact
                </button>
            </div>
        </div>
    );
};

export default ProfessionalCard;
