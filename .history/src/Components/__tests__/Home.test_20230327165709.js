import { render, screen } from "@testing-library/jest-dom";
import Home from "../Home";

test("Renders Home Component", () => {
  render(<Home />);
  screen.getByText("Browse Recipies");
  screen.getByText("");
});
