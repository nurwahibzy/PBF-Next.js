import HalamanAdmin from "@/pages/admin";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
    
describe("HalamanAdmin", () => {
  it("renders the admin page correctly", () => {
    const { getByText } = render(<HalamanAdmin />);
    expect(getByText("Halaman Admin")).toBeInTheDocument();
  });
});
