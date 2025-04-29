// src/contexts/FAQContext.tsx
import React, { createContext, useContext, ReactNode, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Importez le contexte de langue global

type Language = 'en' | 'fr';

interface FAQContextType {
  language: Language;
  f: (key: string) => string;
  getLocalizedPath: (path: string) => string;
}

const faqTranslations = {
  en: {
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about our services',
    'faq.q1': 'What are your chatbot pricing plans?',
    'faq.a1': 'Our chatbot services include both development and monthly maintenance costs:\n\nDevelopment Cost:\n\nStarting from €1,250 for a basic chatbot with simple FAQ response capabilities.\n\nMonthly Maintenance Plans:\n\n\tBasic (€300/month):\n\t\t- Bug fixes and maintenance\n\t\t- Minor updates and modifications\n\t\t- Basic support\n\t\t- No API or additional integrations\n\n\tStandard (€650/month):\n\t\t- All basic features\n\t\t- Selected API integrations\n\t\t- Regular knowledge base updates\n\t\t- Minor feature changes\n\t\t- Additional features available for extra fees\n\n\tPremium (€1,200/month):\n\t\t- All standard features\n\t\t- 24/7 priority support\n\t\t- Unlimited API integrations\n\t\t- Plugin additions\n\t\t- Major feature changes included\n\t\t- Fastest response and implementation time',
    'faq.q2': 'How is the chatbot deployed on my website?',
    'faq.a2': 'Deployment is simple and straightforward. We provide you with a code snippet that needs to be added to your website’s HTML body section. Once added, the chatbot will be fully functional on your site. This process requires minimal technical knowledge and can be completed in minutes.',
    'faq.q3': 'What types of chatbots do you offer?',
    'faq.a3': 'We offer fully customizable AI chatbots that can be integrated with websites, WhatsApp, and other platforms. Our chatbots can handle customer service, lead generation, and automated support in multiple languages.',
    'faq.q4': 'How long does it take to implement a chatbot?',
    'faq.a4': 'Our standard implementation timeline is 1 week for basic chatbots. More complex integrations may take 2-3 weeks depending on specific requirements and customizations needed.',
    'faq.q5': 'What languages do your chatbots support?',
    'faq.a5': 'Our chatbots support multiple languages including English, French, German, Spanish, and much more. We can add support for additional languages based on your requirements.',
    'faq.q6': 'Do you offer ongoing support?',
    'faq.a6': 'Yes, we provide comprehensive support through our different maintenance plans. Each plan includes different levels of support, from basic bug fixes to 24/7 priority assistance, depending on your chosen tier.',
    'faq.q7': 'Can I upgrade or downgrade my maintenance plan?',
    'faq.a7': 'Yes, you can change your maintenance plan with 30 days notice. This flexibility allows you to adjust the service level based on your evolving needs.',
    'faq.q8': 'How do you handle data privacy and security?',
    'faq.a8': 'We follow strict GDPR compliance and implement industry-standard security measures. All data is encrypted and stored securely, with regular backups and monitoring.'
  },
  fr: {
    'faq.title': 'Questions Fréquemment Posées',
    'faq.subtitle': 'Trouvez des réponses aux questions courantes concernant nos services',
    'faq.q1': 'Quels sont vos plans tarifaires pour les chatbots ?',
    'faq.a1': 'Nos services de chatbot incluent à la fois les coûts de développement et la maintenance mensuelle :\n\nCoût de Développement :\n\nÀ partir de 1 250 € pour un chatbot basique avec des capacités simples de réponse aux FAQ.\n\n\nPlans de Maintenance Mensuelle :\n\n\tBasique (300 €/mois) :\n  \t\t- Corrections de bugs et maintenance\n  \t\t- Mises à jour et modifications mineures\n  \t\t- Support basique\n  \t\t- Pas d’intégration d’API ou supplémentaires\n\n\tStandard (650 €/mois) :\n  \t\t- Toutes les fonctionnalités basiques\n  \t\t- Intégrations API sélectionnées\n  \t\t- Mises à jour régulières de la base de connaissances\n  \t\t- Modifications mineures des fonctionnalités\n  \t\t- Fonctionnalités supplémentaires disponibles moyennant supplément\n\n\tPremium (1 200 €/mois) :\n  \t\t- Toutes les fonctionnalités standard\n  \t\t- Support prioritaire 24/7\n  \t\t- Intégrations API illimitées\n  \t\t- Ajouts de plugins\n  \t\t- Modifications majeures incluses\n  \t\t- Temps de réponse et d’implémentation les plus rapides',
    'faq.q2': 'Comment le chatbot est-il déployé sur mon site web ?',
    'faq.a2': 'Le déploiement est simple et direct. Nous vous fournissons un extrait de code à ajouter dans le corps HTML de votre site. Une fois ajouté, le chatbot sera entièrement fonctionnel sur votre site. Ce processus requiert peu de connaissances techniques et peut être réalisé en quelques minutes.',
    'faq.q3': 'Quels types de chatbots proposez-vous ?',
    'faq.a3': 'Nous proposons des chatbots IA entièrement personnalisables pouvant être intégrés aux sites web, à WhatsApp, et à d’autres plateformes. Nos chatbots peuvent gérer le service client, la génération de prospects et l’assistance automatisée en plusieurs langues.',
    'faq.q4': 'Combien de temps faut-il pour mettre en place un chatbot ?',
    'faq.a4': 'Notre délai standard de mise en place est d’une semaine pour des chatbots basiques. Des intégrations plus complexes peuvent prendre de 2 à 3 semaines selon les exigences spécifiques et les personnalisations nécessaires.',
    'faq.q5': 'Quelles langues vos chatbots supportent-ils ?',
    'faq.a5': 'Nos chatbots supportent plusieurs langues, dont l’anglais, le français, l’allemand, l’espagnol, et bien d’autres. Nous pouvons ajouter le support de langues supplémentaires selon vos besoins.',
    'faq.q6': 'Proposez-vous un support continu ?',
    'faq.a6': 'Oui, nous fournissons un support complet via nos différents plans de maintenance. Chaque plan inclut divers niveaux de support, allant des corrections de bugs basiques à une assistance prioritaire 24/7.',
    'faq.q7': 'Puis-je mettre à niveau ou rétrograder mon plan de maintenance ?',
    'faq.a7': 'Oui, vous pouvez modifier votre plan de maintenance avec un préavis de 30 jours. Cette flexibilité vous permet d’ajuster le niveau de service en fonction de l’évolution de vos besoins.',
    'faq.q8': 'Comment gérez-vous la confidentialité et la sécurité des données ?',
    'faq.a8': 'Nous respectons strictement le RGPD et mettons en œuvre des mesures de sécurité conformes aux normes de l’industrie. Toutes les données sont cryptées et stockées de manière sécurisée, avec des sauvegardes régulières et une surveillance continue.'
  }
};

const FAQContext = createContext<FAQContextType | undefined>(undefined);

export const FAQProvider = ({ children }: { children: ReactNode }) => {
  // On récupère directement la langue globale
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const getLocalizedPath = useCallback((path: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${language}/${cleanPath}`;
  }, [language]);

  const f = (key: string): string => {
    return faqTranslations[language][key as keyof typeof faqTranslations[typeof language]] || key;
  };

  return (
    <FAQContext.Provider value={{ language, f, getLocalizedPath }}>
      {children}
    </FAQContext.Provider>
  );
};

export const useFAQ = () => {
  const context = useContext(FAQContext);
  if (context === undefined) {
    throw new Error('useFAQ must be used within a FAQProvider');
  }
  return context;
};
