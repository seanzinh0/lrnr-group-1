import {Link} from 'react-router-dom';

// component that navigates to other pages and allow users to customize paths and name
const PageNavigationButton = ({name, routeName}) => {
    return (
        <>
            <Link to={`/${routeName}`}>
            <button className='bg-teal-500 text-white p-4 rounded hover:bg-teal-700 md:text-lg'>{name}</button>
            </Link>
        </>
    )
}
export default PageNavigationButton;