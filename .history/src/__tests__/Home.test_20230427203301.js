import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Components/Home";

test("Renders Home Component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  screen.getByText("Browse Recipies");
  screen.getByText("Add a Recipe");
  screen.getByText("Our School");
});
