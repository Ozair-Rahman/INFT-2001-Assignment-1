// Imports
import './Styles/OptionOneStyles.css';
import NavBar from "../Navbar Component/NavBar";
import Footer from '../Footer Component/Footer';
import { useEffect } from 'react';

const OptionOneComponent = () => {

    document.title = 'Crave Option 1 - Half Dozen'; // Change Title When On Page

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return (
        <>
        <NavBar /> {/* NavBar */}
        <div className="optionOneContainer"> {/* optionOneContainer */}

            {/* productImage */}
            <img 
            className="productImage"
            src="https://cdn.shopify.com/s/files/1/0273/3142/8435/products/image_790cdd7f-bbc4-48bf-aa14-0db95f08b62c_1512x.jpg?v=1673362330" 
            alt="Product One"  
            />

            {/* productOneInfo */}
            <div className="productOneInfo">

                {/* Product Tite */}
                <header className='optionOneTitle'>Crave Option 1 - Half Dozen</header>

                {/* Product Price */}
                <h1 className='optionOnePrice'>$24.00</h1>

                {/* Product Content */}
                <p className='optionOneContentListTitle'>Each Box Includes: </p>
                <ul>
                    <li>Birthday Cake</li>
                    <li>Lemon Meringue</li>
                    <li>French Toast</li>
                    <li>Vanilla Sprinkle</li>
                    <li>Cosmic Brownie</li>
                    <li>Honey Vanilla Cruller</li>
                </ul>
                <br/>
                {/* Product Allergy Warning */}
                <p className='optionOneWarningTitle'>*Please Note: This box is nut free!</p>
                <br/>
                <p className='optionOneWarning'>
                    We cater to allergies! If you have an allergy and would like this box,
                    please state so in checkout or email us with your order # in the 
                    subject line at info@cravedoughnuts.com. We will replace the doughnut 
                    with another alternative of our choice. Unfortunately, we cannot 
                    guarantee no cross contamination! 
                </p>
                
            </div>{/* productOneInfo */}

        </div> {/* optionOneContainer */}
        <Footer /> {/* Footer */}
        </>
     );
}
 
export default OptionOneComponent;