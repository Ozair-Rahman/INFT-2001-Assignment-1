import ProductComponent from './Components/Product Component/Product';
import HomeComponent from './Components/Home';
import ContactComponent from './Components/Contact';
import NavBar from './Components/Navbar Component/NavBar';
import AboutComponent from './Components/About';
import { Link, Route, Routes } from 'react-router-dom';
import OptionOneComponent from './Components/Product Component/OptionOneComponent';
import OptionTwoComponent from './Components/Product Component/OptionTwoComponent';
import OptionThreeComponent from './Components/Product Component/OptionThreeComponent';
import OptionFourComponent from './Components/Product Component/OptionFourComponent';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="product" element={<ProductComponent />} />
      <Route path="productOne" element={<OptionOneComponent />} />
      <Route path='contact' element={<ContactComponent />} />
      <Route path='about' element={<AboutComponent />} />
      <Route path='productTwo' element={<OptionTwoComponent />} />
      <Route path='productThree' element={<OptionThreeComponent />} />
      <Route path='productFour' element={<OptionFourComponent />} />
    </Routes>
  );
}

export default App;
