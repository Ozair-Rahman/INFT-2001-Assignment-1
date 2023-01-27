import './Styles/Product.css';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar Component/NavBar';

const ProductComponent = () => {
    const optionOneThreePrice = '$24.00';

    return ( 
        <div className="ProductComponentContent">
            <NavBar />
                <div className="optionOneContainer">
                    <Link to="/productOne" className='linkOne'>
                        <div className="optionOneOption">
                            <h1>
                                Option 1: Half Dozen Donuts - 
                                Flavors: 
                                Birthday Cake
                                Lemon Meringue
                                French Toast
                                Lemon Sprinkle
                                Cosmic Brownie
                                Honey Vanilla Cruller
                            </h1>
                        </div>
                        <h2 className="optionTwoPriceTitle">Crave Option 1 - Half Dozen</h2>
                        <h3 className="optionTwoPrice">{optionOneThreePrice}</h3>
                    </Link>
                </div>
                    <div className="optionTwoContainer">
                    <Link to="/productTwo" className='productTwoLink'>
                        <div className="optionTwoOption">
                            <h1>
                                Option 2: Half Dozen Donuts
                                Flavors: 
                                Birthday Cake
                                Guava Passionfruit Cheesecake
                                Maple Bacon
                                Vanilla Sprinkle
                                Carrot Cake Fritter
                                Churro Cruller 
                            </h1>
                        </div>
                        <h2 className="optionTwoPriceTitle">
                            Crave Option 2 - Half Dozen
                        </h2>
                        <h3 className="optionTwoPrice">{optionOneThreePrice}</h3>
                    </Link>
                    </div>
                    <div className="optionThreeContainer">
                    <Link to="/productThree" className='productThree'>
                        <div className="optionThreeOption">
                            <h1>
                                Option 3: Vegan Half Dozen Donuts
                                Flavors: 
                                2x Oatmeal Cream Pie
                                2x Biscoff Cookie Butter
                                2x Chocolate PB + J
                            </h1>
                        </div>
                        <h2 className="optionThreePriceTitle">
                            Crave Option 3 - Half Dozen
                        </h2>
                        <h3 className="optionThreePrice">{optionOneThreePrice}</h3>
                    </Link>
                    </div>
                    <div className="optionFourContainer">
                        <Link to="/productFour" className='productFour'>
                            <div className="optionFourOption">
                                <h1>
                                    Option 4: One Dozen Donuts
                                    Flavors: 
                                    Birthday Cake
                                    Lemon Meringue
                                    Cosmic Brownie
                                    French Toast
                                    Maple Bacon
                                    Churro Cruller
                                    Carrot Cake Fritter 
                                    Honey Vanilla Cruller
                                    Chocolate PB + J
                                    Oatmeal Cream Pie
                                    Biscoff Cookie Butter
                                    Guava Passionfruit Cheesecake
                                </h1>
                            </div>
                            <h2 className="optionFourPriceTitle">
                                Crave Option 4 - One Dozen
                            </h2>
                            <h3 className="optionFourPrice">$44.00</h3>
                        </Link>
                    </div>
        </div>
     );
}
 
export default ProductComponent;