// Imports
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router to redirect pages
import Footer from '../Footer Component/Footer';
import NavBar from '../Navbar Component/NavBar';
import './ErrorComponent.css';

const ErrorComponent = () => {

    document.title = '404 Not Found - Crave Doughnuts'; // Change Title When On Error Page

    // Go to Top of Page upon Render
    useEffect(() => {
        window.scrollTo(0,0);
    })
    
    return ( 
        <>
        <NavBar /> {/* navBar */}

        {/* errorMsg Div */}
        <div className="erroMsg">
            <h1 className='errorHeading'>404 Page Not Found</h1>
            <p className='errorSubHeading'>The page you requested does not exist.</p>

            {/* Redirect to Homepage */}
            <Link to='/' className='homeLink'>
                <p>Continue Shopping</p>
            </Link>
        </div>
        <Footer /> {/* Footer */}
        </>
     );
}
 
export default ErrorComponent;