import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h1>
            Reci<span className="logoUppercase">Pie</span>
          </h1>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/browseallrecipies"> all recipies</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="linkSpecial" to="/addnewrecipe">
              Add new
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
