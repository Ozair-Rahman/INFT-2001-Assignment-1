import './Styles/OptionOneStyles.css';
import NavBar from "../Navbar Component/NavBar";

const OptionOneComponent = () => {

    let price = 24.99
    return ( 
        <div className="optionOneComponentContainer">
            <NavBar />
            <img 
            className="productImage"
            src="https://cdn.shopify.com/s/files/1/0273/3142/8435/products/image_790cdd7f-bbc4-48bf-aa14-0db95f08b62c_1512x.jpg?v=1673362330" 
            alt="Product Four"  
            />
            <div className="productOneInfo">
                <header>Crave Option 1 - Half Dozen</header>
                <h1>${price}</h1>
                <h2>Each Box Includes: </h2>
                <ul className="contentList">
                    <li>Birthday Cake</li>
                    <li>Lemon Meringue</li>
                    <li>French Toast</li>
                    <li>Vanilla Sprinkle</li>
                    <li>Cosmic Brownie</li>
                    <li>Honey Vanilla Cruller</li>
                </ul>
                <p>*Please Note: This box is nut free!</p>
                <br/>
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
 
export default OptionOneComponent;