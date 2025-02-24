import React from "react";

const QuestionCard = ({ question, handleAnswerChange, handleSubmit, submitted }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [answer, setAnswer] = React.useState('');
  const [error, setError] = React.useState('');

  const handleAnswerInput = (e) => {
    setAnswer(e.target.value);
    handleAnswerChange(e.target.value);
    setError('');
  };

  const handleSubmission = () => {
    if (answer.trim() === '') {
      setError('Please enter an answer');
    } else {
      handleSubmit();
    }
  };

  return (
      <>
        <div className="questionGen text-teal-500 p-4 w-11/12 flex flex-col">
          <div>
            <div className='mb-20'>
            <h1 className="text-4xl">Question</h1>
            <p className="text-black m-4 ml-0">{question}</p>
            </div>
            <h2 className="text-4xl">Your Answer</h2>
            <div className="flex flex-col ml-2 mt-10">
              <label
                  className={`block mb-1 ${
                      isFocused ? "text-teal-500" : "text-gray-500"
                  }`}
              >
                Answer
              </label>
              <input
                  type="text"
                  value={answer}
                  onChange={handleAnswerInput}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="border-b-2 border-black w-11/12 outline-0 focus:border-teal-500"
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
          <button
              className={`bg-teal-500 rounded text-white text-xs border-solid w-1/12 p-3 rounded-1 mt-10 ${submitted ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={submitted ? () => {} : handleSubmission}
              disabled={submitted}
          >
            SUBMIT ANSWER
          </button>
        </div>
      </>
  );
};

export default QuestionCard;