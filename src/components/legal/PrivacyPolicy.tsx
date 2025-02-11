import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            {/* Titre principal */}
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              {t('privacyPolicy.title')}
            </h1>

            <div className="prose prose-invert max-w-none">
              {/* Date de mise à jour */}
              <p className="text-gray-300">{t('privacyPolicy.lastUpdated')}</p>

              {/* 1. Informations/Information We Collect */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('privacyPolicy.information.title')}
              </h2>
              <p className="text-gray-300">
                {t('privacyPolicy.information.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('privacyPolicy.information.description1')}</li>
                <li>{t('privacyPolicy.information.description2')}</li>
                <li>{t('privacyPolicy.information.description3')}</li>
                <li>{t('privacyPolicy.information.description4')}</li>
              </ul>

              {/* 2. How/Comment We Use Your Information */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('privacyPolicy.use.title')}
              </h2>
              <p className="text-gray-300">
                {t('privacyPolicy.use.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('privacyPolicy.use.description1')}</li>
                <li>{t('privacyPolicy.use.description2')}</li>
                <li>{t('privacyPolicy.use.description3')}</li>
                <li>{t('privacyPolicy.use.description4')}</li>
              </ul>

              {/* 3. Data Protection / Protection des Données */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('privacyPolicy.protection.title')}
              </h2>
              <p className="text-gray-300">
                {t('privacyPolicy.protection.description')}
              </p>

              {/* 4. Your Rights / Vos Droits */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('privacyPolicy.rights.title')}
              </h2>
              <p className="text-gray-300">
                {t('privacyPolicy.rights.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('privacyPolicy.rights.description1')}</li>
                <li>{t('privacyPolicy.rights.description2')}</li>
                <li>{t('privacyPolicy.rights.description3')}</li>
                <li>{t('privacyPolicy.rights.description4')}</li>
                <li>{t('privacyPolicy.rights.description5')}</li>
                <li>{t('privacyPolicy.rights.description6')}</li>
              </ul>

              {/* 5. Contact Information / Coordonnées */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('privacyPolicy.contact.title')}
              </h2>
              <p className="text-gray-300">
                {t('privacyPolicy.contact.description')}<br />
                {t('privacyPolicy.contact.email')}<br />
                {t('privacyPolicy.contact.address')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
