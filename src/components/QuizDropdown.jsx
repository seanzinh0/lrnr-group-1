

const QuizDropdown = (props) => {

    const selectOptions = props.data.map(option => (
        <option className="text-gray-900 p-3" key={option} value={option}>

            {option}

        </option>
    ))

    return (
        <>
            <select class="w-10/12 p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent">
                <option></option>
                {selectOptions}
            </select>
        </>
    ) 
}

export default QuizDropdown;