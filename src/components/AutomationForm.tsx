import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const countryCodes = [
  { code: '+1', country: 'US/CA' },
  { code: '+20', country: 'EG' },
  { code: '+27', country: 'ZA' },
  { code: '+30', country: 'GR' },
  { code: '+31', country: 'NL' },
  { code: '+32', country: 'BE' },
  { code: '+33', country: 'FR' },
  { code: '+34', country: 'ES' },
  { code: '+36', country: 'HU' },
  { code: '+39', country: 'IT' },
  { code: '+40', country: 'RO' },
  { code: '+41', country: 'CH' },
  { code: '+43', country: 'AT' },
  { code: '+44', country: 'GB' },
  { code: '+45', country: 'DK' },
  { code: '+46', country: 'SE' },
  { code: '+47', country: 'NO' },
  { code: '+48', country: 'PL' },
  { code: '+49', country: 'DE' },
  { code: '+51', country: 'PE' },
  { code: '+52', country: 'MX' },
  { code: '+54', country: 'AR' },
  { code: '+55', country: 'BR' },
  { code: '+56', country: 'CL' },
  { code: '+57', country: 'CO' },
  { code: '+58', country: 'VE' },
  { code: '+60', country: 'MY' },
  { code: '+61', country: 'AU' },
  { code: '+62', country: 'ID' },
  { code: '+63', country: 'PH' },
  { code: '+64', country: 'NZ' },
  { code: '+65', country: 'SG' },
  { code: '+66', country: 'TH' },
  { code: '+81', country: 'JP' },
  { code: '+82', country: 'KR' },
  { code: '+84', country: 'VN' },
  { code: '+86', country: 'CN' },
  { code: '+90', country: 'TR' },
  { code: '+91', country: 'IN' },
  { code: '+92', country: 'PK' },
  { code: '+93', country: 'AF' },
  { code: '+94', country: 'LK' },
  { code: '+95', country: 'MM' },
  { code: '+98', country: 'IR' },
  { code: '+212', country: 'MA' },
  { code: '+213', country: 'DZ' },
  { code: '+216', country: 'TN' },
  { code: '+218', country: 'LY' },
  { code: '+220', country: 'GM' },
  { code: '+221', country: 'SN' },
  { code: '+222', country: 'MR' },
  { code: '+223', country: 'ML' },
  { code: '+224', country: 'GN' },
  { code: '+225', country: 'CI' },
  { code: '+226', country: 'BF' },
  { code: '+227', country: 'NE' },
  { code: '+228', country: 'TG' },
  { code: '+229', country: 'BJ' },
  { code: '+230', country: 'MU' },
  { code: '+231', country: 'LR' },
  { code: '+232', country: 'SL' },
  { code: '+233', country: 'GH' },
  { code: '+234', country: 'NG' },
  { code: '+235', country: 'TD' },
  { code: '+236', country: 'CF' },
  { code: '+237', country: 'CM' },
  { code: '+238', country: 'CV' },
  { code: '+239', country: 'ST' },
  { code: '+240', country: 'GQ' },
  { code: '+241', country: 'GA' },
  { code: '+242', country: 'CG' },
  { code: '+243', country: 'CD' },
  { code: '+244', country: 'AO' },
  { code: '+245', country: 'GW' },
  { code: '+246', country: 'IO' },
  { code: '+247', country: 'AC' },
  { code: '+248', country: 'SC' },
  { code: '+249', country: 'SD' },
  { code: '+250', country: 'RW' },
  { code: '+251', country: 'ET' },
  { code: '+252', country: 'SO' },
  { code: '+253', country: 'DJ' },
  { code: '+254', country: 'KE' },
  { code: '+255', country: 'TZ' },
  { code: '+256', country: 'UG' },
  { code: '+257', country: 'BI' },
  { code: '+258', country: 'MZ' },
  { code: '+260', country: 'ZM' },
  { code: '+261', country: 'MG' },
  { code: '+262', country: 'RE' },
  { code: '+263', country: 'ZW' },
  { code: '+264', country: 'NA' },
  { code: '+265', country: 'MW' },
  { code: '+266', country: 'LS' },
  { code: '+267', country: 'BW' },
  { code: '+268', country: 'SZ' },
  { code: '+269', country: 'KM' },
  { code: '+290', country: 'SH' },
  { code: '+291', country: 'ER' },
  { code: '+297', country: 'AW' },
  { code: '+298', country: 'FO' },
  { code: '+299', country: 'GL' },
  { code: '+350', country: 'GI' },
  { code: '+351', country: 'PT' },
  { code: '+352', country: 'LU' },
  { code: '+353', country: 'IE' },
  { code: '+354', country: 'IS' },
  { code: '+355', country: 'AL' },
  { code: '+356', country: 'MT' },
  { code: '+357', country: 'CY' },
  { code: '+358', country: 'FI' },
  { code: '+359', country: 'BG' },
  { code: '+370', country: 'LT' },
  { code: '+371', country: 'LV' },
  { code: '+372', country: 'EE' },
  { code: '+373', country: 'MD' },
  { code: '+374', country: 'AM' },
  { code: '+375', country: 'BY' },
  { code: '+376', country: 'AD' },
  { code: '+377', country: 'MC' },
  { code: '+378', country: 'SM' },
  { code: '+379', country: 'VA' },
  { code: '+380', country: 'UA' },
  { code: '+381', country: 'RS' },
  { code: '+382', country: 'ME' },
  { code: '+383', country: 'XK' },
  { code: '+385', country: 'HR' },
  { code: '+386', country: 'SI' },
  { code: '+387', country: 'BA' },
  { code: '+389', country: 'MK' },
  { code: '+420', country: 'CZ' },
  { code: '+421', country: 'SK' },
  { code: '+423', country: 'LI' },
  { code: '+500', country: 'FK' },
  { code: '+501', country: 'BZ' },
  { code: '+502', country: 'GT' },
  { code: '+503', country: 'SV' },
  { code: '+504', country: 'HN' },
  { code: '+505', country: 'NI' },
  { code: '+506', country: 'CR' },
  { code: '+507', country: 'PA' },
  { code: '+508', country: 'PM' },
  { code: '+509', country: 'HT' },
  { code: '+590', country: 'GP' },
  { code: '+591', country: 'BO' },
  { code: '+592', country: 'GY' },
  { code: '+593', country: 'EC' },
  { code: '+594', country: 'GF' },
  { code: '+595', country: 'PY' },
  { code: '+596', country: 'MQ' },
  { code: '+597', country: 'SR' },
  { code: '+598', country: 'UY' },
  { code: '+599', country: 'CW' },
  { code: '+670', country: 'TL' },
  { code: '+672', country: 'NF' },
  { code: '+673', country: 'BN' },
  { code: '+674', country: 'NR' },
  { code: '+675', country: 'PG' },
  { code: '+676', country: 'TO' },
  { code: '+677', country: 'SB' },
  { code: '+678', country: 'VU' },
  { code: '+679', country: 'FJ' },
  { code: '+680', country: 'PW' },
  { code: '+681', country: 'WF' },
  { code: '+682', country: 'CK' },
  { code: '+683', country: 'NU' },
  { code: '+685', country: 'WS' },
  { code: '+686', country: 'KI' },
  { code: '+687', country: 'NC' },
  { code: '+688', country: 'TV' },
  { code: '+689', country: 'PF' },
  { code: '+690', country: 'TK' },
  { code: '+691', country: 'FM' },
  { code: '+692', country: 'MH' },
  { code: '+850', country: 'KP' },
  { code: '+852', country: 'HK' },
  { code: '+853', country: 'MO' },
  { code: '+855', country: 'KH' },
  { code: '+856', country: 'LA' },
  { code: '+880', country: 'BD' },
  { code: '+886', country: 'TW' },
  { code: '+960', country: 'MV' },
  { code: '+961', country: 'LB' },
  { code: '+962', country: 'JO' },
  { code: '+963', country: 'SY' },
  { code: '+964', country: 'IQ' },
  { code: '+965', country: 'KW' },
  { code: '+966', country: 'SA' },
  { code: '+967', country: 'YE' },
  { code: '+968', country: 'OM' },
  { code: '+970', country: 'PS' },
  { code: '+971', country: 'AE' },
  { code: '+972', country: 'IL' },
  { code: '+973', country: 'BH' },
  { code: '+974', country: 'QA' },
  { code: '+975', country: 'BT' },
  { code: '+976', country: 'MN' },
  { code: '+977', country: 'NP' },
  { code: '+992', country: 'TJ' },
  { code: '+993', country: 'TM' },
  { code: '+994', country: 'AZ' },
  { code: '+995', country: 'GE' },
  { code: '+996', country: 'KG' },
  { code: '+998', country: 'UZ' }
].sort((a, b) => a.code.localeCompare(b.code));

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
  budget: ''
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
  const { t } = useLanguage();
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
      formData.budget !== ''
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
                  className="w-32 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
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
              <div className="mt-2 flex justify-between text-sm text-gray-400">
                <span>
                  {charCount < 50 
                    ? `${50 - charCount} ${t('form.automation.min.chars')}` 
                    : t('form.automation.min.chars.met')}
                </span>
                <span>{charCount}/1000 {t('form.automation.chars.left')}</span>
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