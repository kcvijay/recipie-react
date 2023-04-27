import { render, screen } from "@testing-library/react";
import Hero from "../Components/Hero";

test("should render Hero component and check for video element", () => {
  render(<Hero />);
  const videoElement = screen.getByText("video");
  expect(videoElement).toBeInTheDocument();
  expect(videoElement).toHaveAttribute("autoPlay");
});
