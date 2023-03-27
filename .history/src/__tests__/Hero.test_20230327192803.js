import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("should render app component and check for correct button input", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("bannerBtn");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("Browse Recipes");
});
