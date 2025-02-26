import {useState, useEffect} from 'react';

const EvalCard = ({ question, answer, handleNextQuestion }) => {
    const [evaluation, setEvaluation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const evaluateAnswer = async () => {
            try {
                const response = await fetch('/api/quiz', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question, answer }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setEvaluation(data);
                } else {
                    setError('Failed to evaluate answer');
                }
            } catch (error) {
                setError('Error evaluating answer');
            } finally {
                setLoading(false);
            }
        };

        evaluateAnswer();
    }, [question, answer]);

    return (
        <div className="evalGen text-teal-500 p-4 flex flex-col w-11/12">
            {loading ? (
                <p className="text-black text-center">Loading...</p>
            ) : (
                <div>
                    <div className="flex justify-between md:flex-row flex-col">
                        <div>
                            <h2 className="text-4xl mb-4 mr-40">Verners Evaluation</h2>
                            <h2 className="text-2xs mb-4 text-black ">{evaluation && evaluation.correct} Answer</h2>
                        </div>
                        <p className="text-black md:w-1/2 mb-10 md:mb-0">{evaluation && evaluation.evaluation}</p>
                    </div>
                    <button
                        className="bg-teal-500 hover:bg-teal-700 rounded text-white text-xs border-solid w-24 p-3 rounded-1"
                        onClick={handleNextQuestion}
                    >
                        NEXT
                    </button>
                </div>
            )}
        </div>
    );
};

export default EvalCard;