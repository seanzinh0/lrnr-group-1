import "../App.css";
import React, { useState, useEffect } from "react";
import QuizCard from "../components/QuizCard.jsx";

// take in data as prop

const data = {
    "topic": "AWS",
    "difficulty": "Intermediate",
    "question_amount": 5,
    "style": "Normal",
    "questions": [
        {
            "id": 1,
            "text": "What is the primary purpose of Amazon Elastic Beanstalk?",
            "voice_indicators": ["neutral tone", "technical term"]
        },
        {
            "id": 2,
            "text": "How does Amazon S3 handle data consistency across multiple regions?",
            "voice_indicators": ["neutral tone", "technical concept"]
        },
        {
            "id": 3,
            "text": "What is the difference between Amazon EC2 and Amazon Lambda?",
            "voice_indicators": ["neutral tone", "technical comparison"]
        },
        {
            "id": 4,
            "text": "How does Amazon CloudWatch monitor and troubleshoot AWS resources?",
            "voice_indicators": ["neutral tone", "technical process"]
        },
        {
            "id": 5,
            "text": "What is the purpose of Amazon IAM roles in managing access to AWS resources?",
            "voice_indicators": ["neutral tone", "technical concept"]
        }
    ]
}

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

  //map and manage state for each quiz card
  return (
    <>
        <h1 className="text-teal-500 text-4xl text-center mt-5">{currentQuestion + 1} of {data.questions.length}</h1>
        {currentQuestion < data.questions.length ? (
            <QuizCard question={data.questions[currentQuestion].text} handleNextQuestion={handleNextQuestion} />
        ) : (
            <h1 className="text-teal-500 text-4xl text-center mt-5">Quiz Complete!</h1>
        )}
    </>
  );
};

export default Quiz;
