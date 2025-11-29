import React, { useState, useEffect, useRef } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs: FaqItem[] = [
  {
    question: "Czy obniżenie opłat nie zaszkodzi firmom energetycznym?",
    answer: "Nie. Ustawa przewiduje mechanizm rekompensat. Operatorzy i sprzedawcy energii otrzymają zwrot utraconych przychodów (z tytułu opłaty mocowej czy OZE) bezpośrednio od Zarządcy Rozliczeń S.A. Środki te pochodzić będą z funduszy europejskich (ETS), a nie z kieszeni klientów."
  },
  {
    question: "Skąd państwo weźmie pieniądze na te dopłaty?",
    answer: "Z systemu handlu emisjami (ETS). Polska otrzymuje ogromne środki ze sprzedaży uprawnień do emisji CO2. Zamiast 'rozpływać się' w budżecie, środki te (tzw. 'środki ETS') zostaną celowo przekierowane na finansowanie systemów wsparcia energetyki (Art. 49a ustawy)."
  },
  {
    question: "Kiedy ustawa wejdzie w życie?",
    answer: "Ustawa ma wejść w życie 1 stycznia 2026 roku. Daje to czas na przygotowanie systemów rozliczeniowych, ale korzyści będą odczuwalne natychmiast od pierwszego rachunku w 2026 roku."
  },
  {
    question: "Czy to jest zgodne z prawem unijnym?",
    answer: "Tak. Wykorzystanie środków z aukcji uprawnień ETS na cele związane z transformacją energetyczną i wsparciem odbiorców w okresie transformacji jest zgodne z dyrektywami unijnymi. To realizacja zasady 'zanieczyszczający płaci', która chroni obywateli."
  },
  {
    question: "O ile spadną moje rachunki?",
    answer: "To zależy od Twojego zużycia, ale usunięcie opłaty mocowej (ok. 10-15 zł/mc dla gospodarstwa), opłat OZE i kogeneracyjnej oraz obniżenie VAT z 23% na 5% może obniżyć łączny rachunek o około 20-30%."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

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
    <section id="faq" className="py-20 bg-brand-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={addToRefs}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl font-bold mb-4">Pytania i Odpowiedzi</h2>
          <p className="text-brand-100 text-lg">Rozwiewamy wątpliwości dotyczące projektu.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              style={{ transitionDelay: `${index * 100}ms` }}
              className="bg-brand-800 rounded-xl overflow-hidden border border-brand-700 opacity-0 translate-y-8 transition-all duration-500 ease-out"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-brand-700/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-brand-300" /> : <ChevronDown className="w-5 h-5 text-brand-300" />}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-brand-100 leading-relaxed border-t border-brand-700/50 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};