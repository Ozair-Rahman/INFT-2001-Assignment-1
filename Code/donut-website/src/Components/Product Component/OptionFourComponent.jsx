import './Styles/OptionFourStyles.css';
import NavBar from "../Navbar Component/NavBar";
import Footer from '../Footer Component/Footer';

const OptionFourComponent = () => {

    document.title = 'Crave Option 4 - One Dozen Assorted';

    return ( 
        <div className="optionFourContent">
            <NavBar />
            <div className="optionFourContainer">
                <img 
                className="productFourImage"
                src="https://cdn.shopify.com/s/files/1/0273/3142/8435/products/image_900x.jpg?v=1673362260" 
                alt="Product Four" 
                />
                <div className="productFourInfo">
                    <header className='optionFourTitle'>Crave Option 4 - One Dozen Assorted</header>
                    <h1 className='optionFourPrice'>$44.00</h1>
                    <h2 className='optionFourContentListTitle'>Each Box Includes:</h2>
                    <ul className="contentList">
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
                    <p className='optionFourWarning'>* This Box contains Nuts (pecans)</p>
                    <p>
                        We cater to allergies! If you have an allergy and would like this box,
                        please state so in checkout or email us with your order # in the 
                        subject line at info@cravedoughnuts.com. We will replace the doughnut 
                        with another alternative of our choice. Unfortunately, we cannot 
                        guarantee no cross contamination! 
                    </p>
                </div> {/* productFourInfo */}
            </div> {/* optionFourContainer */}
            <Footer />
        </div> // optionFourContent
     );
}
 
export default OptionFourComponent;