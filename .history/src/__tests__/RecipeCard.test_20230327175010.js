import React from "react";
import renderer from "react-test-renderer";

import RecipeCard from "../Components/RecipeCard";

it(
  ("renders where there are details in the card",
  () => {
    const tree = renderer
      .create(<RecipeCard title={"Testing Recipe Name"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
);
