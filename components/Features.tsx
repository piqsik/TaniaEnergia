import React, { useEffect, useRef } from 'react';
import { PiggyBank, BatteryCharging, Factory, Percent, TrendingDown, Scale, ArrowRight, ArrowDown, Coins, Landmark, Receipt } from 'lucide-react';
import { FeaturePoint } from '../types';

const features: FeaturePoint[] = [
  {
    title: "Zerowa Opłata Mocowa",
    description: "Od 1 stycznia 2026 r. stawka opłaty mocowej dla gospodarstw domowych wynosi 0 zł (Art. 74a).",
    icon: BatteryCharging
  },
  {
    title: "VAT 5% na Energię",
    description: "Obniżamy podatek VAT na energię elektryczną z 23% na 5% (Art. 2), co bezpośrednio zmniejsza kwotę brutto.",
    icon: Percent
  },
  {
    title: "Zerowa Opłata OZE",
    description: "Opłata na odnawialne źródła energii zostaje zredukowana do 0 zł (Art. 99a). System wspieramy z funduszy ETS.",
    icon: TrendingDown
  },
  {
    title: "Uczciwe Marże",
    description: "Ograniczamy zwrot z kapitału dla monopoli energetycznych do poziomu stopy referencyjnej NBP + 3%.",
    icon: Scale
  },
  {
    title: "Finansowanie z Emisji",
    description: "Koszty systemu pokryją przychody z aukcji uprawnień do emisji CO2, a nie odbiorcy końcowi.",
    icon: Factory
  },
  {
    title: "Wsparcie Kogeneracji",
    description: "Opłata kogeneracyjna również spada do 0 zł (Art. 64a), wspierając jednocześnie efektywne ciepłownictwo.",
    icon: PiggyBank
  }
];

export const Features: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '50px' });

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={addToRefs}
          className="text-center mb-16 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Konkretne korzyści w Twoim portfelu
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Analiza projektu ustawy w prostych słowach. Oto co zyskujesz.
          </p>
        </div>

        {/* Grid korzyści */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              style={{ transitionDelay: `${index * 100}ms` }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-brand-100 transition-all duration-700 ease-out group relative overflow-hidden opacity-0 translate-y-12"
            >
              {/* Decorative hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 via-transparent to-brand-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm group-hover:shadow-brand-500/20">
                  <feature.icon className="w-8 h-8 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sekcja wizualizacji przepływu pieniędzy */}
        <div 
          ref={addToRefs}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-brand-100 shadow-inner relative overflow-hidden opacity-0 translate-y-12 transition-all duration-1000 ease-out"
        >
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="text-center mb-12 relative z-10">
             <span className="text-brand-600 font-bold tracking-wider uppercase text-xs mb-2 block">Mechanizm Finansowania</span>
             <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Skąd biorą się pieniądze na dopłaty?</h3>
             <p className="text-gray-600 mt-2">Dzięki ustawie, pieniądze z emisji CO2 wracają do Polaków.</p>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8 md:gap-4">
             
             {/* Krok 1 */}
             <div className="flex flex-col items-center text-center max-w-[200px]">
               <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4 shadow-sm">
                 <Factory className="w-10 h-10 text-gray-600" />
               </div>
               <h4 className="font-bold text-gray-800 mb-2">Przemysł i CO2</h4>
               <p className="text-sm text-gray-500">Duże zakłady kupują uprawnienia do emisji CO2.</p>
             </div>

             {/* Strzałka 1 */}
             <div className="hidden md:block text-brand-300 animate-pulse">
               <ArrowRight className="w-8 h-8" />
             </div>
             <div className="md:hidden text-brand-300 animate-pulse">
               <ArrowDown className="w-8 h-8" />
             </div>

             {/* Krok 2 */}
             <div className="flex flex-col items-center text-center max-w-[200px]">
               <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-200">
                 <Coins className="w-10 h-10 text-blue-600" />
               </div>
               <h4 className="font-bold text-gray-800 mb-2">Fundusz ETS</h4>
               <p className="text-sm text-gray-500">Miliardy złotych z aukcji trafiają do budżetu.</p>
             </div>

             {/* Strzałka 2 */}
             <div className="hidden md:block text-brand-300 animate-pulse">
               <ArrowRight className="w-8 h-8" />
             </div>
             <div className="md:hidden text-brand-300 animate-pulse">
               <ArrowDown className="w-8 h-8" />
             </div>

             {/* Krok 3 */}
             <div className="flex flex-col items-center text-center max-w-[200px]">
               <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mb-4 shadow-sm border border-brand-200 ring-4 ring-brand-50">
                 <Landmark className="w-10 h-10 text-brand-600" />
               </div>
               <h4 className="font-bold text-brand-800 mb-2">Ustawa Prezydenta</h4>
               <p className="text-sm text-gray-600">Przekierowuje te środki na pokrycie opłat systemowych.</p>
             </div>

             {/* Strzałka 3 */}
             <div className="hidden md:block text-brand-300 animate-pulse">
               <ArrowRight className="w-8 h-8" />
             </div>
             <div className="md:hidden text-brand-300 animate-pulse">
               <ArrowDown className="w-8 h-8" />
             </div>

             {/* Krok 4 */}
             <div className="flex flex-col items-center text-center max-w-[200px]">
               <div className="w-20 h-20 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-brand-200">
                 <Receipt className="w-10 h-10 text-white" />
               </div>
               <h4 className="font-bold text-gray-900 mb-2">Niższy Rachunek</h4>
               <p className="text-sm text-gray-600">Ty płacisz mniej, bo opłaty pokrył system ETS.</p>
             </div>

           </div>
        </div>

      </div>
    </section>
  );
};