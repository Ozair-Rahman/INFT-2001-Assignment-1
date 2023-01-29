import ProductComponent from './Components/Product Component/Product';
import HomeComponent from './Components/Homepage Component/Home';
import ContactComponent from './Components/Contact';
import AboutComponent from './Components/About';
import { Route, Routes } from 'react-router-dom';
import OptionOneComponent from './Components/Product Component/OptionOneComponent';
import OptionTwoComponent from './Components/Product Component/OptionTwoComponent';
import OptionThreeComponent from './Components/Product Component/OptionThreeComponent';
import OptionFourComponent from './Components/Product Component/OptionFourComponent';
import ErrorComponent from './Components/Error Page Component/ErrorComponent';


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
      <Route path='*' element={<ErrorComponent />}></Route> {/* Error Page */}
    </Routes>
  );
}

export default App;
