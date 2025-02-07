import React from 'react';
import { Bot, Globe, Zap, Database, Clock, BarChart3, Workflow, Mail, Users, GitBranch, CheckCircle2, ArrowRight, Plus, Rocket, Zap as Zap2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceSection = ({ title, subtitle, description, features, buttonText, buttonLink, pricingTiers }: {
  title: React.ReactNode;
  subtitle: string;
  description: string;
  features: { icon: React.ElementType; title: string; description: string; }[];
  buttonText: string;
  buttonLink: string;
  pricingTiers?: {
    development?: { price: string; description: string; };
    maintenance: {
      title: string;
      price: string;
      features: string[];
      messageLimit?: string;
      highlight?: boolean;
    }[];
  };
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          {title}
        </h1>
        <h2 className="text-2xl md:text-3xl text-purple-300">
          {subtitle}
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl space-y-4 h-full flex flex-col items-center justify-center text-center">
            <div className="p-3 bg-purple-900/50 rounded-lg w-fit">
              <Plus className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">{t('features.more')}</h3>
            <p className="text-gray-400">{t('features.more.desc')}</p>
          </div>
        </div>
      </div>

      {pricingTiers && (
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('pricing.title')}</h2>
            <p className="text-xl text-gray-300">{t('pricing.subtitle')}</p>
          </div>

          {pricingTiers.development && (
            <div className="mb-12">
              <div className="relative group max-w-2xl mx-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('pricing.development')}</h3>
                  <p className="text-4xl font-bold text-purple-400 mb-4">{t('pricing.startingAt')} {pricingTiers.development.price}</p>
                  <p className="text-gray-300">{pricingTiers.development.description}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.maintenance.map((tier, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-0.5 rounded-xl blur opacity-25 transition duration-300 ${
                  tier.highlight 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 group-hover:opacity-75' 
                    : 'bg-purple-600/20 group-hover:opacity-50'
                }`} />
                <div className={`relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl h-full transform transition-all duration-300 group-hover:scale-[1.02] ${
                  tier.highlight ? 'border-2 border-purple-500' : ''
                }`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
                    <p className="text-3xl font-bold text-purple-400">{tier.price}</p>
                    <p className="text-sm text-gray-400 mt-1">{t('pricing.perMonth')}</p>
                    {tier.messageLimit && (
                      <p className="text-sm text-purple-300 mt-2">{t('pricing.upTo')} {tier.messageLimit} {t('plans.messages')}</p>
                    )}
                    <div className="mt-3 space-y-1">
                      <p className="text-sm text-emerald-400">{t('pricing.saveSemiAnnual')}</p>
                      <p className="text-sm text-emerald-400">{t('pricing.saveAnnual')}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center">
        <Link
          to={buttonLink}
          className="inline-flex items-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

const Feature = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
    <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl space-y-4">
      <div className="p-3 bg-purple-900/50 rounded-lg w-fit">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export const ServicesOverview = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('chatbot.title'),
      subtitle: t('chatbot.subtitle'),
      description: t('chatbot.description'),
      features: [
        { title: t('features.knowledgeBase'), description: t('features.knowledgeBase.desc') },
        { title: t('features.multiLanguage'), description: t('features.multiLanguage.desc') },
        { title: t('features.availability'), description: t('features.availability.desc') }
      ],
      buttonText: t('chatbot.getYours'),
      buttonLink: '/services/chatbot'
    },
    {
      title: t('automation.title'),
      subtitle: t('automation.subtitle'),
      description: t('automation.description'),
      features: [
        { title: t('features.leadManagement'), description: t('features.leadManagement.desc') },
        { title: t('features.emailAutomation'), description: t('features.emailAutomation.desc') },
        { title: t('features.workflow'), description: t('features.workflow.desc') }
      ],
      buttonText: t('automation.getYours'),
      buttonLink: '/services/automation'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {services.map((service, index) => (
          <div key={service.title} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white mb-2">{service.title}</h2>
                <h3 className="text-2xl text-purple-300">{service.subtitle}</h3>
                <p className="text-gray-300 text-lg">{service.description}</p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="bg-gray-800/50 p-6 rounded-xl">
                      <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    to={service.buttonLink}
                    className="inline-flex items-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <span>{service.buttonText}</span>
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ChatbotService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-40 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ServiceSection
          title={
            <span className="flex items-center justify-center gap-4">
              {t('chatbot.title')}
              <Rocket className="inline-block w-12 h-12 text-orange-400" />
            </span>
          }
          subtitle={t('chatbot.subtitle')}
          description={t('chatbot.description')}
          buttonText={t('chatbot.getYours')}
          buttonLink="/services/chatbot/form"
          features={[
            {
              icon: Bot,
              title: t('features.knowledgeBase'),
              description: t('features.knowledgeBase.desc')
            },
            {
              icon: Globe,
              title: t('features.multiLanguage'),
              description: t('features.multiLanguage.desc')
            },
            {
              icon: Zap,
              title: t('features.integration'),
              description: t('features.integration.desc')
            },
            {
              icon: Clock,
              title: t('features.availability'),
              description: t('features.availability.desc')
            },
            {
              icon: Database,
              title: t('features.custom'),
              description: t('features.custom.desc')
            },
            {
              icon: BarChart3,
              title: t('features.analytics'),
              description: t('features.analytics.desc')
            }
          ]}
          pricingTiers={{
            development: {
              price: "€1,250",
              description: t('pricing.development.description')
            },
            maintenance: [
              {
                title: t('plans.basic.title'),
                price: "€700",
                messageLimit: "50K",
                features: [
                  t('plans.basic.feature1'),
                  t('plans.basic.feature2'),
                  t('plans.basic.feature3'),
                  t('plans.basic.feature4'),
                  t('plans.basic.feature5')
                ]
              },
              {
                title: t('plans.standard.title'),
                price: "€1,250",
                messageLimit: "100K",
                features: [
                  t('plans.standard.feature1'),
                  t('plans.standard.feature2'),
                  t('plans.standard.feature3'),
                  t('plans.standard.feature4'),
                  t('plans.standard.feature5'),
                  t('plans.standard.feature6')
                ],
                highlight: true
              },
              {
                title: t('plans.premium.title'),
                price: "€1,500",
                messageLimit: "300K+",
                features: [
                  t('plans.premium.feature1'),
                  t('plans.premium.feature2'),
                  t('plans.premium.feature3'),
                  t('plans.premium.feature4'),
                  t('plans.premium.feature5'),
                  t('plans.premium.feature6'),
                  t('plans.premium.feature7')
                ]
              }
            ]
          }}
        />
      </div>
    </div>
  );
};

export const AutomationService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-40 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ServiceSection
          title={
            <span className="flex items-center justify-center gap-4">
              {t('automation.title')}
              <Zap2 className="inline-block w-12 h-12 text-yellow-400" />
            </span>
          }
          subtitle={t('automation.subtitle')}
          description={t('automation.description')}
          buttonText={t('automation.getYours')}
          buttonLink="/services/automation/form"
          features={[
            {
              icon: Bot,
              title: t('features.supportAutomation'),
              description: t('features.supportAutomation.desc')
            },
            {
              icon: Users,
              title: t('features.leadManagement'),
              description: t('features.leadManagement.desc')
            },
            {
              icon: Mail,
              title: t('features.emailAutomation'),
              description: t('features.emailAutomation.desc')
            },
            {
              icon: Database,
              title: t('features.dataProcessing'),
              description: t('features.dataProcessing.desc')
            },
            {
              icon: Workflow,
              title: t('features.workflow'),
              description: t('features.workflow.desc')
            },
            {
              icon: GitBranch,
              title: t('features.apiIntegration'),
              description: t('features.apiIntegration.desc')
            }
          ]}
        />
      </div>
    </div>
  );
};