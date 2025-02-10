import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // On récupère t, getLocalizedPath, setLanguage et la langue actuelle depuis le contexte
  const { t, getLocalizedPath, setLanguage, language } = useLanguage();
  const location = useLocation();

  // Lorsque l'URL change, on extrait le premier segment pour déterminer la langue
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    // Le premier segment après le '/' devrait contenir la langue (ex: "en" ou "fr")
    const langFromUrl = pathSegments[1];
    if ((langFromUrl === 'en' || langFromUrl === 'fr') && langFromUrl !== language) {
      setLanguage(langFromUrl);
    }
  }, [location, setLanguage, language]);

  // Gestion du scroll pour modifier l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '' },
    { name: t('nav.services'), path: 'services' },
    { name: t('nav.contact'), path: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'h-[80px] bg-black/90 backdrop-blur-md'
          : 'h-[100px] bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link to={getLocalizedPath('')}>
            <img
              src="/Apophis.png"
              alt="Apophis.IA"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-20' : 'h-24'
              }`}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={getLocalizedPath(item.path)}
              className="text-white hover:text-purple-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md md:hidden">
            <nav className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={getLocalizedPath(item.path)}
                  className="text-white hover:text-purple-400 py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
