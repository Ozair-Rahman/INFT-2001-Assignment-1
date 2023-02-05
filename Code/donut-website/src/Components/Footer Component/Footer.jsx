// Imports
import { Link } from 'react-router-dom' // Import Links from react-router to redirect pages
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
            <p>info@cravedoughnuts.com</p>

            {/* Social Media Links */}
            <div className="socialLogo">
                {/* Instagram Link */}
                <a className='socialLink' href='https://www.instagram.com/crave.doughnuts/'><img src="https://img.icons8.com/ios-glyphs/30/null/instagram-new.png" alt="Instagram Link" /></a>

                {/* Facebook Link */}
                <a className='socialLink' href='https://www.facebook.com/cravedoughnuts'><img src="https://img.icons8.com/ios-glyphs/30/null/facebook-new.png" alt="Facebook Link" /></a>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;