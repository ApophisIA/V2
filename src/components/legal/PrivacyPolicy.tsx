import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-gray-300">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Name and contact information</li>
                <li>Company details</li>
                <li>Website information</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Personalize your experience</li>
                <li>Ensure service quality and security</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Data Protection</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Your Rights</h2>
              <p className="text-gray-300">
                Under GDPR, you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification</li>
                <li>Right to erasure</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Contact Us</h2>
              <p className="text-gray-300">
                For any privacy-related questions or concerns, please contact us at:
              </p>
              <p className="text-gray-300">
                Email: amaury@apophisia.lu<br />
                Address: 29, rue Nicolas Flener, Mamer-8228, Luxembourg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;