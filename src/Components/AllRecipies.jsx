import React, { useState, useEffect } from "react";
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
