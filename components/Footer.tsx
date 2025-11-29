import React from 'react';
import { Sun, Flag } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Sun className="h-6 w-6 text-brand-500" />
              <span className="text-xl font-bold text-white">Tania Energia</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Flag className="h-4 w-4 text-red-500" />
              <span>Projekt objęty patronatem Prezydenta RP</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Treść Ustawy (PDF)</a>
            <a href="#" className="hover:text-white transition-colors">Analizy Eksperckie</a>
            <a href="#" className="hover:text-white transition-colors">Dla mediów</a>
            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <p>Strona ma charakter informacyjny i promuje projekt ustawy o zmianie niektórych ustaw w celu obniżenia kosztów energii elektrycznej.</p>
          <p className="mt-2 md:mt-0">&copy; {new Date().getFullYear()} Kancelaria Prezydenta RP. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};