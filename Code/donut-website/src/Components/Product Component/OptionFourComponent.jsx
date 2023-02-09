// Imports
import './Styles/OptionOneStyles.css';
import NavBar from "../Navbar Component/NavBar";
import Footer from '../Footer Component/Footer';
import { useEffect } from 'react';

const OptionFourComponent = () => {

    document.title = 'Crave Option 4 - One Dozen Assorted'; // Change Title When On Page

    // Scroll to Top
    useEffect(() => window.scrollTo(0,0));

    return (
        <>
        <NavBar /> {/* NavBar */}
        <div className="optionOneContainer"> {/* optionOneContainer */}

            {/* productImage */}
            <img 
            className="productImage"
            src="https://cdn.shopify.com/s/files/1/0273/3142/8435/products/image_900x.jpg?v=1673362260" 
            alt="Product Four" 
            />

            {/* productOneInfo */}
            <div className="productOneInfo">

                {/* Product Tite */}
                <header className='optionOneTitle'>Crave Option 4 - One Dozen Assorted</header>

                {/* Product Price */}
                <h1 className='optionOnePrice'>$44.00</h1>

                {/* Product Content */}
                <p className='optionOneContentListTitle'>Each Box Includes:</p>
                <ul>
                    <li>Birthday Cake</li>
                    <li>Lemon Meringue</li>
                    <li>Cosmic Brownie</li>
                    <li>French Toast</li>
                    <li>Maple Bacon</li>
                    <li>Honey Vanilla Cruller</li>
                    <li>Churro Cruller</li>
                    <li>Carrot Cake Fritter (contains pecans)</li>
                    <li>Guava Passionfruit Cheesecake</li>
                    <li>Chocolate Pb+J (contains peanuts)</li>
                    <li>Oatmeal Cream Pie (v)</li>
                    <li>Biscoff Cookie Butter (v)</li>
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
            </div> {/* productFourInfo */}
        </div> {/* optionFourContainer */}
        <Footer />
        </>
     );
}
 
export default OptionFourComponent;