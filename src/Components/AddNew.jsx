import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/AddNew.css";

function AddNew() {
  const [data, setData] = useState({
    id: "",
    passcode: "",
    title: "",
    author: "",
    country: "",
    flag: "",
    description: "",
    image: "",
    instruction: "",
    ingredients: {},
  });

  const [Allcountries, setAllCountries] = useState([]);
  const [ingredInput, setIngredInput] = useState([
    { id: "", quantity: "", ingredient: "" },
  ]);

  // On input fields change:
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //Axios get to fetch country names on dropdown list ***=> Edit Needed: Sort alphabetically.
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setAllCountries(res.data);
    });
  }, []);

  const countryChangeHandler = (e) => {
    changeHandler(e);
    axios
      .get(`https://restcountries.com/v3.1/name/${e.target.value}`)
      .then((res) => {
        setData({ ...data, flag: res.data[0].flags?.svg });
      });
  };

  // On adding fields button
  const addFields = (e) => {
    e.preventDefault();
    let objects = {
      id: "",
      quantity: "",
      ingredient: "",
    };
    setIngredInput([...ingredInput, objects]);
  };

  // On ingredient fields change:
  const ingredChangeHandler = (e, index) => {
    let fields = [...ingredInput];
    fields[index][e.target.name] = e.target.value; // Value setting up on individual set of form fields.
    setIngredInput(fields);
    setData({ ...data, ingredients: ingredInput }); // Pushing the values of ingredients to ingredients states.
  };

  // On form submit:
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/recipies", data);
  };
  return (
    <section className="addNewWrapper">
      <h2>Add a New Recipe</h2>
      <form>
        <div>
          <label htmlFor="title">Name of the Food</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={changeHandler}
          ></input>
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={changeHandler}
          ></input>
        </div>

        <div>
          <label htmlFor="country">Recipe is from</label>
          <select
            name="country"
            id="country"
            onChange={countryChangeHandler}
            defaultValue={"default"}
          >
            <option value="default" disabled={true}>
              Pick a country..
            </option>
            {Allcountries.map((country) => {
              return (
                <option value={country.name.common} key={country.name.common}>
                  {country.name.common}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="description">Short Description</label>
          <textarea
            name="description"
            id="description"
            onChange={changeHandler}
          ></textarea>
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="For ex. https://website.com/images/image.jpg"
            onChange={changeHandler}
          />
        </div>

        {/* Adding more ingredient fields on click */}
        {ingredInput.map((ingredient, index) => {
          return (
            <div className="ingredients-wrapper" key={index}>
              <div>
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  onChange={(e) => ingredChangeHandler(e, index)}
                />
              </div>
              <div>
                <label htmlFor="ingredient">Ingredient</label>
                <input
                  type="text"
                  name="ingredient"
                  id="ingredient"
                  onChange={(e) => ingredChangeHandler(e, index)}
                />
              </div>
            </div>
          );
        })}

        <button className="btnGreen" onClick={addFields}>
          Add Ingredients
        </button>
        <div>
          <label htmlFor="instruction">Instructions</label>
          <textarea
            name="instruction"
            id="instruction"
            onChange={changeHandler}
          ></textarea>
        </div>
        <button
          className="btnPurple"
          type="submit"
          id="submit"
          onClick={submitHandler}
        >
          Post Recipe
        </button>
      </form>
    </section>
  );
}

export default AddNew;
