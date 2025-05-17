export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: (number | null)[];
  score: number | null;
  timeStarted: number;
  timeEnded: number | null;
}

export interface QuizContextType {
  state: QuizState;
  questions: Question[];
  selectAnswer: (questionIndex: number, answerIndex: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  calculateScore: () => void;
  resetQuiz: () => void;
}