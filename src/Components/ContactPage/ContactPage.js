import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact FlyVista</h1>
        <p>We’d love to hear from you! Whether it’s a question, feedback, or just to say hi, feel free to reach out.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> support@flyvista.com</p>
          <p><strong>Phone:</strong> +1 (800) 555-1234</p>
          <p><strong>Address:</strong> 123 Aviation Way, SkyCity, CA 90210</p>
          <div className="contact-map">
            <iframe
              title="FlyVista HQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019670081116!2d-122.41941548468232!3d37.77492977975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ff459c45%3A0x94b73eb0b26d74f9!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1611242825910!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
