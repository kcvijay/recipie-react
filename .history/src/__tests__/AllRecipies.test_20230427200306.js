// import React from "react";
// import renderer from "react-test-renderer";

// import AllRecipies from "../Components/AllRecipies";

// it("renders when there is no recipe", () => {
//   const tree = renderer.create(<AllRecipies />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import AllRecipies from "../Components/AllRecipies";

jest.mock("axios");

describe("AllRecipies", () => {
  const mockRecipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      author: "John Doe",
      country: "Italy",
      image: "spaghetti.jpg",
      flag: "🇮🇹",
    },
    {
      id: 2,
      title: "Chicken Curry",
      author: "Jane Smith",
      country: "India",
      image: "curry.jpg",
      flag: "🇮🇳",
    },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValueOnce({ data: mockRecipes });
    render(<AllRecipies />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render a list of recipes", async () => {
    const recipeCards = await screen.findAllByTestId("recipe-card");
    expect(recipeCards).toHaveLength(2);
  });

  it("should filter recipes by name when input is entered", async () => {
    const input = screen.getByPlaceholderText("Search recipe by name..");
    fireEvent.change(input, { target: { value: "Spaghetti" } });
    const recipeCards = await screen.findAllByTestId("recipe-card");
    expect(recipeCards).toHaveLength(1);
  });

  it("should display a fallback message when there are no recipes", async () => {
    axios.get.mockResolvedValueOnce({ data: [] });
    render(<AllRecipies />);
    const fallbackMessage = await screen.findByText("There are no recipes.");
    expect(fallbackMessage).toBeInTheDocument();
  });

  it("should display a link to add a new recipe when there are no recipes", async () => {
    axios.get.mockResolvedValueOnce({ data: [] });
    render(<AllRecipies />);
    const addRecipeLink = await screen.findByText("Add New Recipe");
    expect(addRecipeLink).toBeInTheDocument();
  });
});
