module.exports = {
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts, tsx, js, jsx}',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '<rootDir>/src'
  ],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.(ts|tsx)?$': 'ts-jest'
  },

  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif)$": "file-loader"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/src/*.html"]
}