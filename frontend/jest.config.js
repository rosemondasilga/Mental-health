export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Adjust the path if needed
  transformIgnorePatterns: ["/node_modules/"],
  // moduleNameMapper: {
  //   "\\.css$": "<rootDir>/__mocks__/styleMock.js", // Mock CSS files
  //   "\\.svg$": "<rootDir>/__mocks__/svgMock.js", // Mock SVG files
  //   "^../firebase/auth.js$": "<rootDir>/__mocks__/firebase.js", // Mock Firebase auth module
  //   "^../context/authContext/index.js$":
  //     "<rootDir>/__mocks__/authContext/index.js",
  //   "^../components/VerificationModal.js$":
  //     "<rootDir>/__mocks__/components/VerificationModal.js",
  // },
};
