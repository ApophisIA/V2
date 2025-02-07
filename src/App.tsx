import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import { ChatbotService, AutomationService, ServicesOverview } from './components/ServicePages';
import ChatbotForm from './components/ChatbotForm';
import AutomationForm from './components/AutomationForm';
import Contact from './components/Contact';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import GeneralConditions from './components/legal/GeneralConditions';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(0,0,0,0))]" />
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ServicesGrid />
              </>
            } />
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/chatbot" element={<ChatbotService />} />
            <Route path="/services/automation" element={<AutomationService />} />
            <Route path="/services/chatbot/form" element={<ChatbotForm />} />
            <Route path="/services/automation/form" element={<AutomationForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/conditions" element={<GeneralConditions />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;