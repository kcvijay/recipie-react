import React from "react";
import "../Styles/CheckPost.css";

function CheckPost({
  title,
  author,
  country,
  description,
  ingredient,
  quantity,
  instruction,
  closeHandler,
  submitHandler,
}) {
  return (
    <div className="overlay">
      <div className="checkpost">
        <h3>Want to review your post?</h3>
        <div className="post-wrapper">
          <h4>{title}</h4>
          <p className="post-subheader">Author</p>
          <p>{author}</p>
          <p className="post-subheader">Origin</p>
          <p>{country}</p>
          <p className="post-subheader">Description</p>
          <p>{description}</p>
          <p className="post-subheader">Ingredients</p>
          <p>{ingredient}</p>
          <p className="post-subheader">Quantity</p>
          <p>{quantity}</p>
          <p className="post-subheader">Instructions</p>
          <p>{instruction}</p>
        </div>
        <p>Would you like to post?</p>
        <div className="checkpost-btns">
          <button className="btnWhite" onClick={closeHandler}>
            No, I would like to edit first.
          </button>
          <button className="btnGreen" onClick={submitHandler}>
            Yes, I would like to post.
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckPost;
