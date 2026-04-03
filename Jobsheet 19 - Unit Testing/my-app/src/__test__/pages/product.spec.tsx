import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import TampilanProduk from "@/pages/produk";
import HalamanProdukStatic from "@/pages/produk/static";
import HalamanProdukServer from "@/pages/produk/server";
import { ProductType } from "@/types/product.type";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("Tampilan Produk", () => {
  it("renders produk page correctly", () => {
    const page = render(<TampilanProduk />);
    expect(screen.getByTestId("title").textContent).toBe("Daftar Produk");
    expect(page).toMatchSnapshot();
    // menambahkan test untuk komponen
      expect(screen.getByTestId("product-list")).toBeInTheDocument();
  });
});

// Mock data untuk produk
const mockProducts: ProductType[] = [
  { id: "1", name: "Produk 1", price: 10000,image: "https://via.placeholder.com/150",size: "M", category: "Pakaian" },
  { id: "2", name: "Produk 2", price: 20000,image: "https://via.placeholder.com/150",size: "M", category: "Pakaian" },
];

describe("Halaman Produk Static", () => {
  it("renders produk static page correctly", () => {
    const page = render(<HalamanProdukStatic products={mockProducts} />);
    expect(page).toMatchSnapshot();
  });
});

describe("Halaman Produk Server", () => {
  it("renders produk server page correctly", () => {
    const page = render(<HalamanProdukServer products={mockProducts} />);
    expect(page).toMatchSnapshot();
  });
});

