import React from "react";
import "../Styles/CheckPost.css";

const CheckPost = ({
  title,
  author,
  country,
  description,
  ingredients,
  instruction,
  closeHandler,
  submitHandler,
}) => {
  return (
    <div className="overlay">
      <div className="checkpost">
        <h3>Want to review your post?</h3>
        <div className="post-wrapper">
          <h2>{title}</h2>
          <div className="text-box">
            <p className="post-subheader">
              Author:&nbsp;<span>{author}</span>
            </p>
          </div>

          <div className="text-box">
            <p className="post-subheader">
              Origin:&nbsp;<span>{country}</span>
            </p>
          </div>

          <div className="text-box">
            <p className="post-subheader">Description:</p>
            <p>{description}</p>
          </div>

          <div className="text-box">
            <p className="post-subheader">Ingredients:</p>
            <ul>
              {ingredients?.map((ingredient) => {
                return (
                  <li key={ingredient.ingredient}>
                    {ingredient.quantity}:&nbsp;{ingredient.ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-box">
            <p className="post-subheader">Instructions:</p>
            <p>{instruction}</p>
          </div>
        </div>
        <h3>Would you like to post?</h3>
        <div className="checkpost-btns">
          <button className="btnWhite" onClick={closeHandler}>
            NO, I want to edit.
          </button>
          <button className="btnGreen" onClick={submitHandler}>
            YES, I like to post.
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckPost;
