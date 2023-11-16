import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" required rows={5} />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
