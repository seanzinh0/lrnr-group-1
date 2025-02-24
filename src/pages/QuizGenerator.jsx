import React, { useState } from "react";
import "../App.css";
import QuizDropdown from "../components/QuizDropdown";
import { useNavigate } from "react-router-dom";

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

  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const quizParams = {
      topic: selectedTopic,
      difficulty: selectedDifficulty,
      questions: selectedQuestions,
      style: selectedStyle,
    };

    try {
      const response = await fetch('/api/quizgenerator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizParams),
      });

      if (!response.ok) {
        throw new Error('Failed to generate quiz');
      }

      const quizData = await response.json();
      navigate('/quiz', { state: { quizData } });
    } catch (error) {
      console.error('Error generating quiz:', error);
      alert('Failed to generate quiz. Please try again.');
    }
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
          className="bg-green-600 text-white px-6 py-2 mt-10 font-semibold hover:bg-green-700 active:bg-green-800 border border-green-700 text-left w-fit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default QuizGenerator;