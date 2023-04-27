import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Hero from "../Components/Hero";

test("should render Hero component and check for video element", () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
  const testId = screen.getByTestId("heroVideo");
  expect(testId).toBeInTheDocument();
  // expect(videoElement).toHaveAttribute("autoPlay");
});
