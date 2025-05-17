import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { motion } from 'framer-motion';

interface QuizCardProps {
  questionIndex: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ questionIndex }) => {
  const { questions, state, selectAnswer } = useQuiz();
  const question = questions[questionIndex];
  const selectedAnswer = state.answers[questionIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Question {questionIndex + 1}: {question.text}
      </h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selectAnswer(questionIndex, index)}
            className={`w-full text-left p-4 rounded-md transition-all ${
              selectedAnswer === index
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            <span className="font-medium">
              {String.fromCharCode(65 + index)}. {option}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizCard;