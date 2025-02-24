import "../App.css";
import React, { useState, useEffect } from "react";
import QuizCard from "../components/QuizCard.jsx";

// take in data as prop
const Quiz = () => {
  //map and manage state for each quiz card
  return (
    <>
      <h1 className="text-teal-500 text-4xl text-center mt-5">1 of 5</h1>
      <QuizCard/>
    </>
  );
};

export default Quiz;
