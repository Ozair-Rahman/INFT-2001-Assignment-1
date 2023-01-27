import './Styles/OptionTwoStyles.css';
import NavBar from "../Navbar Component/NavBar";

const OptionTwo = () => {
    return ( 
        <div className="optionTwoContent">
            <NavBar />
            <img 
             className='producTwoImage'
             src="https://cdn.shopify.com/s/files/1/0273/3142/8435/products/image_229a3f7c-3a28-4c57-951e-c56761c9b751_900x.jpg?v=1673362302"
             alt="Product Two" 
             />
            <div className="productTwoInfo">
                <header>Crave Option 2 - Half Dozen</header>
                <h1>$24.99</h1>
                <h2>Each Box Includes: </h2>
                <ul className="contentList">
                    <li>Birthday Cake</li>
                    <li>Guava Passionfruit Cheesecake</li>
                    <li>Maple Bacon</li>
                    <li>Vanilla Sprinkle</li>
                    <li>Carrot Cake Fritter (contains pecans)</li>
                    <li>Churro Cruller</li>
                </ul>
                <p>* This Box contains Nuts (pecans)</p>
                <p>
                    We cater to allergies! If you have an allergy and would like this box,
                    please state so in checkout or email us with your order # in the 
                    subject line at info@cravedoughnuts.com. We will replace the doughnut 
                    with another alternative of our choice. Unfortunately, we cannot 
                    guarantee no cross contamination! 
                </p>
            </div>
        </div>
     );
}
 
export default OptionTwo;