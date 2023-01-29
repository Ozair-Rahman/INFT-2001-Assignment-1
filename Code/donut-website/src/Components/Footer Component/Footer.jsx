import { Link } from 'react-router-dom'
 
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
            <a href='https://www.instagram.com/crave.doughnuts/'>Instagram</a>
            <a href='https://www.facebook.com/cravedoughnuts'>Facebook</a>
      </footer>
        </>
     );
}
 
export default Footer;