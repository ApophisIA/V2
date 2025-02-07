import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using Apophis.IA's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Services Description</h2>
              <p className="text-gray-300">
                Apophis.IA provides AI-powered automation solutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Custom AI chatbots</li>
                <li>Process automation solutions</li>
                <li>Integration services</li>
                <li>Consulting and support</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. User Obligations</h2>
              <p className="text-gray-300">
                Users agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Provide accurate information</li>
                <li>Maintain confidentiality of account credentials</li>
                <li>Use services in compliance with applicable laws</li>
                <li>Not engage in unauthorized access or use</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300">
                All intellectual property rights in the services and their content are owned by Apophis.IA. Users receive a limited license to use the services as intended.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-300">
                Apophis.IA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our services.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact</h2>
              <p className="text-gray-300">
                For any questions regarding these terms, please contact us at amaury@apophisia.lu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;