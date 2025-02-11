import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            {/* Titre principal */}
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              {t('terms.title')}
            </h1>

            <div className="prose prose-invert max-w-none">
              {/* Date de mise à jour */}
              <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>

              {/* 1. Acceptance of Terms */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{t('terms.acceptance.title')}</h2>
              <p className="text-gray-300">{t('terms.acceptance.description')}</p>

              {/* 2. Services Description */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{t('terms.services.title')}</h2>
              <p className="text-gray-300">{t('terms.services.description')}</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('terms.services.description1')}</li>
                <li>{t('terms.services.description2')}</li>
                <li>{t('terms.services.description3')}</li>
                <li>{t('terms.services.description4')}</li>
              </ul>

              {/* 3. User Obligations */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{t('terms.userObligations.title')}</h2>
              <p className="text-gray-300">{t('terms.userObligations.description')}</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('terms.userObligations.description1')}</li>
                <li>{t('terms.userObligations.description2')}</li>
                <li>{t('terms.userObligations.description3')}</li>
                <li>{t('terms.userObligations.description4')}</li>
              </ul>

              {/* 4. Intellectual Property */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{t('terms.intellectualProperty.title')}</h2>
              <p className="text-gray-300">{t('terms.intellectualProperty.description')}</p>

              {/* 5. Limitation of Liability */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{t('terms.limitationOfLiability.title')}</h2>
              <p className="text-gray-300">{t('terms.limitationOfLiability.description')}</p>

              {/* 6. Contact */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{t('terms.contact.title')}</h2>
              <p className="text-gray-300">{t('terms.contact.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
