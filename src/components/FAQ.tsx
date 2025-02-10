// src/components/FAQ.tsx
import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useFAQ } from '../contexts/FAQContext';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  // Récupération du paramètre "lang" depuis l'URL
  const { lang } = useParams<{ lang: 'en' | 'fr' }>();
  const { language, setLanguage } = useLanguage();
  const { f, language: faqLang } = useFAQ(); // faqLang devrait être identique à language

  // Met à jour la langue dans les deux contextes si le paramètre "lang" change
  useEffect(() => {
    if (lang && lang !== language) {
      setLanguage(lang);
    }
  }, [lang, language, setLanguage]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            {language === 'fr' ? f('faq.title') : f('faq.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {language === 'fr' ? f('faq.subtitle') : f('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {/* Exemple d'utilisation : vous pouvez ajouter ici le mapping sur vos FAQ individuels */}
          {/* Par exemple, si vous définissez des clés faq.q1, faq.a1, etc. */}
          <details className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 text-lg font-medium text-white cursor-pointer list-none">
              {f('faq.q1')}
              <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">{f('faq.a1')}</p>
            </div>
          </details>
          {/* Ajoutez d'autres détails pour les autres FAQ */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
