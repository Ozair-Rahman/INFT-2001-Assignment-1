import { Link } from 'react-router-dom'
import './Footer.css'
 
const Footer = () => {
    return ( 
        <>
            <footer className="homepageFooter">
                <h1 className="footerQuickLinks">Quick Links</h1>
                <Link to='/about' className="aboutLink">
                <h2 className="aboutUsLink">About Us</h2>
                </Link>
                <Link to='/product' className="productLink">
                <h2 className="productsLink">Products</h2>
                </Link>
                <Link to='/faq' className="faqLink">
                <h2 className="FaqLink">FAQ</h2>
                </Link>
                <h1>Have Any Questions? Contact Us by Email</h1>
                <p className="eMail">info@cravedoughnuts.com</p>
                <div className="socialLogo">
                    <a href='https://www.instagram.com/crave.doughnuts/'><img src="https://img.icons8.com/ios-glyphs/30/null/instagram-new.png" alt="Instagram Logo" /></a>
                    <a href='https://www.facebook.com/cravedoughnuts'><img src="https://img.icons8.com/ios-glyphs/30/null/facebook-new.png" alt="Facebook Logo" /></a>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;