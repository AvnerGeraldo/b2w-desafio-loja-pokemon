const jestConfig = require('./jest.config')

jestConfig.testMatch = ['<rootDir>/src/**/*.test.tsx']

module.exports = jestConfig
