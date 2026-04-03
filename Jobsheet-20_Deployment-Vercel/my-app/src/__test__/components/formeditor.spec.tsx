import FormEditor from "@/components/formeditor";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FormEditor Component", () => {
  it("renders the form editor correctly", () => {
    const formEditor = render(<FormEditor />);
    expect(formEditor).toMatchSnapshot();
  });
});
