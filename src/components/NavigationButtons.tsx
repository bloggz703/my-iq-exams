import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';

interface NavigationButtonsProps {
  showPrevious?: boolean;
  showFinish?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ 
  showPrevious = false,
  showFinish = false
}) => {
  const { nextQuestion, previousQuestion, calculateScore, state, questions } = useQuiz();
  const navigate = useNavigate();
  const isLastQuestion = state.currentQuestionIndex === questions.length - 1;
  const hasAnsweredCurrent = state.answers[state.currentQuestionIndex] !== null;

  const handleNext = () => {
    if (isLastQuestion && showFinish) {
      calculateScore();
      navigate('/results');
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="flex justify-between w-full max-w-2xl mt-6">
      {showPrevious ? (
        <button
          onClick={previousQuestion}
          disabled={state.currentQuestionIndex === 0}
          className={`px-4 py-2 rounded-md ${
            state.currentQuestionIndex === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Previous
        </button>
      ) : (
        <div></div>
      )}
      
      <button
        onClick={handleNext}
        disabled={!hasAnsweredCurrent}
        className={`px-6 py-2 rounded-md transition-colors ${
          hasAnsweredCurrent
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-purple-300 text-white cursor-not-allowed'
        }`}
      >
        {isLastQuestion && showFinish ? 'Finish Quiz' : 'Next'}
      </button>
    </div>
  );
};

export default NavigationButtons;