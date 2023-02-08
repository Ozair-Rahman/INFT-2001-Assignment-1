// Imports
import NavBar from "../Navbar Component/NavBar";
import Footer from '../Footer Component/Footer';
import './Styles/OptionOneStyles.css';
import { useEffect } from "react";

const OptionTwo = () => {

    document.title = 'Crave Option 2 - Half Dozen'; // Change Title When On Page

    // Scroll to Top
    useEffect(() => {
        window.scrollTo(0,0);
    });

    return ( 
        <>
        <NavBar /> {/* Navbar */}
        <div className="optionOneContainer"> {/* optionOneContainer */}

            {/* productImage */}
            <img 
            className='productImage'
            src="https://cdn.shopify.com/s/files/1/0273/3142/8435/products/image_229a3f7c-3a28-4c57-951e-c56761c9b751_900x.jpg?v=1673362302"
            alt="Product Two" 
            />

            {/* productOneInfo */}
            <div className="productOneInfo">

                {/* Product Tite */}
                <header className='optionOneTitle'>Crave Option 2 - Half Dozen</header>

                {/* Product Price */}
                <h1 className='optionOnePrice'>$24.99</h1>

                {/* Product Content */}
                <p className='optionOneContentListTitle'>Each Box Includes: </p>
                <ul>
                    <li>Birthday Cake</li>
                    <li>Guava Passionfruit Cheesecake</li>
                    <li>Maple Bacon</li>
                    <li>Vanilla Sprinkle</li>
                    <li>Carrot Cake Fritter (contains pecans)</li>
                    <li>Churro Cruller</li>
                </ul>

                {/* Product Allergy Warning */}
                <p className='optionOneWarningTitle'>* This Box contains Nuts (pecans)</p>
                <br/>
                <p className='optionOneWarning'>
                    We cater to allergies! If you have an allergy and would like this box,
                    please state so in checkout or email us with your order # in the 
                    subject line at info@cravedoughnuts.com. We will replace the doughnut 
                    with another alternative of our choice. Unfortunately, we cannot 
                    guarantee no cross contamination! 
                </p>
            </div> {/* productTwoInfo */}
        </div> {/* optionTwoContainer */}
        <Footer /> {/* Footer */}
        </>
     );
}
 
export default OptionTwo;