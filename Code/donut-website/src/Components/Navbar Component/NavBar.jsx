// Imports
import { Link } from "react-router-dom"; // Import Link from react-router So We Can Link Routes 
import './navbar.css'; // Import CSS

const NavBar = () => {
  return (
    <>
    {/* navbar */}
    <nav> 
      {/* Link to Homepage When Logo is Clicked */}
      <Link to='/'>
        <img 
        src="https://cdn.shopify.com/s/files/1/0273/3142/8435/files/CRAVE_wordmark_curve_180x.png?v=1614354953" 
        alt="Home Logo"
        className="returnHomeViaLogo"
        />
      </Link>
      {/* navbarLink Div */}
      <div className="navbarLinks">
        {/* Redirect to Home Component */}
          {/* Redirect to Home Component */}
          <Link to="/" className="Links">
            <p>Home</p>
          </Link>

          {/* Redirect to About Component */}
          <Link to="/about" className="Links">
            <p>About</p>
          </Link>

          {/* Redirect to Product Component */}
          <Link to="/product" className="Links">
            <p>Product</p>
          </Link>

          {/* Redirect to Contact Component */}
          <Link to="/contact" className="Links">
            <p>Contact</p>
          </Link>
      </div>  {/* navbarLinks */}
      </nav>  {/* navbar */}
    </>
  );
};


export default NavBar;
