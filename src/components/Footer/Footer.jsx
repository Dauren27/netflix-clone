import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <p className="footer__title">Questions? Contact us.</p>
        <div className="footer__break" />
        <div className="footer__row">
          <div className="footer__column">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Netflix Originals</a>
          </div>

          <div className="footer__column">
            <a href="#">Help Centre</a>
            <a href="#">Jobs</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer__column">
            <a href="#">Account</a>
            <a href="#">Redeem gift cards</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="footer__column">
            <a href="#">Media Centre</a>
            <a href="#">Buy gift cards</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices</a>
          </div>
        </div>
        <div className="footer__break" />
        <p className="footer__text">Netflix United Kingdom</p>
      </div>
    </div>
  );
};

export default Footer;
