import "../App.css";
import React, { useState, useEffect } from "react";
import Questions from "../components/QuestionCard.jsx";
import Eval from "../components/EvalCard.jsx";

const Quiz = () => {
  return (
    <>
      <h1 className="text-teal-500 text-4xl text-center mt-5">1 of 5</h1>
      <div className="mb-44 flex justify-center">
        <Questions />
      </div>

      <div className="mb-72 flex justify-center">
        <Eval />
      </div>
    </>
  );
};

export default Quiz;
