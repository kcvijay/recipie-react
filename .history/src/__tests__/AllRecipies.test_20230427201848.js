import React from "react";
import renderer from "react-test-renderer";

import AllRecipies from "../Components/AllRecipies";

it("renders when there is no recipe", () => {
  const tree = renderer.create(<AllRecipies />).toJSON();
  expect(tree).toMatchSnapshot();
});
