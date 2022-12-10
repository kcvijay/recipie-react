import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-wrapper">
      <h2>About this website</h2>
      <p>
        <strong>
          This is a classroom project for Fullstack Web Developer Program at
          Business College Helsinki, 2022.
        </strong>
      </p>
      <p>
        The purpose of this project is to learn basics of React functional
        components, react-router and GET, POST use of JSON Server.
      </p>
      <p>
        Website users can post their country-specific recipies and view other
        recipies.
      </p>
      <p>Happy browsing!</p>
      <p>&mdash;Vijay KC</p>
    </div>
  );
}

export default About;
