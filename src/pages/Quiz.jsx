import "../App.css";
import React, { useState, useEffect } from "react";
import Questions from "../components/QuestionCard.jsx";
import Eval from "../components/EvalCard.jsx";

const Quiz = () => {
  return (
    <>
      <h1 className="text-teal-500 text-4xl text-center mt-5">1 of 5</h1>
      <Questions />
      <button className="bg-teal-500 text-white text-xs border-solid  ml-8 p-3 rounded-1">
        SUBMIT ANSWER
      </button>
      <Eval />
      <button className="bg-teal-500 text-white text-xs border-solid mb-8 ml-8 p-3 rounded-1">
        NEXT
      </button>
    </>
  );
};

export default Quiz;
