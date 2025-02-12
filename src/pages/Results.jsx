import React from "react";
import PageNavigationButton from "../components/PageNavigationButton";
import ScoreSummary from "../components/ScoreSummary";

const ResultsPage = ({ totalQuestions, correctAnswers }) => {
  return (
    <div className="results-page">
      <main className="flex flex-col justify-center items-center mb-72 mt-12 px-4">
        <h1 className="text-teal-600 text-5xl p-4 flex justify-between items-center">
          lrnr
        </h1>
        <ScoreSummary
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
        />
        <div className="flex justify-center mt-6 mb-12">
          <PageNavigationButton
            name={"TRY ANOTHER QUIZ"}
            routeName={"quizgenerator"}
          />
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;
