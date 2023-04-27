import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "../Components/Hero";

test("should render Hero component and check for video element", () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
  const videoElement = screen.getByTestId("video");
  expect(videoElement).toBeInTheDocument();
  expect(videoElement).toHaveAttribute("autoPlay");
});
