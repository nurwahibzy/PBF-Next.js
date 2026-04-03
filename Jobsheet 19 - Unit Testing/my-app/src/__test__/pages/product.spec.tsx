import { render, screen } from "@testing-library/react";
import TampilanProduk from "@/pages/produk";

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
  });
});
