import Form from "./page";
import {
  render,
  fireEvent,
  screen,
  getByText,
  waitFor,
} from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
  }),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 201,
  })
);

describe("form component", () => {
  it("should render the form", async () => {
    const sut = render(<Form />);
    expect(sut.container).toMatchSnapshot();
  });

  it("should display the validation error message on invalid input", async () => {
    render(<Form />);
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByText("Name is required")).toBeVisible();
    expect(screen.getByText("Age is required")).toBeVisible();
    expect(screen.getByText("Country is required")).toBeVisible();

    fireEvent.change(screen.getByLabelText(/Name/), {
      target: { value: "123" },
    });
    fireEvent.change(screen.getByLabelText(/Age/), {
      target: { value: "-1" },
    });
    fireEvent.change(screen.getByLabelText(/Country/), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByText("Submit"));
    await waitFor(() => {
      expect(      
        screen.getByText("Name should only contain letters")
      ).toBeVisible();
      expect(screen.getByText("Age should be a valid number")).toBeVisible();
      expect(
        screen.getByText("Country should only contain letters")
      ).toBeVisible();
    });
  });

  it("should submit the form on valid input", async () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText(/Name/), {
      target: { value: "Simmi" },
    });
    fireEvent.change(screen.getByLabelText(/Age/), { target: { value: "28" } });
    fireEvent.change(screen.getByLabelText(/Country/), {
      target: { value: "India" },
    });

    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(screen.getByText("Submit")).toBeDisabled();
    });
    expect(fetch).toHaveBeenCalled();
  });
});
