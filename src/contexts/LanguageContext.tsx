import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
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
    'features.knowledgeBase.desc': 'Answer FAQs with an intelligent knowledge base that updates in real-time.',
    'features.multiLanguage': 'Multi-Language Support',
    'features.multiLanguage.desc': 'Speak multiple languages to serve a global audience effectively.',
    'features.integration': 'Seamless Integration',
    'features.integration.desc': 'Connect with your tools: APIs, CRM, customer reviews, order tracking.',
    'features.availability': '24/7 Availability',
    'features.availability.desc': 'Assist customers instantly and efficiently, around the clock.',
    'features.custom': 'Custom Features',
    'features.custom.desc': 'Tailored to match your specific business needs and workflows.',
    'features.analytics': 'Analytics Dashboard',
    'features.analytics.desc': 'Track performance and optimize your chatbot\'s effectiveness.',
    'features.more': 'And More',
    'features.more.desc': 'Discover additional features tailored to your needs.',

    // Features - Automation
    'features.supportAutomation': 'Support Automation',
    'features.supportAutomation.desc': 'Automate customer support tasks and streamline response handling.',
    'features.leadManagement': 'Lead Management',
    'features.leadManagement.desc': 'Automatically capture, qualify, and nurture leads.',
    'features.emailAutomation': 'Email Automation',
    'features.emailAutomation.desc': 'Automate email campaigns and customer communications.',
    'features.dataProcessing': 'Data Processing',
    'features.dataProcessing.desc': 'Efficiently process and analyze large amounts of data.',
    'features.workflow': 'Workflow Automation',
    'features.workflow.desc': 'Create custom workflows to automate repetitive tasks.',
    'features.apiIntegration': 'API Integration',
    'features.apiIntegration.desc': 'Connect and synchronize your business tools and systems.',

    // Process Automation
    'automation.title': 'Process Automation – Work Smarter, Not Harder',
    'automation.subtitle': '👉 Eliminate repetitive tasks and let AI handle the heavy lifting.',
    'automation.description': 'We design custom automations to streamline your workflow, boost efficiency, and free your team from tedious manual work.',
    'automation.getYours': 'Design Your Automation',

    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that best fits your needs',
    'pricing.development': 'Development Cost',
    'pricing.startingAt': 'Starting at',
    'pricing.perMonth': 'per month',
    'pricing.saveAnnual': 'Save 15% on annual plan',
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
    'form.chatbot.website.integration': 'Website',
    'form.chatbot.website.url': 'Your website URL',
    'form.chatbot.whatsapp.integration': 'WhatsApp',
    'form.chatbot.subscription': 'Subscription Plan',
    'form.chatbot.deployment.tooltip' : 'Please choose where you want your chatbot to be installed',
    'form.chatbot.tier': 'Tier',
    'form.chatbot.duration': 'Duration',
    'form.chatbot.select.tier': 'Select your tier',
    'form.chatbot.select.code': 'Select code',
    'form.chatbot.monthly': 'Monthly',
    'form.chatbot.semi.annually': '6 Months (Save 10%)',
    'form.chatbot.annually': '12 Months (Save 15%)',
    'form.chatbot.total.cost': 'Total cost',
    'form.chatbot.messages': 'messages',
    'form.chatbot.requirements': 'Chatbot Requirements',
    'form.chatbot.description': 'Chatbot Description',
    'form.chatbot.description.placeholder': 'Please describe what you expect your chatbot to do. Include specific features, use cases, and any particular requirements.',
    'form.chatbot.api.integration': 'API Integration',
    'form.chatbot.api.description': 'API Requirements',
    'form.chatbot.api.question': 'Do you want APIs connected to your chatbot?',
    'form.chatbot.api.tooltip' : 'APIs allow your chatbot to interact with external systems (e.g., CRMs, analytics, payment gateways). This option is changeable later.',
    'form.chatbot.api.check': 'Connect APIs',
    'form.chatbot.api.yes': 'Yes',
    'form.chatbot.api.no': 'No',
    'form.chatbot.api.placeholder': 'Enter the APIs you want to integrate...',
    'form.chatbot.api.description.placeholder': 'If you need any specific APIs or systems integrated with your chatbot, please describe them here (e.g., CRM, booking system, inventory management, etc. - CHANGEABLE)',
    'form.chatbot.min.chars': 'minimum characters required',
    'form.chatbot.min.chars.met': 'Minimum length requirement met',
    'form.chatbot.nocost': 'Rest assured, no payment will be charged immediately after submission.',
    'form.chatbot.chars.left': 'characters remaining',
    'form.chatbot.development.cost' : 'development price',
    'form.terms' : 'I accept the terms and conditions and agree to be contacted.',

    // Automation Form
    'form.automation.title': 'Automation Request',
    'form.automation.description': 'Description of your Automation Needs',
    'form.automation.description.placeholder': 'Please describe the processes you want to automate. Include specific requirements, current challenges, and desired outcomes.',
    'form.automation.min.chars': 'minimum characters required',
    'form.automation.chars.left': 'characters remaining',
    'form.automation.investment': 'Available budget',
    'form.automation.select.investment': 'Select your available budget',
    'form.automation.starter': 'Starter Pack (Less than €5,000)',
    'form.automation.business': 'Business Suite (€5,000 - €10,000)',
    'form.automation.enterprise': 'Entreprise Solution (€10,000+)',
    'form.automation.investment.note': 'Choose a range that fits your automation needs. We will tailor our solution accordingly.',
    'form.automation.min.chars.met': 'Minimum Validated',
    
    
    //GENERAL TITLE
    'generalConditions.title' : 'General Conditions',
    // General Conditions - English
    'generalConditions.lastUpdated': 'Last updated: 09/07/2025',

    // 1. Service Delivery
    'generalConditions.serviceDelivery.title': 'Service Delivery',
    'generalConditions.serviceDelivery.description': 'Our service delivery process includes:',
    'generalConditions.serviceDelivery.description1': 'Initial consultation and requirements gathering',
    'generalConditions.serviceDelivery.description2': 'Solution design and proposal',
    'generalConditions.serviceDelivery.description3': 'Development and implementation',
    'generalConditions.serviceDelivery.description4': 'Testing and quality assurance',
    'generalConditions.serviceDelivery.description5': 'Deployment and maintenance',

    // 2. Payment Terms
    'generalConditions.paymentTerms.title': 'Payment Terms',
    'generalConditions.paymentTerms.description': 'Payment terms are as follows:',
    'generalConditions.paymentTerms.description1': '30% upfront payment upon project initiation',
    'generalConditions.paymentTerms.description2': '40% upon completion of development phase',
    'generalConditions.paymentTerms.description3': '30% upon final delivery and acceptance',
    'generalConditions.paymentTerms.description4': 'Monthly subscription fees for ongoing services',

    // 3. Service Level Agreement
    'generalConditions.sla.title': 'Service Level Agreement',
    'generalConditions.sla.description': 'We commit to:',
    'generalConditions.sla.description1': '99.9% uptime for cloud services',
    'generalConditions.sla.description2': '24/7 monitoring of critical systems',
    'generalConditions.sla.description3': 'Response within 4 hours for critical issues',
    'generalConditions.sla.description4': 'Regular maintenance and updates',

    // 4. Modifications and Cancellations
    'generalConditions.modifications.title': 'Modifications and Cancellations',
    'generalConditions.modifications.description': 'Any modifications to the agreed scope must be documented and may affect pricing and timeline. Cancellation policies vary by service type and will be specified in individual contracts.',

    // 5. Support and Maintenance
    'generalConditions.support.title': 'Support and Maintenance',
    'generalConditions.support.description': 'Standard support includes:',
    'generalConditions.support.description1': 'Email and phone support during business hours',
    'generalConditions.support.description2': 'Monthly system health checks',
    'generalConditions.support.description3': 'Regular software updates',
    'generalConditions.support.description4': 'Documentation and training materials',

    // 6. Contact Information
    'generalConditions.contact.title': 'Contact Information',
    'generalConditions.contact.description': 'For support and inquiries:',
    'generalConditions.contact.email': 'amaury@apophisia.lu',
    'generalConditions.contact.phone': '+352 691 549 904',
    'generalConditions.contact.address': '29, rue Nicolas Flener, Mamer-8228, Luxembourg',

    // TERMS
    'terms.title' : 'Terms of Service',

    // 1. Acceptance of Terms
    'terms.acceptance.title': 'Acceptance of Terms',
    'terms.acceptance.description': 'By accessing and using Apophis.IA\'s services, you agree to be bound by these Terms of Service and all applicable laws and regulations.',

    // 2. Services Description
    'terms.services.title': 'Services Description',
    'terms.services.description': 'Apophis.IA provides AI-powered automation solutions, including but not limited to:',
    'terms.services.description1': 'Custom AI chatbots',
    'terms.services.description2': 'Process automation solutions',
    'terms.services.description3': 'Integration services',
    'terms.services.description4': 'Consulting and support',

    // 3. User Obligations
    'terms.userObligations.title': 'User Obligations',
    'terms.userObligations.description': 'Users agree to:',
    'terms.userObligations.description1': 'Provide accurate information',
    'terms.userObligations.description2': 'Maintain confidentiality of account credentials',
    'terms.userObligations.description3': 'Use services in compliance with applicable laws',
    'terms.userObligations.description4': 'Not engage in unauthorized access or use',

    // 4. Intellectual Property
    'terms.intellectualProperty.title': 'Intellectual Property',
    'terms.intellectualProperty.description': 'All intellectual property rights in the services and their content are owned by Apophis.IA. Users receive a limited license to use the services as intended.',

    // 5. Limitation of Liability
    'terms.limitationOfLiability.title': 'Limitation of Liability',
    'terms.limitationOfLiability.description': 'Apophis.IA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our services.',

    // 6. Contact
    'terms.contact.title': 'Contact',
    'terms.contact.description': 'For any questions regarding these terms, please contact us at amaury@apophisia.lu',

    // Privacy Policy - English
    'privacyPolicy.title': 'Privacy Policy',
    'privacyPolicy.lastUpdated': 'Last updated: 09/07/2025',

    // 1. Information We Collect
    'privacyPolicy.information.title': '1. Information We Collect',
    'privacyPolicy.information.description': 'We collect information you provide directly to us, including:',
    'privacyPolicy.information.description1': 'Name and contact information',
    'privacyPolicy.information.description2': 'Company details',
    'privacyPolicy.information.description3': 'Website information',
    'privacyPolicy.information.description4': 'Communication preferences',

    // 2. How We Use Your Information
    'privacyPolicy.use.title': '2. How We Use Your Information',
    'privacyPolicy.use.description': 'We use the information we collect to:',
    'privacyPolicy.use.description1': 'Provide and improve our services',
    'privacyPolicy.use.description2': 'Communicate with you about our services',
    'privacyPolicy.use.description3': 'Personalize your experience',
    'privacyPolicy.use.description4': 'Ensure service quality and security',

    // 3. Data Protection
    'privacyPolicy.protection.title': '3. Data Protection',
    'privacyPolicy.protection.description': 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.',

    // 4. Your Rights
    'privacyPolicy.rights.title': '4. Your Rights',
    'privacyPolicy.rights.description': 'Under GDPR, you have the following rights:',
    'privacyPolicy.rights.description1': 'Right to access your personal data',
    'privacyPolicy.rights.description2': 'Right to rectification',
    'privacyPolicy.rights.description3': 'Right to erasure',
    'privacyPolicy.rights.description4': 'Right to restrict processing',
    'privacyPolicy.rights.description5': 'Right to data portability',
    'privacyPolicy.rights.description6': 'Right to object',

    // 5. Contact Information
    'privacyPolicy.contact.title': '5. Contact Us',
    'privacyPolicy.contact.description': 'For any privacy-related questions or concerns, please contact us at:',
    'privacyPolicy.contact.email': 'Email: amaury@apophisia.lu',
    'privacyPolicy.contact.address': 'Address: 29, rue Nicolas Flener, Mamer-8228, Luxembourg'
  
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
    'features.knowledgeBase.desc': 'Répondez aux FAQ avec une base de connaissances intelligente qui se met à jour en temps réel.',
    'features.multiLanguage': 'Support Multilingue',
    'features.multiLanguage.desc': 'Communiquez en plusieurs langues pour servir efficacement une audience mondiale.',
    'features.integration': 'Intégration Transparente',
    'features.integration.desc': 'Connectez-vous à vos outils : APIs, CRM, avis clients, suivi de commandes.',
    'features.availability': 'Disponibilité 24/7',
    'features.availability.desc': 'Assistez les clients instantanément et efficacement, à tout moment.',
    'features.custom': 'Fonctionnalités Personnalisées',
    'features.custom.desc': 'Adaptées pour répondre à vos besoins spécifiques et flux de travail.',
    'features.analytics': 'Tableau de Bord Analytique',
    'features.analytics.desc': 'Suivez les performances et optimisez l\'efficacité de votre chatbot.',
    'features.more': 'Et Plus Encore',
    'features.more.desc': 'Découvrez des fonctionnalités supplémentaires adaptées à vos besoins.',

    // Features - Automation
    'features.supportAutomation': 'Automatisation du Support',
    'features.supportAutomation.desc': 'Automatisez les tâches de support client et optimisez le traitement des réponses.',
    'features.leadManagement': 'Gestion des Prospects',
    'features.leadManagement.desc': 'Capturez, qualifiez et nurturez automatiquement les prospects.',
    'features.emailAutomation': 'Automatisation des Emails',
    'features.emailAutomation.desc': 'Automatisez les campagnes email et les communications clients.',
    'features.dataProcessing': 'Traitement des Données',
    'features.dataProcessing.desc': 'Traitez et analysez efficacement de grandes quantités de données.',
    'features.workflow': 'Automatisation des Flux',
    'features.workflow.desc': 'Créez des flux de travail personnalisés pour automatiser les tâches répétitives.',
    'features.apiIntegration': 'Intégration API',
    'features.apiIntegration.desc': 'Connectez et synchronisez vos outils et systèmes professionnels.',

    // Process Automation
    'automation.title': 'Automatisation des Processus – Travaillez Plus Intelligemment',
    'automation.subtitle': '👉 Éliminez les tâches répétitives et laissez l\'IA gérer le travail fastidieux.',
    'automation.description': 'Nous concevons des automatisations personnalisées pour optimiser votre flux de travail, augmenter l\'efficacité et libérer votre équipe des tâches manuelles.',
    'automation.getYours': 'Concevoir Votre Automatisation',

    // Pricing
    'pricing.title': 'Prix Transparents',
    'pricing.subtitle': 'Choisissez le plan qui correspond le mieux à vos besoins',
    'pricing.development': 'Coût de Développement',
    'pricing.startingAt': 'À partir de',
    'pricing.perMonth': 'par mois',
    'pricing.saveAnnual': 'Économisez 15% sur le plan annuel',
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
    'form.chatbot.deployment.tooltip' : 'Veuillez choisir où vous souhaitez que votre chatbot soit installé',
    'form.chatbot.website.integration': 'Site Web',
    'form.chatbot.whatsapp.integration': 'WhatsApp',
    'form.chatbot.website.url': 'URL de votre site web',
    'form.chatbot.subscription': 'Plan d\'Abonnement',
    'form.chatbot.tier': 'Niveau',
    'form.chatbot.duration': 'Durée',
    'form.chatbot.select.tier': 'Sélectionnez votre niveau',
    'form.chatbot.select.code': 'Sélectionnez code',
    'form.chatbot.monthly': 'Mensuel',
    'form.chatbot.semi.annually': '6 Mois (Économisez 10%)',
    'form.chatbot.annually': '12 Mois (Économisez 15%)',
    'form.chatbot.total.cost': 'Coût total',
    'form.chatbot.messages': 'messages',
    'form.chatbot.requirements': 'Exigences du Chatbot',
    'form.chatbot.description': 'Description du Chatbot',
    'form.chatbot.description.placeholder': 'Veuillez décrire ce que vous attendez de votre chatbot. Incluez les fonctionnalités spécifiques, les cas d\'utilisation et toutes exigences particulières.',
    'form.chatbot.api.integration': 'Intégration API',
    'form.chatbot.api.description': 'Besoins en API',
    'form.chatbot.api.question': 'Voulez-vous des API connectées à votre chatbot ?',
    'form.chatbot.api.tooltip' : 'Les APIs permettent à votre chatbot d\'interagir avec des systèmes externes (par exemple, CRM, analytics, passerelles de paiement). Cette option peut être modifiée par la suite.',
    'form.chatbot.api.check': 'Connecter des API',
    'form.chatbot.api.yes': 'Oui',
    'form.chatbot.api.no': 'Non',
    'form.chatbot.api.placeholder': 'Saisissez les API que vous souhaitez intégrer...',
    'form.chatbot.api.description.placeholder': 'Si vous avez besoin d\'APIs ou de systèmes spécifiques intégrés à votre chatbot, veuillez les décrire ici (ex: CRM, système de réservation, gestion des stocks, etc.) - CHANGEABLE',
    'form.chatbot.min.chars': 'caractères minimum requis',
    'form.chatbot.min.chars.met': 'Longueur minimum atteinte',
    'form.chatbot.nocost': 'Rassurez-vous, aucun paiement ne sera prélevé immédiatement après la soumission.',
    'form.chatbot.chars.left': 'caractères restants',
    'form.chatbot.development.cost' : 'prix development',
    'form.terms' : 'J\'accepte les termes et conditions et accepte d\'être contacté.',

    // Automation Form
    'form.automation.title': 'Demande d\'Automatisation',
    'form.automation.description': 'Description de vos Besoins d\'Automatisation',
    'form.automation.description.placeholder': 'Veuillez décrire les processus que vous souhaitez automatiser. Incluez les exigences spécifiques, les défis actuels et les résultats souhaités.',
    'form.automation.min.chars': 'caractères minimum requis',
    'form.automation.chars.left': 'caractères restants',
    'form.automation.investment': 'Budget disponible',
    'form.automation.select.investment': 'Sélectionnez votre budget disponible',
    'form.automation.starter': 'Pack Démarrage (Moins de 5 000€)',
    'form.automation.business': 'Suite Business (5 000€ - 10 000€)',
    'form.automation.enterprise': 'Solution Entreprise (10 000€+)',
    'form.automation.investment.note': 'Choisissez une gamme qui correspond à vos besoins d\'automatisation. Nous adapterons notre solution en conséquence.',
    'form.automation.min.chars.met': 'Minimum Validé',


    //GENERAL TITLE
    'generalConditions.title' : 'Conditions générales',
    // Conditions Générales - Français
    'generalConditions.lastUpdated': 'Dernière mise à jour : 09/07/2025',

    // 1. Prestation de Services
    'generalConditions.serviceDelivery.title': 'Prestation de Services',
    'generalConditions.serviceDelivery.description': 'Notre processus de prestation de services comprend :',
    'generalConditions.serviceDelivery.description1': 'Consultation initiale et collecte des besoins',
    'generalConditions.serviceDelivery.description2': 'Conception de solution et proposition',
    'generalConditions.serviceDelivery.description3': 'Développement et mise en œuvre',
    'generalConditions.serviceDelivery.description4': 'Tests et assurance qualité',
    'generalConditions.serviceDelivery.description5': 'Déploiement et maintenance',

    // 2. Modalités de Paiement
    'generalConditions.paymentTerms.title': 'Modalités de Paiement',
    'generalConditions.paymentTerms.description': 'Les modalités de paiement sont les suivantes :',
    'generalConditions.paymentTerms.description1': '30% d\'avance à l\'initiation du projet',
    'generalConditions.paymentTerms.description2': '40% à la fin de la phase de développement',
    'generalConditions.paymentTerms.description3': '30% à la livraison finale et à l\'acceptation',
    'generalConditions.paymentTerms.description4': 'Frais d\'abonnement mensuels pour les services continus',

    // 3. Accord de Niveau de Service
    'generalConditions.sla.title': 'Accord de Niveau de Service',
    'generalConditions.sla.description': 'Nous nous engageons à :',
    'generalConditions.sla.description1': '99,9% de disponibilité pour les services cloud',
    'generalConditions.sla.description2': 'Surveillance 24/7 des systèmes critiques',
    'generalConditions.sla.description3': 'Réponse sous 4 heures pour les problèmes critiques',
    'generalConditions.sla.description4': 'Maintenance et mises à jour régulières',

    // 4. Modifications et Annulations
    'generalConditions.modifications.title': 'Modifications et Annulations',
    'generalConditions.modifications.description': 'Toute modification du périmètre convenu doit être documentée et peut affecter le prix et le calendrier. Les politiques d\'annulation varient selon le type de service et seront précisées dans les contrats individuels.',

    // 5. Support et Maintenance
    'generalConditions.support.title': 'Support et Maintenance',
    'generalConditions.support.description': 'Le support standard comprend :',
    'generalConditions.support.description1': 'Support par email et téléphone pendant les heures ouvrées',
    'generalConditions.support.description2': 'Contrôles mensuels de l\'état du système',
    'generalConditions.support.description3': 'Mises à jour logicielles régulières',
    'generalConditions.support.description4': 'Documentation et supports de formation',

    // 6. Coordonnées
    'generalConditions.contact.title': 'Coordonnées',
    'generalConditions.contact.description': 'Pour le support et toute demande :',
    'generalConditions.contact.email': 'amaury@apophisia.lu',
    'generalConditions.contact.phone': '+352 691 549 904',
    'generalConditions.contact.address': '29, rue Nicolas Flener, Mamer-8228, Luxembourg',

    // TERMS
    'terms.title' : 'Conditions d\'utilisation',
    // 1. Acceptation des Conditions
    'terms.acceptance.title': 'Acceptation des Conditions',
    'terms.acceptance.description': 'En accédant et en utilisant les services d\'Apophis.IA, vous acceptez d\'être lié par ces Conditions d\'Utilisation et par toutes les lois et réglementations applicables.',

    // 2. Description des Services
    'terms.services.title': 'Description des Services',
    'terms.services.description': 'Apophis.IA fournit des solutions d\'automatisation alimentées par l\'IA, y compris, mais sans s\'y limiter :',
    'terms.services.description1': 'Chatbots IA personnalisés',
    'terms.services.description2': 'Solutions d\'automatisation des processus',
    'terms.services.description3': 'Services d\'intégration',
    'terms.services.description4': 'Conseil et support',

    // 3. Obligations de l’Utilisateur
    'terms.userObligations.title': 'Obligations de l\'Utilisateur',
    'terms.userObligations.description': 'Les utilisateurs s\'engagent à :',
    'terms.userObligations.description1': 'Fournir des informations exactes',
    'terms.userObligations.description2': 'Maintenir la confidentialité des identifiants de compte',
    'terms.userObligations.description3': 'Utiliser les services en conformité avec les lois applicables',
    'terms.userObligations.description4': 'Ne pas accéder ou utiliser de manière non autorisée',

    // 4. Propriété Intellectuelle
    'terms.intellectualProperty.title': 'Propriété Intellectuelle',
    'terms.intellectualProperty.description': 'Tous les droits de propriété intellectuelle relatifs aux services et à leur contenu appartiennent à Apophis.IA. Les utilisateurs reçoivent une licence limitée pour utiliser les services comme prévu.',

    // 5. Limitation de Responsabilité
    'terms.limitationOfLiability.title': 'Limitation de Responsabilité',
    'terms.limitationOfLiability.description': 'Apophis.IA ne pourra être tenu responsable d\'aucun dommage indirect, accessoire, spécial, consécutif ou punitif résultant de l\'utilisation ou de l\'incapacité d\'utiliser nos services.',

    // 6. Contact
    'terms.contact.title': 'Contact',
    'terms.contact.description': 'Pour toute question concernant ces conditions, veuillez nous contacter à amaury@apophisia.lu',

    // Privacy Policy - French
    'privacyPolicy.title': 'Politique de Confidentialité',
    'privacyPolicy.lastUpdated': 'Dernière mise à jour : 11/02/2025',

    // 1. Informations Collectées
    'privacyPolicy.information.title': '1. Informations Collectées',
    'privacyPolicy.information.description': 'Nous collectons les informations que vous nous fournissez directement, y compris :',
    'privacyPolicy.information.description1': 'Nom et coordonnées',
    'privacyPolicy.information.description2': 'Détails de l\'entreprise',
    'privacyPolicy.information.description3': 'Informations sur le site web',
    'privacyPolicy.information.description4': 'Préférences de communication',

    // 2. Comment Nous Utilisons Vos Informations
    'privacyPolicy.use.title': '2. Comment Nous Utilisons Vos Informations',
    'privacyPolicy.use.description': 'Nous utilisons les informations que nous collectons pour :',
    'privacyPolicy.use.description1': 'Fournir et améliorer nos services',
    'privacyPolicy.use.description2': 'Communiquer avec vous à propos de nos services',
    'privacyPolicy.use.description3': 'Personnaliser votre expérience',
    'privacyPolicy.use.description4': 'Assurer la qualité et la sécurité du service',

    // 3. Protection des Données
    'privacyPolicy.protection.title': '3. Protection des Données',
    'privacyPolicy.protection.description': 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout traitement non autorisé ou illicite, toute perte accidentelle, destruction ou dommage.',

    // 4. Vos Droits
    'privacyPolicy.rights.title': '4. Vos Droits',
    'privacyPolicy.rights.description': 'En vertu du RGPD, vous disposez des droits suivants :',
    'privacyPolicy.rights.description1': 'Droit d\'accéder à vos données personnelles',
    'privacyPolicy.rights.description2': 'Droit de rectification',
    'privacyPolicy.rights.description3': 'Droit à l\'effacement',
    'privacyPolicy.rights.description4': 'Droit de restreindre le traitement',
    'privacyPolicy.rights.description5': 'Droit à la portabilité des données',
    'privacyPolicy.rights.description6': 'Droit de s\'opposer',

    // 5. Coordonnées
    'privacyPolicy.contact.title': '5. Contactez-Nous',
    'privacyPolicy.contact.description': 'Pour toute question ou préoccupation relative à la confidentialité, veuillez nous contacter à :',
    'privacyPolicy.contact.email': 'Email : amaury@apophisia.lu',
    'privacyPolicy.contact.address': 'Adresse : 29, rue Nicolas Flener, Mamer-8228, Luxembourg'

  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Détermine la langue par défaut en fonction de l'URL
  const defaultLanguage: Language = location.pathname.startsWith('/fr') ? 'fr' : 'en';
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    // Met à jour l'URL pour refléter la nouvelle langue
    const newPath = location.pathname.replace(/^\/(en|fr)/, `/${lang}`);
    navigate(newPath);
  }, [location.pathname, navigate]);

  const getLocalizedPath = useCallback((path: string) => {
    // Retire le slash initial si présent
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${language}/${cleanPath}`;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedPath }}>
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