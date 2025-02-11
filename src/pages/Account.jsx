import '../App.css'
import { Flame, Menu, UserRound } from 'lucide-react';

const Account = () => {
    return (
        <div className="w-full max-w-5xl text-center mt-8 mx-auto">
            <h1 className="text-3xl font-semibold text-teal-600">Account</h1>
            <div className="flex justify-around mt-6">
                {/* Streak  */}
                <div className="flex flex-col items-center">
                    <Flame className="text-green-500 w-10 h-10" />
                    <h2 className="text-xl font-medium">Streak</h2>
                    <br />
                    <p className="text-gray-600">You have a streak of 5 days!</p>
                </div>

                {/* Platinum Quizzes */}
                <div className="flex flex-col items-center">
                    <Menu className="text-green-500 w-10 h-10" />
                    <h2 className="text-xl font-medium">Platinum Quizzes</h2>
                    <br />
                    <p className="text-gray-600">Golang - Intermediate</p>
                    <p className="text-gray-600">JavaScript - Beginner</p>
                    <p className="text-gray-600">AWS - Beginner</p>
                </div>

                {/* Level  */}
                <div className="flex flex-col items-center">
                    <UserRound className="text-green-500 w-10 h-10" />
                    <h2 className="text-xl font-medium">Lrnr Level: 2</h2>
                    <br />
                    <p className="text-gray-600">150/200 XP</p>
                </div>
            </div>
        </div>
    )
}

export default Account;
