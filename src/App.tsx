import React, { Suspense } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import { useScrollTop } from './hooks/useScrollTop';
import { useLanguage } from './contexts/LanguageContext';
import FAQ from './components/FAQ';
import { FAQProvider } from './contexts/FAQContext';

// Lazy load components
const ChatbotService = React.lazy(() => import('./components/ServicePages').then(module => ({ default: module.ChatbotService })));
const AutomationService = React.lazy(() => import('./components/ServicePages').then(module => ({ default: module.AutomationService })));
const ServicesOverview = React.lazy(() => import('./components/ServicePages').then(module => ({ default: module.ServicesOverview })));
const ChatbotForm = React.lazy(() => import('./components/ChatbotForm'));
const AutomationForm = React.lazy(() => import('./components/AutomationForm'));
const Contact = React.lazy(() => import('./components/Contact'));
const PrivacyPolicy = React.lazy(() => import('./components/legal/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./components/legal/TermsOfService'));
const GeneralConditions = React.lazy(() => import('./components/legal/GeneralConditions'));
const FAQ = React.lazy(() => import('./components/FAQ'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-purple-400">Loading...</div>
  </div>
);

const MainContent = () => (
  <>
    <Hero />
    <ServicesGrid />
  </>
);

function App() {
  useScrollTop();
  const { language } = useLanguage();

  return (
    <div className="min-h-screen relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 opacity-90" />
      <div className="absolute inset-0 gradient-bg" />
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Redirection de la racine vers la langue courante */}
              <Route path="/" element={<Navigate to={`/${language}`} replace />} />

              {/* Routes dynamiques basées sur le paramètre de langue */}
              <Route path="/:lang" element={<MainContent />} />
              <Route path="/:lang/services" element={<ServicesOverview />} />
              <Route path="/:lang/services/chatbot" element={<ChatbotService />} />
              <Route path="/:lang/services/automation" element={<AutomationService />} />
              <Route path="/:lang/services/chatbot/form" element={<ChatbotForm />} />
              <Route path="/:lang/services/automation/form" element={<AutomationForm />} />
              <Route path="/:lang/contact" element={<Contact />} />
              <Route path="/:lang/privacy" element={<PrivacyPolicy />} />
              <Route path="/:lang/terms" element={<TermsOfService />} />
              <Route path="/:lang/conditions" element={<GeneralConditions />} />
              <Route path="/:lang/faq" element={<FAQProvider><FAQ /></FAQProvider>} />

              {/* Redirection catch-all */}
              <Route path="*" element={<Navigate to={`/${language}`} replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;