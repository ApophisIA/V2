import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t, getLocalizedPath, setLanguage, language } = useLanguage();
  const { lang } = useParams<{ lang: 'en' | 'fr' }>();
  const currentYear = new Date().getFullYear();

  // Met à jour la langue si le paramètre "lang" dans l'URL diffère du contexte actuel
  useEffect(() => {
    if (lang && lang !== language) {
      setLanguage(lang);
    }
  }, [lang, language, setLanguage]);

  return (
    <footer className="relative mt-20 border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-blue-900/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/Symbole transp.png" 
              alt="Apophis.IA" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-4">
              {t('services.subtitle')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath('services')} className="text-gray-400 hover:text-purple-400 transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('contact')} className="text-gray-400 hover:text-purple-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('faq')} className="text-gray-400 hover:text-purple-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath('privacy')} className="text-gray-400 hover:text-purple-400 transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('terms')} className="text-gray-400 hover:text-purple-400 transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('conditions')} className="text-gray-400 hover:text-purple-400 transition-colors">
                  {t('footer.conditions')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {currentYear} Apophis.IA. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
