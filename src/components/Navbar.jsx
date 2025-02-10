import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/*basic navbar feel free to mess with it*/}
            <navbar className='h-32 w-full bg-blue-600 flex justify-center items-center'>
                <ul className='flex w-11/12 justify-between'>
                    <Link to="/">
                        <li className='hover:underline list-none text-white'>Home</li>
                    </Link>
                    <Link to="/account">
                        <li className='hover:underline list-none text-white'>Account</li>
                    </Link>
                    <Link to="/quizgenerator">
                        <li className='hover:underline list-none text-white'>Quiz Generator</li>
                    </Link>
                    <Link to="/quiz">
                        <li className='hover:underline list-none text-white'>Quiz</li>
                    </Link>
                    <Link to="/results">
                        <li className='hover:underline list-none text-white'>Results</li>
                    </Link>
                </ul>
            </navbar>
        </>
    )
}

export default Navbar;