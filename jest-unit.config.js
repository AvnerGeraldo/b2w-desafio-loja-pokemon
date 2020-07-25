const jestConfig = require('./jest.config')

jestConfig.testMatch = ['<rootDir>/src/**/*.spec.tsx']

module.exports = jestConfig
