import { Zap, Banknote, UserRound } from 'lucide-react';

const HomeCard = ()=>{
    return (
        <div className='flex justify-center'>
            <div className="flex justify-evenly mt-24 mb-44 flex-col md:flex-row items-center gap-4 md:gap-0">
                <div className="flex flex-col items-center w-11/12 md:w-3/12">
                    <Zap className="text-green-500 w-12 h-12" />
                    <h2 className="text-2xl font-medium mt-8">Personalized Quizzes</h2>
                    <p className="text-gray-600 mt-8">Greetings, young padawan. Are you ready to embark on a journey of personalized enlightenment through the art of coding? Our app, can create custom quizzes that align with your coding skills and interests. Whether you are a novice or a master, our system can generate questions that will test your proficiency in programming languages, tools , and concepts.</p>
                </div>
                <div className="flex flex-col items-center w-11/12 md:w-3/12">
                    <Banknote className="text-green-500 w-12 h-12" />
                    <h2 className="text-2xl font-medium mt-8">Rewarding</h2>
                    <p className="text-gray-600 mt-8">Our app is designed to be both challenging and rewarding, so you can learn new concepts while enjoying the process. With our personalized quiz app, you can track your progress, compete with your peers, and discover new areas of expertise. The journey of a thousand lines of code begins with a single keystroke.</p>
                </div>
                <div className="flex flex-col items-center w-11/12 md:w-3/12">
                    <UserRound className="text-green-500 w-12 h-12" />
                    <h2 className="text-2xl font-medium mt-8">Personal SME</h2>
                    <p className="text-gray-600 mt-8">Welcome to the path of knowledge. Our app is like having a personal subject matter expert at your side, guiding you on your journey towards wisdom.</p>
                </div>
            </div>
        </div>
    )
};

export default HomeCard;


