import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '/src/English Flag.png'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '/src/France flag.png'
  }
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors duration-300"
      >
        <Globe size={20} />
        <span className="uppercase">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as 'en' | 'fr');
                  setIsOpen(false);
                }}
                className={`w-full flex items-center px-4 py-2 text-sm ${
                  language === lang.code
                    ? 'bg-purple-600/20 text-purple-400'
                    : 'text-gray-300 hover:bg-gray-800'
                } transition-colors duration-200`}
                role="menuitem"
              >
                <img
                  src={lang.flag}
                  alt={lang.code}
                  className="w-5 h-5 object-cover rounded-sm mr-3"
                />
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;