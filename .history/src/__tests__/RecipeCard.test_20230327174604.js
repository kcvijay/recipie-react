import React from "react";
import renderer from "react-test-renderer";

import RecipeCard from "../Components/RecipeCard";

if("renders where there are details in the card", () => {
  const tree = renderer.create(<RecipeCard details={"testing"}/>).toJSON();
  expect(tree).toMatchSnapshot()
})