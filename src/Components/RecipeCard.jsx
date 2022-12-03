import React from "react";
import { Link, useParams } from "react-router-dom";

import "../Styles/RecipeCard.css";

function RecipeCard({ title, country, author, image, flag }) {
  const params = useParams();
  console.log(params.singlerecipe);

  return (
    <div className="recipe">
      <img src="https://picsum.photos/300/200" alt="recipe this and that"></img>
      <div className="recipe_details">
        <div className="recipe_img_wrapper">
          <img className="country-flag" src={flag} alt="img flag"></img>
          <p className="recipe_img_tooltip">{country}</p>
        </div>

        <p className="recipe_name">{title}</p>
        <div className="recipe_subdetails">
          <p className="recipe_country">
            Origin: <span>{country}</span>
          </p>
          <p className="author">
            Author: <span>{author}</span>
          </p>
        </div>
        <Link to={`${title}`}>View More</Link>
      </div>
    </div>
  );
}

export default RecipeCard;
