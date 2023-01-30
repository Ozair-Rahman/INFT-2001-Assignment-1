import './Styles/OptionThreeStyles.css';
import NavBar from "../Navbar Component/NavBar";
import Footer from '../Footer Component/Footer';

const OptionThreeComponent = () => {

    document.title = 'Crave Option 3 - Half Dozen';

    return ( 
    <div className="optionThreeContent">
        <NavBar />
        <div className="optionThreeContainer">
            <img 
            className="productThreeImage"
            src="https://cdn.shopify.com/s/files/1/0273/3142/8435/products/image_74a9d168-47e6-41ff-9beb-e3faf7594c56_1512x.jpg?v=1673362438" 
            alt="Product Three" 
            />
            <div className="productThreeInfo">
                <header className='optionThreeTitle'>Crave Option 3 - Half Dozen</header>
                <h1 className='optionThreePrice'>$24.00</h1>
                <h2 className='optionThreeContentListTite'>Each Box Includes: </h2>
                <ul className="contentList">
                    <li>Oatmeal Cream Pie x2</li>
                    <li>Biscoff Cookie Butter x2</li>
                    <li>Chocolate PB+J x2 (contains peanuts)</li>
                </ul>
                <p className='optionThreeWarning'>* This Box contains Nuts (pecans)</p>
                <p>
                Unsure of what makes something "Vegan"? Vegan does not contain any animal 
                product (dairy, eggs, etc)! We don't mean to brag... but if we didn't 
                tell you it was vegan you would have no idea! ;) 
                </p>
                <p className='optionThreeAllergyDisclaimer'>
                    We cater to allergies! If you have an allergy and would like this box,
                    please state so in checkout or email us with your order # in the 
                    subject line at info@cravedoughnuts.com. We will replace the doughnut 
                    with another alternative of our choice. Unfortunately, we cannot 
                    guarantee no cross contamination! 
                </p>
            </div> {/* productThreeInfo */}
        </div> {/* optionThreeContainer */}
        <Footer />
    </div> // optionThreeContent
    );
}
 
export default OptionThreeComponent;