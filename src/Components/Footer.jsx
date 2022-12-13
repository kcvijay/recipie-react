import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="grid-one">
        <h2 className="footer-logo">ReciPie</h2>
        <p>
          <em>View and Post food recipies representing all over the world.</em>
        </p>
        <div className="sub-cta">
          <p>Get notified instantly for the new recipe every time.</p>
          <input type="email" id="sub-email" placeholder="Your e-mail" />
          <button href="/" id="btn-sub">
            Subscribe now
          </button>
        </div>
        <div className="footer-nav-links">
          <Link to="/browseallrecipies">All Recipies</Link>
          <Link to="/addnewrecipe">New Recipe</Link>
          <Link to="/about">About us</Link>
        </div>
      </div>
      <div className="grid-two">
        <h3>Get linked with us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank noreferer">
            <i className="material-icons">facebook</i>
          </a>

          <a href="https://www.tiktok.com" target="_blank noreferer">
            <i className="material-icons">tiktok</i>
          </a>

          <a
            href="https://github.com/kcvijay/recipie-react.git"
            target="_blank noreferer"
          >
            GitHub
          </a>
        </div>
        <p>Copyright &copy; : 2022, Vijay KC</p>
      </div>
    </footer>
  );
}

export default Footer;
