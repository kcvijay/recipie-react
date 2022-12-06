import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import "../Styles/AllRecipies.css";

function AllRecipies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/recipies").then((res) => {
      return setData(res.data);
    });
  }, []);

  if (data.length <= 0) {
    return (
      <div className="fallback-wrapper">
        <h2>There are no recipies</h2>
        <Link to="/addnewrecipe" className="btnOrange">
          Add New Recipe
        </Link>
      </div>
    );
  }

  return (
    <div className="allrecipies">
      <h2>All Recipies</h2>
      <div className="recipies-wrapper">
        {data.map((recipe) => {
          return (
            <RecipeCard
              title={recipe.title}
              author={recipe.author}
              country={recipe.country}
              image={recipe.image}
              flag={recipe.flag}
              id={recipe.id}
              key={recipe.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllRecipies;
