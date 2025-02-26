import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/*basic navbar feel free to mess with it*/}
            <navbar className='h-32 w-full bg-blue-600 flex justify-center items-center'>
                <ul className='flex w-11/12 justify-between'>
                    <Link to="/">
                        <li className='list-none text-white text-5xl'>lrnr</li>
                    </Link>
                    <div className='flex gap-4 md:gap-10 items-center'>
                    <Link to="/account">
                        <li className='hover:underline list-none text-white'>Account</li>
                    </Link>
                    <Link to="/quizgenerator">
                        <li className='hover:underline list-none text-white'>Quiz Generator</li>
                    </Link>
                    </div>
                </ul>
            </navbar>
        </>
    )
}

export default Navbar;