import IncrementAndDecrement from "./page";
import { render, fireEvent, screen } from "@testing-library/react";

describe("IncrementAndDecrement", () => {
  it("should render buttons", async () => {
    const sut = render(<IncrementAndDecrement/>);
    expect(sut.container).toMatchSnapshot();
  });

  it("should render the Increment button, when clicked", () => {
    render(<IncrementAndDecrement />);
    fireEvent.click(screen.getByText("Increment"));
  });

  it("should render the Decrement button, when clicked", () => {
    render(<IncrementAndDecrement />);
    fireEvent.click(screen.getByText("Decrement"));
  });
});
