import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NotFound.css";

function NotFound() {
  return (
    <div className="not-found-wrapper">
      <h2 className="not-found-header">ERROR 404!</h2>
      <p>Page Not Found</p>

      <Link className="btnOrange" to="/">
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;
