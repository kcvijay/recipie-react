import React from "react";
import { Link } from "react-router-dom";

import classes from "../Styles/Hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <video autoplay loop className={classes.pieVideo}>
        <source src={require("../Assets/hero.mp4")} type="video/mp4" />
      </video>
      <div className={classes.heroText}>
        <h2>Recipies from the world</h2>
        <div>
          <Link to="/browseallrecipies">Browse all Recipies</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
