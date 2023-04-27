import { render, screen } from "@testing-library/react";
import Home from "./Home.test";

test("Renders Home Component", () => {
  render(<Home />);
  screen.getByText("Browse Recipies");
  screen.getByText("Add a Recipe");
  screen.getByText("Our School");
});
