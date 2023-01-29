import Footer from "./Footer Component/Footer";
import NavBar from "./Navbar Component/NavBar";

const ContactComponent = () => {

  document.title = 'Contact Us - Crave Doughnuts';

  return (
    <div className="ContactComponentContent">
      <NavBar />
      <h1>Contact Us</h1>
      <h2>Name</h2>
      <input className="name" type="text" />
      <h2>Subject</h2>
      <input className="subject" type="text" />
      <h2>Message</h2>
      <textarea className="message" rows="4" cols="50"></textarea>
      <button>Send</button>
      <Footer />
    </div>
  );
};

export default ContactComponent;
