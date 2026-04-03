import AppShell from "@/components/layouts/Appshell";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// mocking useRouter
jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

// mocking next/font/google
jest.mock("next/font/google", () => ({
  Roboto: () => {
    return {
      className: "roboto-font-class",
      style: {
        fontFamily: "mocked-roboto",
      },
    };
  },
}));

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: null,
    status: "unauthenticated",
  }),
}));

describe("AppShell Component", () => {
  it("renders the app shell correctly", () => {
    const appShell = render(
      <AppShell>
        <div data-testid="test-child">Konten Anak</div>
      </AppShell>,
    );
    expect(appShell).toMatchSnapshot();
  });
});
