import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CheckPost from "./CheckPost";

const Update = () => {
  const params = useParams();
  const [input, setInput] = useState({
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

  const [data, setData] = useState([]);
  const [showCheckPost, setShowCheckPost] = useState(false);
  const [allCountries, setAllCountries] = useState([]); // To set countries list on dropdown
  const [ingredInput, setIngredInput] = useState([
    { quantity: "", ingredient: "" },
  ]); // For adding new ingredients

  //Axios get to fetch country names on dropdown list ***=> Edit Needed: Sort alphabetically.

  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipies/${params.updaterecipe}`)
      .then((res) => setInput(res.data))
      .catch((err) => {
        alert("There has been some error. " + err);
      });
  }, []);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setAllCountries(res.data);
    });
  }, []);

  //Sorting countries in ascending order
  let countryList = [];
  countryList.push(
    allCountries.map((el) => {
      return el.name.common;
    })
  );
  countryList[0].sort();

  // On input fields change:
  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // On ingredient fields change:
  const ingredChangeHandler = (e, index) => {
    let fields = [...ingredInput];
    fields[index][e.target.name] = e.target.value; // Value setting up on individual set of form fields.
    setIngredInput(fields);
    setData({ ...input, ingredients: ingredInput }); // Pushing the values of ingredients to ingredients states.
  };

  // On submit button --> Opens the recipe review page (CheckPost).
  // const checkPostHandler = (e) => {
  //   e.preventDefault();
  //   if (captcha !== inputCaptcha) {
  //     alert("The code did not match. Try again.");
  //   } else {
  //     // Get flag link rightaway and store it to state.
  //     axios
  //       .get(`https://restcountries.com/v3.1/name/${input.country}`)
  //       .then((res) => {
  //         setData({ ...input, flag: res.data[0].flags?.svg });
  //       });
  //     modalHandler();
  //   }
  // };

  const countryChangeHandler = (e) => {
    setInput({ ...input, country: e.target.value });
  };

  // On form submit:
  // If server is not active, Alert error message on recipe posting.
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:3001/recipies/${params.updaterecipe}`,
        input
      );
    } catch (err) {
      alert("There has been some error. " + err);
    }
  };
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${input.country}`)
      .then((res) => {
        // setData({ ...input, flag: res.data[0].flags?.svg });
        console.log(res.data);
      });
  }, []);

  const checkPostHandler = (e) => {
    e.preventDefault();
    console.log("checked");
    setShowCheckPost(true);
  };

  return (
    <section className="addNewWrapper">
      <h2>Update Recipe</h2>
      <form>
        <div>
          <label htmlFor="title">Name of the Recipe</label>
          <input
            type="text"
            name="title"
            id="title"
            value={input.title}
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
            value={input.author}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="country">Recipe is from</label>
          <select
            name="country"
            id="country"
            value={input.country}
            onChange={changeHandler}
            defaultValue={"default"}
            required
          >
            <option value="default" disabled={true}>
              Pick a country..
            </option>
            {countryList[0].map((country) => {
              return (
                <option value={country} key={country}>
                  {country}
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
            value={input.description}
            onChange={changeHandler}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="serving">Serving</label>
          <select
            name="serving"
            id="serving"
            value={input.serving}
            defaultValue={"default"}
            onChange={changeHandler}
          >
            <option value="default" disabled>
              Pick a serving size..
            </option>
            <option value="For 2 People">2 People</option>
            <option value="For 4 People">4 People</option>
            <option value="For 6 People">6 People</option>
            <option value="For 8 People">8 People</option>
          </select>
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            name="image"
            id="image"
            value={input.image}
            placeholder="For ex. https://website.com/images/image.jpg"
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="instruction">Instructions</label>
          <textarea
            name="instruction"
            id="instruction"
            value={input.instruction}
            onChange={changeHandler}
          ></textarea>
        </div>
        <button
          className="btnOrange"
          type="submit"
          id="submit"
          onClick={checkPostHandler}
        >
          Update Recipe
        </button>
      </form>
      {showCheckPost && <CheckPost></CheckPost>}
    </section>
  );
};

export default Update;
