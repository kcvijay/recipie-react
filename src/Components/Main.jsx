import React from "react";
import { Outlet } from "react-router-dom";
import "../Styles/Main.css";

const Main = () => {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
};

export default Main;
