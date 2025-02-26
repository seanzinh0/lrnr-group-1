import { use, useEffect } from "react";
//creates props that can be passed through to create dropdown options
const QuizDropdown = ({ data, onSelect, selectVal, name}) => {
  //maps each option
  const selectOptions = data.map((option) => (
    <option className="text-gray-900 p-3" key={option} value={option}>
      {option}
    </option>
  ));

  const handleChange = (e) => {
    onSelect(e.target.value, e.target.name);
  };

  return (
    <>
      <select
        className="w-11/12 p-3 border-b-2 border-gray-300 focus:outline-0 focus:border-blue-500 bg-transparent"
        onChange={handleChange} value={selectVal} name={name}
      >
        <option value="">Select an option</option>
        {selectOptions}
      </select>
    </>
  );
};

export default QuizDropdown;
