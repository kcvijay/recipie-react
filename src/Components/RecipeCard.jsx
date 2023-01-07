import React from "react";
import { Link } from "react-router-dom";

import "../Styles/RecipeCard.css";

const RecipeCard = ({ title, country, author, image, id, flag }) => {
  return (
    <div className="recipe">
      <img className="foodImage" src={image} alt="recipe this and that"></img>
      <div className="recipe_details">
        <p className="recipe_name">{title}</p>
        <div className="flag-wrapper">
          <img className="tinyFlag" src={flag} alt="country flag"></img>
          <p className="flag-tooltip">Origin: {country}</p>
        </div>

        <div className="recipe_subdetails">
          <p className="author">
            Author: <span>{author}</span>
          </p>
        </div>
        <Link to={`${id}`}>View Recipe</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
