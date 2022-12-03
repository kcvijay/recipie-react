import React from "react";
import { Link, useParams } from "react-router-dom";

import "../Styles/RecipeCard.css";

function RecipeCard({ title, country }) {
  const params = useParams();
  console.log(params.singlerecipe);

  return (
    <div className="recipe">
      <img src="https://picsum.photos/300/200" alt="recipe this and that"></img>
      <div className="recipe_details">
        <div className="recipe_img_wrapper">
          <img
            className="country-flag"
            src="https://picsum.photos/50/30"
            alt="img flag"
          ></img>
          <p className="recipe_img_tooltip">Italy</p>
        </div>

        <p className="recipe_name">Italian Zucchini Pizza</p>
        <div className="recipe_subdetails">
          <p className="recipe_country">Origin: Italy</p>
          <p className="author">Author: Vijay KC</p>
        </div>

        <Link to={`${title}`}>View More</Link>
      </div>
    </div>
  );
}

export default RecipeCard;
