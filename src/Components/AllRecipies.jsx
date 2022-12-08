import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import "../Styles/AllRecipies.css";

function AllRecipies() {
  const [data, setData] = useState({
    search: "",
  });
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/recipies").then((res) => {
      setRecipies(res.data);
    });
  }, []);

  const inputHandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //Filtering recipe cards by their name according to the texts on input field.
  const filteredItems = recipies.filter((item) => {
    return item.title.toLowerCase().includes(data.search.toLowerCase());
  });

  if (recipies.length <= 0) {
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
      <div className="filter-wrapper">
      <input
        type="text"
        name="search"
        id="search"
        className="card-filter"
        placeholder="Search recipe by name.."
        onChange={inputHandler}
      />
      </div>
    
      <div className="recipies-wrapper">
        {filteredItems.map((recipe) => {
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
