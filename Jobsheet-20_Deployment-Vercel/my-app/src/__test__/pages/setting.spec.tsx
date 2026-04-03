import AppSetting from "@/pages/setting/app";
import UserSettingPage from "@/pages/setting/user";
import PasswordUserPage from "@/pages/setting/user/password";
import { render } from "@testing-library/react";

describe("App Setting", () => {
  it("renders app setting page correctly", () => {
    const page = render(<AppSetting />);
    expect(page).toMatchSnapshot();
  });
});

describe("User Setting", () => {
  it("renders user setting page correctly", () => {
    const page = render(<UserSettingPage />);
    expect(page).toMatchSnapshot();
  });
});

describe("Password User", () => {
  it("renders password user page correctly", () => {
    const page = render(<PasswordUserPage />);
    expect(page).toMatchSnapshot();
  });
});

