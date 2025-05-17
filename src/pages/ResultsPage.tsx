import React from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import ResultsSummary from '../components/ResultsSummary';
import { motion } from 'framer-motion';

const ResultsPage: React.FC = () => {
  const { state, resetQuiz } = useQuiz();
  
  React.useEffect(() => {
    document.title = 'IQ Exams - Your Results';
    
    if (state.score === null) {
      window.location.href = '/';
    }
  }, [state.score]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center p-4 py-12"
    >
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-purple-900 mb-2">Your IQ Test Results</h1>
          <p className="text-gray-600">See how you performed and download your certificate</p>
        </motion.div>
        
        <ResultsSummary />
        
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/"
            className="px-6 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
            onClick={resetQuiz}
          >
            Back to Home
          </Link>
          <Link
            to="/quiz"
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            onClick={resetQuiz}
          >
            Take Test Again
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultsPage;