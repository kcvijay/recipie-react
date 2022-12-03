import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/AddNew.css";

function AddNew() {
  const [data, setData] = useState({
    id: "",
    passcode: Date.now(),
    title: "",
    author: "",
    country: "",
    description: "",
    imageLink: "",
    instruction: "",
    quantity: "",
    ingredients: [{ quantity: "", ingredient: "" }],
  });
  const [countries, setCountries] = useState([]);
  const [val, setVal] = useState([]);

  const addInputHandler = (e) => {
    e.preventDefault();
    const inputs = [...val, []];
    setVal(inputs);
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/recipes", data);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const inputWrapper = (
    <div
      className="ingredients-wrapper"
      onChange={changeHandler}
      name="ingredients"
    >
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
    <section
      className="addNewWrapper"
      onChange={changeHandler}
      onSubmit={submitHandler}
    >
      <h2>Add a New Recipe</h2>
      <form>
        <div>
          <label htmlFor="title">Name of the Recipe</label>
          <input type="text" name="title" id="title" />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="author" />
        </div>

        <div>
          <label htmlFor="country">Recipe is from</label>
          <select name="country" id="country">
            {countries.map((country) => {
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
          <input type="text" name="imageLink" id="imageLink" />
        </div>
        {val.map((data, key) => {
          return inputWrapper;
        })}
        <button className="btnGreen" onClick={addInputHandler}>
          Add Ingredients
        </button>
        <div>
          <label htmlFor="instruction">Instructions</label>
          <textarea name="instruction" id="instruction"></textarea>
        </div>
        <button className="btnPurple" type="submit" id="submit">
          Post Recipe
        </button>
      </form>
    </section>
  );
}

export default AddNew;
