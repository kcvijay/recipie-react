import React from "react";
import { Link } from "react-router-dom";

import Hero from "../Components/Hero";

import classes from "../Styles/Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <Hero />
      <div className={classes.cards}>
        <div className={classes.card}>
          <div className={classes.cardHeader}>Lorem ipsum dolor sit amet.</div>
          <div className={classes.cardBody}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ab
            quisquam voluptas labore illum necessitatibus maiores quaerat
            commodi? Possimus dolorem unde numquam in eveniet qui.
          </div>
          <Link to="/browseallrecipies">Browse all recipies</Link>
        </div>

        <div className={classes.card}>
          <div className={classes.cardHeader}>Lorem ipsum dolor sit amet.</div>
          <div className={classes.cardBody}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ab
            quisquam voluptas labore illum necessitatibus maiores quaerat
            commodi? Possimus dolorem unde numquam in eveniet qui.
          </div>
          <Link to="/addnewrecipe">Add New Recipe</Link>
        </div>

        <div className={classes.card}>
          <div className={classes.cardHeader}>Lorem ipsum dolor sit amet.</div>
          <div className={classes.cardBody}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ab
            quisquam voluptas labore illum necessitatibus maiores quaerat
            commodi? Possimus dolorem unde numquam in eveniet qui.
          </div>
          <a href="/browserallrecipe" target="_blank noreferer">
            Business College Helsinki
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
