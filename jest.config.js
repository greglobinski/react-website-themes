module.exports = {
  setupFiles: ['<rootDir>/test/throwOnPropTypeError.js'],
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['./src/**/*.js'],
  testRegex: '(packages/**/src/{0,1}.*/__tests__/.*)\\.js?$',
};
