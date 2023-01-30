import './Contact.css';
import Footer from "../Footer Component/Footer";
import NavBar from "../Navbar Component/NavBar";
import emailjs from 'emailjs-com';

const ContactComponent = () => {

  document.title = 'Contact Us - Crave Doughnuts';

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8q1rbts', 'template_6ap0rgc', e.target, '-05ct2oJjHgRWMZUy')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();  
  }

  return (
    <>
      <NavBar />
        <div className="emailFormDiv">
          <header className='emailFormHeader'>Contact Us!</header>
          <form onSubmit={sendEmail} className='emailForm'>
            <label className='nameLabel'>Name:</label>
            <input type="text" name="user_name" className='NameUser' />
            <label className='emailLabel'>Email:</label>
            <input type="email" name="user_email" />
            <label className='msgLabel'>Message:</label>
            <textarea className='msgBox' name="message" />
            <input type="submit" value="Send" className='sendBtn' />
          </form>
        </div>
      <Footer />
    </>
  );
};

export default ContactComponent;
