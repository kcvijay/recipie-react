import { render, screen } from "@testing-library/react";
import Home from "../Components/Home";

test("Renders Home Component", () => {
  render(<Home />);
  screen.getByText("Browse Recipies");
  screen.getByText("Add a Recipe");
  screen.getByText("Our School");
});
