import React from "react";
import { Link } from "react-router-dom";

import Video from "../Assets/pie-video.mp4";

import classes from "../Styles/Hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <video playsInline autoplay loop muted className={classes.pieVideo}>
        <source src={Video} type="video/mp4" />
      </video>
      <div className={classes.heroText}>
        <h2>Recipies from the world</h2>
        <Link to="/browseallrecipies">Browse all Recipies</Link>
      </div>
    </div>
  );
}

export default Hero;
