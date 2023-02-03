import { Link } from "react-router-dom";
import './navbar.css';

const NavBar = () => {
  return (
  <section class="top-nav">
    <div>
      <img src="https://cdn.shopify.com/s/files/1/0273/3142/8435/files/CRAVE_wordmark_curve_180x.png?v=1614354953" alt="Crave" />
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
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
    </ul>
  </section>
  );
};

export default NavBar;
