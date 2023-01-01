import React from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";
import Features from "./Features";
import FeaturedIn from "./FeaturedIn";

import classes from "../Styles/Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <Hero />
      <div className={classes.cards}>
        <div className={classes.card}>
          <h2>Browse Recipies</h2>
          <div className={classes.cardBody}>
            You can view all recipies users posted from all over the world.
            Watch and learn what deliciousness the world is offering for you.
          </div>
          <Link to="/browseallrecipies">Browse All Recipies</Link>
        </div>

        <div className={classes.card}>
          <h2>Add a Recipe</h2>
          <div className={classes.cardBody}>
            You can not just view others' recipies but, also post yours. Fill
            the recipe form and publish your awesome food recipe for everyone.
          </div>
          <Link to="/addnewrecipe">Add a New Recipe</Link>
        </div>

        <div className={classes.card}>
          <h2>Our School</h2>
          <div className={classes.cardBody}>
            Business College is one of the reputed school in Finland which
            provides range of courses for students who want to land at job right
            away.
          </div>
          <a href="https://en.bc.fi" target="_blank noreferer">
            Business College Helsinki
          </a>
        </div>
      </div>
      <h2>Features</h2>
      <Features />
      <FeaturedIn />
    </div>
  );
}

export default Home;
