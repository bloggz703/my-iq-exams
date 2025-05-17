import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Privacy Policy - IQ Exams';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Introduction</h2>
            <p className="text-gray-600">
              This Privacy Policy explains how myiqexams.com ("we," "us," or "our") collects, uses, and protects your information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
            <div className="text-gray-600 space-y-2">
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside pl-4">
                <li>Test responses and results</li>
                <li>Contact information (when you contact us)</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>To provide and maintain our service</li>
              <li>To generate your IQ test results</li>
              <li>To improve our website and user experience</li>
              <li>To respond to your inquiries</li>
              <li>To send you updates and marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Cookies and Tracking</h2>
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to track activity on our website and improve user experience. 
              This includes third-party cookies for analytics and advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Services</h2>
            <p className="text-gray-600">
              We may display third-party advertisements on our website. These advertisers may use cookies and similar technologies 
              to collect information about your visits to provide personalized advertising.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information. However, no method of 
              transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Children's Privacy</h2>
            <p className="text-gray-600">
              Our service is not directed to children under 13. We do not knowingly collect personal information from 
              children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:myiqexams@gmail.com" className="text-purple-600 hover:text-purple-700">
                myiqexams@gmail.com
              </a>
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;