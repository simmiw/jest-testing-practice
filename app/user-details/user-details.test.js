import AddUsers from "./page";
import { screen, render, waitFor } from "@testing-library/react";
import getUserDetails from "../getUserData/fetch";

jest.mock("../getUserData/fetch", () => {
  return {
    __esModule: true,
    default: jest.fn(() => Promise.resolve([
      {
        name: "simmi",
        age: "28",
        country: "India",
      },
      {
        name: "Ayush",
        age: "31",
        country: "India",
      },
    ])),
  };
});

describe("Add Users", () => {
  it("should render a table with user details", async () => {
    render(<AddUsers />);
  
    await waitFor(() => {
      expect(screen.getByText("Name")).toBeVisible();
      expect(screen.getByText("Age")).toBeVisible();
      expect(screen.getByText("Country")).toBeVisible();
      expect(screen.getByText("simmi")).toBeVisible();
      expect(screen.getByText("28")).toBeVisible();
      expect(screen.getByText("India")).toBeVisible();
      expect(screen.getByText("Ayush")).toBeVisible();
      expect(screen.getByText("31")).toBeVisible();
      expect(screen.getByText("India")).toBeVisible();
    });
    expect(require("../getUserData/fetch")).toHaveBeenCalled();
  });
});
