import NavBar from "./Navbar Component/NavBar";

const HomeComponent = () => {

  document.title = 'Crave Doughnuts';

  return (
    <div id="home" className="HomeComponentContent">
      <NavBar />
      <div>
        <h2>Welcome!</h2>
        <h1>Crave Doughnuts</h1>
        <h2>Handmade with Love</h2>
      </div>
    </div>
  );
};

export default HomeComponent;
