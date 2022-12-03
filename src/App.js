import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Components/Home";
import AllRecipies from "./Components/AllRecipies";
import SingleRecipe from "./Components/SingleRecipe";
import AddNew from "./Components/AddNew";
import NotFound from "./Components/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/addnewrecipe" element={<AddNew />} />
          <Route path="/browseallrecipies" element={<AllRecipies />} />
          <Route
            path="browseallrecipies/:singlerecipe"
            element={<SingleRecipe />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
