import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/SingleRecipe.css";

function SingleRecipe() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipies/${params.singlerecipe}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="recipe-wrapper">
      <img className="food-image" src={data.image} alt={data.title} />
      <div className="recipe-title">
        <div className="author-name">
          <img src={data.flag} alt="flag" />
          <p>{data.author}</p>
        </div>
        <h2>{data.title}</h2>
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
          <tbody>
            {/* {data.ingredients.map((item) => {
              return (
                <tr>
                  <td>{item.ingredient}</td>
                  <td>{item.quantity}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
      <div className="recipe-instruction">
        <h3>Instruction</h3>
        <p>{data.instruction}</p>
      </div>
      <Link to="/browseallrecipies" className="btnPurple">
        Back to Recipies
      </Link>
    </div>
  );
}

export default SingleRecipe;
