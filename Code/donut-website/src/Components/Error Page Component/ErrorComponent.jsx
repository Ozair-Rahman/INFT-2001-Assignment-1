import { Link } from 'react-router-dom';
import Footer from '../Footer Component/Footer';
import NavBar from '../Navbar Component/NavBar';
import './ErrorComponent.css';

const ErrorComponent = () => {

    document.title = 'Error 404 No Page Found - Crave Doughnuts';

    return ( 
        <>
            <NavBar />
            <div className="erroMsg">
                <h1 className='errorHeading'>Error 404 - No Page Found</h1>
                <p className='errorSubHeading'>The page you requested does not exist.</p>
                <Link to='/' className='homeLink'>
                    <p className='homeLinkText'>Continue Shopping</p>
                </Link>
            </div>
            <Footer />
        </>
     );
}
 
export default ErrorComponent;