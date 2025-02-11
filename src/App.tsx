import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import { useScrollTop } from './hooks/useScrollTop';
import { useLanguage } from './contexts/LanguageContext';
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
            <FAQProvider>
              <Routes>
                {/* Redirect root to language-specific home */}
                <Route path="/" element={<Navigate to={`/${language}`} replace />} />
                
                {/* English routes */}
                <Route path="/en" element={<MainContent />} />
                <Route path="/en/services" element={<ServicesOverview />} />
                <Route path="/en/services/chatbot" element={<ChatbotService />} />
                <Route path="/en/services/automation" element={<AutomationService />} />
                <Route path="/en/services/chatbot/form" element={<ChatbotForm />} />
                <Route path="/en/services/automation/form" element={<AutomationForm />} />
                <Route path="/en/contact" element={<Contact />} />
                <Route path="/en/privacy" element={<PrivacyPolicy />} />
                <Route path="/en/terms" element={<TermsOfService />} />
                <Route path="/en/conditions" element={<GeneralConditions />} />
                <Route path="/en/faq" element={<FAQ />} />

                {/* French routes */}
                <Route path="/fr" element={<MainContent />} />
                <Route path="/fr/services" element={<ServicesOverview />} />
                <Route path="/fr/services/chatbot" element={<ChatbotService />} />
                <Route path="/fr/services/automation" element={<AutomationService />} />
                <Route path="/fr/services/chatbot/form" element={<ChatbotForm />} />
                <Route path="/fr/services/automation/form" element={<AutomationForm />} />
                <Route path="/fr/contact" element={<Contact />} />
                <Route path="/fr/privacy" element={<PrivacyPolicy />} />
                <Route path="/fr/terms" element={<TermsOfService />} />
                <Route path="/fr/conditions" element={<GeneralConditions />} />
                <Route path="/fr/faq" element={<FAQ />} />

                {/* Catch all redirect */}
                <Route path="*" element={<Navigate to={`/${language}`} replace />} />
              </Routes>
            </FAQProvider>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;