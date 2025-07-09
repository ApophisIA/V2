import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { countryCodes } from '../data/countryCodes';
import { Link } from 'react-router-dom';

type FormData = {
  firstName: string;
  lastName: string;
  companyName: string;
  countryCode: string;
  phone: string;
  email: string;
  websiteEnabled: boolean;
  websiteUrl: string;
  whatsappEnabled: boolean;
  subscriptionTier: string;
  subscriptionDuration: string;
  // New fields added:
  chatbotDescription: string;
  connectAPIs: string;
  apisIntegration: string;
  termsAccepted: boolean;
};

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  companyName: '',
  countryCode: '',
  phone: '',
  email: '',
  websiteEnabled: false,
  websiteUrl: '',
  whatsappEnabled: false,
  subscriptionTier: '',
  subscriptionDuration: 'monthly',
  // Initial values for new fields:
  chatbotDescription: '',
  connectAPIs: '',
  apisIntegration: '',
  termsAccepted: false,
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9\s-]+$/;
  return phoneRegex.test(phone);
};

const calculatePrice = (basePrice: number, duration: string): number => {
  switch (duration) {
    case 'annually':
      return basePrice * 12 * 0.8; // 20% discount on annual total
    case 'semi-annually':
      return basePrice * 6 * 0.9; // 10% discount on 6-month total
    default:
      return basePrice;
  }
};

