import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"




test("does contact is loaded or not", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("does Button is loaded or not", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test("does inputName is loaded or not", () => {
    render(<Contact />);
    const InputName = screen.getByText("Submit");
    expect(InputName).toBeInTheDocument();
});