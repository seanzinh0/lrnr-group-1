import React, {useState, useEffect} from "react";
import "../App.css";
import QuizDropdown from "../components/QuizDropdown";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const QuizGenerator = () => {
    const topics = ["Golang", "AWS", "Javascript", "CI/CD", "Quantum Computing", "HTML", "Node.js", "CSS"];
    const difficulty = ["Novice", "Intermediate", "Expert"];
    const questionAmount = [5, 10, 15];
    const style = [
        "Normal",
        "Master Oogway",
        "1940s Gangster",
        "Like I am 8 years old",
        "Jedi",
        "Goku",
        "2pac",
        "Hello Kitty",
        "Vegeta",
        "Captain Jack Sparrow",
        "Tony Stark",
        "Batman",
        "Gollum"
    ];

    const [selectedTopic, setSelectedTopic] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [selectedQuestions, setSelectedQuestions] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("");
    const [quizData, setQuizData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (
            !selectedTopic ||
            !selectedDifficulty ||
            !selectedQuestions ||
            !selectedStyle
        ) {
            setError("Please fill out the required information");
        } else {
            setLoading(true);
            try {
                const response = await axios.post("/api/quizgenerator", {
                    topic: selectedTopic,
                    difficulty: selectedDifficulty,
                    questionAmount: selectedQuestions,
                    style: selectedStyle,
                });
                setQuizData(response.data);
                navigate("/quiz", {state: response.data});
            } catch (error) {
                setError("Failed to generate quiz");
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        setError(null);
    }, [selectedTopic, selectedDifficulty, selectedQuestions, selectedStyle]);

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
                    <QuizDropdown data={topics} onSelect={setSelectedTopic}/>
                    <h1 className="text-gray-500">Expertise</h1>
                    <QuizDropdown data={difficulty} onSelect={setSelectedDifficulty}/>
                    <h1 className="text-gray-500">Number of Questions</h1>
                    <QuizDropdown data={questionAmount} onSelect={setSelectedQuestions}/>
                    <h1 className="text-gray-500">Style of questions</h1>
                    <QuizDropdown data={style} onSelect={setSelectedStyle}/>
                </div>

                <button
                    className="bg-teal-500 hover:bg-teal-700 text-white px-6 py-2 mt-10 rounded text-center w-fit"
                    onClick={handleSubmit}
                >
                    {loading ? "Loading..." : "Submit"}
                </button>
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </>
    );
};

export default QuizGenerator;