import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="mb-12">
                  <img 
                    src="/src/Symbole transp.png" 
                    alt="Apophis.IA" 
                    className="h-24 mb-6 animate-glow"
                  />
                  <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {t('contact.title')}
                  </h1>
                </div>

                <div className="space-y-8">
                  <a 
                    href="mailto:amaury@apophisia.lu"
                    className="flex items-start space-x-4 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="p-3 bg-purple-900/30 rounded-lg group-hover:bg-purple-900/50 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">{t('contact.email')}</p>
                      <p className="text-sm">amaury@apophisia.lu</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+352691549904"
                    className="flex items-start space-x-4 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="p-3 bg-purple-900/30 rounded-lg group-hover:bg-purple-900/50 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">{t('contact.phone')}</p>
                      <p className="text-sm">+352 691 549 904</p>
                    </div>
                  </a>

                  <a 
                    href="https://maps.google.com/?q=29+rue+Nicolas+Flener+Mamer+8228+Luxembourg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="p-3 bg-purple-900/30 rounded-lg group-hover:bg-purple-900/50 transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">{t('contact.address')}</p>
                      <p className="text-sm">29, rue Nicolas Flener</p>
                      <p className="text-sm">Mamer-8228</p>
                      <p className="text-sm">Luxembourg</p>
                      <span className="inline-flex items-center text-xs mt-1 text-purple-400">
                        {t('contact.openMaps')} <ExternalLink className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="h-full min-h-[400px] bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <p>Loading map...</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.5747959440584!2d6.020700!3d49.627600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954f2d8d8d8d8d%3A0x0!2s29%20Rue%20Nicolas%20Flener%2C%208228%20Mamer%2C%20Luxembourg!5e0!3m2!1sen!2s!4v1625147200000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10 grayscale contrast-125 opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;