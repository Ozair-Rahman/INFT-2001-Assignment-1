import NavBar from "./Navbar Component/NavBar";

const AboutComponent = () => {

    document.title = 'About Us - Crave Doughnuts';

    return ( 
        <div id="about" className="AboutComponentContent">
            <NavBar />
            <header>About Component</header>
        </div>
     );
}
 
export default AboutComponent;