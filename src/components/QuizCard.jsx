import QuestionCard from './QuestionCard';
import EvalCard from './EvalCard';
import {useState} from "react";

const QuizCard = ({question, handleSubmit, submitted, handleNextQuestion}) => {
    const [answer, setAnswer] = useState('');

    const handleAnswerChange = (answer) => {
        setAnswer(answer);
    };

    return (
        <>
            <div className="mb-10 md:mb-44 flex justify-center">
                {/*pass the question as a prop*/}
                <QuestionCard question={question} handleAnswerChange={handleAnswerChange} handleSubmit={handleSubmit}
                              submitted={submitted}/>
            </div>
            {submitted && (
                <div className="mb-72 flex justify-center">
                    {/*pass the question and answer state as a prop*/}
                    <EvalCard question={question} answer={answer} handleNextQuestion={handleNextQuestion}/>
                </div>
            )}

        </>
    )
}

export default QuizCard;