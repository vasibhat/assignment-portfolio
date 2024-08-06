import React from 'react';

// The Contact component displays the "Contact Me" section of the portfolio
function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        {/* Container for email contact information */}
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:vasishtdbhat@gmail.com">vasishtdbhat@gmail.com</a></p>
        </div>
        {/* Container for Twitter contact information */}
        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="Twitter icon"
            className="icon contact-icon"
          />
          <p><a href="https://twitter.com/vasisht_bhat">Twitter</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
