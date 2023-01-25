import AboutComponent from './Components/About';
import ProductComponent from './Components/Product';
import HomeComponent from './Components/Home';
import ContactComponent from './Components/Contact';

function App() {
  return (
    <div className="App">
      <a href='./Components/About'>About Page</a>
      <HomeComponent />
      <AboutComponent />
      <ContactComponent />
      <ProductComponent />
    </div>
  );
}

export default App;
