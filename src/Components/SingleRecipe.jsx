import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "../Styles/SingleRecipe.css";

function SingleRecipe() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [warning, setWarning] = useState(false);
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  // Receiving parameters from AllRecipies recipe card
  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipies/${params.singlerecipe}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

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
  };

  const submitHandler = () => {
    if (!code) {
      return;
    } else if (data.passcode === code) {
      axios.delete(`http://localhost:3001/recipies/${params.singlerecipe}`);
      setResult("Your post has been deleted successfully!");
    } else {
      setResult("The code did not match. Try again.");
    }
  };

  return (
    <div className="recipe-wrapper">
      <img className="food-image" src={data.image} alt={data.title} />
      <div className="recipe-title">
        <img className="bigFlag" src={data.flag} alt="country flag" />
        <h2 className="title">{data.title}</h2>
        <div className="author-name">
          <div>
            <p>Author:&nbsp;{data.author}</p>
            <p>Origin: &nbsp;{data.country}</p>
            <p className="material-icons">local_dining</p>
            <span>{data.serving}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="description-table-wrapper">
        <div className="description">
          <h3>Description</h3>
          <p>{data.description}</p>
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
      <div className="recipe-instruction">
        <h3>Instruction</h3>
        <p>{data.instruction}</p>
      </div>
      <div className="buttons">
        <Link to="/browseallrecipies" className="btnOrange">
          Back to Recipies
        </Link>
        <button className="btnRed" onClick={warningHandler}>
          Delete
        </button>
      </div>

      {/* On Delete button click*/}
      {warning && (
        <div className="warning">
          <p>
            <strong>
              This action requires a unique code generated on initial recipe
              posting.
            </strong>
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
}

export default SingleRecipe;
