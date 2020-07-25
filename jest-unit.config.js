const jestConfig = require('./jest.config')

jestConfig.testMatch = ['<rootDir>/src/**/*.spec.ts?(x)']

module.exports = jestConfig
