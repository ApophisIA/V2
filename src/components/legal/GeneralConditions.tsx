import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const GeneralConditions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            {/* Titre principal */}
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              {t('generalConditions.title')}
            </h1>

            <div className="prose prose-invert max-w-none">
              {/* Date de mise à jour */}
              <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>

              {/* 1. Service Delivery */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('generalConditions.serviceDelivery.title')}
              </h2>
              <p className="text-gray-300">
                {t('generalConditions.serviceDelivery.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('generalConditions.serviceDelivery.description1')}</li>
                <li>{t('generalConditions.serviceDelivery.description2')}</li>
                <li>{t('generalConditions.serviceDelivery.description3')}</li>
                <li>{t('generalConditions.serviceDelivery.description4')}</li>
                <li>{t('generalConditions.serviceDelivery.description5')}</li>
              </ul>

              {/* 2. Payment Terms */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('generalConditions.paymentTerms.title')}
              </h2>
              <p className="text-gray-300">
                {t('generalConditions.paymentTerms.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('generalConditions.paymentTerms.description1')}</li>
                <li>{t('generalConditions.paymentTerms.description2')}</li>
                <li>{t('generalConditions.paymentTerms.description3')}</li>
                <li>{t('generalConditions.paymentTerms.description4')}</li>
              </ul>

              {/* 3. Service Level Agreement */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('generalConditions.sla.title')}
              </h2>
              <p className="text-gray-300">
                {t('generalConditions.sla.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('generalConditions.sla.description1')}</li>
                <li>{t('generalConditions.sla.description2')}</li>
                <li>{t('generalConditions.sla.description3')}</li>
                <li>{t('generalConditions.sla.description4')}</li>
              </ul>

              {/* 4. Modifications and Cancellations */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('generalConditions.modifications.title')}
              </h2>
              <p className="text-gray-300">
                {t('generalConditions.modifications.description')}
              </p>

              {/* 5. Support and Maintenance */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('generalConditions.support.title')}
              </h2>
              <p className="text-gray-300">
                {t('generalConditions.support.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('generalConditions.support.description1')}</li>
                <li>{t('generalConditions.support.description2')}</li>
                <li>{t('generalConditions.support.description3')}</li>
                <li>{t('generalConditions.support.description4')}</li>
              </ul>

              {/* 6. Contact Information */}
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {t('generalConditions.contact.title')}
              </h2>
              <p className="text-gray-300">
                {t('generalConditions.contact.description')}<br />
                {t('generalConditions.contact.email')}<br />
                {t('generalConditions.contact.phone')}<br />
                {t('generalConditions.contact.address')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralConditions;
