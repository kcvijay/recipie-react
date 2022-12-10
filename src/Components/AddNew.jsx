import React, { useEffect, useState } from "react";
import axios from "axios";

import CheckPost from "./CheckPost";

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
    serving: "",
    image: "",
    instruction: "",
    ingredients: {},
  });

  // Other states
  const [showModal, setShowModal] = useState(false); //To show the CheckPost Modal
  const [Allcountries, setAllCountries] = useState([]); // To set countries list on dropdown
  const [ingredInput, setIngredInput] = useState([
    { quantity: "", ingredient: "" },
  ]); // For adding new ingredients

  //Axios get to fetch country names on dropdown list ***=> Edit Needed: Sort alphabetically.
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setAllCountries(res.data);
    });
  }, []);

  // On input fields change:
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // On adding fields button
  const addFields = (e) => {
    e.preventDefault();
    let objects = {
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

  const checkPostHandler = (e) => {
    e.preventDefault();
    // Get flag link rightaway and store it to state.
    axios
      .get(`https://restcountries.com/v3.1/name/${data.country}`)
      .then((res) => {
        setData({ ...data, flag: res.data[0].flags?.svg });
      });
    setShowModal(true);
  };

  const closeHandler = () => {
    setShowModal(false);
  };

  // On form submit:
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/recipies", data);
    closeHandler();
    window.location.reload();
  };

  return (
    <section className="addNewWrapper">
      <h2>Add a New Recipe</h2>
      <form onSubmit={checkPostHandler}>
        <div>
          <label htmlFor="title">Name of the Food</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="country">Recipe is from</label>
          <select
            name="country"
            id="country"
            onChange={changeHandler}
            defaultValue={"default"}
            required
          >
            <option value="default" disabled={true}>
              Pick a country..
            </option>
            {Allcountries.map((el) => {
              return (
                <option value={el.name.common} key={el.name.common}>
                  {el.name.common}
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
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="serving">Serving:</label>
          <select
            name="serving"
            id="serving"
            defaultValue={"default"}
            onChange={changeHandler}
          >
            <option value="default" disabled>
              Pick a serving size..
            </option>
            <option value="For Two People">2 People</option>
            <option value="For Four People">4 People</option>
            <option value="For Six People">6 People</option>
            <option value="For Eight People">8 People</option>
          </select>
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            name="image"
            id="image"
            placeholder="For ex. https://website.com/images/image.jpg"
            onChange={changeHandler}
            required
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
        <button className="btnOrange" type="submit" id="submit">
          Post Recipe
        </button>
        {showModal && (
          <CheckPost
            {...data}
            closeHandler={closeHandler}
            submitHandler={submitHandler}
          />
        )}
      </form>
    </section>
  );
}

export default AddNew;
