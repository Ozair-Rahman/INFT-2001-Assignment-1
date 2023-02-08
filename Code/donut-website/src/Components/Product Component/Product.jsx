// Imports
import './Styles/Product.css'; // CSS
import { Link } from 'react-router-dom'; // Import Link to Navigate Between Pages
import NavBar from '../Navbar Component/NavBar'; // NavBar
import Footer from '../Footer Component/Footer'; // Footer
import { useEffect } from 'react';

const ProductComponent = () => {

    document.title = 'Doughnuts - Crave Doughnuts'; // Change Title When On Product Page

    const optionOneThreePrice = '$24.00'; // Defined Price as Var As to Not Repeat Code
    
    // Scroll To Top Upon Render
    useEffect(() => {
        window.scrollTo(0,0);
    });

    return ( 
        <div className="ProductComponentContent">
            <NavBar /> {/* NavBar */}

            {/* Option 1 Section */}
            <div className="optionContainer">
                <Link to="/productOne" className='productLink'> {/* Link to ProductOne Component */}
                    <div className="optionOneOption">
                        <h1>
                            Option 1: Half Dozen Donuts - 
                            Flavors:
                            Birthday Cake <br />
                            Lemon Meringue<br />
                            French Toast <br />
                            Lemon Sprinkle<br />
                            Cosmic Brownie<br />
                            Honey Vanilla Cruller
                        </h1>
                    </div>
                    <h2 className="optionTwoPriceTitle">Crave Option 1 - Half Dozen</h2>
                    <h3 className="optionTwoPrice">{optionOneThreePrice}</h3>
                </Link>
            </div>

            {/* Option 2 Section */}
            <div className="optionContainer">
            <Link to="/productTwo" className='productLink'> {/* Link to productTwo Component */}
                <div className="optionOneOption">
                    <h1>
                        Option 2: Half Dozen Donuts
                        Flavors: 
                        Birthday Cake<br />
                        Guava Passionfruit Cheesecake<br />
                        Maple Bacon<br />
                        Vanilla Sprinkle<br />
                        Carrot Cake Fritter<br />
                        Churro Cruller <br />
                    </h1>
                </div>
                <h2 className="optionTwoPriceTitle">
                    Crave Option 2 - Half Dozen
                </h2>
                <h3 className="optionTwoPrice">{optionOneThreePrice}</h3>
            </Link>
            </div>

            {/* Option 3 Section */}
            <div className="optionContainer">
            <Link to="/productThree" className='productLink'> {/* Link to productThree Component */}
                <div className="optionOneOption">
                    <h1>
                        Option 3: Vegan Half Dozen Donuts
                        Flavors: 
                        2x Oatmeal Cream Pie<br />
                        2x Biscoff Cookie Butter<br />
                        2x Chocolate PB + J<br />
                    </h1>
                </div>
                <h2 className="optionThreePriceTitle">
                    Crave Option 3 - Half Dozen
                </h2>
                <h3 className="optionThreePrice">{optionOneThreePrice}</h3>
            </Link>
            </div>

            {/* Option 4 Section */}
            <div className="optionContainer">
                <Link to="/productFour" className='productLink'> {/* Link to productFour Component */}
                    <div className="optionOneOption">
                        <h1>
                            Option 4: One Dozen Donuts
                            Flavors: 
                            Birthday Cake<br />
                            Lemon Meringue<br />
                            Cosmic Brownie<br />
                            French Toast<br />
                            Maple Bacon<br />
                            Churro Cruller<br />
                            Carrot Cake Fritter <br />
                            Honey Vanilla Cruller<br />
                            Chocolate PB + J<br />
                            Oatmeal Cream Pie<br />
                            Biscoff Cookie Butter<br />
                            Guava Passionfruit Cheesecake
                        </h1>
                    </div>
                    <h2 className="optionFourPriceTitle">
                        Crave Option 4 - One Dozen
                    </h2>
                    <h3 className="optionFourPrice">44.00</h3>
                </Link>
            </div> {/* optionOneContainer */}

            <Footer /> {/* Footer */}
        </div> // ProductComponentContent
     );
}
 
export default ProductComponent;