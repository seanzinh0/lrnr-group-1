import "../App.css";
import React, { useState, useEffect } from "react";
import Questions from "../components/QuestionCard.jsx";
import Eval from "../components/EvalCard.jsx";
import { useLocation } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  // Create a default value for quizData in case it's not available in the location state
  const { quizData } = location.state || { quizData: { questions: [] } };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (!quizData || !quizData.questions || quizData.questions.length === 0) {
      console.error('No quiz data found or questions array is empty');
      // Handle the case where quiz data is not available
    }
  }, [quizData]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Safeguard against undefined or empty questions array
  const currentQuestion = quizData.questions[currentQuestionIndex] || {};

  return (
    <>
      <h1 className="text-teal-500 text-4xl text-center mt-5">
        {currentQuestionIndex + 1} of {quizData.questions.length}
      </h1>
      <div className="mb-44 flex justify-center">
        <Questions question={currentQuestion.question} />
      </div>

      <div className="mb-72 flex justify-center">
        <Eval onNext={handleNextQuestion} />
      </div>
    </>
  );
};

export default Quiz;