import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should find button inside contact us component", () => {
    render(<Contact />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
  test("Should have 1 input field", () => {
    render(<Contact />);
    const textboxes = screen.getAllByRole("textbox");
    const inputs = textboxes.filter(
      (el) => el.tagName.toLowerCase() == "input"
    );
    expect(inputs.length).toBe(1);
  });
});
