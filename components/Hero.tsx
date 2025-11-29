import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, ShieldCheck, Flag } from 'lucide-react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=2070&auto=format&fit=crop",
    alt: "Szczęśliwy ojciec z synem na barana w słońcu"
  },
  {
    url: "https://images.unsplash.com/photo-1581578731117-10d52143b0d8?q=80&w=2070&auto=format&fit=crop",
    alt: "Rodzina odpoczywająca w ciepłym, bezpiecznym domu"
  },
  {
    url: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop",
    alt: "Rodzina ciesząca się zachodem słońca i czystym powietrzem"
  }
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-brand-50 opacity-70"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-100 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 text-red-800 text-sm font-bold mb-2 border border-red-100 shadow-sm">
              <Flag className="w-4 h-4 mr-2 text-red-600 fill-red-600" />
              Inicjatywa Prezydenta RP
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Tania Energia dla <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-sky-600">Polskich Rodzin</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Prezydencki projekt ustawy, który realnie obniża rachunki. 0 zł opłat dodatkowych i tylko 5% VAT. Finansowanie z zysków państwa, aby w domowym budżecie zostało więcej pieniędzy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50">
                Zobacz jak to działa
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#benefits" className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:text-brand-600 transition-all shadow-sm">
                Szczegóły ustawy
              </a>
            </div>

            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center"><ShieldCheck className="w-5 h-5 mr-2 text-brand-500"/> Bezpieczeństwo energetyczne</div>
              <div className="flex items-center"><Leaf className="w-5 h-5 mr-2 text-brand-500"/> Zielona transformacja</div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 group aspect-[4/3] bg-gray-100">
              {heroImages.map((img, index) => (
                <img 
                  key={img.url}
                  src={img.url}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 text-white z-20">
                <p className="font-bold text-lg mb-1">Prezydencka Gwarancja Stabilności</p>
                <p className="text-sm opacity-90">Niższe koszty życia dla każdego obywatela</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow z-30">
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-3 rounded-full border border-red-100">
                  <span className="font-bold text-red-600 text-xs">PL</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Projekt Ustawy</p>
                  <p className="text-sm font-bold text-gray-900">Złożony w Sejmie</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};