import HalamanRegister from "@/pages/auth/register";
import { render } from "@testing-library/react";

// mocking useRouter
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("Halaman Register", () => {
  it("renders halaman register correctly", () => {
    const page = render(<HalamanRegister />);  
    expect(page).toMatchSnapshot();
  }); 
});