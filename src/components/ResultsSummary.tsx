import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ResultsSummary: React.FC = () => {
  const { state, questions } = useQuiz();
  const { score, answers, timeStarted, timeEnded } = state;
  
  if (score === null || timeEnded === null) return null;
  
  const correctAnswers = answers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length;
  
  const timeTaken = Math.floor((timeEnded - timeStarted) / 1000 / 60); // in minutes
  
  const getIQLevel = (score: number) => {
    if (score >= 140) return 'Genius or near genius';
    if (score >= 130) return 'Very superior';
    if (score >= 120) return 'Superior';
    if (score >= 110) return 'High average';
    if (score >= 90) return 'Average';
    if (score >= 80) return 'Low average';
    if (score >= 70) return 'Borderline';
    return 'Below average';
  };
  
  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(18);
    doc.text('IQ Test Results', 105, 15, { align: 'center' });
    
    // Add date
    doc.setFontSize(10);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 105, 25, { align: 'center' });
    
    // Add score info
    doc.setFontSize(14);
    doc.text(`Your IQ Score: ${score}`, 20, 40);
    doc.text(`Classification: ${getIQLevel(score)}`, 20, 50);
    doc.text(`Correct Answers: ${correctAnswers} out of ${questions.length}`, 20, 60);
    doc.text(`Time Taken: ${timeTaken} minutes`, 20, 70);
    
    // Create a table of questions and answers
    const tableColumn = ["Question", "Your Answer", "Correct Answer", "Result"];
    const tableRows = questions.map((question, index) => {
      const yourAnswer = answers[index] !== null ? question.options[answers[index] as number] : 'Not answered';
      const correctAnswer = question.options[question.correctAnswer];
      const isCorrect = answers[index] === question.correctAnswer;
      
      return [
        `${index + 1}. ${question.text.substring(0, 40)}...`,
        yourAnswer,
        correctAnswer,
        isCorrect ? 'Correct' : 'Incorrect'
      ];
    });
    
    // @ts-ignore
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 80,
      theme: 'grid',
      styles: { overflow: 'linebreak', cellWidth: 'auto' },
      columnStyles: { 0: { cellWidth: 70 } },
      margin: { top: 80 }
    });
    
    doc.save('iq-test-results.pdf');
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your IQ Test Results</h2>
      
      <div className="mb-6">
        <div className="flex items-center justify-center mb-8">
          <div className="w-40 h-40 rounded-full bg-purple-100 flex items-center justify-center border-4 border-purple-500">
            <span className="text-4xl font-bold text-purple-700">{score}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Classification</h3>
          <p className="text-lg font-medium text-purple-700">{getIQLevel(score)}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-500">Correct Answers</p>
            <p className="text-xl font-medium">{correctAnswers} / {questions.length}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-500">Time Taken</p>
            <p className="text-xl font-medium">{timeTaken} minutes</p>
          </div>
        </div>
      </div>
      
      <button
        onClick={downloadPDF}
        className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download Results as PDF
      </button>
    </div>
  );
};

export default ResultsSummary;