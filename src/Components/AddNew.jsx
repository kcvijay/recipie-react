import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/AddNew.css";

function AddNew() {
  const [countries, setCountries] = useState([]);
  const [val, setVal] = useState([]);

  const addInputHandler = (e) => {
    e.preventDefault();
    const inputs = [...val, []];
    setVal(inputs);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const inputWrapper = (
    <div className="ingredients-wrapper">
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input type="text" name="quantity" id="quantity" />
      </div>
      <div>
        <label htmlFor="ingredient">Ingredient</label>
        <input type="text" name="ingredient" id="ingredient" />
      </div>
    </div>
  );

  return (
    <section className="addNewWrapper">
      <h2>Add a New Recipe</h2>
      <form>
        <div>
          <label htmlFor="recipeName">Name of the Recipe</label>
          <input type="text" name="recipeName" id="recipeName" />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="author" />
        </div>

        <div>
          <label htmlFor="country">Recipe is from</label>
          <select name="country" id="country">
            {countries.sort().map((country) => {
              return (
                <option value={country.name.common} key={country.name.common}>
                  {country.name.common}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </div>

        <div>
          <label htmlFor="imageLink">Image</label>
          <input type="text" />
        </div>
        {inputWrapper}
        {val.map((data, i) => {
          return inputWrapper;
        })}
        <button className="btnGreen" onClick={addInputHandler}>
          Add More
        </button>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea name="instruction" id="instructions"></textarea>
        </div>
        <button className="btnPurple" type="submit" id="submit">
          Post Recipe
        </button>
      </form>
    </section>
  );
}

export default AddNew;
