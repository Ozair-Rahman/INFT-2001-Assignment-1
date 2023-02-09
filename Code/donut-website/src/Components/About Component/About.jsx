// Imports
import NavBar from "../Navbar Component/NavBar";
import Footer from "../Footer Component/Footer";
import './About.css';
import { useEffect } from "react";

const AboutComponent = () => {

    document.title = 'About Us - Crave Doughnuts'; // Change Title Whenb On About Page

    // Scroll to Top Upon Every Render of the Page
    useEffect(() => {
        window.scrollTo(0,0)
    })

    return ( 
        <>
        <NavBar /> {/* NavBar */}
        <div className="ourStory">
            <header className="ourStoryHeader">Our Story</header> {/* ourStoryHeader */}

            {/* Founder Section */}
            <img  
            className="founderImage" 
            src="https://cdn.shopify.com/s/files/1/0273/3142/8435/files/Nicole_Jeremy.png?v=1598193635" 
            alt="" />
            <h1 className="heading">Crave was created from a serious love for doughnuts.</h1>
            <p className="subHeading">Nicole and Jeremy started Crave in November 2017. We both love doughnuts and would never miss out on an opportunity to eat one! We decided to travel West across Canada eating all kinds of doughnuts along the way. After gaining experience, we decided to move back home to start our own business in our hometown. When you buy our doughnuts, you are supporting our local business!</p>
            
            {/* Handmade from Scratch Section*/}
            <img 
            className="otherImage" 
            src="https://cdn.shopify.com/s/files/1/0273/3142/8435/files/sprinkle_heart_480x480_742b5b66-d117-4b76-8680-343d0f92a7c6.png?v=1598195162" 
            alt="" />
            <h1 className="heading">Handmade from scratch using locally sourced,
            quality ingredients.</h1>
            <p className="subHeading">Our signature brioche dough makes for a light, fluffy and slightly sweet doughnut that we hope you enjoy just as much as we do. We offer fritters, old fashioned’s and crullers in our daily line up too! We love making all of our glazes, custard, creams in house, and we believe you can taste the difference! We also have a selection of vegan (dairy-free) cake and yeast-risen varieties at our shop.</p>
            
            {/* Seasonal Menu Section*/}
            <img 
            className="otherImage" 
            src="https://cdn.shopify.com/s/files/1/0273/3142/8435/files/blueberry.png?v=1598193887" 
            alt="" />
            <h1 className="heading" >Seasonal Menu</h1>
            <p className="subHeading">We like to keep it fun in our shop with an ever changing seasonal menu. We offer our Crave staples all year round like our Crème Brûlée and Honey Crullers. We are happy to offer dairy free doughnuts to all of our vegan customers too! We cannot guarantee an allergy free environment due to the use of milk, eggs, tree nuts, peanuts, gluten, in our kitchen.</p>
        </div> {/* ourStory */}
        <Footer /> {/* Footer */}
        </>
     );
}
 
export default AboutComponent;