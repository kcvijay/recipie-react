import React from "react";

import hs from "../Assets/hs.png";
import kp from "../Assets/kp.png";

import "../Styles/FeaturedIn.css";

function FeaturedIn() {
  return (
    <div className="featured-medias">
      <p>Featured in</p>
      <div className="media-logos">
        <img src={hs} alt="Logo of Helsingin Sanomat" />
        <img src={kp} alt="Logo of Keskipohjanmaa" />
      </div>
    </div>
  );
}

export default FeaturedIn;
