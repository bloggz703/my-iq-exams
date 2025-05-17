import React, { createContext, useContext, useState } from 'react';
import { Question, QuizState, QuizContextType } from '../types/quiz';
import { questions } from '../data/questions';

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: Array(questions.length).fill(null),
  score: null,
  timeStarted: Date.now(),
  timeEnded: null,
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<QuizState>(initialState);

  const selectAnswer = (questionIndex: number, answerIndex: number) => {
    setState((prev) => {
      const newAnswers = [...prev.answers];
      newAnswers[questionIndex] = answerIndex;
      return { ...prev, answers: newAnswers };
    });
  };

  const nextQuestion = () => {
    setState((prev) => {
      if (prev.currentQuestionIndex < questions.length - 1) {
        return { ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 };
      }
      return prev;
    });
  };

  const previousQuestion = () => {
    setState((prev) => {
      if (prev.currentQuestionIndex > 0) {
        return { ...prev, currentQuestionIndex: prev.currentQuestionIndex - 1 };
      }
      return prev;
    });
  };

  const calculateScore = () => {
    const correctAnswers = state.answers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;
    
    // Simple IQ calculation - base 100 plus 5 points per correct answer
    const calculatedScore = Math.floor(100 + (correctAnswers / questions.length) * 50);
    
    setState((prev) => ({
      ...prev,
      score: calculatedScore,
      timeEnded: Date.now(),
    }));
  };

  const resetQuiz = () => {
    setState({
      ...initialState,
      timeStarted: Date.now(),
    });
  };

  const value: QuizContextType = {
    state,
    questions,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    calculateScore,
    resetQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};