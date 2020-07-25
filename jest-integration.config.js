const jestConfig = require('./jest.config')

jestConfig.testMatch = ['<rootDir>/src/**/*.test.ts?(x)']

module.exports = jestConfig
