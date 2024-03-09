import "@testing-library/jest-dom";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import button from "../index.marko";

afterEach(() => cleanup);

describe("Button Component", () => {
  it("renders with medium size and custom text", async () => {
    const { getByRole } = await render(button, {
      size: "medium",
      renderBody: (out) => out.write("Click Me"),
    });

    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("medium");
  });

  it("calls handleClick on click", async () => {
    const consoleSpy = jest.spyOn(console, "log");

    const { getByRole } = await render(button, {
      size: "medium",
      renderBody: (out) => out.write("Click Me"),
    });

    fireEvent.click(getByRole("button"));

    expect(consoleSpy).toHaveBeenCalledWith("hello!");

    consoleSpy.mockRestore();
  });
});
