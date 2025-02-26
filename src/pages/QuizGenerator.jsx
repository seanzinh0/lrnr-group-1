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

  // Function to handle form submission
  const handleSubmit = () => {
    const quizData = {
      selectedTopic,
      selectedDifficulty,
      selectedQuestions,
      selectedStyle,
    };
    if (
      !selectedTopic ||
      !selectedDifficulty ||
      !selectedQuestions ||
      !selectedStyle
    ) {
      alert("Please fill out the required information");
    } else {
      // Passing input as data from user to quiz page
      navigate("/quiz", { data: quizData });
    }
  };

  const handleSelect = (value, name) => {

    console.log(value, name);
    if (name === 'topic') {
      setSelectedTopic(value);
      console.log(selectedTopic);
    } else if (name === 'expertise') {
      setSelectedDifficulty(value);
    } else if (name === 'questionAmt') {
      setSelectedQuestions(value);
    } else if (name === 'style') {
      setSelectedStyle(value);
    }
    
  }

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
          <QuizDropdown data={topics} onSelect={handleSelect} selectVal={selectedTopic} name='topic'/>
          <h1 className="text-gray-500">Expertise</h1>
          <QuizDropdown data={difficulty} onSelect={setSelectedDifficulty} selectVal={selectedDifficulty} name='expertise' />
          <h1 className="text-gray-500">Number of Questions</h1>
          <QuizDropdown data={questionAmount} onSelect={setSelectedQuestions} selectVal={selectedTopic} name='questionAmt'/>
          <h1 className="text-gray-500">Style of questions</h1>
          <QuizDropdown data={style} onSelect={setSelectedStyle} selectVal={selectedTopic} name='style'/>
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
