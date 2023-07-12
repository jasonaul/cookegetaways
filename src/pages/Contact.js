import React from 'react';
import './Contact.css';
import ContactForm from '../components/ContactForm';


function Contact() {
  return (
    <div>
      <div className="banner3">
        <h1 className="banner-text">Contact Us</h1>
        {/* This is the placeholder for the Airbnb API */}
        {/* <div className="airbnb-booking"></div> */}
      </div>

      <div className="content">
        <h2 className="contact-content">Contact Us Today!</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
