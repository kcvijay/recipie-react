import { render, screen } from "@testing-library/jest-dom";
import Home from "../Components/Home";

test("Renders Home Component", () => {
  render(<Home />);
  screen.getByText("Browse Recipies");
  screen.getByText("Add a Recipie");
  screen.getByText("Our School");
});
