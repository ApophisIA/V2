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
  website: string;
  automationDescription: string;
  budget: string;
  termsAccepted: boolean;
};

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  companyName: '',
  countryCode: '',
  phone: '',
  email: '',
  website: '',
  automationDescription: '',
  budget: '',
  termsAccepted: false
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9\s-]+$/;
  return phoneRegex.test(phone);
};

const validateUrl = (url: string): boolean => {
  if (!url) return true; // Allow empty URL
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const AutomationForm = () => {
  const { t, getLocalizedPath } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [websiteError, setWebsiteError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'email') {
      setEmailError(validateEmail(value) ? '' : 'Please enter a valid email address');
    }
    
    if (name === 'phone') {
      setPhoneError(validatePhone(value) ? '' : 'Please enter a valid phone number');
    }

    if (name === 'website') {
      setWebsiteError(validateUrl(value) ? '' : 'Please enter a valid URL (e.g., https://example.com)');
    }

    if (name === 'automationDescription') {
      setCharCount(value.length);
      if (value.length <= 1000) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
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
      validateUrl(formData.website) &&
      formData.automationDescription.length >= 50 &&
      formData.budget !== '' &&
      formData.termsAccepted === true
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('collection', 'automation_inquiry');
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('companyName', formData.companyName);
    formDataToSend.append('phone', `${formData.countryCode}${formData.phone}`);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('website', formData.website);
    formDataToSend.append('automationDescription', formData.automationDescription);
    formDataToSend.append('budget', formData.budget);
    formDataToSend.append('termsAccepted', formData.termsAccepted ? 'true' : 'false');

    try {
      const response = await fetch('https://hook.eu2.make.com/x6byfln95hgd21pz5syiwvycjoieiw3h', {
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
          <h2 className="text-2xl font-bold text-white mb-8">{t('form.automation.title')}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
                {t('form.website')} ({t('form.optional')})
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://example.com"
                className={`w-full px-4 py-2 bg-gray-800 rounded-lg border ${
                  websiteError ? 'border-red-500' : 'border-gray-700'
                } text-white focus:ring-2 focus:ring-purple-500`}
              />
              {websiteError && (
                <p className="mt-1 text-sm text-red-400">{websiteError}</p>
              )}
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

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.automation.description')} *
              </label>
              <textarea
                name="automationDescription"
                value={formData.automationDescription}
                onChange={handleInputChange}
                placeholder={t('form.automation.description.placeholder')}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 h-40"
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

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.automation.investment')} *
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">{t('form.automation.select.investment')}</option>
                <option value="starter">{t('form.automation.starter')}</option>
                <option value="business">{t('form.automation.business')}</option>
                <option value="enterprise">{t('form.automation.enterprise')}</option>
              </select>
              <p className="mt-2 text-sm text-gray-400">
                {t('form.automation.investment.note')}
              </p>
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

export default AutomationForm;