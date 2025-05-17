import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'About Us - IQ Exams';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">About IQ Exams</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-600">
              At IQ Exams, we're dedicated to providing accessible and engaging intelligence testing experiences. 
              Our platform offers carefully designed IQ tests that help individuals explore and understand their 
              cognitive abilities in a fun and educational way.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Scientifically designed IQ questions</li>
              <li>Instant results and detailed explanations</li>
              <li>Downloadable certificates</li>
              <li>Mobile-friendly testing experience</li>
              <li>Free access to basic tests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Important Note</h2>
            <p className="text-gray-600">
              While our tests are designed to provide insight into cognitive abilities, they should be considered 
              for entertainment and self-discovery purposes only. For professional IQ assessment, please consult 
              with a qualified psychologist or educational professional.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;