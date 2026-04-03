import { render, screen } from "@testing-library/react";
import HalamanLogin from "@/pages/auth/login";

// mocking useRouter
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("Halaman Login", () => {
  it("renders halaman login correctly", () => {
    const page = render(<HalamanLogin />);  
    expect(page).toMatchSnapshot();
  });
});