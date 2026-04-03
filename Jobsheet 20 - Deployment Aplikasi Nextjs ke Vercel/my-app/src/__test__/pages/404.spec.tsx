import Custom404 from "@/pages/404";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Custom404", () => {
  it("renders the 404 page correctly", () => {
    render(<Custom404 />);
    // Cek teks 404
    expect(screen.getByText("404")).toBeInTheDocument();
    
    // Cek teks Halaman Tidak Ditemukan
    expect(screen.getByText("Halaman Tidak Ditemukan")).toBeInTheDocument();
    });
});