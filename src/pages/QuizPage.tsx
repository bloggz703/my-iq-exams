import React from 'react';
import { useQuiz } from '../context/QuizContext';
import QuizCard from '../components/QuizCard';
import NavigationButtons from '../components/NavigationButtons';
import ProgressBar from '../components/ProgressBar';
import { motion, AnimatePresence } from 'framer-motion';
import AdsterraAd from '../AdsterraAd'; 

const QuizPage: React.FC = () => {
  const { state } = useQuiz();
  const { currentQuestionIndex } = state;

  React.useEffect(() => {
    document.title = `IQ Exams - Question ${currentQuestionIndex + 1}`;
  }, [currentQuestionIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center p-4"
    >
      <div className="w-full flex flex-col items-center">
        <ProgressBar />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center"
          >
            <QuizCard questionIndex={currentQuestionIndex} />
          </motion.div>
        </AnimatePresence>

        <AdsterraAd step={currentQuestionIndex} />

        <NavigationButtons showPrevious showFinish />
      </div>
    </motion.div>
  );
};

export default QuizPage;
