import React from 'react';
import { Sun } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-brand-100 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-white p-6 rounded-full shadow-2xl border-4 border-brand-50">
          <Sun className="h-16 w-16 text-brand-600 animate-[spin_4s_linear_infinite]" />
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">Tania Energia</h1>
      <div className="h-1.5 w-24 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full mb-6"></div>
      <p className="text-sm md:text-base uppercase tracking-widest text-gray-500 font-bold">
        Inicjatywa Prezydenta RP
      </p>
    </div>
  );
};