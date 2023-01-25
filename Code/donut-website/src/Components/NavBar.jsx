const NavBar = () => {
  return (
    <div className="NavBar">
      <header>NavBar Component</header>
      <nav>
        <h1 class="logo">
          <img src="https://cdn.shopify.com/s/files/1/0273/3142/8435/files/CRAVE_wordmark_curve_180x.png?v=1614354953" />
        </h1>
        <div class="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
