import React from 'react';
import { useQuiz } from '../context/QuizContext';

const ProgressBar: React.FC = () => {
  const { state, questions } = useQuiz();
  const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mb-6">
      <div className="flex justify-between mb-1 text-sm text-gray-600">
        <span>Question {state.currentQuestionIndex + 1} of {questions.length}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;