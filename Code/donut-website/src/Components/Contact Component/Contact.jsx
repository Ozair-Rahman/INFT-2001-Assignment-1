// Imports
import './Contact.css';
import Footer from "../Footer Component/Footer";
import NavBar from "../Navbar Component/NavBar";
import emailjs from 'emailjs-com'; // Import API to Send Emails
import LocationComponent from '../Location Component/LocationComponent';
import HoursOperationComponent from '../Hours Operation Component/HoursOperationComponent';
import SocialComponent from '../Social Media Component/SocialComponent';
import { useEffect } from 'react';

const ContactComponent = () => {

  document.title = 'Contact Us - Crave Doughnuts'; // Change Title

  // Scroll to Top Upon Render 
  useEffect(() => {
    window.scrollTo(0,0); 
  })

  // Send Emails
  function sendEmail(e) {          
    // Prevent Default Action When Btn is Push
    e.preventDefault();

    emailjs.sendForm('service_8q1rbts', 'template_6ap0rgc', e.target, '-05ct2oJjHgRWMZUy')
    .then((result) => {

      // Print Success Message if Email is Sent Successfully
      console.log(result.text);
    }, 
    
    // Print Error Message if Message Does Not Go Throuh
    (error) => {
        console.log(error.text);
    });
    e.target.reset();  // Reset All Fields When Send Btn is Pushed
  }

  return (
    <>
    <NavBar /> {/* Navbar */}
      <div className="emailFormDiv">

        {/* emailForm Header */}
        <header className='emailFormHeader'>Contact Us!</header>

        {/* email Submit Form */}
        <form onSubmit={sendEmail} className='emailForm'>

          {/* Name Field */}
          <label className='nameLabel'>Name:</label>
          <input type="text" name="user_name" className='NameUser' />

          {/* Email Field */}
          <label className='emailLabel'>Email:</label>
          <input type="email" name="user_email" />

          {/* Message Field */}
          <label className='msgLabel'>Message:</label>
          <textarea className='msgBox' name="message" />

          {/* Send Btn */}
          <input type="submit" value="Send" className='sendBtn' />
        </form>

        {/* Contact Info */}
        {/* Social Media Links */}
        <div className="contactInfo">
          <div className="contactInfoContent">
            <SocialComponent />
            <div className="emailInfo">
              <h1 className='emailTitle'>Email</h1>
              <p className='emailText'>info@cravedoughnuts.com</p>
            </div>
            <LocationComponent />
            <div className="phoneInfo">
              <h1 className='emailTitle'>Phone Number</h1>
              <p className='emailText'>1-800-DOUGHNUTS</p>
            </div>
          </div>
          <div className="contactInfoContent">
            <HoursOperationComponent />
          </div>
        </div> {/* contactInfo */}
      </div> {/* emailFormDiv */}
    <Footer /> {/* Footer */}
    </>
  );
};

export default ContactComponent;
