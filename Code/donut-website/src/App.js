import ProductComponent from './Components/Product Component/Product';
import HomeComponent from './Components/Home';
import ContactComponent from './Components/Contact';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <a href='./Components/About'>About Page</a>
      <NavBar/>
      <HomeComponent />
      <ContactComponent />
      <ProductComponent />
    </div>
  );
}

export default App;
