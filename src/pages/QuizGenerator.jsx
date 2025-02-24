import React, { useState } from "react";
import "../App.css";
import QuizDropdown from "../components/QuizDropdown";

//Uses the arrays as props to create dropdown options
const QuizGenerator = () => {
  const topics = ["Goland", "AWS", "Javascript", "CI/CD"];

  const difficulty = ["Novice", "Intermediate", "Expert"];

  const questionAmount = [5, 10, 15];

  const style = [
    "Master Oogway",
    "1940s Gangster",
    "Like I am 8 years old",
    "Jedi",
    "Goku",
  ];

  // State for storing user selections
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    console.log({
      selectedTopic,
      selectedDifficulty,
      selectedQuestions,
      selectedStyle,
    });

    alert(
      `Quiz generated with ${selectedQuestions} questions on ${selectedTopic} for ${selectedDifficulty} level`
    );
  };
  return (
    <>
      <div className="flex flex-col p-10">
        <h1 className="text-4xl">Quiz Generation Options</h1>
        <p className="pt-10">
          Please choose your preferences below to generate your personalized
          quiz.
        </p>

        <div className="space-y-5">
          <h1 className="mt-10 text-gray-500">Topic</h1>
          <QuizDropdown data={topics} onSelect={setSelectedTopic} />
          <h1 className="text-gray-500">Expertise</h1>
          <QuizDropdown data={difficulty} onSelect={setSelectedDifficulty} />
          <h1 className="text-gray-500">Number of Questions</h1>
          <QuizDropdown data={questionAmount} onSelect={setSelectedQuestions} />
          <h1 className="text-gray-500">Style of questions</h1>
          <QuizDropdown data={style} onSelect={setSelectedStyle} />
        </div>

        <button
          className="bg-teal-500 hover:bg-teal-700 text-white px-6 py-2 mt-10 rounded text-center w-fit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default QuizGenerator;
