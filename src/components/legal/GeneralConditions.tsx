import React from 'react';

const GeneralConditions = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              General Conditions
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Service Delivery</h2>
              <p className="text-gray-300">
                Our service delivery process includes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Initial consultation and requirements gathering</li>
                <li>Solution design and proposal</li>
                <li>Development and implementation</li>
                <li>Testing and quality assurance</li>
                <li>Deployment and maintenance</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Payment Terms</h2>
              <p className="text-gray-300">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>30% upfront payment upon project initiation</li>
                <li>40% upon completion of development phase</li>
                <li>30% upon final delivery and acceptance</li>
                <li>Monthly subscription fees for ongoing services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Service Level Agreement</h2>
              <p className="text-gray-300">
                We commit to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>99.9% uptime for cloud services</li>
                <li>24/7 monitoring of critical systems</li>
                <li>Response within 4 hours for critical issues</li>
                <li>Regular maintenance and updates</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Modifications and Cancellations</h2>
              <p className="text-gray-300">
                Any modifications to the agreed scope must be documented and may affect pricing and timeline. Cancellation policies vary by service type and will be specified in individual contracts.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Support and Maintenance</h2>
              <p className="text-gray-300">
                Standard support includes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Email and phone support during business hours</li>
                <li>Monthly system health checks</li>
                <li>Regular software updates</li>
                <li>Documentation and training materials</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact Information</h2>
              <p className="text-gray-300">
                For support and inquiries:<br />
                Email: amaury@apophisia.lu<br />
                Phone: +352 691 549 904<br />
                Address: 29, rue Nicolas Flener, Mamer-8228, Luxembourg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralConditions;