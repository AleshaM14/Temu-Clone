import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaPinterest,
  FaApple,
  FaGooglePlay,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaGooglePay,
  FaCcDiscover,
} from "react-icons/fa";

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>Company Info</h4>
          <ul>
            <li>About Temu</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Shop Like a Billionaire</li>
            <li>Contact us</li>
            <li>Tree Planting Program</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li>Return & Refund Policy</li>
            <li>IP Policy</li>
            <li>Shipping Info</li>
            <li>Safety Alerts</li>
            <li>Report suspicious activity</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>Safety Center</li>
            <li>Sitemap</li>
            <li>How to order</li>
            <li>How to track</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Partner</h4>
          <ul>
            <li>Affiliate Program</li>
            <li>Become a Seller</li>
            <li>Partner with Temu</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Download the App</h4>
          <div className="app-buttons">
            <button><FaApple /> App Store</button>
            <button><FaGooglePlay /> Google Play</button>
          </div>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaTiktok />
            <FaYoutube />
            <FaPinterest />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="payments">
          <span>We Accept:</span>
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcAmex />
          <FaCcDiscover />
          <FaCcPaypal />
          <FaGooglePay />
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Temu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
