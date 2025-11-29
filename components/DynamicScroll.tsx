import React, { useState, useEffect, useRef } from 'react';
import { ScrollStep } from '../types';

const steps: ScrollStep[] = [
  {
    id: 1,
    title: "Spokój o domowy budżet",
    content: "Dla Prezydenta najważniejsza jest polska rodzina. Dlatego usuwamy skomplikowane opłaty dodatkowe (mocową, OZE, kogeneracyjną). Dzięki temu rachunki stają się proste i przejrzyste, a w portfelu zostaje więcej pieniędzy na codzienne wydatki.",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Szczęśliwa rodzina gotująca razem w kuchni"
  },
  {
    id: 2,
    title: "Radość ze wspólnych chwil",
    content: "Mniej zmartwień o rachunki to więcej czasu na to, co naprawdę ważne. Projekt ustawy gwarantuje zerowe stawki opłat od 2026 roku, co pozwala rodzinom planować przyszłość bez obaw o nagłe podwyżki cen energii.",
    imageUrl: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=2054&auto=format&fit=crop",
    imageAlt: "Rodzice bawiący się z dziećmi na plaży w słońcu"
  },
  {
    id: 3,
    title: "Zdrowa przyszłość dla dzieci",
    content: "Pieniądze z emisji CO2 (system ETS) wracają do Polaków w postaci tańszego prądu, ale też finansują zieloną transformację. To inwestycja w czyste powietrze i zdrowe środowisko, w którym będą dorastać nasze dzieci.",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    imageAlt: "Rodzina spacerująca po zielonym parku wśród drzew"
  },
  {
    id: 4,
    title: "Oszczędności na marzenia",
    content: "Obniżenie VAT do 5% i likwidacja opłat to realne oszczędności rzędu kilkuset złotych rocznie. To fundusze, które polskie rodziny mogą przeznaczyć na wspólne wakacje, edukację dzieci lub inne marzenia.",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Rodzina idąca razem do szkoły, edukacja i przyszłość"
  }
];

export const DynamicScroll: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px', // Trigger point in the middle of viewport
        threshold: 0.1,
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Filary Projektu Prezydenckiego</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Lepsze życie polskich rodzin</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zobacz, jak inicjatywa Prezydenta przekłada się na codzienne życie i bezpieczeństwo finansowe Twojej rodziny.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Text Side (Scrollable) */}
          <div className="lg:w-1/2 space-y-32 pb-24 pt-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => { stepRefs.current[index] = el; }}
                data-index={index}
                className={`transition-all duration-700 transform ${
                  activeStep === index 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-30 -translate-x-4 scale-95'
                }`}
              >
                <div className="flex items-center mb-6">
                  <span className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl mr-4 shadow-lg transition-colors duration-500 ${
                    activeStep === index ? 'bg-brand-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.id}
                  </span>
                  <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                    activeStep === index ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                <div className="pl-16">
                  <p className={`text-lg leading-relaxed p-6 rounded-2xl shadow-sm border transition-all duration-500 ${
                    activeStep === index ? 'bg-white text-gray-700 border-brand-100 shadow-md' : 'bg-transparent text-gray-400 border-transparent shadow-none'
                  }`}>
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Side (Sticky) */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="sticky top-32 h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                    activeStep === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                  }`}
                >
                  <img
                    src={step.imageUrl}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-10">
                    <div className="transform transition-all duration-700 translate-y-0 opacity-100">
                      <p className="text-brand-300 font-bold uppercase text-sm mb-1">Krok {step.id}</p>
                      <p className="text-white text-2xl font-bold">{step.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};