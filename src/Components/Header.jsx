import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "../Styles/Header.module.css";

function Header() {
  return (
    <header>
      <div className={classes.logo}>
        <Link to="/">
          <h1>
            reci<span className={classes.logoUppercase}>pie</span>
          </h1>
        </Link>
      </div>
      <nav className={classes.nav}>
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
            <NavLink className={classes.linkSpecial} to="/addnewrecipe">
              Add new
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
