import React from "react";

import Header from "../Components/Header";
import Main from "../Components/Main";
import Footer from "../Components/Footer";

import "./Layout.css";

const Layout = () => {
  return (
    <section className="wrapper">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

export default Layout;
