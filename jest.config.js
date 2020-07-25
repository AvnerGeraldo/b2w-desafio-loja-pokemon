module.exports = {
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/*.tsx'
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
    '.+\\.ts?(x)$': 'ts-jest'
  },

  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  setupFilesAfterEnv: ["<rootDir>src/setupTests.js"]
}