import React from "react";
import "../Styles/Footer.css";

import fb from "../Assets/facebook.png";
import insta from "../Assets/instagram.png";
import tiktok from "../Assets/tiktok.png";
import linkedin from "../Assets/linkedin.png";

const Footer = () => {
  const year = new Date().getFullYear;

  return (
    <footer>
      <h2 className="footer-logo">ReciPie</h2>
      <div className="sub-cta">
        <p>Get notified instantly for the new recipe every time.</p>
        <input type="email" id="sub-email" placeholder="Your e-mail" />
        <button href="/" id="btn-sub">
          Subscribe now
        </button>
      </div>
      <div className="social-icons">
        <a href="http://www.facebook.com" target="_blank noreferer">
          <img src={fb} alt="Link to facebook page"></img>
        </a>
        <a href="http://www.instagram.com" target="_blank noreferer">
          <img src={insta} alt="Link to instagram page"></img>
        </a>
        <a href="http://www.tiktok.com" target="_blank noreferer">
          <img src={tiktok} alt="Link to tiktok page"></img>
        </a>
        <a href="http://www.linkedin.com" target="_blank noreferer">
          <img src={linkedin} alt="Link to linkedin page"></img>
        </a>
      </div>
      <p>Copyright {year} : Vijay KC</p>
    </footer>
  );
};

export default Footer;
