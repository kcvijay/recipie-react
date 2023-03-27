import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero";

test("should render Hero component and check for correct button input", () => {
  render(<Hero />);
  const videoElement = screen.getByText("video");
  expect(videoElement).toBeInTheDocument();
  expect(videoElement).toHaveAttribute("autoPlay");
});
