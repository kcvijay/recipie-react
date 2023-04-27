import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import RecipeCard from "../Components/RecipeCard.jsx";

it("renders when there is card details", () => {
  const tree = renderer.create(
    <BrowserRouter>
      <RecipeCard title={"testing"} />
      .toJSON()
    </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});
