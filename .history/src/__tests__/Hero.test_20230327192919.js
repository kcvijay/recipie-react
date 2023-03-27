import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero";

test("should render Hero component and check for correct button input", () => {
  render(<Hero />);
  const videoElement = screen.getBy("bannerBtn");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("Browse Recipes");
});
