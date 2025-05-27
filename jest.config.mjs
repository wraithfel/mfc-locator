export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(react-leaflet|leaflet)/)"],
  moduleNameMapper: {
    "\\.(css|png|jpg|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^react-leaflet$": "<rootDir>/__mocks__/reactLeafletMock.js",
  },
};
