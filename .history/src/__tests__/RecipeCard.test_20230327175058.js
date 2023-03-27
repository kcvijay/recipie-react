import React from "react";
import renderer from "react-test-renderer";

import RecipeCard from "../Components/RecipeCard";

it("renders when there is card details", () => {
  const tree = renderer.create(<RecipeCard title={"testing"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
