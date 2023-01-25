import './App.css';
import AboutComponent from './Components/About';
import ProductComponent from './Components/Product';
import HomeComponent from './Components/Home';
import ContactComponent from './Components/Contact';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeComponent />
      <AboutComponent />
      <ContactComponent />
      <ProductComponent />
    </div>
  );
}

export default App;
