import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/jest.config.mjs",
    "!**/next.config.js",
    "!**/types/**",
    "!**/views/**",
    "!**/pages/api/**",
    "!**/*.d.ts",               
    "!**/_app.tsx",             
    "!**/_document.tsx",
  ],
};

export default createJestConfig(config);
