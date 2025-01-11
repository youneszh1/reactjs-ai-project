import { createContext } from "react";
import { useContext } from 'react';

export const QuizContext = createContext()

// useMyContext.js
export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within a MyContextProvider');
  }
  return context;
};
