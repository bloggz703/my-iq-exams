import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "If a plane crashes on the border between the United States and Canada, where would the survivors be buried?",
    options: [
      "In the United States",
      "In Canada",
      "In their home countries",
      "Survivors are not buried"
    ],
    correctAnswer: 3,
    explanation: "Survivors are not buried as they are still alive."
  },
  {
    id: 2,
    text: "Which number should come next in this sequence: 1, 4, 9, 16, 25, ...?",
    options: [
      "30",
      "36",
      "49",
      "64"
    ],
    correctAnswer: 1,
    explanation: "The sequence represents square numbers: 1², 2², 3², 4², 5², so the next number is 6² = 36."
  },
  {
    id: 3,
    text: "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):",
    options: [
      "City",
      "Animal",
      "Ocean",
      "Country"
    ],
    correctAnswer: 2,
    explanation: "When rearranged, the letters spell 'PACIFIC', which is an ocean."
  },
  {
    id: 4,
    text: "A farmer has 17 sheep, all but 9 die. How many sheep are left?",
    options: [
      "8",
      "9",
      "17",
      "0"
    ],
    correctAnswer: 1,
    explanation: "The phrase 'all but 9 die' means that 9 sheep are still alive."
  },
  {
    id: 5,
    text: "What is the next number in this sequence: 2, 6, 12, 20, 30, ...?",
    options: [
      "36",
      "40",
      "42",
      "56"
    ],
    correctAnswer: 2,
    explanation: "The pattern follows the differences: +4, +6, +8, +10, so the next difference is +12, making the next number 30 + 12 = 42."
  },
  {
    id: 6,
    text: "If five cats catch five mice in five minutes, how many cats would it take to catch 100 mice in 100 minutes?",
    options: [
      "5 cats",
      "20 cats",
      "25 cats",
      "100 cats"
    ],
    correctAnswer: 0,
    explanation: "Five cats catch five mice in five minutes, so the same five cats would catch 100 mice in 100 minutes."
  },
  {
    id: 7,
    text: "Which of these words is the odd one out?",
    options: [
      "Clock",
      "Calendar",
      "Compass",
      "Scale"
    ],
    correctAnswer: 3,
    explanation: "A scale measures weight, while all the others are related to measurement of time or direction."
  },
  {
    id: 8,
    text: "I'm a six-letter word; remove one letter and 12 remain. What am I?",
    options: [
      "Twelve",
      "Dozens",
      "Couple",
      "Months"
    ],
    correctAnswer: 0,
    explanation: "The word 'Twelve' has six letters. If you remove one letter, the word '12' remains."
  },
  {
    id: 9,
    text: "Which figure completes the pattern?",
    options: [
      "Triangle",
      "Square",
      "Circle",
      "Hexagon"
    ],
    correctAnswer: 2,
    explanation: "The pattern alternates between shapes with straight lines and curved lines, so the next shape would be a circle."
  },
  {
    id: 10,
    text: "If you have a cake and cut it into 8 equal pieces with 3 straight cuts, what is the maximum number of pieces you can create?",
    options: [
      "6",
      "7",
      "8",
      "10"
    ],
    correctAnswer: 2,
    explanation: "With 3 straight cuts, you can create a maximum of 8 pieces."
  },
  {
    id: 11,
    text: "Which word does not belong with the others?",
    options: [
      "Copper",
      "Tin",
      "Iron",
      "Brass"
    ],
    correctAnswer: 3,
    explanation: "Brass is an alloy (mixture of metals), while the others are all pure elements."
  },
  {
    id: 12,
    text: "Mary's father has five daughters: 1. Nana, 2. Nene, 3. Nini, 4. Nono. What is the name of the fifth daughter?",
    options: [
      "Nunu",
      "Mary",
      "Nina",
      "Nana"
    ],
    correctAnswer: 1,
    explanation: "The fifth daughter is Mary, as stated in the question: 'Mary's father has five daughters'."
  },
  {
    id: 13,
    text: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    options: [
      "5 minutes",
      "20 minutes",
      "100 minutes",
      "500 minutes"
    ],
    correctAnswer: 0,
    explanation: "It takes 1 machine 5 minutes to make 1 widget. 100 machines would make 100 widgets in the same time (5 minutes)."
  },
  {
    id: 14,
    text: "What comes next in this series: J, F, M, A, M, J, J, A, S, O, N, ...?",
    options: [
      "D",
      "P",
      "Y",
      "X"
    ],
    correctAnswer: 0,
    explanation: "These are the first letters of the months of the year: January, February, etc. So the next letter is D for December."
  },
  {
    id: 15,
    text: "If a red house is made of red bricks, and a blue house is made of blue bricks, what is a greenhouse made of?",
    options: [
      "Green bricks",
      "Glass",
      "Plants",
      "Wood painted green"
    ],
    correctAnswer: 1,
    explanation: "A greenhouse is a structure made of glass used for growing plants, not a house that is green in color."
  }
];