const ChatbotForm = () => {
  const { t, getLocalizedPath } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const getBasePriceFromTier = (tier: string): number => {
    switch (tier) {
      case 'basic':
        return 300;
      case 'standard':
        return 650;
      case 'premium':
        return 1200;
      default:
        return 0;
    }
  };

  const getAdjustedPrice = (): string => {
    const basePrice = getBasePriceFromTier(formData.subscriptionTier);
    const adjustedPrice = calculatePrice(basePrice, formData.subscriptionDuration);
    return `€${adjustedPrice.toLocaleString()}`;
  };

  const getPriceDescription = (): string => {
    switch (formData.subscriptionDuration) {
      case 'annually':
        return 'one-time payment for 12 months';
      case 'semi-annually':
        return 'one-time payment for 6 months';
      default:
        return 'per month';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'email') {
      setEmailError(validateEmail(value) ? '' : 'Please enter a valid email address');
    }
    
    if (name === 'phone') {
      setPhoneError(validatePhone(value) ? '' : 'Please enter a valid phone number');
    }

    if (name === 'chatbotDescription') {
      setCharCount(value.length);
      if (value.length <= 1000) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.countryCode !== '' &&
      formData.phone.trim() !== '' &&
      validatePhone(formData.phone) &&
      formData.email.trim() !== '' &&
      validateEmail(formData.email) &&
      (formData.websiteEnabled ? formData.websiteUrl.trim() !== '' : true) &&
      formData.subscriptionTier !== '' &&
      // New fields validation
      formData.chatbotDescription.trim() !== '' &&
      formData.chatbotDescription.length >= 50 &&
      formData.connectAPIs.trim() !== '' &&
      (formData.connectAPIs === 'yes' ? formData.apisIntegration.trim() !== '' : true) &&
      formData.termsAccepted === true
    );
  };

  const getDiscountedPriceDisplay = (): string => {
    const basePrice = getBasePriceFromTier(formData.subscriptionTier);
    const duration = formData.subscriptionDuration;
    let originalTotal: number;
    switch (duration) {
      case 'annually':
        originalTotal = basePrice * 12;
        break;
      case 'semi-annually':
        originalTotal = basePrice * 6;
        break;
      default:
        originalTotal = basePrice;
    }
    const adjusted = calculatePrice(basePrice, duration);
  
    if (duration === 'monthly') {
      // Pour le paiement mensuel, affiche uniquement le prix ajusté
      return `€${adjusted.toLocaleString()}`;
    } else {
      // Pour les autres durées, affiche le prix ajusté et la réduction
      const discountAmount = originalTotal - adjusted;
      return `€${adjusted.toLocaleString()} (-€${discountAmount.toLocaleString()})`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('collection', 'chatbot_inquiry');
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('companyName', formData.companyName);
    formDataToSend.append('phone', `${formData.countryCode}${formData.phone}`);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('website', formData.websiteEnabled ? 'true' : 'false');
    formDataToSend.append('websiteUrl', formData.websiteUrl);
    formDataToSend.append('whatsapp', formData.whatsappEnabled ? 'true' : 'false');
    formDataToSend.append('subscriptionTier', formData.subscriptionTier);
    formDataToSend.append('subscriptionDuration', formData.subscriptionDuration);
    formDataToSend.append('adjustedPrice', getAdjustedPrice());
    // Append new fields:
    formDataToSend.append('chatbotDescription', formData.chatbotDescription);
    formDataToSend.append('connectAPIs', formData.connectAPIs);
    formDataToSend.append('apisIntegration', formData.apisIntegration);
    formDataToSend.append('termsAccepted', formData.termsAccepted ? 'true' : 'false');

    try {
      const response = await fetch('https://hook.eu2.make.com/vr4nndcjajiw6653h583pd2u38jcj334', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-purple-600/20 rounded-full mx-auto flex items-center justify-center">
                <Check className="w-10 h-10 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">{t('form.success')}</h2>
              <p className="text-gray-300">{t('form.success.message')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-8">{t('form.chatbot.contact')}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ... les autres champs du formulaire ... */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.firstName')} *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.lastName')} *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.companyName')} ({t('form.optional')})
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.phone')} *
              </label>
              <div className="flex gap-4">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="min-w-[8rem] w-auto px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">{t('form.chatbot.select.code')}</option>
                  {countryCodes.map(({ code }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('form.phone')}
                  className="flex-1 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              {phoneError && (
                <p className="mt-1 text-sm text-red-400">{phoneError}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.email')} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 bg-gray-800 rounded-lg border ${
                  emailError ? 'border-red-500' : 'border-gray-700'
                } text-white focus:ring-2 focus:ring-purple-500`}
                required
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-400">{emailError}</p>
              )}
            </div>

            {/* New Field: Chatbot Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.chatbot.description')} *
              </label>
              <textarea
                name="chatbotDescription"
                value={formData.chatbotDescription}
                onChange={(e) => {
                  handleInputChange(e);
                  // Auto-ajustement de la hauteur
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                placeholder={t('form.chatbot.description.placeholder')}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 resize-none"
                required
                maxLength={1000}
              />
              <div className="mt-2 flex justify-between text-sm">
                <span className={charCount < 50 ? 'text-red-500' : 'text-green-500'}>
                  {charCount < 50 
                    ? `${50 - charCount} ${t('form.automation.min.chars')}` 
                    : t('form.automation.min.chars.met')}
                </span>
                <span className="text-gray-400">
                  {charCount}/1000 {t('form.automation.chars.left')}</span>
              </div>
            </div>

            {/* New Field: API Integration with two checkboxes */}
            <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
              {t('form.chatbot.api.question')} *
              <div className="relative group ml-2">
                {/* Icône de point d'interrogation */}
                <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-purple-600 border border-purple-700 text-white cursor-pointer">
                  ?
                </span>
                {/* Tooltip caché qui s'affiche au survol */}
                <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10">
                  {t('form.chatbot.api.tooltip')}
                </div>
              </div>
            </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="connectAPIsYes"
                    checked={formData.connectAPIs === 'yes'}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData(prev => ({ ...prev, connectAPIs: 'yes' }));
                      } else {
                        setFormData(prev => ({ ...prev, connectAPIs: '' }));
                      }
                    }}
                    className="form-checkbox text-purple-600 rounded bg-gray-800 border-gray-700"
                  />
                  <span className="ml-2 text-white"> {t('form.chatbot.api.yes')}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="connectAPIsNo"
                    checked={formData.connectAPIs === 'no'}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData(prev => ({ ...prev, connectAPIs: 'no' }));
                      } else {
                        setFormData(prev => ({ ...prev, connectAPIs: '' }));
                      }
                    }}
                    className="form-checkbox text-purple-600 rounded bg-gray-800 border-gray-700"
                  />
                  <span className="ml-2 text-white"> {t('form.chatbot.api.no')}</span>
                </label>
              </div>
            </div>

            {/* Nouveau bloc conditionnel pour indiquer quelles APIs */}
            {formData.connectAPIs === 'yes' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.chatbot.api.description.placeholder')} *
                </label>
                <input
                  type="text"
                  name="apisIntegration"
                  value={formData.apisIntegration}
                  onChange={handleInputChange}
                  placeholder={t('form.chatbot.api.placeholder')}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            )}

            <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
              {t('form.chatbot.deployment')} *
              <div className="relative group ml-2">
                <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-purple-600 border border-purple-700 text-white cursor-pointer font-bold">
                  ?
                </span>
                <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10">
                  {t('form.chatbot.deployment.tooltip')}
                </div>
              </div>
            </label>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="websiteEnabled"
                    checked={formData.websiteEnabled}
                    onChange={handleInputChange}
                    className="form-checkbox text-purple-600 rounded bg-gray-800 border-gray-700"
                  />
                  <span className="text-white">{t('form.chatbot.website.integration')}</span>
                </label>
                
                {formData.websiteEnabled && (
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    placeholder={t('form.chatbot.website.url')}
                    className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                    required
                  />
                )}

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="whatsappEnabled"
                    checked={formData.whatsappEnabled}
                    onChange={handleInputChange}
                    className="form-checkbox text-purple-600 rounded bg-gray-800 border-gray-700"
                  />
                  <span className="text-white">{t('form.chatbot.whatsapp.integration')}</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.chatbot.subscription')} *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {t('form.chatbot.tier')}
                  </label>
                  <select
                    name="subscriptionTier"
                    value={formData.subscriptionTier}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">{t('form.chatbot.select.tier')}</option>
                    <option value="basic">{t('plans.basic.title')} (50K {t('plans.messages')})</option>
                    <option value="standard">{t('plans.standard.title')} (100K {t('plans.messages')})</option>
                    <option value="premium">{t('plans.premium.title')} (300K+ {t('plans.messages')})</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {t('form.chatbot.duration')}
                  </label>
                  <select
                    name="subscriptionDuration"
                    value={formData.subscriptionDuration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="monthly">{t('form.chatbot.monthly')}</option>
                    <option value="semi-annually">{t('form.chatbot.semi.annually')}</option>
                    <option value="annually">{t('form.chatbot.annually')}</option>
                  </select>
                </div>
              </div>
              {formData.subscriptionTier && (
                <div className="mt-4 p-4 bg-purple-900/20 rounded-lg">
                  <p className="text-purple-300">
                    {t('form.chatbot.total.cost')}: <span className="font-semibold">{getDiscountedPriceDisplay()}</span> + <span className="text-sm font-semibold">{t('form.chatbot.development.cost')}</span>
                  </p>
                  {/* <p className="text-purple-300 mt-10">
                    {t('generalConditions.paymentTerms.description')}
                  </p>
                  <ul className="list-disc pl-6 text-purple-300 text-sm space-y-1 mt-3">
                    <li>{t('generalConditions.paymentTerms.description1')}</li>
                    <li>{t('generalConditions.paymentTerms.description2')}</li>
                    <li>{t('generalConditions.paymentTerms.description3')}</li>
                    <li>{t('generalConditions.paymentTerms.description4')}</li>
                  </ul>*/}
                  <p className="text-purple-300 mt-2">
                    {t('form.chatbot.nocost')} *
                  </p>
                </div>
              )}
            </div>

            {/* Nouvelle case à cocher pour accepter les conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="form-checkbox text-purple-600 rounded bg-gray-800 border-gray-700"
                required
              />
              <span className="ml-2 text-white text-sm">
                {t('form.terms')}{' '}
                (
                <Link to={getLocalizedPath('terms')} className="underline hover:text-purple-400">
                  {t('footer.terms')}
                </Link>
                {' '} &amp; {' '}
                <Link to={getLocalizedPath('conditions')} className="underline hover:text-purple-400">
                  {t('footer.conditions')}
                </Link>
                )
              </span>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`w-full px-6 py-3 rounded-lg transition-colors ${
                  isFormValid()
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
              >
                {t('form.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotForm;
