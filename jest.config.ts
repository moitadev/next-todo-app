module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-after-env.ts"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.ts",
    "@/common": "<rootDir>/src/common",
    "@/shared": "<rootDir>/src/shared",
  },
};
