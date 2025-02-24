import "../App.css";
import React, {useState, useEffect} from "react";
import QuizCard from "../components/QuizCard.jsx";
import { useNavigate } from "react-router-dom";

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
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleNextQuestion = () => {
        if (currentQuestion < data.questions.length - 1) {
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
            {currentQuestion < data.questions.length ? (
                <>
                    <h1 className="text-teal-500 text-4xl text-center mt-5">{currentQuestion + 1} of {data.questions.length}</h1>
                    <QuizCard question={data.questions[currentQuestion].text} handleSubmit={handleSubmit} submitted={submitted} handleNextQuestion={handleNextQuestion} />
                </>
            ) : (
                navigate("/results")
            )}
        </>
    );
};

export default Quiz;