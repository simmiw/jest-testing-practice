import InputWithButton from "./page";
import { fireEvent, screen, render } from "@testing-library/react";

describe("inputWithButton", () => {
  it("should render form", async () => {
    const sut = render(<InputWithButton />);
    expect(sut.container).toMatchSnapshot();
  });

  it("should render the input, Button and list", () => {
    render(<InputWithButton />);
    fireEvent.change(screen.getByPlaceholderText("Enter any text"), {
      target: {
        value: "Hello",
      },
    });
    fireEvent.click(screen.getByText(/Submit/));
    expect(screen.getByText("Hello")).toBeVisible();
  });
});
