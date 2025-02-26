import QuestionCard from './QuestionCard';
import EvalCard from './EvalCard';

const QuizCard = ({question}) => {
    // add state variable for the question and answer
    // pass question state as props to question card
    // update answer state from question card and pass to eval card
const [setQuestion, updateQuestion] = useState('');
const [setAnswer, updateAnswer] = useState('');


    return (
        <>
            <div className="mb-44 flex justify-center">
                {/*pass the question as a prop*/}
                <QuestionCard/>
            </div>
            <div className="mb-72 flex justify-center">
                {/*pass the question and answer state as a prop*/}
                <EvalCard/>
            </div>
        </>
    )
}

export default QuizCard;