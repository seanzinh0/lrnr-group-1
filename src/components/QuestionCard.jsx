import React from "react";

export default function Questions({ question }) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <>
      <div className="questionGen text-teal-500 p-4 w-11/12 flex flex-col">
        <div>
          <h1 className="text-4xl">Question</h1>
          <p className="text-black m-4 ml-0">{question}</p>

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
              className="border-b-2 border-black w-11/12 outline-0 focus:border-teal-500"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </div>
        <button className="bg-teal-500 rounded text-white text-xs border-solid mt-10 p-3 rounded-1 w-1/12">
          SUBMIT ANSWER
        </button>
      </div>
    </>
  );
}