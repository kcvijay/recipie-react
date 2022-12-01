import React from "react";

import Header from "../Components/Header";
import Main from "../Components/Main";

import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <section className={classes.wrapper}>
      <Header />
      <Main />
    </section>
  );
};

export default Layout;
