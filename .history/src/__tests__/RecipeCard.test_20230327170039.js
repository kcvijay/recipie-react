import React from "react";
import renderer from "react-test-renderer";

import RecipeCard from "../RecipeCard";

if (
  ("renders when there is card present",
  () => {
    const tree = renderer.create(<RecipeCard details={"testing"} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
);
