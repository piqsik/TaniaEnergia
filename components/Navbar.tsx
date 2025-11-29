import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center space-x-2 text-brand-600">
              <Sun className="h-8 w-8 fill-brand-500 text-brand-600" />
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Tania Energia
              </span>
            </div>
            <span className="hidden md:block mx-3 h-6 w-px bg-gray-300"></span>
            <span className="text-xs md:text-sm text-gray-500 font-medium tracking-wide uppercase mt-1 md:mt-0">
              Projekt Prezydenta RP
            </span>
          </div>

          <div>
            <a href="#details" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg shadow-brand-500/30 text-sm flex items-center gap-2">
              Poprzyj projekt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};