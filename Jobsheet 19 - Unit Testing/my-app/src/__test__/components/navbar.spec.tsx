import Navbar from "@/components/layouts/navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { use } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt={props.alt} />;
  },
}));

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

describe("Navbar Component", () => {
  it("renders the navbar correctly", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "authenticated",
    });
    const navbar = render(<Navbar />);
    expect(navbar).toMatchSnapshot();
  });
});

// test menampilkan komponen tombol sign in
describe("Navbar Component - Sign In Button", () => {
  it("renders the Sign In button when user is not authenticated", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });
    render(<Navbar />);
    const signInButton = screen.getByRole("button", { name: /sign in/i });
    expect(signInButton).toBeInTheDocument();
  });
});

// test menampilkan komponen tombol sign out
describe("Navbar Component - Sign Out Button", () => {
  it("renders the Sign Out button when user is authenticated", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: {
        user: {
          name: "John Doe",
          image: "https://example.com/john-doe.jpg",
        },
      },
      status: "authenticated",
    });
    render(<Navbar />);
    const signOutButton = screen.getByRole("button", { name: /sign out/i });
    expect(signOutButton).toBeInTheDocument();
  });
});
