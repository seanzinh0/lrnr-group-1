import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Account from "./pages/Account.jsx";
import QuizGenerator from "./pages/QuizGenerator.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Quiz from "./pages/Quiz.jsx";
import Results from "./pages/Results.jsx"


function App() {
    // Setup react router and use layout to put header and footer amongst all pages
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/account' element={<Account/>}/>
                        <Route path='/quizgenerator' element={<QuizGenerator/>}/>
                        <Route path='/quiz' element={<Quiz/>}/>
                        <Route path='/results' element={<Results/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
