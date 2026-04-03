import middleware from "@/middleware";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

// mocking next/server
jest.mock("next/server", () => ({
  NextResponse: {
    next: jest.fn(),
  },
}));

// mocking next-auth/jwt
jest.mock("next-auth/jwt", () => ({
  getToken: jest.fn(),
}));

describe("Middleware Function", () => {
  it("should return a function", () => {
    expect(typeof middleware).toBe("function");
  });
});

