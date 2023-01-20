import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  // Other states
  const [showModal, setShowModal] = useState(false); //To show the CheckPost Modal
  const [showMessage, setShowMessage] = useState(false);
  const [allCountries, setAllCountries] = useState([]); // To set countries list on dropdown
  const [ingredInput, setIngredInput] = useState([
    { quantity: "", ingredient: "" },
  ]); // For adding new ingredients
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");

  //Axios get to fetch country names on dropdown list ***=> Edit Needed: Sort alphabetically.
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setAllCountries(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipies/${params.updaterecipe}`)
      .then((res) => {
        setData(res.data);
      });
  });

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
    setInput({ ...data, [e.target.name]: e.target.value });
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

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  //Passcode handler for post update, delete and captcha.
  const passcodeHandler = (length) => {
    let passcode = "";
    let chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < length; i++) {
      passcode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return passcode;
  };

  // Re-usable function of captcha making.
  const captchaHandler = (e) => {
    const captcha = passcodeHandler(6);
    setCaptcha(captcha);
  };

  const setInputCaptchaHandler = (e) => {
    setInputCaptcha(e.target.value);
  };

  //Because of asynchronous nature of state updating, we need to have componentDidUpdate method before submitting the button, in order to push passcode value into data state..
  useEffect(() => {
    const passcode = passcodeHandler(15);
    setData({ ...data, passcode: passcode });
    captchaHandler();
  }, []);

  const newCaptchaHandler = (e) => {
    e.preventDefault();
    captchaHandler();
  };

  const messageCloseHandler = () => {
    setShowMessage(false);
    window.location.reload();
  };

  // On submit button --> Opens the recipe review page (CheckPost).
  const checkPostHandler = (e) => {
    e.preventDefault();
    if (captcha !== inputCaptcha) {
      alert("The code did not match. Try again.");
    } else {
      // Get flag link rightaway and store it to state.
      axios
        .get(`https://restcountries.com/v3.1/name/${data.country}`)
        .then((res) => {
          setData({ ...input, flag: res.data[0].flags?.svg });
        });
      modalHandler();
    }
  };

  // On form submit:
  // If server is not active, Alert error message on recipe posting.
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipies", data);
      modalHandler();
      setShowMessage(true);
    } catch (err) {
      alert("There has been some error. " + err);
    }
  };

  return (
    <section className="addNewWrapper">
      <h2>Update Recipe</h2>
      <form onSubmit={checkPostHandler}>
        <div>
          <label htmlFor="title">Name of the Recipe</label>
          <input
            type="text"
            name="title"
            id="title"
            value={data.title}
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
            value={data.author}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="country">Recipe is from</label>
          <select
            name="country"
            id="country"
            value={data.country}
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
            value={data.description}
            onChange={changeHandler}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="serving">Serving</label>
          <select
            name="serving"
            id="serving"
            value={data.serving}
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
            value={data.image}
            placeholder="For ex. https://website.com/images/image.jpg"
            onChange={changeHandler}
            required
          />
        </div>
        <label>Ingredients</label>

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
          &#65291; Add Ingredients
        </button>
        <div>
          <label htmlFor="instruction">Instructions</label>
          <textarea
            name="instruction"
            id="instruction"
            value={data.instruction}
            onChange={changeHandler}
          ></textarea>
        </div>

        {/*Captcha*/}
        <div>
          <label htmlFor="captcha">Insert the text shown below.</label>
          <p className="captcha-txt">{captcha}</p>
          <button onClick={newCaptchaHandler}>Reload</button>
          <input
            type="text"
            id="captcha"
            onChange={setInputCaptchaHandler}
          ></input>
        </div>

        <button className="btnOrange" type="submit" id="submit">
          Post Recipe
        </button>
        {/* {showModal && (
          <CheckPost
            {...data}
            closeHandler={modalHandler}
            submitHandler={submitHandler}
            true={false}
          />
        )}

        {showMessage && (
          <Message
            passcode={data.passcode}
            closeMessage={messageCloseHandler}
          />
        )} */}
      </form>
    </section>
  );
};

export default Update;
