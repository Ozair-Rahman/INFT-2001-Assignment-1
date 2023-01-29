import Footer from "../Footer Component/Footer";
import NavBar from "../Navbar Component/NavBar";
import './Home.css'

const HomeComponent = () => {

  document.title = 'Crave Doughnuts';

  return (
    <>
      <NavBar />
      <div className="homeComponentInfo">
        <h1>Crave Doughnuts</h1>
        <h2>Handmade with Love</h2>
      </div> {/* homeComponentInfo */}
      <div className="aboutProduct">
        <div className="localIngredientsSection">
          <h1 className="veganTitle">Local Ingredients</h1>
          <img src="//cdn.shopify.com/s/files/1/0273/3142/8435/files/PBJ_4_180x.jpg?v=1614354953 180w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/PBJ_4_360x.jpg?v=1614354953 360w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/PBJ_4_540x.jpg?v=1614354953 540w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/PBJ_4_720x.jpg?v=1614354953 720w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/PBJ_4_900x.jpg?v=1614354953 900w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/PBJ_4_1080x.jpg?v=1614354953 1080w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/PBJ_4_1296x.jpg?v=1614354953 1296w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/PBJ_4_1512x.jpg?v=1614354953 1512w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/PBJ_4_1728x.jpg?v=1614354953 1728w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/PBJ_4_2048x.jpg?v=1614354953 2048w" alt="Local Ingredients" />
          <p className="description">Crave was created from a love for doughnuts. Handmade from scratch using fresh and locally sourced, high quality ingredients, all of our doughnuts are made in-house daily.</p>
        </div> {/* localIngredientsSection */}
        <div className="veganSection">
          <h1 className="veganTitle">Vegan</h1>
          <img src="//cdn.shopify.com/s/files/1/0273/3142/8435/files/Vegan_Raspberry_3_180x.jpg?v=1614354953 180w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Vegan_Raspberry_3_360x.jpg?v=1614354953 360w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Vegan_Raspberry_3_540x.jpg?v=1614354953 540w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Vegan_Raspberry_3_720x.jpg?v=1614354953 720w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Vegan_Raspberry_3_900x.jpg?v=1614354953 900w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Vegan_Raspberry_3_1080x.jpg?v=1614354953 1080w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Vegan_Raspberry_3_1296x.jpg?v=1614354953 1296w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Vegan_Raspberry_3_1512x.jpg?v=1614354953 1512w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Vegan_Raspberry_3_1728x.jpg?v=1614354953 1728w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Vegan_Raspberry_3_2048x.jpg?v=1614354953 2048w" alt="Vegan" />
          <p className="description">We are proud to offer dairy free doughnuts to all of our vegan customers and they are just as tasty and delicious as our other doughnuts. You won't even be able to taste the difference.</p>
        </div> {/* veganSection */}
        <div className="flavorSection">
          <h1 className="veganTitle">Flavour Innovations</h1>
          <img src="//cdn.shopify.com/s/files/1/0273/3142/8435/files/Orange_Doughnut_180x.jpg?v=1614354953 180w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Orange_Doughnut_360x.jpg?v=1614354953 360w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Orange_Doughnut_540x.jpg?v=1614354953 540w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Orange_Doughnut_720x.jpg?v=1614354953 720w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Orange_Doughnut_900x.jpg?v=1614354953 900w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Orange_Doughnut_1080x.jpg?v=1614354953 1080w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Orange_Doughnut_1296x.jpg?v=1614354953 1296w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Orange_Doughnut_1512x.jpg?v=1614354953 1512w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Orange_Doughnut_1728x.jpg?v=1614354953 1728w, //cdn.shopify.com/s/files/1/0273/3142/8435/files/Orange_Doughnut_2048x.jpg?v=1614354953 2048w" alt="Flavor" />
          <p className="description">We love creating delicious doughnuts with exciting new flavours and fresh seasonal ingredients. We are constantly updating our menu, follow us on Instagram and Facebook.</p>
        </div> {/* flavorSection */}
      </div> {/* aboutProduct */}
      <div className="testimonialHeader">
        <header>Testimonials</header>
      </div> {/* testimonialHeader */}
      <div className="testimonials">
        <div className="testimonialOne">
          <p className="quote">Just tried my first doughnut from Crave Doughnuts and WOW! These are hands down the best I have ever had. They are so fresh! The flavours they offer are unique and unbelievably tasty!</p>
          <p className="authorQuote"> - S. Carter</p>
        </div> {/* testimonialOne */}
        <div className="testimonialTwo">
          <p className="quote">Saw a gigantic line up and was hesitant to wait... I'm glad I did. Upon the first bite of my coconut brownie donut the serotonin receptors in my brain lit up like a Christmas tree. I mean I've never had a donut so divine my mind was blown to smithereens. I can't wait till I return and try all the flavors and hopefully not be a diabetic by the end of my mission.</p>
          <p className="authorQuote"> - M. Tower</p>
        </div> {/* testimonialTwo */}
        <div className="testimonialThree">
          <p className="quote">These doughnuts are top notch and have some of the nicest employees you will ever meet. You pay for what you get which is the BEST DOUGHNUTS. Support local small businesses! You are killing it Crave! </p>
          <p className="authorQuote"> - J. Giorgi</p>
        </div> {/* testimonialThree */}
      </div> {/* testimonials */}
      <div className="operationHours">
        <h1 className="locationHeading">Location</h1>
        <p className="locationSubHeading">102 Lupin Drive Whitby, Ontario</p>
        <h1 className="hoHeading">Hours of Operation</h1>
        <h2 className="daysHeading">Wednesday - Sunday </h2>
        <p className="hoursHeading">8-5 PM OR SOLD OUT!</p>
        <p className="hoursHeading">8-9 AM PREORDER PICKUP ONLY</p>
        <h2>WALK INS:</h2>
        <p className="walkinSubHeading">9-5 PM OR UNTIL SOLD OUT!</p>
      </div> {/* operationHours */}
      <Footer />
    </> 
  );
};

export default HomeComponent;
