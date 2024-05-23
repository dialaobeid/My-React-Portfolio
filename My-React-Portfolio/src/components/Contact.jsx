import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form className="labels">
        <div>
          <label htmlFor="name">Name:  </label>
          <input type="text" id="name" name="name" required />
        </div>
        <br/>
        <div>
          <label htmlFor="email">Email:  </label>
          <input type="email" id="email" name="email" required />
        </div>
        <br/>
        <div>
          <label htmlFor="message">Message:  </label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="contact-btn">Send</button>
      </form>
    </section>
  );
}

export default Contact;