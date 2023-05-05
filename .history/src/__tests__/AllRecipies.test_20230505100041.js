import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import AllRecipies from "../Components/AllRecipies";

it("renders when there is no recipe", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <AllRecipies />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
