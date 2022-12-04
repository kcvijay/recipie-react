import React from "react";
import { Link } from "react-router-dom";
import "../Styles/RecipeCard.css";

function RecipeCard({ title, country, author, image, id, flag }) {
  return (
    <div className="recipe">
      <img src={image} alt="recipe this and that"></img>
      <div className="recipe_details">
        <div className="recipe_img_wrapper">
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
        <Link to={`${id}`}>View More</Link>
      </div>
    </div>
  );
}

export default RecipeCard;
