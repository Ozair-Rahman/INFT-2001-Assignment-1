// Imports
import { Link } from 'react-router-dom' // Import Links from react-router to redirect pages
import SocialComponent from '../Social Media Component/SocialComponent';
import './Footer.css' // Import CSS
 
const Footer = () => {

    return ( 
        <>
        <footer>
            <header className="footerQuickLinks">Quick Links</header>

            {/* Redirect to About Component */}
            <Link to='/about' className="footerLink">
            <p>About Us</p>
            </Link>

            {/* Redirect to Product Component */}
            <Link to='/product' className="footerLink">
            <p>Products</p>
            </Link>

            {/* Redirect to FAQ Component */}
            <Link to='/faq' className="footerLink">
            <p>FAQ</p>
            </Link>

            <h1>Have Any Questions? Contact Us by Email</h1>
            <p className="footerLink">info@cravedoughnuts.com</p>

            {/* Social Media Links */}
            <SocialComponent />
        </footer>
        </>
     );
}
 
export default Footer;