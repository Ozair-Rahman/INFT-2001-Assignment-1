import { Link } from "react-router-dom";
import './navbar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        <Link to='/'>
          <img className="logo"
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
    </div>
  );
};

export default NavBar;
