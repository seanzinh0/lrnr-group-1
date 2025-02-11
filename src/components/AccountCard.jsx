import { Flame, Menu, UserRound } from 'lucide-react';

const AccountCard = ()=>{
    return (
        <div className='flex justify-center'>
            <div className="flex justify-evenly mt-20 mb-72 w-8/12">
                {/* Streak  */}
                <div className="flex flex-col items-center w-56  ">
                    <Flame className="text-green-500 w-10 h-10" />
                    <h2 className="text-xl font-medium mt-8">Streak</h2>
                    <br />
                    <p className="text-gray-600">You have a streak of 5 days!</p>
                </div>

                {/* Platinum Quizzes */}
                <div className="flex flex-col items-center w-56">
                    <Menu className="text-green-500 w-10 h-10" />
                    <h2 className="text-xl font-medium mt-8">Platinum Quizzes</h2>
                    <br />
                    <p className="text-gray-600">Golang - Intermediate</p>
                    <p className="text-gray-600">JavaScript - Beginner</p>
                    <p className="text-gray-600">AWS - Beginner</p>
                </div>

                {/* Level  */}
                <div className="flex flex-col items-center w-56">
                    <UserRound className="text-green-500 w-10 h-10" />
                    <h2 className="text-xl font-medium mt-8">Lrnr Level: 2</h2>
                    <br />
                    <p className="text-gray-600">150/200 XP</p>
                </div>
            </div>
            </div>
    )
};

export default AccountCard;


