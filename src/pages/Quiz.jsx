import "../App.css";
import React, { useState } from "react";
import QuizCard from "../components/QuizCard.jsx";
import { useNavigate, useLocation } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  const quizData = location.state;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSubmitted(false);
    } else {
      navigate("/results");
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  //map and manage state for each quiz card
  return (
      <>
        {currentQuestion < quizData.length ? (
            <>
              <h1 className="text-teal-500 text-4xl text-center mt-5">
                {currentQuestion + 1} of {quizData.length}
              </h1>
              <QuizCard
                  question={quizData[currentQuestion].text}
                  handleSubmit={handleSubmit}
                  submitted={submitted}
                  handleNextQuestion={handleNextQuestion}
              />
            </>
        ) : (
            navigate("/results")
        )}
      </>
  );
};

export default Quiz;