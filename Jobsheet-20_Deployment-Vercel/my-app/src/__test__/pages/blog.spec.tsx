import Blog from "@/pages/blog";
import HalamanSlug from "@/pages/blog/[slug]";
import { render } from "@testing-library/react";

// mocking useRouter
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      query: { slug: "contoh-slug" },
    };
  },
}));

// m

describe("Blog", () => {
  it("renders the blog page correctly", () => {
    const page = render(<Blog />);
    expect(page).toMatchSnapshot();
  });   
    it("renders the blog slug page correctly", () => {
    const page = render(<HalamanSlug />);
    expect(page).toMatchSnapshot();
  });
});