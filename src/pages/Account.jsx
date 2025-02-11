import '../App.css'
import {Flame, Menu, UserRound} from 'lucide-react';

const Account = () => {
    return (
        <>
            <h1>Account Page</h1>
            <Flame  />
            <h1>Streak</h1>
            <p>You have a streak of 5 days!</p>
            <Menu />
            <h1>platinum quizess</h1>
            <p>golan - intermediate</p>
            <p>Javascript - beginner</p>
            <p>AWS - beginner</p>
            <UserRound />
            <h1>lrnr Level:2</h1>
            <p>150/200 xp</p>
        </>
    )
}

export default Account