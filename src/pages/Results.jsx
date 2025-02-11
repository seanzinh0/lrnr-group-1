import React from "react";
import { useNavigate } from "react-router-dom";
import ScoreSummary from "../components/ScoreSummary";

const ResultsPage = ({ totalQuestions, correctAnswers }) => {
  const navigate = useNavigate();
  const handleTryAnotherQuiz = () => {
    navigate("/quizgenerator");
  };
  return (
    <div className="results-page">
      <main className="flex flex-col justify-center items-center mt-12 px-4">
        <h1 className="text-teal-600 text-5xl p-4 flex justify-between items-center">
          lrnr
        </h1>
        <ScoreSummary
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
        />
        <button
          onClick={handleTryAnotherQuiz}
          className="mt-6 bg-teal-500 text-white py-2 px-8 rounded-lg hover:bg-teal-600"
        >
          Try Another Quiz
        </button>
      </main>
    </div>
  );
};

export default ResultsPage;
