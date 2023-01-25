const ContactComponent = () => {
  return (
    <div className="ContactComponentContent">
      <header>Contact Component</header>
      <h1>Contact Us</h1>
      <h2>Name</h2>
      <input className="name" type="text" />
      <h2>Subject</h2>
      <input className="subject" type="text" />
      <h2>Message</h2>
      <textarea className="message" rows="4" cols="50"></textarea>
      <button>Send</button>
    </div>
  );
};

export default ContactComponent;
