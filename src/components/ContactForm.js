import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xeqbqvpn"); // Replace with your Formspree form id
  if (state.succeeded) {
      return <p>Thanks you! We will reach out to you soon.</p>;
  }

  return (
    <div className="contact-form">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" required />

        <label htmlFor="phone">Phone:</label>
        <input id="phone" type="tel" name="phone" />

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required />

        <label htmlFor="guests">Number of Guests:</label>
        <input id="guests" type="number" name="guests" />

        <label htmlFor="arrival">Arrival:</label>
        <input id="arrival" type="date" name="arrival" />

        <label htmlFor="departure">Departure:</label>
        <input id="departure" type="date" name="departure" />

        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" name="comment" />

        <button type="submit" disabled={state.submitting} className="submit-btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
