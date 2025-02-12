import React from "react";

export default function Questions({ question }) {
  return (
    <>
      <div className="questionGen text-teal-500 p-4 m-4">
        <h1 className="text-2xl">Question</h1>
        <p className="text-black m-4 ml-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, eius.
        </p>

        <h2>Your Answer</h2>
        <input type="text" placeholder="answer" />
      </div>
    </>
  );
}
