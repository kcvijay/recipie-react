import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "../Styles/SingleRecipe.css";

const SingleRecipe = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [warning, setWarning] = useState(false);
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Receiving parameters from AllRecipies recipe card
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/recipies/${params.singlerecipe}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        window.location.replace("/page-not-found"); // On error (page not available), redirect to NotFound page.
      });
    setLoading(false);
  }, [params]);

  const allIngredients = data.ingredients?.map((item) => {
    return (
      <tr key={item.ingredient}>
        <td>{item.ingredient}</td>
        <td>{item.quantity}</td>
      </tr>
    );
  });

  const warningHandler = () => {
    setWarning(!warning);
  };

  const changeHandler = (e) => {
    setCode(e.target.value);
  };

  const closeHandler = () => {
    setWarning();
    setResult("");
  };

  const submitHandler = () => {
    if (!code) {
      return;
    } else if (data.passcode === code) {
      axios.delete(`http://localhost:3001/recipies/${params.singlerecipe}`);
      alert("Your post has been deleted successfully!");
      window.location.reload();
    } else {
      setResult("The password did not match. Try again.");
    }
  };

  if (loading) {
    <h3>Getting recipe...</h3>;
  }

  return (
    <div className="recipe-wrapper">
      <div className="image">
        <img className="food-image" src={data.image} alt={data.title} />
        <img className="bigFlag" src={data.flag} alt="country flag" />
      </div>
      <div className="recipe-title">
        <h2 className="title">{data.title}</h2>
        <div className="other-info">
          <div>
            <p>Author:&nbsp;{data.author}</p>
            <p>Origin: &nbsp;{data.country}</p>
          </div>
          <div>
            <i className="material-icons">dining</i> <span>{data.serving}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="description-table-wrapper">
        <div className="grid-left">
          <div className="description">
            <h3>Description</h3>
            <p>{data.description}</p>
          </div>
          <div className="recipe-instruction">
            <h3>Instruction</h3>
            <p>{data.instruction}</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{allIngredients}</tbody>
        </table>
      </div>

      <div className="buttons">
        <Link to="/browseallrecipies" className="btnOrange">
          Back to Recipies
        </Link>
        <button className="btnWhite" onClick={warningHandler}>
          Edit recipe
        </button>
        <button className="btnRed" onClick={warningHandler}>
          Delete recipe
        </button>
      </div>

      {/* Show warning on Delete button click*/}
      {warning && (
        <div className="warning">
          <p>
            <strong>This action requires the password.</strong>
          </p>
          <input
            type="text"
            id="code-input"
            required
            onChange={changeHandler}
          ></input>

          <p className="resultTxt">{result}</p>
          <div className="warning-buttons">
            <button className="btnRed" onClick={closeHandler}>
              Close
            </button>
            <button className="btnGreen" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleRecipe;
