// Imports
import { Route, Routes } from 'react-router-dom'; // Import Route & Routes from react-router To Navigate Between Pages

// Component Imports
import ProductComponent from './Components/Product Component/Product';
import HomeComponent from './Components/Homepage Component/Home';
import ContactComponent from './Components/Contact Component/Contact'
import AboutComponent from './Components/About Component/About';
import OptionOneComponent from './Components/Product Component/OptionOneComponent';
import OptionTwoComponent from './Components/Product Component/OptionTwoComponent';
import OptionThreeComponent from './Components/Product Component/OptionThreeComponent';
import OptionFourComponent from './Components/Product Component/OptionFourComponent';
import ErrorComponent from './Components/Error Page Component/ErrorComponent';
import FaqComponent from './Components/FAQ Component/faq';


function App() {
  return (

    // Define Routes Do Navigate Between Pages
    <Routes>

      {/* Home Route */}
      <Route path="/" element={<HomeComponent />} />

      {/* Product Route */}
      <Route path="product" element={<ProductComponent />} />

      {/* ProductOne Route */}
      <Route path="productOne" element={<OptionOneComponent />} />

      {/* ProductTwo Route */}
      <Route path='productTwo' element={<OptionTwoComponent />} />

      {/* ProductThree Route */}
      <Route path='productThree' element={<OptionThreeComponent />} />

      {/* ProductFour Route */}
      <Route path='productFour' element={<OptionFourComponent />} />

      {/* Contact Route */}
      <Route path='contact' element={<ContactComponent />} />

      {/* About Route */}
      <Route path='about' element={<AboutComponent />} />
      <Route path='*' element={<ErrorComponent />}></Route> {/* Error Page */}

      {/* FAQ Route */}
      <Route path='faq' element={<FaqComponent />}></Route>
    </Routes>
  );
}

export default App;
