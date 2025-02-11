import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useFAQ } from '../contexts/FAQContext';

const FAQ = () => {
  const { f } = useFAQ();

  const faqs = [
    {
      question: f('faq.q1'),
      answer: f('faq.a1'),
    },
    {
      question: f('faq.q2'),
      answer: f('faq.a2'),
    },
    {
      question: f('faq.q3'),
      answer: f('faq.a3'),
    },
    {
      question: f('faq.q4'),
      answer: f('faq.a4'),
    },
    {
      question: f('faq.q5'),
      answer: f('faq.a5'),
    },
    {
      question: f('faq.q6'),
      answer: f('faq.a6'),
    },
    {
      question: f('faq.q7'),
      answer: f('faq.a7'),
    },
    {
      question: f('faq.q8'),
      answer: f('faq.a8'),
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            {f('faq.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {f('faq.subtitle')}
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
                  <p className="text-gray-300 whitespace-pre-wrap">
                    {faq.answer}
                  </p>
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
