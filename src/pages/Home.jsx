import '../App.css'
import MediumNavigationButton from "../components/MediumNavigationButton.jsx";

const Home = () => {
    return (
        <>
            <div className='flex justify-center mt-14'>
            <img src='/img/lrnr-logo.png' alt='logo' className='h-64 w-auto' />
            </div>
            <p className='text-center text-3xl font-thin mt-4 mb-14'>Your guided path to programming enlightenment</p>
            <div className='flex justify-center'>
            <MediumNavigationButton name={'BEGIN JOURNEY'} routeName={'quizgenerator'}/>
            </div>
        </>
    )
}

export default Home