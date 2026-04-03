import HalamanKategori from "@/pages/category/[...slug]";
import { render } from "@testing-library/react";

// mocking useRouter
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      query: { slug: ["contoh-kategori"] },
    };
  }
}));

describe("Halaman Kategori", () => {
  it("renders halaman kategori correctly", () => {
    const page = render(<HalamanKategori />);  
    expect(page).toMatchSnapshot();
  }); 
});