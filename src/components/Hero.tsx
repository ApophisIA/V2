import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const text = t('hero.empowerBusiness');
    let currentText = "";
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < text.length && typingRef.current) {
        currentText += text[currentIndex];
        typingRef.current.textContent = currentText;
        currentIndex++;
        setTimeout(typeText, 50);
      } else {
        setTimeout(() => setShowSecondLine(true), 300);
      }
    };

    typeText();
  }, [t]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Le rôle "banner" indique que cette section est le contenu introductif de la page
    <section className="relative min-h-screen flex items-center justify-center" role="banner">
      <div className="text-center z-10 px-4">
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
          <img 
            src="/Symbole transp.png" 
            alt={t('hero.logoAlt') || "Logo Apophis.IA"} 
            className="h-64 md:h-96 mx-auto transition-all duration-300 animate-glow will-change-[filter]"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          {/* L'attribut aria-label permet de donner une description accessible pendant l'animation de saisie */}
          <span ref={typingRef} className="inline-block" aria-label={t('hero.empowerBusiness')}></span>
          <span className="animate-blink" aria-hidden="true">|</span>
        </h1>
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-1000 ${
            showSecondLine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-600 text-transparent bg-clip-text">
            Apophis.IA
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {t('hero.tagline')}
        </p>

        <button 
          onClick={scrollToServices}
          className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          aria-label={t('hero.getStarted')}
        >
          <span>{t('hero.getStarted')}</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
        </button>
      </div>

      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label={t('hero.scrollDown') || "Scroll down"}
      >
        <ChevronDown className="text-white/50" size={32} />
      </button>
    </section>
  );
};

export default Hero;
