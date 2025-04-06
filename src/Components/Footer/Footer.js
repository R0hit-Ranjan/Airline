import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About FlyVista</h4>
          <p>Fly smarter, fly better. Discover world-class air travel with FlyVista Airlines.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@flyvista.com</p>
          <p>Phone: +1 800 123 456</p>
          
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> | 
            <a href="https://twitter.com" target="_blank" rel="noreferrer"> Twitter</a> | 
            <a href="https://instagram.com" target="_blank" rel="noreferrer"> Instagram</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FlyVista Airlines. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
