import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What are your chatbot pricing plans?",
      answer: (
        <div className="space-y-4">
          <p>Our chatbot services include both development and monthly maintenance costs:</p>
          
          <div className="space-y-2">
            <p className="font-semibold text-white">Development Cost:</p>
            <p>Starting from €1,250 for a basic chatbot with simple FAQ response capabilities.</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-white">Monthly Maintenance Plans:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-medium text-purple-400">Basic (€700/month):</span>
                <ul className="list-disc pl-6 mt-2">
                  <li>Bug fixes and maintenance</li>
                  <li>Minor changes and updates</li>
                  <li>Basic support</li>
                  <li>No API or additional integrations</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-purple-400">Standard (€1,250/month):</span>
                <ul className="list-disc pl-6 mt-2">
                  <li>All Basic features</li>
                  <li>Selected API integrations</li>
                  <li>Regular knowledge base updates</li>
                  <li>Minor feature changes</li>
                  <li>Additional features available for extra fees</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-purple-400">Premium (€1,500/month):</span>
                <ul className="list-disc pl-6 mt-2">
                  <li>All Standard features</li>
                  <li>24/7 priority support</li>
                  <li>Unlimited API integrations</li>
                  <li>Plugin additions</li>
                  <li>Major feature changes included</li>
                  <li>Fastest response and implementation time</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "How is the chatbot deployed on my website?",
      answer: "Deployment is simple and straightforward. We provide you with a code snippet that needs to be added to your website's HTML body section. Once added, the chatbot will be fully functional on your site. This process requires minimal technical knowledge and can be completed in minutes."
    },
    {
      question: "What types of chatbots do you offer?",
      answer: "We offer fully customizable AI chatbots that can be integrated with websites, WhatsApp, and other platforms. Our chatbots can handle customer service, lead generation, and automated support in multiple languages."
    },
    {
      question: "How long does it take to implement a chatbot?",
      answer: "Our standard implementation timeline is 1 week for basic chatbots. More complex integrations may take 2-3 weeks depending on specific requirements and customizations needed."
    },
    {
      question: "What languages do your chatbots support?",
      answer: "Our chatbots support multiple languages including English, French, German, Spanish, and much more. We can add support for additional languages based on your requirements."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide comprehensive support through our different maintenance plans. Each plan includes different levels of support, from basic bug fixes to 24/7 priority assistance, depending on your chosen tier."
    },
    {
      question: "Can I upgrade or downgrade my maintenance plan?",
      answer: "Yes, you can change your maintenance plan with 30 days notice. This flexibility allows you to adjust the service level based on your evolving needs."
    },
    {
      question: "How do you handle data privacy and security?",
      answer: "We follow strict GDPR compliance and implement industry-standard security measures. All data is encrypted and stored securely, with regular backups and monitoring."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 text-lg font-medium text-white cursor-pointer list-none">
                {faq.question}
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                {typeof faq.answer === 'string' ? (
                  <p className="text-gray-300">{faq.answer}</p>
                ) : (
                  <div className="text-gray-300">{faq.answer}</div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;