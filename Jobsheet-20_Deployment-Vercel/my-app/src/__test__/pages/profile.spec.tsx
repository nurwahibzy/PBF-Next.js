import HalamanProfile from "@/pages/profile";
import EditProfile from "@/pages/profile/edit";
import { render } from "@testing-library/react";

// mocking useSession
jest.mock("next-auth/react", () => ({
    useSession() {
        return {
            data: {
                user: {
                    name: "John Doe",
                    email: "john.doe@example.com"
                }
            },
            status: "authenticated"
        };
    }
}));

describe("Halaman Profile", () => {
  it("renders halaman profile correctly", () => {
    const page = render(<HalamanProfile />);
    expect(page).toMatchSnapshot();
  });
});

describe("Halaman Edit Profile", () => {
  it("renders halaman edit profile correctly", () => {
    const page = render(<EditProfile />);
    expect(page).toMatchSnapshot();
  });
});
