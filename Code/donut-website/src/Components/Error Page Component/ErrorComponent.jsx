import Footer from '../Footer Component/Footer';
import NavBar from '../Navbar Component/NavBar';
import './ErrorComponent.css';

const ErrorComponent = () => {

    document.title = 'Error 404 No Page Found - Crave Doughnuts';

    return ( 
        <>
            <NavBar />
            <h1>Error 404 - No Page Found</h1>
            <Footer />
        </>
     );
}
 
export default ErrorComponent;