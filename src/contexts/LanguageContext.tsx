import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    // Hero
    'hero.empowerBusiness': 'Empower your business with',
    'hero.tagline': 'Innovate. Elevate. Dominate.',
    'hero.getStarted': 'Get Started',

    // Services Overview
    'services.title': 'Our Services',
    'services.subtitle': 'Transform your business with AI-powered solutions that save time, reduce costs, and improve customer satisfaction.',
    
    // Chatbot Service
    'chatbot.title': 'AI Chatbots – Your Smart Assistant, Built in 1 Week',
    'chatbot.subtitle': '👉 A chatbot tailored to your business – you choose the features, we build it.',
    'chatbot.description': 'Transform your customer support with an intelligent assistant that works 24/7. Fully customizable, multilingual, and seamlessly integrated with your business tools.',
    'chatbot.getYours': 'Get Your Chatbot',
    
    // Features - Chatbot
    'features.knowledgeBase': 'Smart Knowledge Base',
    'features.knowledgeBase.desc': 'Answer FAQs with an intelligent knowledge base that updates in real-time',
    'features.multiLanguage': 'Multi-Language Support',
    'features.multiLanguage.desc': 'Speak multiple languages to serve a global audience effectively',
    'features.integration': 'Seamless Integration',
    'features.integration.desc': 'Connect with your tools: APIs, CRM, customer reviews, order tracking',
    'features.availability': '24/7 Availability',
    'features.availability.desc': 'Assist customers instantly and efficiently, around the clock',
    'features.custom': 'Custom Features',
    'features.custom.desc': 'Tailored to match your specific business needs and workflows',
    'features.analytics': 'Analytics Dashboard',
    'features.analytics.desc': 'Track performance and optimize your chatbot\'s effectiveness',
    'features.more': 'And More',
    'features.more.desc': 'Discover additional features tailored to your needs',

    // Features - Automation
    'features.supportAutomation': 'Support Automation',
    'features.supportAutomation.desc': 'Automate customer support tasks and streamline response handling',
    'features.leadManagement': 'Lead Management',
    'features.leadManagement.desc': 'Automatically capture, qualify, and nurture leads',
    'features.emailAutomation': 'Email Automation',
    'features.emailAutomation.desc': 'Automate email campaigns and customer communications',
    'features.dataProcessing': 'Data Processing',
    'features.dataProcessing.desc': 'Efficiently process and analyze large amounts of data',
    'features.workflow': 'Workflow Automation',
    'features.workflow.desc': 'Create custom workflows to automate repetitive tasks',
    'features.apiIntegration': 'API Integration',
    'features.apiIntegration.desc': 'Connect and synchronize your business tools and systems',

    // Process Automation
    'automation.title': 'Process Automation – Work Smarter, Not Harder',
    'automation.subtitle': '👉 Eliminate repetitive tasks and let AI handle the heavy lifting',
    'automation.description': 'We design custom automations to streamline your workflow, boost efficiency, and free your team from tedious manual work.',
    'automation.getYours': 'Design Your Automation',

    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that best fits your needs',
    'pricing.development': 'Development Cost',
    'pricing.startingAt': 'Starting at',
    'pricing.perMonth': 'per month',
    'pricing.saveAnnual': 'Save 20% on annual plan',
    'pricing.saveSemiAnnual': 'Save 10% on 6-month plan',
    'pricing.upTo': 'Up to',
    'pricing.development.description': 'One-time fee for custom development and setup',
    
    // Plans
    'plans.basic.title': 'Basic',
    'plans.basic.feature1': 'Bug fixes and maintenance',
    'plans.basic.feature2': 'Minor changes and updates',
    'plans.basic.feature3': 'Basic support',
    'plans.basic.feature4': 'No API or additional integrations',
    'plans.basic.feature5': 'Regular updates',

    'plans.standard.title': 'Standard',
    'plans.standard.feature1': 'All Basic features',
    'plans.standard.feature2': 'Selected API integrations',
    'plans.standard.feature3': 'Regular knowledge base updates',
    'plans.standard.feature4': 'Minor feature changes',
    'plans.standard.feature5': 'Priority support',
    'plans.standard.feature6': 'Additional features available',

    'plans.premium.title': 'Premium',
    'plans.premium.feature1': 'All Standard features',
    'plans.premium.feature2': '24/7 priority support',
    'plans.premium.feature3': 'Unlimited API integrations',
    'plans.premium.feature4': 'Plugin additions',
    'plans.premium.feature5': 'Major feature changes included',
    'plans.premium.feature6': 'Custom development requests',
    'plans.premium.feature7': 'Fastest response time',

    'plans.messages': 'messages/month',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.conditions': 'General Conditions',
    'footer.rights': 'All rights reserved.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.openMaps': 'Open in Maps',

    // Forms
    'form.firstName': 'First Name',
    'form.lastName': 'Last Name',
    'form.companyName': 'Company Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.website': 'Website URL',
    'form.submit': 'Submit',
    'form.required': 'Required',
    'form.optional': 'Optional',
    'form.success': 'Thank You!',
    'form.success.message': 'We\'ve received your information and will get back to you shortly.',

    // Chatbot Form
    'form.chatbot.title': 'Chatbot Request',
    'form.chatbot.contact': 'Contact Information',
    'form.chatbot.deployment': 'Deployment Options',
    'form.chatbot.website.integration': 'Website Integration',
    'form.chatbot.website.url': 'Your website URL',
    'form.chatbot.whatsapp.integration': 'WhatsApp Integration',
    'form.chatbot.subscription': 'Subscription Plan',
    'form.chatbot.tier': 'Tier',
    'form.chatbot.duration': 'Duration',
    'form.chatbot.select.tier': 'Select your tier',
    'form.chatbot.select.code': 'Select code',
    'form.chatbot.monthly': 'Monthly',
    'form.chatbot.semi.annually': '6 Months (Save 10%)',
    'form.chatbot.annually': '12 Months (Save 20%)',
    'form.chatbot.total.cost': 'Total cost',
    'form.chatbot.messages': 'messages',
    'form.chatbot.requirements': 'Chatbot Requirements',
    'form.chatbot.description': 'Chatbot Description',
    'form.chatbot.description.placeholder': 'Please describe what you expect your chatbot to do. Include specific features, use cases, and any particular requirements.',
    'form.chatbot.api.integration': 'API Integration',
    'form.chatbot.api.description': 'API Requirements',
    'form.chatbot.api.question': 'Do you want APIs connected to your chatbot?',
    'form.chatbot.api.check': 'Connect APIs',
    'form.chatbot.api.yes': 'Yes',
    'form.chatbot.api.no': 'No',
    'form.chatbot.api.placeholder': 'Enter the APIs you want to integrate...',
    'form.chatbot.api.description.placeholder': 'If you need any specific APIs or systems integrated with your chatbot, please describe them here (e.g., CRM, booking system, inventory management, etc.)',
    'form.chatbot.min.chars': 'minimum characters required',
    'form.chatbot.min.chars.met': 'Minimum length requirement met',
    'form.chatbot.nocost': 'Rest assured, no payment will be charged immediately after submission.',
    'form.chatbot.chars.left': 'characters remaining'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    // Hero
    'hero.empowerBusiness': 'Dynamisez votre entreprise avec',
    'hero.tagline': 'Innovez. Élevez. Dominez.',
    'hero.getStarted': 'Commencer',

    // Services Overview
    'services.title': 'Nos Services',
    'services.subtitle': 'Transformez votre entreprise avec des solutions alimentées par l\'IA qui font gagner du temps, réduisent les coûts et améliorent la satisfaction client.',
    
    // Chatbot Service
    'chatbot.title': 'Chatbots IA – Votre Assistant Intelligent, Créé en 1 Semaine',
    'chatbot.subtitle': '👉 Un chatbot adapté à votre entreprise – vous choisissez les fonctionnalités, nous le construisons.',
    'chatbot.description': 'Transformez votre support client avec un assistant intelligent qui travaille 24h/24. Entièrement personnalisable, multilingue et parfaitement intégré à vos outils professionnels.',
    'chatbot.getYours': 'Obtenir Votre Chatbot',
    
    // Features - Chatbot
    'features.knowledgeBase': 'Base de Connaissances Intelligente',
    'features.knowledgeBase.desc': 'Répondez aux FAQ avec une base de connaissances intelligente qui se met à jour en temps réel',
    'features.multiLanguage': 'Support Multilingue',
    'features.multiLanguage.desc': 'Communiquez en plusieurs langues pour servir efficacement une audience mondiale',
    'features.integration': 'Intégration Transparente',
    'features.integration.desc': 'Connectez-vous à vos outils : APIs, CRM, avis clients, suivi de commandes',
    'features.availability': 'Disponibilité 24/7',
    'features.availability.desc': 'Assistez les clients instantanément et efficacement, à tout moment',
    'features.custom': 'Fonctionnalités Personnalisées',
    'features.custom.desc': 'Adaptées pour répondre à vos besoins spécifiques et flux de travail',
    'features.analytics': 'Tableau de Bord Analytique',
    'features.analytics.desc': 'Suivez les performances et optimisez l\'efficacité de votre chatbot',
    'features.more': 'Et Plus Encore',
    'features.more.desc': 'Découvrez des fonctionnalités supplémentaires adaptées à vos besoins',

    // Features - Automation
    'features.supportAutomation': 'Automatisation du Support',
    'features.supportAutomation.desc': 'Automatisez les tâches de support client et optimisez le traitement des réponses',
    'features.leadManagement': 'Gestion des Prospects',
    'features.leadManagement.desc': 'Capturez, qualifiez et nurturez automatiquement les prospects',
    'features.emailAutomation': 'Automatisation des Emails',
    'features.emailAutomation.desc': 'Automatisez les campagnes email et les communications clients',
    'features.dataProcessing': 'Traitement des Données',
    'features.dataProcessing.desc': 'Traitez et analysez efficacement de grandes quantités de données',
    'features.workflow': 'Automatisation des Flux',
    'features.workflow.desc': 'Créez des flux de travail personnalisés pour automatiser les tâches répétitives',
    'features.apiIntegration': 'Intégration API',
    'features.apiIntegration.desc': 'Connectez et synchronisez vos outils et systèmes professionnels',

    // Process Automation
    'automation.title': 'Automatisation des Processus – Travaillez Plus Intelligemment',
    'automation.subtitle': '👉 Éliminez les tâches répétitives et laissez l\'IA gérer le travail fastidieux',
    'automation.description': 'Nous concevons des automatisations personnalisées pour optimiser votre flux de travail, augmenter l\'efficacité et libérer votre équipe des tâches manuelles.',
    'automation.getYours': 'Concevoir Votre Automatisation',

    // Pricing
    'pricing.title': 'Prix Transparents',
    'pricing.subtitle': 'Choisissez le plan qui correspond le mieux à vos besoins',
    'pricing.development': 'Coût de Développement',
    'pricing.startingAt': 'À partir de',
    'pricing.perMonth': 'par mois',
    'pricing.saveAnnual': 'Économisez 20% sur le plan annuel',
    'pricing.saveSemiAnnual': 'Économisez 10% sur le plan 6 mois',
    'pricing.upTo': 'Jusqu\'à',
    'pricing.development.description': 'Frais unique pour le développement et la configuration personnalisés',
    
    // Plans
    'plans.basic.title': 'Basique',
    'plans.basic.feature1': 'Corrections de bugs et maintenance',
    'plans.basic.feature2': 'Modifications et mises à jour mineures',
    'plans.basic.feature3': 'Support basique',
    'plans.basic.feature4': 'Pas d\'API ni d\'intégrations supplémentaires',
    'plans.basic.feature5': 'Mises à jour régulières',

    'plans.standard.title': 'Standard',
    'plans.standard.feature1': 'Toutes les fonctionnalités Basiques',
    'plans.standard.feature2': 'Intégrations API sélectionnées',
    'plans.standard.feature3': 'Mises à jour régulières de la base de connaissances',
    'plans.standard.feature4': 'Modifications mineures des fonctionnalités',
    'plans.standard.feature5': 'Support prioritaire',
    'plans.standard.feature6': 'Fonctionnalités supplémentaires disponibles',

    'plans.premium.title': 'Premium',
    'plans.premium.feature1': 'Toutes les fonctionnalités Standard',
    'plans.premium.feature2': 'Support prioritaire 24/7',
    'plans.premium.feature3': 'Intégrations API illimitées',
    'plans.premium.feature4': 'Ajouts de plugins',
    'plans.premium.feature5': 'Modifications majeures incluses',
    'plans.premium.feature6': 'Demandes de développement personnalisées',
    'plans.premium.feature7': 'Temps de réponse le plus rapide',

    'plans.messages': 'messages/mois',

    // Footer
    'footer.quickLinks': 'Liens Rapides',
    'footer.legal': 'Mentions Légales',
    'footer.privacyPolicy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.conditions': 'Conditions Générales',
    'footer.rights': 'Tous droits réservés.',

    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',
    'contact.openMaps': 'Ouvrir dans Maps',

    // Forms
    'form.required': 'Requis',
    'form.optional': 'Optionnel',
    'form.firstName': 'Prénom',
    'form.lastName': 'Nom',
    'form.companyName': 'Nom de l\'entreprise',
    'form.email': 'Adresse email',
    'form.phone': 'Numéro de téléphone',
    'form.website': 'Site web',
    'form.submit': 'Envoyer',
    'form.success': 'Merci !',
    'form.success.message': 'Nous avons reçu vos informations et vous recontacterons prochainement.',

    // Chatbot Form
    'form.chatbot.title': 'Demande de Chatbot',
    'form.chatbot.contact': 'Informations de Contact',
    'form.chatbot.deployment': 'Options de Déploiement',
    'form.chatbot.website.integration': 'Intégration Site Web',
    'form.chatbot.whatsapp.integration': 'Intégration WhatsApp',
    'form.chatbot.website.url': 'URL de votre site web',
    'form.chatbot.subscription': 'Plan d\'Abonnement',
    'form.chatbot.tier': 'Niveau',
    'form.chatbot.duration': 'Durée',
    'form.chatbot.select.tier': 'Sélectionnez votre niveau',
    'form.chatbot.select.code': 'Sélectionnez code',
    'form.chatbot.monthly': 'Mensuel',
    'form.chatbot.semi.annually': '6 Mois (Économisez 10%)',
    'form.chatbot.annually': '12 Mois (Économisez 20%)',
    'form.chatbot.total.cost': 'Coût total',
    'form.chatbot.messages': 'messages',
    'form.chatbot.requirements': 'Exigences du Chatbot',
    'form.chatbot.description': 'Description du Chatbot',
    'form.chatbot.description.placeholder': 'Veuillez décrire ce que vous attendez de votre chatbot. Incluez les fonctionnalités spécifiques, les cas d\'utilisation et toutes exigences particulières.',
    'form.chatbot.api.integration': 'Intégration API',
    'form.chatbot.api.description': 'Besoins en API',
    'form.chatbot.api.question': 'Voulez-vous des API connectées à votre chatbot ?',
    'form.chatbot.api.check': 'Connecter des API',
    'form.chatbot.api.yes': 'Oui',
    'form.chatbot.api.no': 'Non',
    'form.chatbot.api.placeholder': 'Saisissez les API que vous souhaitez intégrer...',
    'form.chatbot.api.description.placeholder': 'Si vous avez besoin d\'APIs ou de systèmes spécifiques intégrés à votre chatbot, veuillez les décrire ici (ex: CRM, système de réservation, gestion des stocks, etc.)',
    'form.chatbot.min.chars': 'caractères minimum requis',
    'form.chatbot.min.chars.met': 'Longueur minimum atteinte',
    'form.chatbot.nocost': 'Rassurez-vous, aucun paiement ne sera prélevé immédiatement après la soumission.',
    'form.chatbot.chars.left': 'caractères restants',

    // Automation Form
    'form.automation.title': 'Demande d\'Automatisation',
    'form.automation.description': 'Description de vos Besoins d\'Automatisation',
    'form.automation.description.placeholder': 'Veuillez décrire les processus que vous souhaitez automatiser. Incluez les exigences spécifiques, les défis actuels et les résultats souhaités.',
    'form.automation.min.chars': 'caractères minimum requis',
    'form.automation.chars.left': 'caractères restants',
    'form.automation.investment': 'Niveau d\'Investissement',
    'form.automation.select.investment': 'Sélectionnez votre niveau d\'investissement',
    'form.automation.starter': 'Pack Démarrage (Moins de 5 000€)',
    'form.automation.business': 'Suite Business (5 000€ - 10 000€)',
    'form.automation.enterprise': 'Solution Entreprise (10 000€+)',
    'form.automation.investment.note': 'Choisissez une gamme qui correspond à vos besoins d\'automatisation. Nous adapterons notre solution en conséquence.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};