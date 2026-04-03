import HalamanToko  from "@/pages/shop/[[...slug]]";
import { render } from "@testing-library/react";

// mocking useRouter
jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/shop",
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

describe("Halaman Toko", () => {
    it("renders halaman toko correctly", () => {
        const page = render(<HalamanToko />);
        expect(page).toMatchSnapshot();
    });
});