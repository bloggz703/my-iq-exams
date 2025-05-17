import React from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const { resetQuiz } = useQuiz();
  
  React.useEffect(() => {
    // Reset the quiz when landing on the home page
    resetQuiz();
    // Update document title for SEO
    document.title = 'IQ Exams - Test Your Intelligence';
  }, [resetQuiz]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center px-4 py-12"
    >
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-3">IQ Exams</h1>
          <p className="text-lg text-gray-600">Test your intelligence with our scientifically designed IQ quiz</p>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">About This IQ Test</h2>
          <div className="text-gray-600 space-y-3">
            <p>
              This test contains 15 questions designed to measure different aspects of intelligence, including:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Logical reasoning</li>
              <li>Pattern recognition</li>
              <li>Mathematical ability</li>
              <li>Verbal comprehension</li>
              <li>Spatial awareness</li>
            </ul>
            <p>
              Each question has multiple-choice answers. Select the best answer for each question.
            </p>
            <p>
              At the end of the test, you'll receive your IQ score and have the option to download a PDF with your results.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <span className="font-medium">Time Limit:</span> There is no strict time limit, but try to complete the test in one sitting.
            </p>
            <p>
              <span className="font-medium">Answer All Questions:</span> Try to answer all questions for the most accurate result.
            </p>
            <p>
              <span className="font-medium">No External Help:</span> For an accurate assessment, don't use external resources.
            </p>
            <p>
              <span className="font-medium">One Question at a Time:</span> You'll see one question per page. Use the "Next" button to proceed.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <Link 
            to="/quiz" 
            className="px-8 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-lg font-medium flex items-center"
          >
            Start the IQ Test
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;