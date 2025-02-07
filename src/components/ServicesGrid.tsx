import React from 'react';
import { Bot, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceCard = ({ title, description, icon: Icon, link, buttonText, image, imagePosition = 'right', animate = true }: {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
  buttonText: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  animate?: boolean;
}) => {
  return (
    <div className="relative">
      <div className="relative flex items-center min-h-[600px]">
        <div className={`relative w-full md:w-1/2 rounded-2xl p-8 transform transition-all duration-500 hover:translate-y-[-10px] z-10 ${
          imagePosition === 'left' ? 'md:ml-auto' : ''
        }`}>
          <div className="absolute inset-0 bg-purple-600/10 rounded-2xl blur-xl group-hover:bg-purple-600/20 transition-all duration-500" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/50 backdrop-blur-sm mb-6">
              <div className="text-purple-400 mr-2">
                <Icon size={16} />
              </div>
              <span className="text-sm text-purple-300">BUILD, LAUNCH, SUCCEED</span>
            </div>

            <h3 className="text-4xl font-bold text-white mb-4">
              {title}
            </h3>

            <p className="text-gray-400 text-lg mb-8">
              {description}
            </p>

            <Link 
              to={link}
              className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:translate-x-2"
            >
              <span>{buttonText}</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-600/10 rounded-lg transform rotate-12 blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:scale-150 group-hover:bg-purple-600/20" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600/10 rounded-lg transform -rotate-12 blur-sm transition-all duration-500 group-hover:-rotate-45 group-hover:scale-150 group-hover:bg-blue-600/20" />
        </div>

        {image && (
          <div className={`absolute ${imagePosition === 'left' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-2/3 h-full z-0 ${animate ? 'animate-float' : ''}`}>
            <div className="relative w-full h-full">
              <img 
                src={image}
                alt={title}
                className="w-full h-full object-contain transition-all duration-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('chatbot.title'),
      description: t('chatbot.description'),
      icon: Bot,
      link: '/services/chatbot',
      buttonText: t('chatbot.getYours'),
      image: '/public/Apophis.IA%20CHATBOT%20copy.png',
      animate: true
    },
    {
      title: t('automation.title'),
      description: t('automation.description'),
      icon: Cog,
      link: '/services/automation',
      buttonText: t('automation.getYours'),
      image: '/public/Animation%20Process%20Auto.gif',
      animate: false
    }
  ];

  return (
    <section className="relative py-32" id="services">      
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="space-y-24">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;