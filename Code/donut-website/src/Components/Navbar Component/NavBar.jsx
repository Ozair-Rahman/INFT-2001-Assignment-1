// Imports
import { Link } from "react-router-dom"; // Import Link So We Can Link Routes 
import './navbar.css'; // Import CSS

const NavBar = () => {
  return (
    <>
    <nav>
      <Link to='/'>
        <img 
        src="https://cdn.shopify.com/s/files/1/0273/3142/8435/files/CRAVE_wordmark_curve_180x.png?v=1614354953" 
        alt="Home Logo"
        />
      </Link>
      <div className="navbarLinks">
        <Link to="/" className="HomeLink">
          <label>Home</label>
        </Link>
        <Link to="/about" className="AboutLink">
          <label>About</label>
        </Link>
        <Link to="/product" className="ProductLink">
          <label>Product</label>
        </Link>
        <Link to="/contact" className="ContactLink">
          <label>Contact US!</label>
        </Link>
      </div>  
    </nav>
    </>
  );
};

export default NavBar;
