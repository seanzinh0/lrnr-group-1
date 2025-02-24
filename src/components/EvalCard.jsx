import React from "react";

// use the prop to pass into api and generate the eval
export default function Eval({question, answer}) {
  return (
    <div className="evalGen text-teal-500 p-4 flex flex-col w-11/12">
      <div className="flex justify-between">
        <div>
          <h2 className="text-4xl mb-4 mr-40">Verners Evaluation</h2>
          <h2 className="text-2xs mb-4 text-black ">Correct Answer</h2>
        </div>
        <p className="text-black w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis
          rerum cupiditate quaerat autem id delectus pariatur qui modi sed nihil
          numquam aspernatur vel animi esse obcaecati, amet asperiores eius?
          Nulla praesentium temporibus voluptas, consequuntur assumenda libero
          distinctio unde, laboriosam quisquam quas ut rem dolores eligendi
          ratione voluptatibus quos ipsa!
        </p>
      </div>
      <button className="bg-teal-500 rounded text-white text-xs border-solid w-24 p-3 rounded-1">
        NEXT
      </button>
    </div>
  );
}
