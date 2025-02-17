import '../App.css'
import QuizDropdown from '../components/QuizDropdown'


//Uses the arrays as props to create dropdown options
const QuizGenerator = () => {
  const topics = ["Goland", "AWS", "Javascript", "CI/CD"];

  const difficulty = ["Novice", "Intermediate", "Expert"];

  const questionAmount = [5, 10, 15];

  const style = [
    "Master Oogway",
    "1940s Gangster",
    "Like I am 8 years old",
    "Jedi",
    "Goku",
  ];

    return (
        <>

            <div className='flex flex-col p-10'>

                <h1 className='text-4xl'>Quiz Generation Options</h1>
                <p className='pt-10'>Please choose your preferences below to generate your personalized quiz.</p>

                <div className='space-y-5'>
                    <h1 className='mt-10 text-gray-500'>Topic</h1>
                    <QuizDropdown data={topics}/>
                    <h1 className='text-gray-500'>Expertise</h1>
                    <QuizDropdown data={difficulty}/>
                    <h1 className='text-gray-500'>Number of Questions</h1>
                    <QuizDropdown data={questionAmount} />
                    <h1 className='text-gray-500'>Style of questions</h1>
                    <QuizDropdown data={style} />
                </div>

                <button className="bg-green-600 text-white px-6 py-2 mt-10 font-semibold hover:bg-green-700 active:bg-green-800 border border-green-700 text-left w-fit">
                     Submit
                </button>

            </div>

        </>
    )
}

export default QuizGenerator;
