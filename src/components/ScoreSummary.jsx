import React from "react";

const ScoreSummary = ({ totalQuestions, correctAnswers }) => {
  const scorePercentage = (correctAnswers / totalQuestions) * 100;
  return (
    <div className="score-summary">
      <h2 className="">Your Results</h2>
      <p className="">
        You answered {correctAnswers} out of {totalQuestions} questions
        correctly!
      </p>
      <p>Your score: {scorePercentage.toFixed(2)}%</p>
    </div>
  );
};

export default ScoreSummary;
