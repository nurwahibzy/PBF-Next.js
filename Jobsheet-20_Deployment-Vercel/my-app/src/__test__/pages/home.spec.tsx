import Home from "@/pages";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders the home page correctly", () => {
    const page = render(<Home />);
    expect(page).toMatchSnapshot();
  });
});
